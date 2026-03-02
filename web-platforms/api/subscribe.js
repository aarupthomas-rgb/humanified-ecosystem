/**
 * Vercel Serverless Function: Form Submission Handler
 * Receives form data and adds contact to Mailchimp list
 *
 * Usage: POST to /api/subscribe
 * Expected body: { email, name, role/trade/interest }
 */

// Note: These come from environment variables set in Vercel dashboard
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER; // e.g., 'us1'

// List IDs (also from environment variables)
const LIST_IDS = {
  humanified: process.env.MAILCHIMP_HUMANIFIED_LIST_ID,
  ohgodmode: process.env.MAILCHIMP_OGMODE_LIST_ID,
  mentor: process.env.MAILCHIMP_MENTOR_LIST_ID,
};

/**
 * Determine which Mailchimp list to use based on form data
 */
function determineList(body) {
  if (body.role) {
    return {
      listId: LIST_IDS.humanified,
      mergeFields: {
        FNAME: body.name,
        ROLE: body.role,
      },
      tags: ['humanified-signup'],
    };
  } else if (body.trade) {
    return {
      listId: LIST_IDS.ohgodmode,
      mergeFields: {
        FNAME: body.name,
        TRADE: body.trade,
      },
      tags: ['ohgodmode-signup'],
    };
  } else if (body.interest === 'mentor') {
    return {
      listId: LIST_IDS.mentor,
      mergeFields: {
        FNAME: body.name,
        EXPERIENCE: body.experience || '',
      },
      tags: ['mentor-interest'],
    };
  }

  return null;
}

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Main handler function
 */
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed. Use POST.',
    });
  }

  try {
    const { email, name, role, trade, interest, experience } = req.body;

    // === VALIDATION ===
    if (!email || !name) {
      return res.status(400).json({
        error: 'Email and name are required',
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: 'Invalid email format',
      });
    }

    if (!role && !trade && interest !== 'mentor') {
      return res.status(400).json({
        error: 'Please select a role, trade, or indicate mentor interest',
      });
    }

    // === DETERMINE LIST ===
    const listData = determineList({ name, email, role, trade, interest, experience });

    if (!listData) {
      return res.status(400).json({
        error: 'Could not determine which list to use',
      });
    }

    if (!listData.listId) {
      console.error('Missing list ID:', listData);
      return res.status(500).json({
        error: 'Configuration error: missing list ID',
      });
    }

    // === CALL MAILCHIMP API ===
    const mailchimpUrl =
      `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${listData.listId}/members`;

    // Create Basic Auth header
    const basicAuth = Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString('base64');

    const mailchimpResponse = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${basicAuth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending', // Requires email confirmation
        merge_fields: listData.mergeFields,
        tags: listData.tags,
      }),
    });

    // === HANDLE RESPONSE ===
    if (!mailchimpResponse.ok) {
      const errorData = await mailchimpResponse.json();

      console.error('Mailchimp error:', {
        status: mailchimpResponse.status,
        error: errorData,
        email: email,
      });

      // Handle specific Mailchimp errors
      if (errorData.status === 400) {
        if (errorData.detail?.includes('already a list member')) {
          return res.status(200).json({
            success: true,
            message: 'You are already signed up. Check your email for next steps.',
          });
        }
      }

      return res.status(mailchimpResponse.status).json({
        error: errorData.detail || 'Failed to subscribe. Please try again.',
      });
    }

    // === SUCCESS ===
    console.log('Subscription success:', {
      email: email,
      list: listData.tags[0],
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: 'Check your email to confirm subscription!',
    });

  } catch (error) {
    console.error('Server error:', {
      error: error.message,
      timestamp: new Date().toISOString(),
    });

    return res.status(500).json({
      error: 'Server error. Please try again later.',
    });
  }
}
