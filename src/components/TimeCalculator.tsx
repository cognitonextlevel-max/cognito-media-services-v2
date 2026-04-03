"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const TimeCalculator = () => {
  return (
    <section className="relative section-padding bg-black overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-8 pointer-events-none" />
      {/* Centered glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-900/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-2.5 px-4 py-1.5 bg-zinc-900/50 border border-zinc-800/50 rounded-full">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            <span className="section-label">System Assessment</span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="text-display font-cabinet font-black uppercase leading-[0.9] mb-8 sm:mb-12 tracking-tighter"
        >
          BUSINESS{" "}
          <span className="cyan-shimmer italic">DIAGNOSTIC</span>
          <span className="text-cyan-400 glow-text">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-body-lg text-zinc-500 font-light leading-relaxed mb-12 sm:mb-16 max-w-lg mx-auto"
        >
          Run a structural analysis of your company to identify misalignment, bottlenecks, and leverage gaps.{" "}
          <span className="text-white font-medium">Free. 30 minutes. Zero pressure.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            href="#audit"
            data-magnetic
            className="group relative inline-flex items-center justify-center px-10 sm:px-14 py-4 sm:py-5 bg-black border border-zinc-800/50 hover:border-cyan-400/40 text-zinc-400 hover:text-cyan-400 text-caption font-mono font-bold uppercase tracking-[0.4em] transition-all duration-500 hover:bg-cyan-950/10 hover:shadow-[0_0_40px_rgba(0,255,255,0.08)] rounded-sm"
          >
            Run Diagnostic
            <ArrowRight size={14} className="ml-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
