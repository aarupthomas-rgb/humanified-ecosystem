/**
 * test_stripe_webhook.js — TDD tests for Stripe webhook handler
 *
 * These tests define the contract for the Stripe webhook handler BEFORE
 * implementation. They use Node's built-in test runner (node:test) and
 * assert module. No external test framework needed.
 *
 * Run: node --test tests/test_stripe_webhook.js
 *
 * Status: Tests written pre-implementation (TDD). The webhook handler
 *         itself is deferred until Thomas-go gate.
 */

const { describe, it, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');

// ── Stripe signature helpers (mirrors Stripe's own logic) ──────────────

const WEBHOOK_SECRET = 'whsec_test_secret_for_unit_tests';

function generateStripeSignature(payload, secret, timestamp) {
  const ts = timestamp || Math.floor(Date.now() / 1000);
  const signedPayload = `${ts}.${payload}`;
  const signature = crypto
    .createHmac('sha256', secret)
    .update(signedPayload)
    .digest('hex');
  return { header: `t=${ts},v1=${signature}`, timestamp: ts };
}

// ── Mock DB layer ──────────────────────────────────────────────────────

class MockDB {
  constructor() {
    this.events = [];
    this.questionLiquidity = [];
  }

  recordEvent(eventId, eventType, data) {
    if (this.events.find(e => e.eventId === eventId)) {
      return { written: false, reason: 'duplicate' };
    }
    this.events.push({ eventId, eventType, data, processedAt: new Date() });
    return { written: true };
  }

  createQuestionLiquidity(record) {
    this.questionLiquidity.push(record);
    return record;
  }

  hasEvent(eventId) {
    return this.events.some(e => e.eventId === eventId);
  }
}

// ── Webhook handler (contract — to be implemented in server.js) ────────
// This is the interface the tests validate. Implementation goes into
// server.js when Thomas-go gate passes.

function verifyStripeSignature(payload, signatureHeader, secret) {
  if (!signatureHeader) return { valid: false, reason: 'missing_header' };

  const parts = signatureHeader.split(',');
  const tsPart = parts.find(p => p.startsWith('t='));
  const sigPart = parts.find(p => p.startsWith('v1='));

  if (!tsPart || !sigPart) return { valid: false, reason: 'malformed_header' };

  const timestamp = tsPart.replace('t=', '');
  const providedSig = sigPart.replace('v1=', '');

  const expectedPayload = `${timestamp}.${payload}`;
  const expectedSig = crypto
    .createHmac('sha256', secret)
    .update(expectedPayload)
    .digest('hex');

  const isValid = crypto.timingSafeEqual(
    Buffer.from(providedSig, 'hex'),
    Buffer.from(expectedSig, 'hex')
  );

  return { valid: isValid, timestamp: parseInt(timestamp) };
}

function handleWebhookEvent(eventType, eventId, data, db) {
  // Idempotency: if event already processed, return success without re-processing
  if (db.hasEvent(eventId)) {
    return { status: 200, body: { received: true, deduplicated: true } };
  }

  // Record event regardless of type
  db.recordEvent(eventId, eventType, data);

  // Business logic per event type
  switch (eventType) {
    case 'checkout.session.completed': {
      const record = {
        id: crypto.randomUUID(),
        stripeEventId: eventId,
        sessionId: data.id || null,
        customerEmail: data.customer_email || null,
        amountTotal: data.amount_total || 0,
        currency: data.currency || 'dkk',
        createdAt: new Date().toISOString()
      };
      db.createQuestionLiquidity(record);
      return { status: 200, body: { received: true, action: 'question_liquidity_created' } };
    }
    default:
      // Unknown event types: accept, log, no business logic
      return { status: 200, body: { received: true, action: 'logged_unhandled' } };
  }
}

// ── Tests ──────────────────────────────────────────────────────────────

describe('Stripe Webhook Handler', () => {
  let db;

  beforeEach(() => {
    db = new MockDB();
  });

  // Test 1: Valid signature accepted
  it('test_valid_webhook_signature_accepted', () => {
    const payload = JSON.stringify({ id: 'evt_test_1', type: 'checkout.session.completed' });
    const { header } = generateStripeSignature(payload, WEBHOOK_SECRET);

    const result = verifyStripeSignature(payload, header, WEBHOOK_SECRET);
    assert.equal(result.valid, true, 'Valid signature should be accepted');
  });

  // Test 2: Invalid signature rejected
  it('test_invalid_webhook_signature_rejected', () => {
    const payload = JSON.stringify({ id: 'evt_test_2', type: 'checkout.session.completed' });
    const tamperedPayload = payload + 'tampered';
    const { header } = generateStripeSignature(payload, WEBHOOK_SECRET);

    // Verify with tampered payload — signature should not match
    assert.throws(() => {
      const result = verifyStripeSignature(tamperedPayload, header, WEBHOOK_SECRET);
      if (!result.valid) throw new Error('signature_invalid');
    }, 'Tampered payload should be rejected');
  });

  // Test 3: Missing signature header rejected
  it('test_missing_signature_header_rejected', () => {
    const payload = JSON.stringify({ id: 'evt_test_3', type: 'checkout.session.completed' });

    const result = verifyStripeSignature(payload, null, WEBHOOK_SECRET);
    assert.equal(result.valid, false, 'Missing signature should be rejected');
    assert.equal(result.reason, 'missing_header');
  });

  // Test 4: Replay attack — idempotent on duplicate event
  it('test_replay_attack_rejected', () => {
    const eventId = 'evt_test_4';
    const eventType = 'checkout.session.completed';
    const data = { id: 'cs_test_session', customer_email: 'test@example.com', amount_total: 29900 };

    // First processing
    const first = handleWebhookEvent(eventType, eventId, data, db);
    assert.equal(first.status, 200);
    assert.equal(db.questionLiquidity.length, 1, 'First call should create record');

    // Second processing (replay)
    const second = handleWebhookEvent(eventType, eventId, data, db);
    assert.equal(second.status, 200, 'Replay should return 200 (idempotent)');
    assert.equal(second.body.deduplicated, true, 'Should flag as deduplicated');
    assert.equal(db.questionLiquidity.length, 1, 'Replay should NOT create duplicate record');
  });

  // Test 5: Unknown event type logged but accepted
  it('test_unknown_event_type_logged_but_accepted', () => {
    const eventId = 'evt_test_5';
    const eventType = 'customer.created'; // We don't handle this
    const data = { id: 'cus_test' };

    const result = handleWebhookEvent(eventType, eventId, data, db);
    assert.equal(result.status, 200, 'Unknown event should return 200');
    assert.equal(result.body.action, 'logged_unhandled', 'Should log as unhandled');
    assert.equal(db.events.length, 1, 'Should still record the event');
    assert.equal(db.questionLiquidity.length, 0, 'Should NOT trigger business logic');
  });

  // Test 6: checkout.session.completed creates question_liquidity record
  it('test_question_liquidity_intake_on_checkout_completed', () => {
    const eventId = 'evt_test_6';
    const eventType = 'checkout.session.completed';
    const data = {
      id: 'cs_test_session_6',
      customer_email: 'founder@startup.com',
      amount_total: 49900,
      currency: 'dkk'
    };

    const result = handleWebhookEvent(eventType, eventId, data, db);
    assert.equal(result.status, 200);
    assert.equal(result.body.action, 'question_liquidity_created');

    // Verify question_liquidity record
    assert.equal(db.questionLiquidity.length, 1, 'Should create exactly one record');
    const record = db.questionLiquidity[0];
    assert.equal(record.stripeEventId, eventId);
    assert.equal(record.customerEmail, 'founder@startup.com');
    assert.equal(record.amountTotal, 49900);
    assert.equal(record.currency, 'dkk');
    assert.ok(record.id, 'Record should have a UUID');
    assert.ok(record.createdAt, 'Record should have a timestamp');
  });
});
