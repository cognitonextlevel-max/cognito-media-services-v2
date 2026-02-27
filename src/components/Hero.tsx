"use client";

import { motion } from "framer-motion";
import { ChevronRight, Share2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { SystemGrid } from "./SystemGrid";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden selection:bg-cyan-500/30">
      {/* Precision Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 hero-gradient opacity-100"></div>
        <div className="absolute inset-0 grid-blueprint opacity-20"></div>
        <SystemGrid />

        {/* Optical Axis Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent"></div>
      </div>

      {/* Extreme Minimalist Metadata */}
      <div className="hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 z-10 flex-col gap-32 font-mono text-[8px] uppercase tracking-[0.8em] text-zinc-800/30 [writing-mode:vertical-rl] rotate-180 select-none">
        <div className="flex items-center gap-6">
          <span className="text-cyan-400/20 font-black">LOGIC_CORE_V1</span>
          <span className="h-12 w-px bg-zinc-900/40"></span>
          <span>SOP_ENGINE_ACTIVE</span>
        </div>
      </div>

      {/* Adding -mt-20 to pull the whole block up optically so it doesn't look bottom-heavy */}
      <div className="relative z-10 w-full max-w-[1800px] px-6 md:px-12 lg:px-24 xl:px-32 -mt-20 xl:-mt-24">
        {/* System Status Indicator */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-3 py-1 bg-cyan-950/20 border border-cyan-400/10 rounded-sm">
            <div className="w-1 h-1 bg-cyan-400 animate-pulse"></div>
            <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-cyan-400/40 font-bold">
              Cognito Media | System: Optimized
            </span>
          </div>
        </motion.div>

        {/* Main Header - Massive Brutalist Impact */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.02 }}
            transition={{ duration: 2 }}
            className="absolute -top-16 -left-8 md:-top-24 md:-left-12 xl:-top-32 xl:-left-16 text-[100px] md:text-[200px] xl:text-[350px] font-cabinet font-black leading-none text-transparent select-none pointer-events-none italic"
            style={{ WebkitTextStroke: '1px rgba(0, 255, 255, 0.4)' }}
          >
            OS
          </motion.div>

          {/* Added -space-y-4 md:-space-y-6 to squeeze the line height tighter */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
            className="relative font-cabinet font-black uppercase text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[7vw] xl:text-[130px] flex flex-col items-start w-full overflow-visible -space-y-2 md:-space-y-6"
          >
            <span className="block">THE UNFAIR</span>
            <span className="cyan-shimmer italic block overflow-visible">SYSTEMS</span>
            <span className="block">ADVANTAGE<span className="text-cyan-400">.</span></span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-xl md:text-3xl text-zinc-400 font-light leading-snug tracking-tight max-w-2xl text-balance border-l-2 border-cyan-400/20 pl-8">
              We build custom <span className="text-white font-medium italic">Apps</span>, high-conversion <span className="text-white font-medium italic">Websites</span>, and dominant <span className="text-white font-medium italic">SEO</span> strategies. <br />
              We install the systems that capture leads, rank your brand, and convert sales so you can finally <span className="text-white font-medium">scale without being the operator.</span>
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
              <Link
                href="#audit"
                className="group relative w-full sm:w-auto px-16 py-6 bg-cyan-400 text-black text-[12px] font-mono font-black uppercase tracking-[0.5em] rounded-sm hover:bg-white transition-all duration-500"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Book Your Audit <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/audit"
                className="group flex items-center gap-4 py-2"
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
            className="lg:col-span-5 flex justify-end transform xl:-translate-y-8"
          >
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              <StatsCard icon={Zap} label="Logic" value="V1.0" />
              <StatsCard icon={ShieldCheck} label="Status" value="Active" />
              <StatsCard icon={Share2} label="Sync" value="100%" />
              <div className="flex flex-col items-center justify-center p-6 bg-zinc-950 border border-white/[0.03] rounded-sm group relative overflow-hidden">
                <div className="absolute inset-0 grid-blueprint opacity-10"></div>
                <div className="w-1 h-1 bg-cyan-400 animate-ping mb-2"></div>
                <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-zinc-800">Operational Grid</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bring the lower UI element up from bottom-12/16 to bottom-24 */}
      <div className="absolute bottom-24 left-12 flex items-center gap-4 opacity-20 hidden md:flex">
        <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-[0.8em]">Scroll_to_Deploy</span>
        <div className="w-12 h-px bg-zinc-900"></div>
      </div>
    </section>
  );
};

const StatsCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: string }) => (
  <div className="group relative bg-zinc-950 border border-white/[0.03] p-6 rounded-sm hover:border-cyan-400/20 transition-all duration-700">
    <div className="flex items-center justify-between mb-4">
      <Icon size={14} className="text-zinc-800 group-hover:text-cyan-400 transition-colors" />
      <div className="w-4 h-[1px] bg-zinc-900"></div>
    </div>
    <span className="block text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-700 mb-1 leading-none">{label}</span>
    <span className="block text-xl font-cabinet font-black text-white leading-none group-hover:text-cyan-400 transition-colors">{value}</span>
  </div>
);
