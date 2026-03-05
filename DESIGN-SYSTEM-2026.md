# 🎨 HUMANIFIED ECOSYSTEM DESIGN SYSTEM 2026

**Version:** 2.0 (UPDATED March 5, 2026)
**Date:** March 5, 2026
**Status:** ACTIVE - Complete redesign (Dark + Orange/Gold only)
**Directive:** Remove blue→purple→magenta entirely. Values-locked color philosophy.

---

## 📊 COLOR PALETTE (REDESIGNED - March 5, 2026)

### **Dark Foundation (Primary Backgrounds)**
```css
--color-dark-bg: #0A0E1F           /* Primary dark background */
--color-dark-bg-alt: #111827       /* Cards, sections, slight contrast */
--color-dark-border: #1a1a2e       /* Subtle borders, dividers */

/* Metaphor: Darkness represents constraints (Temple Grandin philosophy)
   Integrity-locked architecture: dark foundation with light breaking through */
```

### **Warm Accent Colors (ONLY accent colors now)**
```css
--color-accent-orange: #FF8C00     /* Primary attention, calls-to-action */
--color-accent-gold: #FFB84D       /* Secondary accent, hover states */
--color-accent-copper: #B87333     /* Tertiary accent, subtle emphasis */

/* Metaphor: Orange/gold = warmth, values, authenticity breaking through darkness
   Visual: Light finds its way (integrity shining through constraints) */
```

### **Supporting Colors (Unchanged)**
```css
--color-white: #FFFFFF            /* Headings, primary text */
--color-light-gray: #E5E5E5       /* Body text, secondary content */
--color-medium-gray: #999999      /* Tertiary text, subtle elements */
--color-dark-gray: #333333        /* Text on light backgrounds (rare) */
```

### **DEPRECATED - DO NOT USE (Removed March 5, 2026)**
```css
❌ --color-primary-blue: #0066FF        [REMOVED]
❌ --color-primary-purple: #6600FF      [REMOVED]
❌ --color-primary-magenta: #FF00FF     [REMOVED]
❌ --gradient-primary: blue→purple→magenta [REMOVED]

Reason: Values-locked design. Gradient was beautiful but lacked intent.
        Dark + Orange is clearer, more intentional, aligned with
        INTEGRITET (integrity) and SELVVÆRD (self-worth).

        From Thomas: "Det driver mig til vanvid" → Full redesign approved.
```

---

## 📐 TYPOGRAPHY

### **Font Stack**
```css
--font-primary: 'Helvetica Neue', Helvetica, Arial, sans-serif
--font-accent: 'Lato', 'Helvetica', sans-serif
```

### **Font Sizes (Responsive)**
```css
--text-xs: 0.75rem (12px)
--text-sm: 0.875rem (14px)
--text-base: 1rem (16px)
--text-lg: 1.125rem (18px)
--text-xl: 1.25rem (20px)
--text-2xl: 1.5rem (24px)
--text-3xl: 2rem (32px)
--text-4xl: 2.5rem (40px)
--text-5xl: 3rem (48px)
--text-6xl: 3.5rem (56px)
```

### **Font Weights**
```css
--font-light: 300
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
--font-extrabold: 800
```

### **Line Heights**
```css
--leading-tight: 1.2
--leading-normal: 1.5
--leading-relaxed: 1.75
--leading-loose: 2
```

---

## 🎯 SPACING SYSTEM

```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
--spacing-3xl: 4rem (64px)
--spacing-4xl: 6rem (96px)
```

---

## 🎨 GRADIENT DEFINITIONS (Updated)

### **Primary Gradient (DEPRECATED - NO LONGER USED)**
```css
❌ --gradient-primary: REMOVED
   (Was: linear-gradient(135deg, #0066FF 0%, #6600FF 50%, #FF00FF 100%))

Reason: Replaced with flat dark background for clarity and values alignment.
```

### **Warm Gradient (Flower accents)**
```css
/* Optional - use sparingly, usually solid colors preferred */
--gradient-warm: linear-gradient(135deg, #FF8C00 0%, #FFB84D 50%, #B87333 100%)

/* Recommended: Use solid colors instead for clarity */
--accent-primary: #FF8C00
--accent-secondary: #FFB84D
```

### **Background (Now Flat, No Gradient)**
```css
--color-dark-bg: #0A0E1F              /* Primary background - flat, no gradient */
--color-dark-bg-alt: #111827          /* Secondary background - flat */

/* Reason: Flat backgrounds align with values-locked architecture.
   Gradients add visual complexity but reduce clarity.
   Focus: Intent matters more than decoration. */
```

---

## 🖼️ COMPONENT PATTERNS (Updated for Dark + Orange)

### **Buttons**
```css
.btn-primary {
  background: var(--color-accent-orange);      /* Solid orange, no gradient */
  color: var(--color-white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: 8px;
  font-weight: var(--font-semibold);
  transition: all 0.3s ease;
  border: none;
}

.btn-primary:hover {
  background: var(--color-accent-gold);        /* Transition to gold */
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 140, 0, 0.4);  /* Orange glow */
}

.btn-secondary {
  background: transparent;
  border: 2px solid var(--color-accent-orange);
  color: var(--color-accent-orange);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: 8px;
  font-weight: var(--font-semibold);
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: var(--color-accent-orange);
  color: var(--color-white);
  box-shadow: 0 10px 25px rgba(255, 140, 0, 0.3);
}
```

### **Hero Section**
```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-dark-bg);            /* Flat dark, no gradient */
  color: var(--color-light-gray);
  padding: var(--spacing-3xl) var(--spacing-lg);
  position: relative;
  overflow: hidden;
}

.hero h1 {
  color: var(--color-white);                   /* White headings */
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 140, 0, 0.08) 0%, transparent 70%);
  animation: float 20s ease-in-out infinite;
  pointer-events: none;
}
```

### **Card Component**
```css
.card, .value-card, .feature-card {
  background: var(--color-dark-bg-alt);        /* Dark alt background */
  border-radius: 12px;
  padding: var(--spacing-2xl);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border-left: 4px solid var(--color-accent-orange);  /* Orange left accent */
  color: var(--color-light-gray);
}

.card h3, .value-card h3, .feature-card h3 {
  color: var(--color-accent-orange);           /* Orange headings */
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(255, 140, 0, 0.15);  /* Subtle orange glow */
}
```

---

## 🖼️ ASSET REFERENCES

### **Logo**
- **File:** `ASSETS/HUMANISED-AI.png`
- **Variants:** `IconOnly.png`, `FullLogo.png`, `Print.svg`
- **Colors:** Blue→Purple→Magenta gradient
- **Tagline:** "INTEGRITY-STRENGTH"
- **Usage:** Header, hero section, brand references

### **Flower Graphic**
- **File:** `ASSETS/blomst.png`
- **Colors:** Orange/Gold/Copper metallic
- **Usage:** Humanified.dk hero section, accent graphics
- **Style:** 3D, premium, modern

---

## 📏 LAYOUT GRID

```css
--max-width: 1200px
--max-width-lg: 1400px
--max-width-sm: 800px

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}
```

---

## ⚡ ANIMATIONS

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 10px rgba(255, 140, 0, 0.5); }
  50% { box-shadow: 0 0 20px rgba(255, 140, 0, 0.8); }
}

@keyframes slideInLeft {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

---

## 🎯 SITE-SPECIFIC OVERRIDES (Updated March 5, 2026)

### **humanified.dk**
- Background: Dark (#0A0E1F) - FLAT, no gradient
- Accent: Orange/Gold (primary attention)
- Focus: Premium, sophisticated, self-discovery product
- Special: Power-Profiling benefits section added

### **thomasaarup.dk**
- Background: Dark (#0A0E1F) - FLAT, no gradient
- Accent: Orange/Gold (same as ecosystem)
- Focus: Values-based coaching, systems thinking
- Special: NEW Power-Profile section (May 2026 launch prep)

### **ohgodmode.dk**
- Background: Dark (#0A0E1F) - FLAT, no gradient
- Accent: Orange/Gold (warm, energetic)
- Focus: Bluecollar entrepreneurs, templates, practical
- Special: Clean, entry-level aesthetic

### **Overall Theme (All Sites)**
- **Color Philosophy:** Dark with warm light breaking through
- **Metaphor:** Integrity shining through constraints (Temple Grandin)
- **Aesthetic:** Reveal template (clean, one-page scrolling, no fluff)
- **Values:** Orange represents INTEGRITET, SELVVÆRD, FAMILIESAMMENHOLD

---

## ✅ DESIGN DNA CHECKLIST (Updated)

All three sites NOW have:
- ✅ Same dark color foundation (#0A0E1F)
- ✅ Same typography system
- ✅ Logo visible and integrated (left header)
- ✅ Consistent spacing/padding
- ✅ Matching button styles (orange → gold on hover)
- ✅ Same animation language
- ✅ Values integrated visually (orange = warmth breaking through dark)
- ✅ NO blue, purple, or magenta anywhere
- ✅ Orange/gold as ONLY accent colors
- ✅ Links sections added (resources, ecosystem, learning)
- ✅ Flat backgrounds (no gradients)
- ✅ Premium, intentional aesthetic

---

## 📅 REVISION HISTORY

| Date | Version | Changes | Status |
|------|---------|---------|--------|
| March 3, 2026 | 1.0 | Initial design system (Blue→Purple→Magenta gradient) | Approved |
| March 5, 2026 | 2.0 | **Complete redesign (Dark + Orange/Gold only)** | **ACTIVE** |

---

## 🎯 CURRENT STATUS

**Version:** 2.0 (March 5, 2026)
**Status:** FOUNDATION READY FOR IMPLEMENTATION
**Next:** Update shared CSS + individual site HTML files
**Owner:** JARVIS + Thomas
**Timeline:** 5-hour implementation (Phase 1-5)

**Reference Document:** [[WEB-REDESIGN-PLAN-2026.md]] - Complete implementation plan

---

## 🚀 VALUES-LOCKED PHILOSOPHY

This design system is not just aesthetics - it's architecture:

- **Dark Background:** Constraints (Temple Grandin philosophy - clarity comes from boundaries)
- **Orange/Gold Accents:** Values breaking through (INTEGRITET shining)
- **No Gradients:** Intentional flatness (no visual complexity, just intent)
- **Premium Aesthetic:** Seriousness (this matters, this is real)
- **One Accent Color Family:** Singular focus (orange = warmth, values, humanity)

**From Thomas:** "Det driver mig til vanvid" → Complete redesign approved March 5, 2026

🎨💪
