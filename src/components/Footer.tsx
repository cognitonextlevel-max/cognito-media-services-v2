"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="connect" className="relative py-20 sm:py-28 md:py-40 px-4 sm:px-8 md:px-16 border-t border-zinc-950 bg-black overflow-hidden pb-32 sm:pb-20 md:pb-40">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ rotate: 45, scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ rotate: 135, scale: 1.1, borderColor: "rgba(0, 255, 255, 0.4)" }}
          className="w-16 h-16 sm:w-24 sm:h-24 border border-cyan-950 flex items-center justify-center mb-12 sm:mb-20 rotate-45 group transition-all duration-1000"
        >
          <div className="w-8 h-8 sm:w-12 sm:h-12 border border-cyan-400/20 animate-pulse flex items-center justify-center">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,1)]"></div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0.1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-cabinet font-black mb-10 sm:mb-16 tracking-[-0.03em] uppercase text-center max-w-4xl"
        >
          Deploy <span className="text-cyan-400 block mt-2">Cognito Media & Business Solutions</span>
        </motion.h2>

        <Link
          href="mailto:systems@cognitomedia.com"
          className="text-base sm:text-xl md:text-3xl font-mono text-zinc-600 hover:text-cyan-400 transition-all underline underline-offset-[8px] sm:underline-offset-[16px] decoration-zinc-900 hover:decoration-cyan-400/40 tracking-wider sm:tracking-widest group break-all sm:break-normal"
        >
          systems.<span className="group-hover:text-white transition-colors">cognitomedia</span>.com
        </Link>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mt-20 sm:mt-32 md:mt-48 pt-10 sm:pt-16 md:pt-20 border-t border-zinc-900/40">
          <div className="text-left">
            <span className="block text-[9px] sm:text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-4 sm:mb-8">Logic Points</span>
            <ul className="text-[10px] sm:text-[11px] text-zinc-500 space-y-3 sm:space-y-4 font-light">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Service Operations</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Real Estate Assets</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">SOP Infrastructure</li>
            </ul>
          </div>
          <div className="text-left">
            <span className="block text-[9px] sm:text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-4 sm:mb-8">Legal Trace</span>
            <ul className="text-[10px] sm:text-[11px] text-zinc-500 space-y-3 sm:space-y-4 font-light">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Data Sovereignty</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">System Ethics</Link></li>
            </ul>
          </div>
          <div className="text-left">
            <span className="block text-[9px] sm:text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-4 sm:mb-8">System Health</span>
            <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-zinc-500">
              <div className="w-2 h-2 bg-cyan-400 shadow-[0_0_12px_#00FFFF] rounded-full animate-pulse shrink-0"></div>
              Cognito Grid: Active
            </div>
          </div>
          <div className="text-left sm:text-right flex flex-col sm:items-end">
            <span className="block text-[9px] sm:text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em] sm:tracking-[0.5em] mb-4 sm:mb-8">Network</span>
            <div className="flex gap-6 sm:gap-8">
              <Link href="https://x.com/demarkuss1" target="_blank" rel="noopener noreferrer" aria-label="Follow Demarkuss on Twitter (X)"><Twitter className="text-zinc-600 hover:text-cyan-400 transition-colors text-lg sm:text-xl" /></Link>
              <Link href="#" aria-label="Visit Cognito Media on GitHub"><Github className="text-zinc-600 hover:text-cyan-400 transition-colors text-lg sm:text-xl" /></Link>
              <Link href="https://www.linkedin.com/in/demarkuss-day-a1202b20/" target="_blank" rel="noopener noreferrer" aria-label="Connect with Demarkuss on LinkedIn"><Linkedin className="text-zinc-600 hover:text-cyan-400 transition-colors text-lg sm:text-xl" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24 text-[8px] sm:text-[10px] font-mono text-zinc-800 tracking-[0.3em] sm:tracking-[0.6em] uppercase">
          © 2026 Cognito Media & Business Solutions | Exceptional by Design
        </div>
      </div>
    </footer>
  );
};
