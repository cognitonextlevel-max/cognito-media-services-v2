"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const TimeCalculator = () => {
  return (
    <section id="diagnostic" className="relative py-48 bg-black overflow-hidden border-t border-zinc-900">
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-24 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-12"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-sm">
            <div className="w-1.5 h-1.5 bg-cyan-400"></div>
            <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-zinc-400 font-bold">
              System Assessment
            </span>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-cabinet font-black uppercase leading-[1] mb-10 text-white"
        >
          BUSINESS <br />
          <span className="text-cyan-400 italic">DIAGNOSTIC</span><span className="text-white">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-16 max-w-2xl text-balance"
        >
          Run a structural analysis of your company to identify misalignment, bottlenecks, and leverage gaps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <Link href="#audit" className="group relative inline-flex items-center justify-center px-12 py-5 bg-black border border-zinc-800 hover:border-cyan-400 text-zinc-300 hover:text-cyan-400 text-[12px] font-mono font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:bg-cyan-950/20 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]">
            Run Diagnostic
            <ArrowRight size={16} className="ml-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
