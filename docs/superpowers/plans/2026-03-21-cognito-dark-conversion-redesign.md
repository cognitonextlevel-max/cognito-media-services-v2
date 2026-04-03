# Cognito Media Services — Dark Mode Conversion Redesign

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the Cognito Media Services homepage from a cluttered light-mode "AI slop" layout into a premium dark-mode, 5-section conversion funnel that looks hand-crafted and converts luxury DFW homeowners.

**Architecture:** Single-page redesign using existing Next.js 16 + Tailwind 4 + Framer Motion stack. Strip 11 sections down to 6 focused sections following the 1-Page Marketing Plan structure: Hook → Trust → Problem → Solution → Proof → CTA. Every section has one job. Every section drives toward the phone call.

**Tech Stack:** Next.js 16, Tailwind CSS 4, Framer Motion, Lucide Icons (replace Iconify), Geist font (via next/font)

---

## File Structure

| Action | File | Responsibility |
|--------|------|---------------|
| Modify | `src/app/layout.tsx` | Dark mode, Geist font, remove Google Fonts |
| Rewrite | `src/app/globals.css` | Dark theme tokens, new utility classes |
| Rewrite | `src/app/page.tsx` | 6-section layout (down from 11) |
| Rewrite | `src/components/Navigation.tsx` | Dark sticky nav with phone always visible |
| Rewrite | `src/components/Hero.tsx` | Dark gradient hero, single CTA, no video |
| Create | `src/components/TrustBar.tsx` | Horizontal stats strip |
| Rewrite | `src/components/ProblemSection.tsx` | Simplified 3-pain-point dark section |
| Rewrite | `src/components/Services.tsx` | 4-card grid (not zig-zag), dark cards |
| Rewrite | `src/components/Reviews.tsx` | 3 dark review cards |
| Create | `src/components/CTA.tsx` | Final conversion section |
| Rewrite | `src/components/Footer.tsx` | Minimal dark footer |
| Delete | `src/components/LeadMagnet.tsx` | Removed — kills conversion flow |
| Delete | `src/components/Gallery.tsx` | Removed — no real portfolio images |
| Delete | `src/components/Locations.tsx` | Removed — not needed for conversion |
| Delete | `src/components/Contact.tsx` | Merged into CTA section |
| Delete | `src/components/About.tsx` | Merged into trust bar + problem section |
| Delete | `src/components/Booking.tsx` | Not used on homepage |
| Delete | `src/components/Story.tsx` | Not used on homepage |
| Delete | `src/components/Philosophy.tsx` | Not used on homepage |
| Delete | `src/components/Intelligence.tsx` | Not used on homepage |
| Delete | `src/components/SystemGrid.tsx` | Not used on homepage |
| Delete | `src/components/TimeCalculator.tsx` | Not used on homepage |
| Delete | `src/components/Founder.tsx` | Not used on homepage |
| Keep | `src/components/VoiceAgent.tsx` | Keep but don't render on homepage |
| Keep | `src/components/ui/CognitoLogo.tsx` | Keep for logo |
| Keep | `src/app/audit/page.tsx` | Separate page, untouched |
| Keep | `src/app/api/audit/route.ts` | API, untouched |

---

## Design Tokens (from Stitch + taste-skill)

```
Background:      #09090b (near-black)
Surface:         #111113 (cards, sections)
Surface-hover:   #1c1c1e (card hover)
Border:          #27272a (zinc-800)
Border-hover:    #B91C1C (red accent)
Text-primary:    #fafafa
Text-secondary:  #a1a1aa (zinc-400)
Text-muted:      #71717a (zinc-500)
Accent:          #B91C1C (brand red)
Accent-hover:    #991b1b
Star-gold:       #FBBF24
```

```
Font-sans:       Geist Sans (via next/font/local or geist package)
Headline:        font-bold, tracking-tight (-0.025em), line-height 1.05
Body:            font-normal, text-base, leading-relaxed
Label:           text-xs, font-medium, tracking-widest, uppercase
Button:          text-sm, font-semibold, tracking-wide
Card radius:     rounded-2xl (16px)
Button radius:   rounded-xl (12px)
```

---

### Task 1: Install Geist font + dark mode foundation

**Files:**
- Modify: `src/app/layout.tsx`
- Rewrite: `src/app/globals.css`
- Modify: `package.json` (install geist)

- [ ] **Step 1: Install geist font package**

```bash
cd /Users/demarkussday/cognito-v2 && npm install geist
```

- [ ] **Step 2: Rewrite layout.tsx — Geist font, dark body, remove Google Fonts link**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cognito Media Services | Expert TV Mounting & Smart Home Installation Dallas-Fort Worth",
  description: "Professional TV mounting, home theater installation, smart home automation & security systems in Dallas-Fort Worth. 5-star rated, same-day service. Call 469-970-6943",
  keywords: ["TV Mounting Dallas", "Smart Home Installation", "Home Theater DFW", "Cognito Media Services"],
  authors: [{ name: "Cognito Media Services" }],
  openGraph: {
    title: "Cognito Media Services | Expert TV Mounting & Smart Home Installation",
    description: "Professional TV mounting, home theater installation & smart home automation in Dallas-Fort Worth.",
    url: "https://cognitomediaservices.com",
    siteName: "Cognito Media Services",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognito Media Services | TV Mounting & Smart Home Dallas",
    description: "Professional TV mounting & smart home installation in Dallas-Fort Worth. Call 469-970-6943",
  },
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}>
      <body className="bg-[#09090b] text-[#fafafa] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Rewrite globals.css — dark theme tokens**

```css
/* src/app/globals.css */
@import "tailwindcss";

@theme {
  --font-sans: var(--font-geist-sans), system-ui, sans-serif;
  --font-mono: var(--font-geist-mono), monospace;

  --color-bg: #09090b;
  --color-surface: #111113;
  --color-surface-hover: #1c1c1e;
  --color-border: #27272a;
  --color-accent: #B91C1C;
  --color-accent-hover: #991b1b;
  --color-text: #fafafa;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
  --color-star: #FBBF24;
}

@layer base {
  body {
    background-color: var(--color-bg);
    color: var(--color-text);
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    letter-spacing: -0.025em;
    line-height: 1.05;
  }
}

@layer utilities {
  .label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--color-accent);
  }
}

@media (max-width: 639px) {
  * { -webkit-tap-highlight-color: transparent; }
  input, textarea, select, button { font-size: 16px; }
}
```

- [ ] **Step 4: Verify dev server loads with dark background**

Start dev server, check page loads with black background and Geist font.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css package.json package-lock.json
git commit -m "feat: dark mode foundation with Geist font"
```

---

### Task 2: Navigation — dark, sticky, phone always visible

**Files:**
- Rewrite: `src/components/Navigation.tsx`

- [ ] **Step 1: Rewrite Navigation.tsx**

```tsx
"use client";
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#cta" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/95 backdrop-blur-md border-b border-[#27272a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo text */}
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          COGNITO
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-widest uppercase text-[#a1a1aa] hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Phone + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:4699706943"
            className="flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B91C1C]" />
            (469) 970-6943
          </a>
          <a
            href="#cta"
            className="bg-[#B91C1C] hover:bg-[#991b1b] text-white text-xs font-semibold tracking-wide uppercase px-6 py-2.5 rounded-xl transition-colors"
          >
            Free Estimate
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2" aria-label="Menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111113] border-t border-[#27272a] px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-[#a1a1aa] hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
          <a href="tel:4699706943" className="flex items-center gap-2 text-white py-2">
            <Phone className="w-4 h-4 text-[#B91C1C]" />
            <span className="text-sm font-semibold">(469) 970-6943</span>
          </a>
          <a
            href="#cta"
            className="bg-[#B91C1C] text-white text-sm font-semibold py-3 px-6 rounded-xl w-full text-center block"
          >
            Free Estimate
          </a>
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 2: Install lucide-react if not already**

```bash
# Already installed per package.json, skip if present
```

- [ ] **Step 3: Verify — nav is dark, transparent, fixed, phone visible**

- [ ] **Step 4: Commit**

```bash
git add src/components/Navigation.tsx
git commit -m "feat: dark fixed nav with phone always visible"
```

---

### Task 3: Hero — dark gradient, one clear message, one CTA

**Files:**
- Rewrite: `src/components/Hero.tsx`

- [ ] **Step 1: Rewrite Hero.tsx**

```tsx
"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background — NOT a stock photo */}
      <div className="absolute inset-0 bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1c1c1e_0%,_#09090b_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B91C1C]/5 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="label mb-8"
        >
          Dallas-Fort Worth&apos;s #1 Rated
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-[1.02]"
        >
          TV Installation That
          <br />
          <span className="text-[#B91C1C]">Disappears</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-[#a1a1aa] mb-12 max-w-xl mx-auto leading-relaxed"
        >
          No tangled wires. No complicated remotes. No stress.
          Just walk in — and everything works.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="bg-[#B91C1C] hover:bg-[#991b1b] text-white text-sm font-semibold tracking-wide uppercase px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Get Your Free Estimate
          </a>
          <a
            href="tel:4699706943"
            className="flex items-center gap-2 border border-[#27272a] hover:border-[#B91C1C] text-white text-sm font-semibold tracking-wide uppercase px-10 py-4 rounded-xl transition-all"
          >
            <Phone className="w-4 h-4" />
            (469) 970-6943
          </a>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify — hero fills screen, dark gradient, red accent, animated text**

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "feat: dark gradient hero with single conversion CTA"
```

---

### Task 4: TrustBar — horizontal proof strip

**Files:**
- Create: `src/components/TrustBar.tsx`

- [ ] **Step 1: Create TrustBar.tsx**

```tsx
import { Star, Clock, Shield, Award } from "lucide-react";

const stats = [
  { icon: Award, label: "500+ Luxury Installations" },
  { icon: Star, label: "5.0 ★ Google Reviews" },
  { icon: Clock, label: "Same-Day Available" },
  { icon: Shield, label: "Licensed & Insured" },
];

export function TrustBar() {
  return (
    <section className="border-y border-[#27272a] bg-[#111113]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <s.icon className="w-5 h-5 text-[#B91C1C] shrink-0" />
              <span className="text-xs font-medium tracking-wide uppercase text-[#a1a1aa]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/TrustBar.tsx
git commit -m "feat: trust bar with social proof stats"
```

---

### Task 5: ProblemSection — dark, 3 pain points

**Files:**
- Rewrite: `src/components/ProblemSection.tsx`

- [ ] **Step 1: Rewrite ProblemSection.tsx**

```tsx
"use client";
import { motion } from "framer-motion";

const painPoints = [
  {
    number: "01",
    problem: "Wires Everywhere",
    detail: "HDMI cables, power cords, ethernet — snaking down walls and across floors. Cable covers make it worse.",
  },
  {
    number: "02",
    problem: "Too Many Remotes",
    detail: "One for the TV, one for the soundbar, one for streaming. Your family gave up and watches on their phones.",
  },
  {
    number: "03",
    problem: "Sound That Disappoints",
    detail: "You spent $2K on speakers but dialogue is muffled and bass rattles the windows. YouTube tutorials didn't help.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label mb-4">Sound Familiar?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Your Home Deserves <span className="text-[#B91C1C]">Better</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {painPoints.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111113] border border-[#27272a] rounded-2xl p-8 hover:border-[#B91C1C]/50 transition-colors"
            >
              <span className="text-[#B91C1C] text-xs font-bold tracking-widest block mb-4">
                {p.number}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{p.problem}</h3>
              <p className="text-sm text-[#71717a] leading-relaxed">{p.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProblemSection.tsx
git commit -m "feat: dark problem section with animated cards"
```

---

### Task 6: Services — 4 clean cards with prices

**Files:**
- Rewrite: `src/components/Services.tsx`

- [ ] **Step 1: Rewrite Services.tsx**

```tsx
"use client";
import { motion } from "framer-motion";
import { Monitor, Cable, Speaker, Music } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "TV Mount",
    price: "$99",
    description: "Flush wall mounting with every cable hidden. Looks like it was always there.",
  },
  {
    icon: Cable,
    title: "Wire Conceal",
    price: "$149",
    description: "In-wall cable routing — zero visible wires, code-compliant, damage-free.",
  },
  {
    icon: Speaker,
    title: "Home Theater",
    price: "$349",
    description: "Cinema-grade surround sound calibrated to make your living room feel like IMAX.",
  },
  {
    icon: Music,
    title: "Speakers",
    price: "$199",
    description: "Flush-mount ceiling and floor speakers with whole-home audio sync.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#111113]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Cognito Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#09090b] border border-[#27272a] rounded-2xl p-8 hover:border-[#B91C1C]/50 transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <svc.icon className="w-8 h-8 text-[#B91C1C]" />
                <span className="text-xs font-bold tracking-widest text-[#71717a] uppercase">
                  From {svc.price}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{svc.title}</h3>
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">{svc.description}</p>
              <a
                href="tel:4699706943"
                className="text-xs font-semibold tracking-widest uppercase text-[#B91C1C] hover:text-white transition-colors"
              >
                Book Now →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Services.tsx
git commit -m "feat: dark service cards with prices and CTAs"
```

---

### Task 7: Reviews — 3 dark proof cards

**Files:**
- Rewrite: `src/components/Reviews.tsx`

- [ ] **Step 1: Rewrite Reviews.tsx**

```tsx
"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Crystal Freudiger",
    text: "Hands down best TV, camera, surround sound, and locks installation experience from start to finish!",
  },
  {
    name: "Shawntoyia Johnson",
    text: "Demarkuss and his team are absolutely amazing! They came out to both my properties and did phenomenal work.",
  },
  {
    name: "Roy Anderson",
    text: "Our extensive Sonos music system had not been working for weeks. When it quit altogether, I called Cognito. They are now our go-to for anything media related.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label mb-4">Client Praise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5.0 on Google
          </h2>
          <p className="text-sm text-[#71717a]">17 five-star reviews</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111113] border border-[#27272a] rounded-2xl p-8"
            >
              <Stars />
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-xs font-bold tracking-widest uppercase text-white">
                {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Reviews.tsx
git commit -m "feat: dark review cards with star ratings"
```

---

### Task 8: CTA section — final conversion push

**Files:**
- Create: `src/components/CTA.tsx`

- [ ] **Step 1: Create CTA.tsx**

```tsx
"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[#111113] border-y border-[#27272a]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="label mb-4">Let&apos;s Go</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform
            <br />
            <span className="text-[#B91C1C]">Your Space?</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] mb-10 max-w-md mx-auto">
            Free estimates. Same-day availability. 72-hour perfection promise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4699706943"
              className="bg-[#B91C1C] hover:bg-[#991b1b] text-white text-sm font-semibold tracking-wide uppercase px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call (469) 970-6943
            </a>
          </div>

          <p className="text-xs text-[#71717a] mt-6">
            12200 Ford Rd, Dallas TX · Mon–Sun 9am–5pm
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CTA.tsx
git commit -m "feat: conversion CTA section with phone number"
```

---

### Task 9: Footer — minimal dark

**Files:**
- Rewrite: `src/components/Footer.tsx`

- [ ] **Step 1: Rewrite Footer.tsx**

```tsx
export function Footer() {
  return (
    <footer className="py-12 bg-[#09090b] border-t border-[#27272a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm font-bold text-white tracking-tight">COGNITO MEDIA SERVICES</p>
            <p className="text-xs text-[#71717a] mt-1">Dallas-Fort Worth&apos;s Premier Installation Team</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-xs text-[#71717a] hover:text-white transition-colors uppercase tracking-wide">Services</a>
            <a href="#reviews" className="text-xs text-[#71717a] hover:text-white transition-colors uppercase tracking-wide">Reviews</a>
            <a href="tel:4699706943" className="text-xs text-[#71717a] hover:text-white transition-colors">(469) 970-6943</a>
          </div>
        </div>
        <div className="border-t border-[#27272a] mt-8 pt-8 text-center">
          <p className="text-xs text-[#71717a]">© {new Date().getFullYear()} Cognito Media Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/components/Footer.tsx
git commit -m "feat: minimal dark footer"
```

---

### Task 10: Wire up page.tsx + delete unused components

**Files:**
- Rewrite: `src/app/page.tsx`
- Delete: 10 unused component files

- [ ] **Step 1: Rewrite page.tsx with new 6-section structure**

```tsx
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { ProblemSection } from "@/components/ProblemSection";
import { Services } from "@/components/Services";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <ProblemSection />
      <Services />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Delete unused component files**

```bash
cd /Users/demarkussday/cognito-v2/src/components
rm -f LeadMagnet.tsx Gallery.tsx Locations.tsx Contact.tsx About.tsx Booking.tsx Story.tsx Philosophy.tsx Intelligence.tsx SystemGrid.tsx TimeCalculator.tsx Founder.tsx CognitoSpline.tsx
```

- [ ] **Step 3: Verify full page loads — all 6 sections render, no errors**

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: complete dark mode conversion redesign — 6-section funnel"
```

---

### Task 11: Final polish — visual verification

- [ ] **Step 1: Check mobile responsive (phone nav, stacked cards)**
- [ ] **Step 2: Check all links work (phone tel:, anchor scroll)**
- [ ] **Step 3: Check Framer Motion animations fire on scroll**
- [ ] **Step 4: Screenshot and show to user for approval**
