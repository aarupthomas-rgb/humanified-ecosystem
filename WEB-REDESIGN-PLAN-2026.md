# 🎨 WEB REDESIGN PLAN 2026
**Complete ecosystem redesign: Dark + Orange/Gold only**

**Date:** March 5, 2026
**Status:** APPROVED BY THOMAS
**Primary Directive:** Remove blue→purple→magenta gradient entirely. Use DARK with ORANGE/GOLD accents only.

---

## 🎯 DESIGN OBJECTIVES

### What's Changing
- ❌ **REMOVE:** Blue→Purple→Magenta gradient (primary color)
- ❌ **REMOVE:** Gradient-based backgrounds
- ✅ **ADD:** Pure dark background (#0A0E1F or darker)
- ✅ **ADD:** Orange/Gold/Copper accents (already exist, now PRIMARY)
- ✅ **ADD:** Logo integration (visual prominence)
- ✅ **ADD:** Links sections (essential resources)
- ✅ **ADD:** POWER-PROFILE section (thomasaarup.dk only)

### Design Language
- **Aesthetic:** Reveal template (modern, clean, one-page scrolling)
- **Color Philosophy:** Darkness with warm light (orange/gold) breaking through
- **Visual Metaphor:** Values standing out against the void (dark background highlights what matters)
- **Mood:** Premium, serious, intentional (no frivolity)

---

## 🎨 NEW COLOR SYSTEM

### Primary Palette (FINAL)
```css
/* Dark Foundation */
--color-dark-bg: #0A0E1F          /* Primary dark background */
--color-dark-bg-alt: #111827       /* Slightly lighter dark (cards) */
--color-dark-border: #1a1a2e       /* Dividers, subtle elements */

/* Warm Accents (ONLY accent colors now) */
--color-accent-orange: #FF8C00     /* Primary accent */
--color-accent-gold: #FFB84D       /* Secondary warm accent */
--color-accent-copper: #B87333     /* Tertiary warm accent */

/* Supporting Colors */
--color-white: #FFFFFF            /* Text, foreground */
--color-light-gray: #E5E5E5        /* Secondary text */
--color-medium-gray: #999999       /* Tertiary text */
--color-dark-gray: #333333         /* Subtle text on white */

/* Deprecated (DO NOT USE) */
--color-primary-blue: REMOVE
--color-primary-purple: REMOVE
--color-primary-magenta: REMOVE
--gradient-primary: REMOVE
```

### Color Usage Rules
```
Background:       #0A0E1F (dark foundation)
Headers/Titles:   White (#FFFFFF)
Body Text:        #E5E5E5 (light gray - readable)
Secondary Text:   #999999 (medium gray)
Accent Elements:  #FF8C00 (orange - draws attention)
Highlights:       #FFB84D (gold - secondary attention)
Cards/Sections:   #111827 (dark alt - slight contrast from bg)
Borders:          #1a1a2e (subtle dark border)

Hover States:     Orange→Gold transition
Buttons Primary:  Solid orange (#FF8C00)
Buttons Outline:  Orange border with transparent bg
```

---

## 🏗️ STRUCTURAL UPDATES

### All Three Sites Get
1. **Header Redesign**
   - Logo with mark/icon left-aligned (white or orange tint)
   - Navigation right-aligned (white text, orange hover)
   - Sticky header (dark with subtle shadow)
   - Links to: thomasaarup.dk, humanified.dk, ohgodmode.dk, essential resources

2. **Hero Section Update**
   - Full-viewport dark background (#0A0E1F)
   - Large centered headline (white)
   - Accent words in orange (#FF8C00)
   - Subtitle in light gray
   - CTA buttons (orange solid)
   - Optional subtle animated elements (orange glow effect)

3. **New Links Section** (site-wide footer upgrade)
   - Grid of 4-6 essential resource links
   - Categories:
     - **Ecosystem:** Links to sister sites (thomasaarup.dk, humanified.dk, ohgodmode.dk)
     - **Learning:** Academy, guides, documentation
     - **Community:** Contact, support, fællesskab
     - **Values:** Links to CLAUDE.md, 4 SØJLER philosophy

4. **Section Spacing**
   - Consistent padding (var(--spacing-3xl) per section)
   - Dark backgrounds with subtle contrast elements
   - Orange accents as visual breakpoints

### Site-Specific Additions

#### **thomasaarup.dk**
```
NEW POWER-PROFILE SECTION (between VALUES and INITIATIVES)

What it is:
├── Explanation of HUMANIFIED Power Profiling system
├── What the profile delivers (5 dimensions)
├── How it works (4-step process)
├── Sample insights (anonymized example)
└── "Get Your Profile" CTA button

Content Blocks:
- Hero: "Know Yourself. Build on It."
- Values Section (FADERSKAB, FAMILIESAMMENHOLD, INTEGRITET, SELVVÆRD)
- NEW POWER-PROFILE Section (this is the addition)
- What I'm Building (HUMANIFIED, OH GOD MODE, VALUES MENTOR)
- Contact/Book Form
- Footer with Links
```

#### **humanified.dk**
```
STRUCTURE SIMPLIFIED (Reveal aesthetic = cleaner, fewer sections)

- Hero: "Understand Yourself. Build What Matters."
- What You Get (6 feature cards - keep)
- How It Works (4-step process - keep)
- Power Profiling Benefits (new subsection in CTA area)
- Signup Form
- Footer with Links

NEW: Add "Why Power Profiling Works" explanation
- Based on psychological frameworks
- Tailored to entrepreneur mindset
- Evidence-based approach
```

#### **ohgodmode.dk**
```
STRUCTURE: Keep current (it's working well)

- Hero: "Build Your Brand. Without the Stress."
- Why Templates Matter (keep)
- Three Template Cards (keep - Tømrer, VVS, Maler)
- Get Started Section (keep)
- FAQ (keep)
- Footer with Links (update)
```

---

## 📋 IMPLEMENTATION CHECKLIST

### PHASE 1: CSS Updates (Shared Stylesheet)
```
File: /web-platforms/shared/css/style.css

1. ✅ Update color variables
   - Remove: --color-primary-blue, --color-primary-purple, --color-primary-magenta
   - Remove: --gradient-primary
   - Update: --bg-primary → #0A0E1F
   - Update: --bg-secondary → #111827
   - Keep: --color-accent-orange, --color-accent-gold, --color-accent-copper

2. ✅ Button Styles
   - btn-primary: background #FF8C00, hover to #FFB84D
   - btn-secondary: border #FF8C00, hover bg #FF8C00
   - btn-outline: same as secondary

3. ✅ Card Styles
   - background: #111827 (dark alt)
   - border: none (or subtle #1a1a2e)
   - border-left accent: #FF8C00 (orange)
   - hover: subtle glow with orange shadow

4. ✅ Hero Section
   - background: #0A0E1F (flat, no gradient)
   - heading: white (#FFFFFF)
   - accent text: #FF8C00
   - subtitle: #E5E5E5

5. ✅ Typography
   - body text: #E5E5E5 on #0A0E1F
   - secondary text: #999999
   - links: #FF8C00 with white hover

6. ✅ Animations (keep existing, update colors)
   - glow animation: use #FF8C00 instead of gradient
   - float animation: keep as-is
   - slideIn animations: keep as-is
   - Add: orange-accent pulse (optional enhancement)

7. ✅ Header/Footer
   - background: #0A0E1F with subtle border-bottom #1a1a2e
   - links: white, hover to #FF8C00
   - accent elements: #FF8C00
```

### PHASE 2: thomasaarup.dk Updates
```
File: /web-platforms/thomasaarup/index.html

1. ✅ Header
   - Add logo left-aligned (mark or icon)
   - Navigation: Vision | Power-Profile | Values | Contact | Links
   - Sticky behavior

2. ✅ Hero Section
   - "Du ved hvad du vil. Men ved du HVORFOR?"
   - Keep structure, update colors (white heading, orange accent)
   - Keep CTA buttons

3. ✅ Keep: VALUES SECTION
   - 4 SØJLER cards (FADERSKAB, FAMILIESAMMENHOLD, INTEGRITET, SELVVÆRD)
   - Update colors: cards dark (#111827), titles orange, text light-gray

4. ✅ NEW: POWER-PROFILE SECTION (INSERT HERE)
   Position: Between VALUES and WHAT I'M BUILDING

   Content:
   ```html
   <section class="power-profile-section">
     <div class="container">
       <h2>Din Power-Profil: Præcis Hvad Du Skal Vide Om Dig</h2>

       <div class="power-profile-intro">
         <p>Ikke en test. Ikke psykologi-lingo. Bare dine værdi, dine mønstre, dine supercrafter.</p>

         <div class="profile-grid">
           <div class="profile-card">
             <h4>1. VALUES LAYER</h4>
             <p>Din komplette værdi-hierarki (1-15 ranger) med beviser fra dine ord og handlinger.</p>
           </div>

           <div class="profile-card">
             <h4>2. THINKING LAYER</h4>
             <p>Hvordan du tænker (visual, logical, pattern, intuitive) og hvordan du træffer beslutninger.</p>
           </div>

           <div class="profile-card">
             <h4>3. ENERGY SIGNATURE</h4>
             <p>Hvad energiserer dig og hvad dræner dig - præcis hvilke situationer.</p>
           </div>

           <div class="profile-card">
             <h4>4. SUPERPOWERS</h4>
             <p>Dine unikke styrker og hvordan du bruger dem autentisk i arbejdet.</p>
           </div>

           <div class="profile-card">
             <h4>5. POWER-MAPPING</h4>
             <p>Konkrete handlinger: hvad du skal fokusere på, hvad du skal delegere.</p>
           </div>
         </div>
       </div>

       <div class="profile-how-it-works">
         <h3>Hvordan Det Virker</h3>
         <ol>
           <li><strong>Du skriver:</strong> 40-60k ord om hvem du er (6 uger, 46 spørgsmål)</li>
           <li><strong>AI analyserer:</strong> Mønstre, værdier, mønstre uden bias</li>
           <li><strong>Du får:</strong> Komplet profil med evidens fra dine egne ord</li>
           <li><strong>Du handler:</strong> Konkret strategi baseret på faktisk dig</li>
         </ol>
       </div>

       <div class="profile-cta">
         <h3>Klar Til at Forstå Dig Selv på Dybdefuldt Niveau?</h3>
         <a href="https://humanified.dk" class="btn btn-primary btn-lg">Start Power-Profiling</a>
       </div>
     </div>
   </section>
   ```

5. ✅ Update: WHAT I'M BUILDING
   - Keep same structure
   - Update colors to match new scheme

6. ✅ Update: CONTACT SECTION
   - Dark background, orange accents
   - Form styling updated

7. ✅ NEW: FOOTER with LINKS
   - Replace existing footer
   - Include:
     ```html
     <section class="links-section">
       <div class="container">
         <h3>Essential Resources</h3>

         <div class="links-grid">
           <div class="link-group">
             <h4>Ecosystem</h4>
             <ul>
               <li><a href="https://humanified.dk">HUMANIFIED - Self-Discovery</a></li>
               <li><a href="https://ohgodmode.dk">OH GOD MODE - Free Templates</a></li>
               <li><a href="https://thomasaarup.dk">Thomas Aarup - Coaching</a></li>
             </ul>
           </div>

           <div class="link-group">
             <h4>Learning</h4>
             <ul>
               <li><a href="https://thomasaarup.dk/academy">HUMANIFIED Academy - CSS & JS</a></li>
               <li><a href="#">Values Framework - 4 SØJLER</a></li>
               <li><a href="#">Power-Profiling Guide</a></li>
             </ul>
           </div>

           <div class="link-group">
             <h4>Community</h4>
             <ul>
               <li><a href="mailto:thomas@thomasaarup.dk">Get in Touch</a></li>
               <li><a href="#">Join Fællesskab</a></li>
               <li><a href="#">Support Forum</a></li>
             </ul>
           </div>

           <div class="link-group">
             <h4>About</h4>
             <ul>
               <li><a href="#">4 SØJLER Philosophy</a></li>
               <li><a href="#">Values-Locked Architecture</a></li>
               <li><a href="#">Built with Integrity</a></li>
             </ul>
           </div>
         </div>
       </div>
     </section>
     ```
```

### PHASE 3: humanified.dk Updates
```
File: /web-platforms/humanified/index.html

1. ✅ Header
   - Add logo left-aligned
   - Navigation: Features | How It Works | Power-Profiling | Signup | Links
   - Sticky header

2. ✅ Hero Section
   - "Understand Yourself. Build What Matters."
   - Keep structure, update colors

3. ✅ Keep: Features Section (6 cards)
   - Update colors, icon styling

4. ✅ Keep: How It Works (4 steps)
   - Update colors, number circles (orange background)

5. ✅ NEW: Power-Profiling Benefits Section
   Position: Before signup CTA

   Content:
   ```html
   <section class="power-profiling-benefits">
     <div class="container">
       <h2>Why Power-Profiling Works for Entrepreneurs</h2>

       <p style="max-width: 700px; margin: 0 auto 3rem;">
         Most self-discovery tools are generic. Power-Profiling is built specifically for people building something real. It works because it's based on YOUR words, not someone else's framework.
       </p>

       <div class="benefits-grid">
         <div class="benefit">
           <h4>Psychology-Backed</h4>
           <p>Based on Schwartz Values Theory, Big Five personality, and VIA Character Strengths. Not pop-psychology.</p>
         </div>

         <div class="benefit">
           <h4>Evidence-Based</h4>
           <p>Every insight comes from YOUR words. You see the quotes that support each finding.</p>
         </div>

         <div class="benefit">
           <h4>Entrepreneur-Focused</h4>
           <p>Designed for people who are building, leading, creating. Not general population averages.</p>
         </div>

         <div class="benefit">
           <h4>Actionable</h4>
           <p>Not just interesting insights. Concrete strategies for what to focus on, what to delegate, how to lead.</p>
         </div>
       </div>
     </div>
   </section>
   ```

6. ✅ Update: SIGNUP SECTION
   - Colors updated
   - Add mention of Power-Profiling in form context

7. ✅ NEW: FOOTER with LINKS
   - Same structure as thomasaarup.dk footer
   - Adjusted for HUMANIFIED context
```

### PHASE 4: ohgodmode.dk Updates
```
File: /web-platforms/ohgodmode/index.html

1. ✅ Header
   - Logo left-aligned
   - Navigation: Templates | Why | Features | Start | Links

2. ✅ Hero Section
   - "Build Your Brand. Without the Stress."
   - Colors updated

3. ✅ Keep: Why Section
   - 4 cards (Design, Speed, Mobile, Free)
   - Colors updated (orange accents)

4. ✅ Keep: Templates Section
   - 3 cards (Tømrer, VVS, Maler)
   - Update colors, emoji icons stay
   - Border accent: orange (#FF8C00)

5. ✅ Keep: Get Started Section
   - Form updated with new colors

6. ✅ Keep: FAQ Section
   - Cards dark, text light, accents orange

7. ✅ NEW: FOOTER with LINKS
   - Same structure as other sites
   - Adjusted for templates context
```

---

## 🎨 CSS IMPLEMENTATION (Detailed)

### Key CSS Changes
```css
/* BEFORE (Current) */
:root {
  --bg-primary: linear-gradient(135deg, #0066FF, #6600FF, #FF00FF);
  --bg-secondary: linear-gradient(135deg, #0A0E1F, #1a1a2e);
  --accent: #FF8C00;
}

/* AFTER (New) */
:root {
  --bg-primary: #0A0E1F;                    /* Flat dark, no gradient */
  --bg-secondary: #111827;                  /* Slightly lighter dark */
  --bg-dark-border: #1a1a2e;               /* For dividers */
  --accent: #FF8C00;                        /* Orange primary */
  --accent-secondary: #FFB84D;              /* Gold secondary */
  --accent-tertiary: #B87333;               /* Copper tertiary */
  --text-primary: #FFFFFF;                  /* White headings */
  --text-secondary: #E5E5E5;                /* Light gray body text */
  --text-tertiary: #999999;                 /* Medium gray secondary */
}

/* Hero Section */
.hero {
  background: var(--bg-primary);            /* Change from gradient to flat */
  color: var(--text-secondary);
}

.hero h1 {
  color: var(--text-primary);               /* White */
}

.hero-accent {
  color: var(--accent);                     /* Orange */
}

/* Button Styling */
.btn-primary {
  background: var(--accent);                /* Orange solid */
  color: white;
  border: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--accent-secondary);      /* Transition to gold */
  box-shadow: 0 0 20px rgba(255, 140, 0, 0.4);  /* Orange glow */
}

.btn-outline {
  border: 2px solid var(--accent);
  color: var(--accent);
  background: transparent;
}

.btn-outline:hover {
  background: var(--accent);
  color: white;
}

/* Cards */
.card, .value-card, .feature-card {
  background: var(--bg-secondary);          /* Dark alt */
  border: 1px solid var(--bg-dark-border);  /* Subtle border */
  border-left: 4px solid var(--accent);     /* Orange left accent */
  color: var(--text-secondary);
}

.card h3, .value-card h3 {
  color: var(--accent);                     /* Orange headings */
}

.card:hover {
  box-shadow: 0 0 20px rgba(255, 140, 0, 0.1);  /* Subtle orange glow */
  transform: translateY(-4px);
}

/* Links */
a {
  color: var(--accent);
}

a:hover {
  color: var(--accent-secondary);           /* Gold on hover */
}

/* Footer */
footer {
  background: var(--bg-primary);
  color: var(--text-secondary);
  border-top: 1px solid var(--bg-dark-border);
}

footer h4 {
  color: var(--accent);
}
```

---

## 🔄 MIGRATION STEPS

### Step 1: Update Shared CSS
1. Open `/web-platforms/shared/css/style.css`
2. Replace color variables as shown above
3. Update all component styles (buttons, cards, hero, etc.)
4. Test in browser (all three sites will update)

### Step 2: Update thomasaarup.dk
1. Add POWER-PROFILE section (new HTML block)
2. Add LINKS section to footer
3. Update header with logo and navigation
4. Test hero, values, power-profile, contact sections

### Step 3: Update humanified.dk
1. Add POWER-PROFILING BENEFITS section
2. Add LINKS section to footer
3. Update header and navigation
4. Test all sections

### Step 4: Update ohgodmode.dk
1. Add LINKS section to footer
2. Update header and navigation
3. Test template cards and form

### Step 5: Test All Sites
- [ ] Responsive (mobile, tablet, desktop)
- [ ] Colors render correctly
- [ ] Logo displays properly
- [ ] Navigation works
- [ ] Forms submit
- [ ] Links work
- [ ] Hover states visible
- [ ] No gradient references remain

---

## 🎯 SUCCESS CRITERIA

✅ **Visual:**
- No blue, purple, or magenta anywhere
- Dark background (#0A0E1F or similar) on all pages
- Orange/gold accents throughout
- Logo visible and integrated
- Reveal template aesthetic (clean, one-page scrolling)

✅ **Functional:**
- All links work
- Forms submit properly
- Navigation sticky header works
- Responsive design maintained
- Animations smooth and not jarring

✅ **Content:**
- thomasaarup.dk: Power-Profile section explains profiling
- humanified.dk: Power-Profiling benefits section added
- ohgodmode.dk: Template section unchanged but styled
- All sites: Links section with essential resources
- All sites: Logo integration complete

✅ **Brand:**
- Values still central (4 SØJLER visible)
- Orange/gold represents warmth breaking through darkness
- Metaphor: Light finding its way in darkness (integrity shining)
- Premium, serious, intentional aesthetic

---

## 📅 TIMELINE

| Phase | Task | Est. Time | Status |
|-------|------|-----------|--------|
| 1 | Update shared CSS | 1h | Pending |
| 2 | Update thomasaarup.dk | 1.5h | Pending |
| 3 | Update humanified.dk | 1h | Pending |
| 4 | Update ohgodmode.dk | 30m | Pending |
| 5 | Testing + fixes | 1h | Pending |
| **TOTAL** | | **5 hours** | Ready |

---

## 💪 READY TO BUILD

This plan provides:
- ✅ Clear color migration strategy
- ✅ Specific HTML changes per site
- ✅ CSS implementation details
- ✅ New content sections (Power-Profile, Links, Benefits)
- ✅ Testing checklist
- ✅ Timeline

**Next step:** Approve and begin Phase 1 (CSS updates)

---

*WEB-REDESIGN-PLAN-2026.md*
*Complete ecosystem redesign specification*
*March 5, 2026 - Ready for execution*
