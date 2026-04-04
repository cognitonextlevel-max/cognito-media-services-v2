# ANTIGRAVITY BUILD PROMPT: DeMarkuss Day — One-Page Sales Machine

## THE BRIEF

Rebuild the homepage at `src/app/page.tsx` as a single-page marketing site that sells ONE transformation: **"Your business runs without you."** Every service (SEO, websites, apps, AI, sales agents) exists to get the client to that outcome. The site IS the salesperson — it needs to convert cold traffic into booked audits.

**Brand:** DeMarkuss Day (personal brand, NOT a company)
**Font for brand name:** Sacramento (cursive/signature) — already loaded via Google Fonts and registered as `--font-signature` in globals.css
**Design system:** Keep the existing dark theme (black bg, cyan accents, zinc grays), Cabinet Grotesk headlines, Satoshi body, JetBrains Mono for technical/label text, framer-motion animations
**Domain:** demarkussday.com
**CTA everywhere:** Book Your Strategic Audit (Cal.com embed, namespace "assessment")
**Voice agent:** Keep the Vapi mic button in bottom-right corner

---

## HOMEPAGE STRUCTURE (Top to Bottom)

### SECTION 1: HERO
**Purpose:** Stop the scroll. Make them feel the pain. Show the solution is a person, not a software.

- Full viewport height, dark background
- Top bar: "DeMarkuss Day" in Sacramento signature font (cyan), phone number 469.970.6943, "Book Audit" button
- Main headline (Cabinet Grotesk, massive, uppercase):
  ```
  YOUR BUSINESS
  SHOULDN'T NEED
  YOU TO RUN.
  ```
- Subtext (Satoshi, zinc-400, max-w-lg):
  ```
  I build automated systems that answer your phone, capture every lead,
  rank your brand on Google, and close sales — while you sleep.
  Dallas-Fort Worth. On-site. Same-day availability.
  ```
- Two CTAs side by side:
  - Primary: "Book Free Audit" (cyan bg, black text, links to #audit)
  - Secondary: "See How It Works" (outline border, links to #process)
- Trust bar below hero (horizontal, subtle):
  - "500+ Businesses Automated"
  - "5.0★ Google Rating"
  - "Same-Day Availability"
- Scrolling marquee below: `SYSTEMS · AI · SEO · WEBSITES · AUTOMATION · SCALE`

### SECTION 2: THE PROBLEM (Pain Agitation)
**Purpose:** Make them feel the cost of NOT hiring you. Use real stats.

- Section label: "THE REALITY" (mono, cyan, small)
- Headline: `YOU'RE LOSING MONEY EVERY DAY YOU DON'T FIX THIS`
- Three problem cards in a row (dark cards, red/warning accents):
  1. **"62% of your calls go unanswered"** — "85% of those people never call back. That's $126K/year walking out the door."
  2. **"Your leads go cold in minutes"** — "If you don't respond in 5 minutes, you're 21x less likely to close. Your competitors respond in 30 seconds."
  3. **"Google can't find you"** — "If you're not in the top 3 map results, you don't exist. 46% of all Google searches are local."
- Bottom text: "This isn't a tech problem. It's a systems problem. And systems are what I build."

### SECTION 3: THE SOLUTION (What I Install)
**Purpose:** Show the five modules as ONE connected system, not a menu of services.

- Section label: "THE SYSTEM" (mono, cyan)
- Headline: `ONE SYSTEM. FIVE ENGINES. ZERO CHAOS.`
- Subtext: "When I walk into your business, I don't sell you pieces. I install a complete operating system that handles everything you're doing manually."
- Five module cards in a grid (2x2 + 1, or stacked on mobile). Each card:
  - Module number (01-05)
  - Icon
  - Name
  - One-line description
  - Key metric

  **MODULE 01: MAP DOMINANCE (Local SEO)**
  - "I put you in the top 3 Google Map results so every local search sends customers to you — not your competitor."
  - Metric: "Top 3 Rankings"

  **MODULE 02: REVENUE ENGINE (Website)**
  - "Your website stops being a brochure and starts being a machine that forces visitors to take action."
  - Metric: "Conversion-Optimized"

  **MODULE 03: OPERATIONAL LOGIC (Custom Apps)**
  - "I automate the workflows that eat 20+ hours of your week — scheduling, invoicing, CRM, reporting."
  - Metric: "20+ Hours Saved/Week"

  **MODULE 04: AI SYSTEMS (Voice + Automation)**
  - "AI answers your phone 24/7, responds to every lead in under 60 seconds, and requests reviews automatically."
  - Metric: "Zero Missed Calls"
  - This card should have a special cyan glow/highlight — it's the newest and hottest service

  **MODULE 05: SALES AGENTS (Follow-Up)**
  - "Automated follow-up sequences that nurture every lead until they buy — or until they say no five times."
  - Metric: "100% Follow-Up Rate"

- Below the grid: "Every module connects. Your SEO drives leads → your website captures them → AI responds instantly → sales agents close them → your reputation grows. That's the loop."

### SECTION 4: HOW IT WORKS (3-Step Process)
**Purpose:** Make it feel simple. Remove friction. Show them exactly what happens.

- Section label: "THE PROCESS"
- Headline: `THREE STEPS. THEN YOUR BUSINESS RUNS ITSELF.`
- Three steps, large numbers, horizontal on desktop / stacked on mobile:

  **01 — STRATEGIC AUDIT (Free)**
  "I analyze your entire operation in 30 minutes. Where you're losing leads. Where you're wasting time. Where the money is hiding. No pitch. Just a blueprint."

  **02 — SYSTEM BUILD (1-2 Weeks)**
  "I build your custom system — SEO, website, AI, automations — and install it on-site. I train your team. Everything works before I leave."

  **03 — OPTIMIZE & SCALE (Ongoing)**
  "Monthly optimization. New automations. Performance reporting. Your system gets smarter every month. You get more time back every week."

### SECTION 5: FOUNDER (Personal Brand Section)
**Purpose:** This is a personal brand. People buy from DeMarkuss, not a company. Build trust.

- Keep the existing Founder component layout (photo left, text right)
- Update the heading to: `I DON'T OUTSOURCE. I SHOW UP.`
- Bio text: "Most agencies send you a Zoom link and a Loom video. I drive to your business, sit with your team, and build the system in front of you. I'm based in Dallas-Fort Worth. I've automated 500+ businesses. And I answer my own phone."
- Quote: "Chaos doesn't scale. Systems do. I install a digital nervous system that makes growth predictable and protects your time."
- Name: DeMarkuss Day
- Title: Business Systems Architect · Dallas, TX
- Keep the cinematic photo frame with scan overlay and corner accents

### SECTION 6: SOCIAL PROOF (Reviews)
**Purpose:** Real people saying real things. Trust signals.

- Keep existing Reviews component with 5-star Google reviews
- Add a header: "WHAT THEY SAY AFTER I LEAVE"
- Make sure the Google 5.0 star rating is prominent

### SECTION 7: WHO THIS IS FOR
**Purpose:** Qualify the visitor. Make the right people feel seen.

- Section label: "WHO I WORK WITH"
- Headline: `THIS IS FOR YOU IF...`
- Two columns:
  **Left column — "You're ready if:"**
  - You're missing calls and losing leads every week
  - You're still doing things manually that should be automated
  - Your website doesn't generate leads on its own
  - You can't find your business on Google Maps
  - You know AI could help but don't know where to start

  **Right column — "This isn't for you if:"**
  - You're not ready to invest in systems
  - You want the cheapest option, not the best one
  - You're looking for a quick fix, not a real infrastructure
  - Your business does under $200K/year in revenue

- Style the "ready" column with cyan checkmarks, "not for you" column with zinc/muted X marks

### SECTION 8: BOOKING (CTA Section)
**Purpose:** Close the deal. One action.

- Keep existing Cal.com embed (namespace "assessment")
- Headline: `BOOK YOUR FREE STRATEGIC AUDIT`
- Four value props with icons:
  - 30-Minute Deep Review
  - Custom Systems Blueprint
  - Zero Pressure — Just Strategy
  - Same-Day Availability
- Below the calendar embed: "Or call me directly: 469.970.6943"

### SECTION 9: FOOTER
**Purpose:** Clean close. Contact info. Status indicator.

- Keep the existing footer but with updated DeMarkuss Day branding (already done)
- "DD" monogram in signature font
- "Let's Build" heading
- Email: demarkuss@demarkussday.com
- Industries: Service Operations, Real Estate, Short Term Rentals, Contractors, Dental/Medical
- Social links (X, LinkedIn)
- "All Systems Active" status indicator
- Copyright: © 2026 DeMarkuss Day · Dallas, TX

---

## NAVIGATION

**Desktop (floating bottom nav — keep existing style):**
- System | Audit | DD (center, signature font) | Solutions | AI

**Mobile (bottom tab bar — keep existing style):**
- System | AI | DD (center circle) | Solutions | Audit

**Scroll top bar:**
- "DeMarkuss Day" in Sacramento signature font (left)
- Phone number + "Book Audit" button (right)

---

## SCROLLING MARQUEES (Between Sections)

Place 3 marquees throughout the page to break up sections:
1. After Hero: `SYSTEMS · AI · SEO · WEBSITES · AUTOMATION · SCALE` (outline variant)
2. After Solution modules: `BUILD ONCE · EXECUTE FOREVER · DEMARKUSS DAY` (large variant, right direction)
3. Before Booking: `DEPLOY WITH DEMARKUSS · STRATEGIC AUDIT · UNFAIR ADVANTAGE` (outline variant)

---

## ANIMATIONS (Framer Motion)

Keep existing animation patterns:
- Sections fade in on scroll (`whileInView`)
- Cards stagger in
- Numbers/stats count up when in view
- Marquees auto-scroll
- Preloader scrambles "DEMARKUSS" on load
- Nav appears after preloader

---

## COMPONENTS TO KEEP AS-IS
- `Preloader.tsx` (already updated to "DEMARKUSS")
- `Navigation.tsx` (already updated with DD monogram + signature font)
- `Footer.tsx` (already updated)
- `ScrollingMarquee.tsx`
- `SystemGrid.tsx`
- `ScrambleText.tsx`
- `ParticleText.tsx`
- `TiltCard.tsx`
- `ClientEffects.tsx`
- Vapi voice agent embed

## COMPONENTS TO REBUILD
- `Hero.tsx` — New hero with updated headline and dual CTAs
- `Services.tsx` → rename to `Modules.tsx` — Five connected modules, not standalone service cards
- `HowWeWork.tsx` → rename to `Process.tsx` — Three-step process
- `Founder.tsx` — Updated copy, same layout
- `Reviews.tsx` — Add section header, keep review cards
- NEW: `Problem.tsx` — Pain/agitation section with stats
- NEW: `Qualify.tsx` — "Who this is for" section
- `Booking.tsx` — Updated headline and value props

## CRITICAL DESIGN NOTES
- **Sacramento signature font** is for the brand name ONLY — not for headlines or body text
- Headlines stay in Cabinet Grotesk (uppercase, tight tracking)
- Body stays in Satoshi
- Labels/technical text stay in JetBrains Mono
- The Module 04 (AI Systems) card should have extra visual emphasis (cyan glow border, slightly larger) — it's the premium service
- Mobile-first: everything should look great on a phone first. Most local business owners will see this on mobile.
- Keep the overall dark/premium/systems energy — this site should feel like a weapons system, not a generic agency page
- The "DD" monogram in Sacramento font is the new logo mark

---

## PAGES

This prompt covers the HOMEPAGE only. The `/ai` page already exists. Do NOT modify `/ai` or `/audit` pages.

---

## DOMAIN & SEO

All metadata has already been updated to demarkussday.com. The site title is: "DeMarkuss Day | #1 Business Automation & AI Systems in Dallas, TX"
