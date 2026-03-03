# 🚀 VERCEL SPLIT: 3 SEPARATE PROJECTS SETUP

**Status:** Configuration Ready
**Date:** March 3, 2026
**Commit:** 024abee (vercel.json files added)

---

## 📋 OVERVIEW

Du har nu **3 separate Vercel projects** at sætte op - hver med sin egen domæne, men alle trækker fra **samme GitHub repo** (`humanified-ecosystem`).

```
GitHub Repo: humanified-ecosystem (SAMME FOR ALLE)
├── Project 1: thomasaarup-vercel → thomasaarup.dk
├── Project 2: humanified-vercel → humanified.dk
└── Project 3: ohgodmode-vercel → ohgodmode.dk
```

**Fordele:**
✅ Uafhængige deploy-logs
✅ Separate miljøer
✅ Klart hvilken projekt der hører til hvilken domain
✅ Git-struktur uændret

---

## 🎯 STEP-BY-STEP SETUP

### **STEP 1: Login til Vercel**

1. Gå til https://vercel.com/dashboard
2. Login med din konto (du har allerede humanified-ecosystem projektet)

---

### **STEP 2: CREATE PROJECT 1 - THOMASAARUP.DK**

**A) Opret nyt projekt**

1. Klik **"Add New..."** → **"Project"**
2. Vælg **GitHub** som source
3. Find `humanified-ecosystem` repo
4. Klik **"Import"**

**B) Configure Build Settings**

I "Configure Project" skærm:

```
Framework Preset: "Other" (det er static HTML)
Build Command: "true"
Output Directory: "web-platforms/thomasaarup"
Environment Variables: (ingen behov)
```

**C) Project Name**

```
thomasaarup-vercel
```

**D) Klik "Deploy"**

Venter på første deploy (~1-2 min)

---

### **STEP 3: LINK THOMASAARUP.DK DOMAIN**

Når deploy er færdig:

1. I `thomasaarup-vercel` projekt → **"Settings"** tab
2. Vælg **"Domains"** fra venstre menu
3. Klik **"Add"** → **"Add Domain"**
4. Skriv: `thomasaarup.dk`
5. Vercel tjekker DNS (skal være ✅ valid fra simpli.com)
6. Klik **"Add"**

**Status check:**
```
thomasaarup.dk ✅ Valid
```

---

### **STEP 4: CREATE PROJECT 2 - HUMANIFIED.DK**

**A) Opret nyt projekt** (samme som Step 2A)

1. Klik **"Add New..."** → **"Project"**
2. Find `humanified-ecosystem` repo
3. Klik **"Import"**

**B) Configure Build Settings**

```
Framework Preset: "Other"
Build Command: "true"
Output Directory: "web-platforms/humanified"
Environment Variables: (ingen)
```

**C) Project Name**

```
humanified-vercel
```

**D) Klik "Deploy"**

---

### **STEP 5: LINK HUMANIFIED.DK DOMAIN**

Når deploy er færdig:

1. `humanified-vercel` projekt → **"Settings"** → **"Domains"**
2. Klik **"Add"** → **"Add Domain"**
3. Skriv: `humanified.dk`
4. Klik **"Add"** (når DNS valideres ✅)

---

### **STEP 6: CREATE PROJECT 3 - OHGODMODE.DK**

**A) Opret nyt projekt** (samme som Step 2A)

1. Klik **"Add New..."** → **"Project"**
2. Find `humanified-ecosystem` repo
3. Klik **"Import"**

**B) Configure Build Settings**

```
Framework Preset: "Other"
Build Command: "true"
Output Directory: "web-platforms/ohgodmode"
Environment Variables: (ingen)
```

**C) Project Name**

```
ohgodmode-vercel
```

**D) Klik "Deploy"**

---

### **STEP 7: LINK OHGODMODE.DK DOMAIN**

Når deploy er færdig:

1. `ohgodmode-vercel` projekt → **"Settings"** → **"Domains"**
2. Klik **"Add"** → **"Add Domain"**
3. Skriv: `ohgodmode.dk`
4. Klik **"Add"** (når DNS valideres ✅)

---

## ✅ VERIFICATION CHECKLIST

Efter alle 3 projekter er opsat:

- [ ] thomasaarup-vercel projekt oprettet
- [ ] thomasaarup.dk domæne linket ✅
- [ ] humanified-vercel projekt oprettet
- [ ] humanified.dk domæne linket ✅
- [ ] ohgodmode-vercel projekt oprettet
- [ ] ohgodmode.dk domæne linket ✅

Test hver domæne:
```
✅ thomasaarup.dk - ser du rådgivning-siden?
✅ humanified.dk - ser du blomsten og features?
✅ ohgodmode.dk - ser du rocket logo og templates?
```

---

## 🔄 WHAT HAPPENS NEXT?

**Hver gang du pusher til GitHub:**

```
Push to main
    ↓
GitHub triggers all 3 Vercel projects
    ↓
3 separate builds run in parallel
    ↓
3 sites deploy simultaneously
    ↓
All 3 domains updated
```

**Uafhængige deploy-logs for hver projekt** = lettere debugging.

---

## 💡 TIPS

**Q: Hvad hvis jeg vil ændre thomasaarup.dk?**
A: Edit `/web-platforms/thomasaarup/index.html` → push → thomasaarup-vercel builder kører → thomasaarup.dk opdateres automatisk

**Q: Hvad hvis jeg vil ændre ASSETS (logo, blomst)?**
A: Edit `/ASSETS/` → push → **ALLE 3 projekter** rebuilder (fordi de alle refererer til ../ASSETS/)

**Q: Kan jeg slette det gamle "humanified-ecosystem" projekt?**
A: Nej! Behold det som backup. De nye 3 projekter er de "live" versioner.

---

## 🚀 YOU'RE READY

Alle konfigurationer er klar. Du kontrollerer deployment ved at pushe til GitHub.

**Next step:** Opret de 3 projekter i Vercel UI (15 minutter total)

---

**Status:** ✅ Configuration Complete
**Action:** 🎯 Manual - Opret 3 Vercel projekter
**Owner:** Thomas
**Timeline:** Today (15 min)

