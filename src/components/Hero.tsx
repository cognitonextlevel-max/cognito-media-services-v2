"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SystemGrid } from "./SystemGrid";
import { ParticleText } from "./ParticleText";
import { useState, useEffect } from "react";
import { WritingRevealLogo } from "./HandwrittenLogo";

const industries = [
  "Plumbers",
  "Contractors",
  "Dentists",
  "Realtors",
  "Law Firms",
  "Restaurants",
  "Med Spas",
  "HVAC Companies",
  "Auto Shops",
  "Salons",
];

const IndustryTyper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = industries[currentIndex];
    const timeout = isDeleting ? 40 : 80;

    if (!isDeleting && displayText === word) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % industries.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting ? word.slice(0, displayText.length - 1) : word.slice(0, displayText.length + 1)
      );
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.0, duration: 0.8 }}
      className="mt-4 sm:mt-6 text-caption font-mono uppercase tracking-[0.3em] text-zinc-600"
    >
      <span className="text-zinc-700">Built for </span>
      <span className="text-cyan-400 font-bold">
        {displayText}
        <span className="inline-block w-[2px] h-[1em] bg-cyan-400 ml-0.5 animate-pulse align-middle" />
      </span>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] w-full flex flex-col justify-end sm:justify-center bg-black overflow-hidden selection:bg-cyan-500/30"
    >
      {/* Layered background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-blueprint opacity-15" />
        <SystemGrid />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/[0.03] to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-900/[0.07] rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-24 xl:px-32 pb-28 sm:pb-0">
        {/* Handwritten signature — writes itself on load */}
        <div className="mb-6 sm:mb-10">
          <span className="text-4xl sm:text-5xl md:text-6xl text-cyan-400">
            <WritingRevealLogo text="DeMarkuss Day" delay={0.8} duration={2.2} />
          </span>
        </div>

        {/* Particle Text — desktop */}
        <div className="relative mb-8 sm:mb-14">
          {/* Accessible h1 for SEO — ParticleText is canvas-based */}
          <h1 className="sr-only">Your Business Shouldn&apos;t Need You To Run — DeMarkuss Day, On-Site AI Partner in Dallas TX</h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.3 }}
            className="hidden md:block relative z-20"
            aria-hidden="true"
          >
            <ParticleText
              lines={["YOUR BUSINESS", "SHOULDN'T NEED", "YOU TO RUN."]}
              fontSize={120}
            />
          </motion.div>

          {/* Mobile fallback */}
          <div className="md:hidden">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="font-cabinet font-black uppercase leading-[0.85] tracking-tighter"
              style={{ fontSize: "clamp(2.8rem, 13vw, 5.5rem)" }}
            >
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="block"
              >
                YOUR BUSINESS
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.25, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="cyan-shimmer italic block py-1"
              >
                SHOULDN&apos;T NEED
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="block"
              >
                YOU TO RUN<span className="text-cyan-400 glow-text">.</span>
              </motion.span>
            </motion.h1>
          </div>
        </div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: [0.19, 1, 0.22, 1] }}
          className="text-body-lg text-zinc-500 font-light leading-relaxed max-w-xl border-l-2 border-cyan-400/15 pl-5 sm:pl-8 mb-10 sm:mb-14"
        >
          The internet and AI are leaving traditional businesses behind. I am your unfair advantage. As a Dallas-Fort Worth native, I come directly to your business to physically install, configure, and train you on the tools you need to survive.
          <br className="hidden sm:block" />
          <span className="text-zinc-400 mt-2 block font-medium">Dallas-Fort Worth. On-site. Same-day availability.</span>
        </motion.p>

        {/* Industry typing animation */}
        <IndustryTyper />

        {/* Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
        >
          <Link
            href="#audit"
            data-magnetic
            className="group relative w-full sm:w-auto text-center px-8 sm:px-14 py-4 sm:py-5 bg-cyan-400 text-black text-caption font-mono font-black uppercase tracking-[0.4em] rounded-sm hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:shadow-[0_0_60px_rgba(34,211,238,0.35)] glow-pulse"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Book Free Audit
              <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>

          <Link
            href="#process"
            className="group flex items-center justify-center sm:justify-start gap-3 py-3 px-6 border border-zinc-800 hover:border-cyan-400/30 rounded-sm transition-all duration-500 text-caption font-mono uppercase tracking-[0.3em] text-zinc-400 hover:text-cyan-400"
          >
            See How It Works
            <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1 }}
          className="mt-14 sm:mt-20 flex flex-wrap items-center gap-4 sm:gap-8"
        >
          {["500+ Businesses Automated", "5.0★ Google Rating", "Same-Day Availability"].map((stat, i) => (
            <span key={i} className="text-micro font-mono uppercase tracking-[0.2em] text-zinc-800 flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 bg-zinc-800 rounded-full" />}
              {stat}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-32 sm:bottom-24 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-cyan-400/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};
