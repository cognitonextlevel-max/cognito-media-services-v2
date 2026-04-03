"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SystemGrid } from "./SystemGrid";
import { ParticleText } from "./ParticleText";

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
        {/* Vertical axis */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/[0.03] to-transparent" />
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-900/[0.07] rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-24 xl:px-32 pb-28 sm:pb-0">
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: [0.19, 1, 0.22, 1] }}
          className="flex items-center gap-3 mb-6 sm:mb-10"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-950/10 border border-cyan-400/10 rounded-full">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
            <span className="text-micro font-mono uppercase tracking-[0.3em] text-cyan-400/50 font-bold">
              Dallas-Fort Worth
            </span>
          </div>
        </motion.div>

        {/* Main headline — Particle Text on desktop, fluid type on mobile */}
        <div className="relative mb-8 sm:mb-14">
          {/* Ghost text — depth layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 2.5 }}
            className="absolute -top-8 -left-2 sm:-top-16 sm:-left-6 md:-top-24 md:-left-10 text-hero font-cabinet font-black leading-none select-none pointer-events-none italic uppercase text-stroke opacity-[0.025] hidden sm:block"
          >
            LOGIC
          </motion.div>

          {/* Canvas particle text — desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.3 }}
            className="hidden md:block"
          >
            <ParticleText
              lines={["THE UNFAIR", "SYSTEMS", "ADVANTAGE."]}
              fontSize={130}
            />
          </motion.div>

          {/* Mobile — carefully crafted fluid type */}
          <div className="md:hidden">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="font-cabinet font-black uppercase leading-[0.85] tracking-tighter"
              style={{ fontSize: "clamp(3rem, 14vw, 6rem)" }}
            >
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="block"
              >
                THE UNFAIR
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.25, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="cyan-shimmer italic block py-1"
              >
                SYSTEMS
              </motion.span>
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="block"
              >
                ADVANTAGE<span className="text-cyan-400 glow-text">.</span>
              </motion.span>
            </motion.h1>
          </div>
        </div>

        {/* Subhead — the hook */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.6, ease: [0.19, 1, 0.22, 1] }}
          className="text-body-lg text-zinc-500 font-light leading-relaxed max-w-xl border-l-2 border-cyan-400/15 pl-5 sm:pl-8 mb-10 sm:mb-14"
        >
          Chaos doesn&apos;t scale. <span className="text-white font-medium">Systems do.</span>
          <br className="hidden sm:block" />{" "}
          We build the automated infrastructure that captures leads, ranks your brand, and closes sales —{" "}
          <span className="text-white font-medium italic">while you sleep.</span>
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8"
        >
          <Link
            href="#audit"
            data-magnetic
            className="group relative w-full sm:w-auto text-center px-8 sm:px-14 py-4 sm:py-5 bg-cyan-400 text-black text-caption font-mono font-black uppercase tracking-[0.4em] rounded-sm hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:shadow-[0_0_60px_rgba(34,211,238,0.35)] glow-pulse"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Book Your Free Audit
              <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>

          <Link
            href="tel:4699706943"
            className="group flex items-center justify-center sm:justify-start gap-4 py-3"
          >
            <span className="text-caption font-mono uppercase tracking-[0.3em] text-zinc-600 group-hover:text-cyan-400 transition-all duration-500">
              469.970.6943
            </span>
            <div className="h-px w-6 bg-zinc-800 group-hover:w-14 group-hover:bg-cyan-400/40 transition-all duration-700" />
          </Link>
        </motion.div>

        {/* Trust signals — below fold tease */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1 }}
          className="mt-16 sm:mt-24 flex items-center gap-6 sm:gap-10"
        >
          {[
            "500+ Businesses Automated",
            "5.0★ Google",
            "Same-Day Available",
          ].map((stat, i) => (
            <span key={i} className="text-micro font-mono uppercase tracking-[0.2em] text-zinc-800 hidden sm:inline-block">
              {i > 0 && <span className="mr-6 sm:mr-10 text-zinc-900">·</span>}
              {stat}
            </span>
          ))}
          <span className="text-micro font-mono uppercase tracking-[0.2em] text-zinc-800 sm:hidden">
            500+ Businesses · 5.0★ Google
          </span>
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
