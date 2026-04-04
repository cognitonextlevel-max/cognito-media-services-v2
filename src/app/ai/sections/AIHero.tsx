"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { SystemGrid } from "@/components/SystemGrid";
import dynamic from "next/dynamic";

const ParticleText = dynamic(
  () => import("@/components/ParticleText").then(m => ({ default: m.ParticleText })),
  { ssr: false }
);

export const AIHero = () => {
  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-end sm:justify-center bg-black overflow-hidden pt-16 sm:pt-0">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-blueprint opacity-15" />
        <SystemGrid />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-900/[0.08] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-24 xl:px-32 pb-28 sm:pb-0">
        {/* Location chip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-3 mb-6 sm:mb-10"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-cyan-950/10 border border-cyan-400/10 rounded-full">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
            <span className="text-micro font-mono uppercase tracking-[0.3em] text-cyan-400/50 font-bold">Dallas-Fort Worth</span>
          </div>
        </motion.div>

        {/* Canvas particle text — desktop */}
        <div className="relative mb-8 sm:mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="hidden md:block relative z-20"
          >
            <ParticleText
              lines={["YOUR COMPETITORS", "ARE USING AI.", "YOU'RE NOT."]}
              fontSize={110}
            />
          </motion.div>

          {/* Mobile fallback */}
          <div className="md:hidden">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-cabinet font-black uppercase leading-[0.85] tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 12vw, 5rem)" }}
            >
              <motion.span initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8, ease: [0.19, 1, 0.22, 1] }} className="block">
                YOUR COMPETITORS
              </motion.span>
              <motion.span initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.75, duration: 0.8, ease: [0.19, 1, 0.22, 1] }} className="cyan-shimmer italic block py-1">
                ARE USING AI.
              </motion.span>
              <motion.span initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.9, duration: 0.8, ease: [0.19, 1, 0.22, 1] }} className="block">
                YOU&apos;RE NOT<span className="text-cyan-400 glow-text">.</span>
              </motion.span>
            </motion.h1>
          </div>
        </div>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.19, 1, 0.22, 1] }}
          className="text-body-lg text-zinc-500 font-light leading-relaxed max-w-2xl border-l-2 border-cyan-400/15 pl-5 sm:pl-8 mb-10 sm:mb-14"
        >
          We come to your business, install AI systems that handle your leads, sales, content, and operations — and train your team to run them.{" "}
          <span className="text-white font-medium">On-site. In person. DFW only.</span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8"
        >
          <Link
            href="#ai-audit"
            className="group relative w-full sm:w-auto text-center px-8 sm:px-14 py-4 sm:py-5 bg-cyan-400 text-black text-caption font-mono font-black uppercase tracking-[0.4em] rounded-sm hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(34,211,238,0.15)] glow-pulse"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Book Your Free AI Audit
              <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </Link>
          <Link href="tel:4699706943" className="group flex items-center justify-center sm:justify-start gap-4 py-3">
            <span className="text-caption font-mono uppercase tracking-[0.3em] text-zinc-600 group-hover:text-cyan-400 transition-all duration-500">469.970.6943</span>
            <div className="h-px w-6 bg-zinc-800 group-hover:w-14 group-hover:bg-cyan-400/40 transition-all duration-700" />
          </Link>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-14 sm:mt-20 flex flex-wrap items-center gap-4 sm:gap-8"
        >
          {["500+ Businesses Automated", "On-Site in DFW", "Setup in 1-2 Weeks"].map((stat, i) => (
            <span key={i} className="text-micro font-mono uppercase tracking-[0.2em] text-zinc-800 flex items-center gap-3">
              {i > 0 && <span className="w-1 h-1 bg-zinc-800 rounded-full" />}
              {stat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
