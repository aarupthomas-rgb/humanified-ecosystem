# 🎨 HUMANIFIED ECOSYSTEM DESIGN SYSTEM 2026

**Version:** 1.0
**Date:** March 3, 2026
**Status:** ACTIVE - Foundation for all three sites
**Source:** HUMANISED-AI.png + blomst.png + design.com reference

---

## 📊 COLOR PALETTE

### **Primary Colors (From HUMANISED-AI logo)**
```css
--color-primary-blue: #0066FF
--color-primary-purple: #6600FF
--color-primary-magenta: #FF00FF

--color-gradient-start: #0066FF
--color-gradient-mid: #6600FF
--color-gradient-end: #FF00FF
```

### **Accent Colors (From blomst.png - flower)**
```css
--color-accent-orange: #FF8C00
--color-accent-gold: #FFB84D
--color-accent-copper: #B87333

--accent-warm-start: #FF8C00
--accent-warm-mid: #FFB84D
--accent-warm-end: #B87333
```

### **Neutral Colors**
```css
--color-white: #FFFFFF
--color-black: #000000
--color-dark: #0A0E1F
--color-light-gray: #F5F5F5
--color-medium-gray: #999999
--color-dark-gray: #333333
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

## 🎨 GRADIENT DEFINITIONS

### **Primary Gradient (HUMANIFIED Logo)**
```css
--gradient-primary: linear-gradient(135deg, #0066FF 0%, #6600FF 50%, #FF00FF 100%)
```

### **Warm Gradient (Flower accents)**
```css
--gradient-warm: linear-gradient(135deg, #FF8C00 0%, #FFB84D 50%, #B87333 100%)
```

### **Dark Gradient (Backgrounds)**
```css
--gradient-dark: linear-gradient(135deg, #0A0E1F 0%, #1a1a2e 100%)
```

---

## 🖼️ COMPONENT PATTERNS

### **Buttons**
```css
.btn-primary {
  background: var(--gradient-primary);
  color: var(--color-white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: 8px;
  font-weight: var(--font-semibold);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(102, 0, 255, 0.3);
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
}
```

### **Hero Section**
```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-dark);
  padding: var(--spacing-3xl) var(--spacing-lg);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 140, 0, 0.1) 0%, transparent 70%);
  animation: float 20s ease-in-out infinite;
}
```

### **Card Component**
```css
.card {
  background: var(--color-white);
  border-radius: 12px;
  padding: var(--spacing-2xl);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-left: 4px solid var(--color-primary-magenta);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
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

## 🎯 SITE-SPECIFIC OVERRIDES

### **humanified.dk**
- Primary colors: Blue→Purple→Magenta (HUMANIFIED gradient)
- Accent: Orange/Gold (flower accents)
- Background: Dark (#0A0E1F)
- Focus: Premium, sophisticated, product showcase

### **thomasaarup.dk**
- Primary colors: Same gradient
- Accent: Orange/Gold references to HUMANIFIED
- Background: Mix of dark and light
- Focus: Rådgivning, systems thinking, professional

### **ohgodmode.dk**
- Primary colors: Gradient for consistency
- Accent: Orange/Gold (warm, energetic)
- Background: Mix with lighter elements
- Focus: Bluecollar, practical, entry point

---

## ✅ DESIGN DNA CHECKLIST

All three sites should have:
- ✅ Same color palette foundation
- ✅ Same typography system
- ✅ HUMANISED-AI logo visible (or referenced)
- ✅ Consistent spacing/padding
- ✅ Matching button styles
- ✅ Same animation language
- ✅ Values integrated visually (gradients = integration + spectrum)

---

**Status:** FOUNDATION READY
**Next:** Integrate into HTML files
**Owner:** Claudian + Thomas

🎨💪
