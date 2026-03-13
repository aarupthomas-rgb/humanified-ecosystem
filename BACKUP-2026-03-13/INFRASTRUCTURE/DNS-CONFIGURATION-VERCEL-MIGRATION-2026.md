# 🌐 DNS CONFIGURATION - VERCEL MIGRATION 2026
**Complete reference for all three domains**

**Last Updated:** March 3, 2026 (SESSION 49)
**Status:** DNS Migration IN PROGRESS (nameserver propagation)

---

## 📊 DOMAIN OVERVIEW

| Domain | Registrar | Current Host | Vercel Added | Status |
|--------|-----------|--------------|--------------|--------|
| **thomasaarup.dk** | simply.com | Vercel (pending) | ✅ Yes | 🟡 Propagating |
| **humanified.dk** | simply.com | Vercel (pending) | ✅ Yes | 🟡 Propagating |
| **ohgodmode.dk** | simply.com | Vercel (pending) | ✅ Yes | 🟡 Propagating |

---

## 🔧 VERCEL NAMESERVERS

**Use these at simply.com to point all domains to Vercel:**

```
ns1.vercel-dns.com
ns2.vercel-dns.com
ns3.vercel-dns.com
ns4.vercel-dns.com
```

---

## 📋 DNS RECORDS IN VERCEL (Current Configuration)

### **thomasaarup.dk**

| Record Type | Name | Value | Priority | TTL |
|-------------|------|-------|----------|-----|
| A | @ | 76.76.19.163 | - | 3600 |
| CNAME | www | cname.vercel-dns.com | - | 3600 |
| MX | @ | mx.simply.com | 10 | 3600 |
| TXT | @ | [SPF record] | - | 3600 |

**Subdomains:**
- academy.thomasaarup.dk → points to Vercel
- brand.thomasaarup.dk → points to Vercel

### **humanified.dk**

| Record Type | Name | Value | Priority | TTL |
|-------------|------|-------|----------|-----|
| A | @ | 76.76.19.163 | - | 3600 |
| CNAME | www | cname.vercel-dns.com | - | 3600 |
| MX | @ | mx.simply.com | 10 | 3600 |
| TXT | @ | [SPF record] | - | 3600 |

**Subdomains:**
- academy.humanified.dk → points to Vercel
- brand.humanified.dk → points to Vercel

### **ohgodmode.dk**

| Record Type | Name | Value | Priority | TTL |
|-------------|------|-------|----------|-----|
| A | @ | 76.76.19.163 | - | 3600 |
| CNAME | www | cname.vercel-dns.com | - | 3600 |
| MX | @ | mx.simply.com | 10 | 3600 |
| TXT | @ | [SPF record] | - | 3600 |

---

## ⚙️ STEP-BY-STEP: FIX DNS AT SIMPLY.COM

### **STEP 1: Login to simply.com**

1. Go to https://www.simply.com/
2. Login with your account
3. Go to "My domains"

---

### **STEP 2: For EACH domain (thomasaarup.dk, humanified.dk, ohgodmode.dk):**

**Option A: Change Nameservers (RECOMMENDED - 1 domain shown)**

1. Click on **thomasaarup.dk**
2. Go to **"DNS & Domain Settings"**
3. Look for **"Nameservers"** section
4. Select **"Custom nameservers"** (not simply.com default)
5. Replace with Vercel nameservers:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ns3.vercel-dns.com
   ns4.vercel-dns.com
   ```
6. **Save changes**
7. Repeat for humanified.dk and ohgodmode.dk

**Propagation time:** 24-48 hours (sometimes faster)

---

**Option B: Update DNS Records (If you want to keep simply.com as registrar)**

If simply.com is your preferred registrar and Vercel is just hosting:

1. Click on **thomasaarup.dk**
2. Go to **"DNS Settings"** (not nameservers)
3. Find existing records:
   - Delete old A records pointing to simply.com
   - Delete old CNAME records
4. Add new records:
   ```
   A record: 76.76.19.163
   CNAME (www): cname.vercel-dns.com
   MX: mx.simply.com (priority 10) ← KEEP THIS FOR EMAIL
   ```
5. **Save changes**
6. Changes take effect in 15 minutes

---

## ✅ VERIFICATION STEPS

### **Check 1: DNS Resolution (Terminal)**

```bash
# Should show Vercel IPs
nslookup thomasaarup.dk
nslookup humanified.dk
nslookup ohgodmode.dk

# Expected output: 76.76.19.163 (Vercel)
```

### **Check 2: Nameserver Resolution**

```bash
# Check who is authoritative for the domain
dig thomasaarup.dk NS

# Should show:
# ns1.vercel-dns.com
# ns2.vercel-dns.com
# ns3.vercel-dns.com
# ns4.vercel-dns.com
```

### **Check 3: MX Records (Email)**

```bash
dig thomasaarup.dk MX

# Should show:
# 10 mx.simply.com
```

### **Check 4: Website Access**

```bash
# Should return HTML, not error
curl -I https://thomasaarup.dk
curl -I https://humanified.dk
curl -I https://ohgodmode.dk
```

### **Check 5: Online DNS Checker**

Use https://dnschecker.org/

- Enter domain
- Check all nameservers resolve to 76.76.19.163
- Check MX records show mx.simply.com

---

## 🚨 TROUBLESHOOTING

### **Problem: "Connection refused" / "Timeout"**

**Cause:** DNS still pointing to simply.com infrastructure

**Solution:**
1. Verify you changed nameservers at simply.com (not just in Vercel)
2. Wait 1-2 hours for TTL expiration
3. Check with `dig` command above
4. Clear DNS cache:
   ```bash
   # macOS
   sudo dscacheutil -flushcache

   # Windows
   ipconfig /flushdns

   # Linux
   sudo systemd-resolve --flush-caches
   ```

---

### **Problem: "Certificate error" / "Not secure"**

**Cause:** SSL certificate hasn't propagated yet

**Solution:**
1. This is normal during migration
2. Wait 15-30 minutes after DNS resolves
3. Vercel automatically provisions certificates
4. Refresh browser (hard refresh: Ctrl+Shift+R)

---

### **Problem: Email not working**

**Cause:** MX records missing or incorrect

**Solution:**
1. Check MX record points to: **mx.simply.com** with priority **10**
2. Verify in Vercel DNS dashboard
3. If missing, add it:
   - Type: MX
   - Name: @
   - Value: mx.simply.com
   - Priority: 10
4. Wait 15 minutes for propagation
5. Test with: `dig thomasaarup.dk MX`

---

## 📅 MIGRATION TIMELINE

**March 2, 2026:**
- ✅ Domains added to Vercel
- ✅ MX records configured in Vercel
- ⏳ Nameserver change submitted at simply.com

**March 3, 2026 (NOW):**
- 🟡 DNS propagation in progress
- 🟡 Expected completion: 17:00 CET today or early March 4

**March 4, 2026 (Expected):**
- ✅ All domains fully resolved to Vercel
- ✅ Websites accessible
- ✅ Email working
- ✅ Academy + Brand pages live

---

## 🔐 IMPORTANT: Email Configuration

**Do NOT change email settings yet.**

- Email for all three domains routes through: **mx.simply.com**
- This is correct and should remain unchanged
- Email is independent of web hosting
- Simply.com handles mail, Vercel handles web

**Current email setup:**
```
thomasaarup.dk mail → mx.simply.com (active)
humanified.dk mail → mx.simply.com (active)
ohgodmode.dk mail → thomasaarup.dk mail → mx.simply.com
```

---

## 📞 REFERENCE: SIMPLY.COM SUPPORT

If you need help:
- URL: https://www.simply.com/
- Support: support@simply.com
- Dashboard: https://www.simply.com/en/login

**Tell them:**
- "I'm migrating my domains to Vercel for web hosting"
- "I want to change nameservers to Vercel's nameservers"
- "I need to keep email routing through simply.com"

---

## 🎯 SUCCESS CRITERIA

**When DNS migration is complete, you'll have:**

- ✅ thomasaarup.dk resolves to Vercel ✓
- ✅ humanified.dk resolves to Vercel ✓
- ✅ ohgodmode.dk resolves to Vercel ✓
- ✅ All subdomains work (academy., brand.) ✓
- ✅ Email still works (via simply.com) ✓
- ✅ SSL certificates valid ✓
- ✅ Academy live at thomasaarup.dk/academy ✓
- ✅ Brand live at thomasaarup.dk/brand ✓
- ✅ All three primary domains accessible ✓

---

## 📁 RELATED DOCUMENTATION

- [[PHASE-C-STRATEGIC-ROADMAP-2026]] - Execution plan
- [[SOCIAL-EMAIL-COORDINATION-HUB]] - Launch schedule
- [[TECH-INFRASTRUCTURE-V1]] - Overall architecture

---

**Status: DNS RECORDS UPDATED - PROPAGATING NOW**
**Update Time: March 3, 2026, 09:19 CET**
**Next Step: Wait 15 minutes for full propagation → Test all domains**
**Estimated completion: March 3, 2026, ~09:30-10:00 CET**

---

## 📝 MARCH 3 UPDATE - DNS FIX APPLIED

**What was done:**
- ✅ All A records updated to Vercel IP: 76.76.19.163
- ✅ thomasaarup.dk: A, *.*, www all point to 76.76.19.163
- ✅ humanified.dk: A, *.*, www all point to 76.76.19.163
- ✅ ohgodmode.dk: A, *.*, www all point to 76.76.19.163
- ✅ All MX records verified (mx.simply.com)
- ✅ TTL set to 3600 (1 hour)

**Current Status (09:19 CET):**
- humanified.dk: ✅ Starting to resolve (shows redirect page)
- thomasaarup.dk: 🟡 Propagating (connection attempts)
- ohgodmode.dk: 🟡 Propagating (connection attempts)

**Expected Timeline:**
- 09:30 CET: All domains resolving ✅
- 10:00 CET: Full propagation + SSL certificates active ✅

