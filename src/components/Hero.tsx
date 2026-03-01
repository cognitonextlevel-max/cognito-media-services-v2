"use client";

import { motion } from "framer-motion";
import { ChevronRight, Share2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { SystemGrid } from "./SystemGrid";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden selection:bg-cyan-500/30">
      {/* Precision Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 hero-gradient opacity-100"></div>
        <div className="absolute inset-0 grid-blueprint opacity-20"></div>
        <SystemGrid />

        {/* Optical Axis Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1800px] px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 -mt-4 sm:-mt-12 pt-16 sm:pt-0">
        {/* Simplified Status */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="flex items-center gap-4 mb-4 sm:mb-8"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-cyan-950/10 border border-cyan-400/10 rounded-sm">
            <div className="w-1 h-1 bg-cyan-400 animate-pulse"></div>
            <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-[0.2em] sm:tracking-[0.4em] text-cyan-400/60 font-bold text-nowrap">
              Operational Logic // System Active
            </span>
          </div>
        </motion.div>

        {/* Massive Typography - Fixed line height and overflow */}
        <div className="relative mb-8 sm:mb-16 overflow-visible">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.03 }}
            transition={{ duration: 2 }}
            className="absolute -top-10 -left-4 sm:-top-20 sm:-left-8 md:-top-32 md:-left-12 xl:-top-40 xl:-left-16 text-[80px] sm:text-[120px] md:text-[250px] xl:text-[400px] font-cabinet font-black leading-none text-transparent select-none pointer-events-none italic uppercase"
            style={{ WebkitTextStroke: '1px rgba(0, 255, 255, 0.3)' }}
          >
            LOGIC
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative font-cabinet font-black uppercase text-[13vw] sm:text-[10vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[140px] flex flex-col items-start w-full overflow-visible leading-[0.85] tracking-tighter"
          >
            <span className="block pr-4">THE UNFAIR</span>
            <span className="cyan-shimmer italic block overflow-visible py-2 pr-4 sm:pr-12">SYSTEMS</span>
            <span className="block pr-4">ADVANTAGE<span className="text-cyan-400">.</span></span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-base sm:text-xl md:text-3xl text-zinc-400 font-light leading-snug tracking-tight max-w-2xl text-balance border-l-2 border-cyan-400/20 pl-4 sm:pl-8">
              Chaos doesn't scale. <span className="text-white font-medium italic underline decoration-cyan-400/30 decoration-2 underline-offset-8">Systems do.</span> <br />
              We engineer custom infrastructure that captures leads, ranks your brand, and automates conversions. <br />
              <span className="text-white font-medium mt-4 block">Build once. Execute forever.</span>
            </p>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8">
              <Link
                href="#audit"
                className="group relative w-full sm:w-auto px-8 sm:px-16 py-4 sm:py-6 bg-cyan-400 text-black text-[11px] sm:text-[12px] font-mono font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] rounded-sm hover:bg-white transition-all duration-500 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 text-nowrap">
                  Book Your Audit <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/audit"
                className="group flex items-center justify-center sm:justify-start gap-4 py-2"
              >
                <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-zinc-500 group-hover:text-cyan-400 transition-all">
                  Access Protocol
                </span>
                <div className="h-px w-8 bg-zinc-800 group-hover:w-16 group-hover:bg-cyan-400/50 transition-all duration-700"></div>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-sm">
              <StatsCard icon={Zap} label="Logic" value="V1.0" />
              <StatsCard icon={ShieldCheck} label="Status" value="Active" />
              <StatsCard icon={Share2} label="Sync" value="100%" />
              <div className="flex flex-col items-center justify-center p-4 sm:p-6 bg-zinc-950 border border-white/[0.03] rounded-sm group relative overflow-hidden">
                <div className="absolute inset-0 grid-blueprint opacity-10"></div>
                <div className="w-1 h-1 bg-cyan-400 animate-ping mb-2"></div>
                <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-zinc-800">Operational Grid</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 left-12 items-center gap-4 opacity-40 hidden md:flex">
        <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-[0.8em]">Deploy_Sequence_Ready</span>
        <div className="w-12 h-px bg-zinc-800"></div>
      </div>
    </section>
  );
};

const StatsCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="group relative bg-zinc-950 border border-white/[0.03] p-4 sm:p-6 rounded-sm hover:border-cyan-400/20 transition-all duration-700">
    <div className="flex items-center justify-between mb-3 sm:mb-4">
      <Icon size={14} className="text-zinc-800 group-hover:text-cyan-400 transition-colors" />
      <div className="w-4 h-[1px] bg-zinc-900"></div>
    </div>
    <span className="block text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-700 mb-1 leading-none">{label}</span>
    <span className="block text-lg sm:text-xl font-cabinet font-black text-white leading-none group-hover:text-cyan-400 transition-colors">{value}</span>
  </div>
);
