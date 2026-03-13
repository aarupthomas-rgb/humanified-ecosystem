# 🚀 HUMANIFIED TEMPLATE ACADEMY - Phase 1 MVP

**An interactive learning platform for Danish bluecollar entrepreneurs**

Inspired by [CodeGenes.net](https://www.codegenes.net/) - but built for your ecosystem.

---

## 📊 STATUS: PHASE 1 COMPLETE ✅

- **Total Files:** 10 (6 HTML pages, 1 CSS theme, 3 templates)
- **Pages:** Landing, Templates, Editor, Tutorial, Quiz, Dashboard
- **Tutorial Content:** 8 lessons on HTML fundamentals
- **Quiz Content:** 10 questions with feedback + scoring
- **Features:** Live code editor, progress tracking, badges, activity timeline
- **Language:** 100% Danish
- **Responsive:** Mobile + tablet + desktop
- **Ready for:** Deployment to thomasaarup.dk/academy

---

## 🎯 THE VISION

**Problem:** Most web design learning platforms are overcomplicated, expensive, or in English.

**Solution:** A free, simple, Danish-language platform where bluecollar entrepreneurs can:
1. Browse professional templates (Tømrer, VVS, Maler)
2. Learn HTML/CSS/JavaScript step-by-step
3. Edit templates live in a code editor
4. Test their changes instantly
5. Download ready-to-deploy websites
6. Earn badges as they learn

**Target Users:**
- Tømrere (carpenters)
- VVS-folk (plumbers)
- Malere (painters)
- Electricians, hairdressers, massage therapists - any håndværker who needs a professional website

**Values:**
- **SELVVÆRD:** Empower users with real skills
- **FAMILIESAMMENHOLD:** Build community learning
- **INTEGRITET:** Quality education, no shortcuts
- **FADERSKAB:** Long-term thinking (start with templates, grow to full CMS)

---

## 📁 FILE STRUCTURE

```
academy/
├── index.html                          Landing page
│   ├── Hero section (HUMANISED-AI gradient)
│   ├── Features grid (6 cards)
│   ├── How-it-works section (4 steps)
│   └── CTA: "Start Gratis" → templates.html
│
├── templates.html                      Template catalog
│   ├── 3 template cards
│   ├── Preview + description + tags
│   └── Buttons: "Forhåndsvis" (modal), "Brug Template" (→ playground)
│
├── playground.html                     Live code editor
│   ├── 3 tabs: HTML | CSS | JavaScript
│   ├── CodeMirror editor (textarea fallback)
│   ├── Split-screen: 50% editor + 50% preview
│   ├── Responsive preview modes (Desktop/Tablet/Mobile)
│   └── Buttons: Save | Reset | Download
│
├── learn.html                          Tutorial browser
│   ├── Track selection (3 tracks: HTML, CSS, JS)
│   ├── Lesson viewer with sidebar
│   │   ├── Left: Lesson list with progress
│   │   └── Right: Lesson content + code examples
│   ├── Navigation: Previous | Next | Quiz (when complete)
│   └── 8 lessons per track
│
├── quiz.html                           Quiz system
│   ├── 10 questions per quiz
│   ├── Multiple-choice options
│   ├── Instant feedback (correct/incorrect)
│   ├── Score calculation (%)
│   ├── Badge awards (>80%)
│   └── Results screen with activity save
│
├── dashboard.html                      User progress
│   ├── Welcome greeting
│   ├── 4 stat cards (lessons, quizzes, badges, %)
│   ├── Progress bars per track
│   ├── Badge collection (earned + locked)
│   ├── Activity timeline (recent actions)
│   ├── CTA cards (next actions)
│   └── Clear progress button (for testing)
│
├── css/
│   └── academy-theme.css              Theme system
│       ├── HUMANISED-AI gradient colors
│       ├── Component styles (cards, buttons, inputs)
│       ├── Layout grids (responsive)
│       └── Dark navy background + purple accent
│
└── data/templates/
    ├── template-toemmerer.json        Carpenter site
    │   ├── HTML: Full website structure
    │   ├── CSS: Clean, professional styling
    │   └── JS: Contact form + smooth scroll
    │
    ├── template-vvs.json              Plumber site
    │   ├── HTML: Services + price calculator
    │   ├── CSS: Cyan water-theme colors
    │   └── JS: Real-time price calculation
    │
    └── template-maler.json            Painter site
        ├── HTML: Portfolio + projects
        ├── CSS: Colorful, gallery-focused
        └── JS: Image lightbox ready
```

---

## 🎮 HOW TO USE

### For Users (håndværkere):

1. **Browse Templates**
   - Go to `templates.html`
   - Click "Brug Template" on a template
   - Opens `playground.html` with template code

2. **Edit in Live Editor**
   - Left panel: Edit HTML/CSS/JavaScript
   - Right panel: See changes live
   - Edit company name, colors, phone number, etc.

3. **Save Your Work**
   - Click "Gem" to save to localStorage
   - Code persists across browser sessions

4. **Download Website**
   - Click "Download"
   - Get ZIP file with 3 files (index.html, style.css, script.js)
   - Upload to Vercel/Netlify - LIVE in 60 seconds!

5. **Learn While Building**
   - Click "Lær" in navigation
   - Do HTML tutorial (8 lessons)
   - Take quiz to test knowledge
   - Earn badges as you complete tracks

6. **Track Progress**
   - Dashboard shows lessons done, badges earned, activity
   - See exactly where you are in your learning journey

### For Thomas (Admin):

**Adding New Templates:**
1. Create new JSON file: `data/templates/template-[name].json`
2. Include: `id`, `name`, `category`, `tags`, `thumbnail`, `files` (html, css, js)
3. Update `templates.html` to add card
4. Update `playground.html` templates object

**Adding New Tutorial Track:**
1. Update `learn.html` with new track card
2. Add to tutorials object in learn.html script
3. Add corresponding quiz in `quiz.html`

**Advanced Customization:**
- Edit `css/academy-theme.css` for colors/fonts
- Modify `academy-theme.css` component classes
- All pages use shared CSS variables for consistency

---

## 🔧 TECHNICAL STACK

- **HTML5** - Semantic structure
- **CSS3** - Flexbox/Grid layout, gradient theming
- **JavaScript** - Vanilla (no frameworks)
- **localStorage** - Client-side progress tracking
- **JSON** - Static template + tutorial data
- **Responsive Design** - Mobile-first approach

**Why no frameworks?**
- Simpler for users to understand
- Faster initial load
- Easier to teach (see actual HTML/CSS/JS)
- Can add React/Vue later if needed

**Why localStorage instead of database?**
- Works offline
- No server needed for MVP
- Simple to implement
- Can migrate to Supabase in Phase 2

---

## 📱 RESPONSIVE DESIGN

All pages work perfectly on:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

Tested with:
- Chrome (desktop + mobile)
- Firefox
- Safari
- Edge

---

## 🚀 DEPLOYMENT

### Quick Start (Vercel):

1. Go to `thomasaarup.dk/academy/` (or setup subdomain)
2. Push to GitHub:
   ```bash
   git add web-platforms/academy/
   git commit -m "Build: Complete Academy Phase 1 MVP"
   git push
   ```
3. Vercel auto-deploys from GitHub
4. Done! Academy is live

### Environment:
- **Hosting:** Vercel (free tier supports unlimited)
- **Custom domain:** thomasaarup.dk/academy (subfolder) or academy.humanified.dk (subdomain)
- **GitHub:** Automatic deploy on push
- **No database needed** (uses localStorage)

---

## 📈 PHASE 2 & 3 ROADMAP

### Phase 2: ENHANCEMENT (30 hours)
- ✅ CSS tutorial (8 lessons)
- ✅ JavaScript tutorial (8 lessons)
- ✅ 2 more quizzes (CSS, JS)
- ✅ Supabase database (replace localStorage)
- ✅ User authentication
- ✅ Cloud code sync (work from multiple devices)
- ✅ Social features (comments, likes, sharing)

### Phase 3: SCALE (40 hours)
- ✅ Advanced editor (Monaco instead of textarea)
- ✅ Multi-file projects (folder structure)
- ✅ NPM package support
- ✅ Template upload system (users submit templates)
- ✅ CMS for tutorial management
- ✅ Monetization (premium templates)
- ✅ Analytics dashboard
- ✅ API for programmatic access

---

## 🎓 CURRENT LEARNING TRACKS

### Track 1: HTML Grundlæggende (8 lessons, 2 hours)

1. Hvad er HTML?
2. HTML Tags og Struktur
3. Overskrifter og Paragrafer
4. Links og Billeder
5. Lister
6. Kontaktformularer
7. Semantiske Tags
8. Dit Første Projekt

**Quiz:** 10 questions covering all concepts
**Badge:** "HTML Master" (if 80%+)

### Track 2: CSS Styling (Coming Phase 2)
- Selectors and properties
- Colors and backgrounds
- Layout (flexbox, grid)
- Responsive design
- Animations
- + 3 more lessons

### Track 3: JavaScript Interaktivity (Coming Phase 2)
- Variables and types
- Functions and scope
- DOM manipulation
- Event listeners
- Forms and validation
- + 3 more lessons

---

## 🏆 BADGE SYSTEM

Badges earned for:
- ✅ HTML Starter - Completed HTML track
- ✅ HTML Master - Scored 80%+ on HTML quiz
- 🔒 CSS Starter - Completed CSS track (Phase 2)
- 🔒 CSS Master - Scored 80%+ on CSS quiz
- 🔒 JS Starter - Completed JS track
- 🔒 JS Master - Scored 80%+ on JS quiz
- 🔒 Meester Udvikler - Completed all 3 tracks
- 🔒 Quiz Kæmpe - Passed all 3 quizzes with 80%+

Badges display on dashboard and can be shared on portfolio!

---

## 📊 USER PROGRESS TRACKING

**What's Tracked (localStorage):**
- ✅ Lessons viewed/completed (per lesson)
- ✅ Quiz attempts + scores
- ✅ Badges earned
- ✅ Recent activity (last 10 actions)
- ✅ Saved code per template
- ✅ User preferences

**Privacy:**
- All data stored locally in browser
- No tracking of personal info
- No analytics (unless Phase 3 adds opt-in)
- Users own their data

**Future (Phase 2):**
- Cloud sync with Supabase
- Cross-device access
- Shareable progress links
- Email reminders (opt-in)

---

## 💡 DESIGN SYSTEM (HUMANISED-AI)

**Color Palette:**
- **Primary Gradient:** Blue (#4A90E2) → Purple (#9B59B6) → Magenta (#E91E63)
- **Dark Background:** Navy (#1A1F35)
- **Secondary:** Light neutrals for text
- **Accent:** Purple (#9B59B6) for CTAs + highlights

**Typography:**
- **Headings:** Inter, 800 weight, gradient text
- **Body:** Inter, regular, light color
- **Code:** Monaco/Menlo monospace

**Components:**
- **Cards:** Subtle shadow, hover lift effect
- **Buttons:** Gradient background, smooth transitions
- **Input fields:** Dark background, purple border on focus
- **Progress bars:** Gradient fill
- **Badges:** Icon + text in centered circle

All consistent across all 6 pages.

---

## 🐛 KNOWN LIMITATIONS (Phase 1)

1. **Editor:** Uses textarea instead of CodeMirror (simpler, but less advanced)
   - Plan: Upgrade to CodeMirror 6 in Phase 2
   - Workaround: Basic syntax is still visible, editing works perfectly

2. **Templates:** Only HTML/CSS inline (no external files)
   - By design: Makes it easier to download and deploy
   - Can add multi-file projects in Phase 3

3. **No Backend:** Uses localStorage only
   - By design: Works offline, simple for MVP
   - Plan: Add Supabase in Phase 2

4. **No Authentication:** Progress is per-device
   - By design: No account needed to start learning
   - Plan: Add optional accounts in Phase 2

5. **Only 1 Tutorial Track Live:** HTML only
   - By design: Focus on quality (8 complete lessons)
   - Plan: CSS + JS tracks in Phase 2

---

## 📞 SUPPORT & FEEDBACK

**Issues or Ideas?**
- Email: thomas@humanified.dk
- GitHub Issues: (link to repo)
- Direct message to Thomas

**We'd love to hear:**
- Which templates you want
- What topics to teach
- Difficulty level feedback
- Feature requests
- Success stories!

---

## 📄 LICENSE & CREDITS

**License:** MIT (see /web-platforms/LICENSE)
**Creator:** Thomas Aarup (@aarupthomas-rgb on GitHub)
**Inspired by:** CodeGenes.net
**Built with:** HTML5, CSS3, Vanilla JavaScript
**Hosted on:** Vercel
**For:** Danish bluecollar entrepreneurs

---

## 🎬 GETTING STARTED CHECKLIST

- [ ] Read this README ✓
- [ ] Visit `index.html` (landing page)
- [ ] Browse `templates.html` (see templates)
- [ ] Open `playground.html` (try the editor)
- [ ] Read `learn.html` (try a lesson)
- [ ] Take `quiz.html` (test knowledge)
- [ ] Check `dashboard.html` (see progress)
- [ ] Download a template (deploy to Vercel)
- [ ] Celebrate! 🎉

---

**Made with ❤️ for the HUMANIFIED ecosystem**

*"Empower people to build their own digital presence - no coding knowledge required."*

---

*Phase 1 Complete: 2. marts 2026*
*Ready for: Testing, optimization, deployment*
*Next milestone: Live at thomasaarup.dk/academy by March 5*
