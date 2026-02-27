"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="connect" className="relative py-40 px-8 md:px-16 border-t border-zinc-950 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ rotate: 45, scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ rotate: 135, scale: 1.1, borderColor: "rgba(0, 255, 255, 0.4)" }}
          className="w-24 h-24 border border-cyan-950 flex items-center justify-center mb-20 rotate-45 group transition-all duration-1000"
        >
          <div className="w-12 h-12 border border-cyan-400/20 animate-pulse flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-cyan-400 shadow-[0_0_15px_rgba(0,255,255,1)]"></div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0.1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-cabinet font-black mb-16 tracking-[-0.03em] uppercase text-center max-w-4xl"
        >
          Deploy <span className="text-cyan-400 block mt-2">Cognito Media & Business Solutions</span>
        </motion.h2>

        <Link
          href="mailto:systems@cognitomedia.com"
          className="text-xl md:text-3xl font-mono text-zinc-600 hover:text-cyan-400 transition-all underline underline-offset-[16px] decoration-zinc-900 hover:decoration-cyan-400/40 tracking-widest group"
        >
          systems.<span className="group-hover:text-white transition-colors">cognitomedia</span>.com
        </Link>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-16 mt-48 pt-20 border-t border-zinc-900/40">
          <div className="text-left">
            <span className="block text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em] mb-8">Logic Points</span>
            <ul className="text-[11px] text-zinc-500 space-y-4 font-light">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Service Operations</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Real Estate Assets</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">SOP Infrastructure</li>
            </ul>
          </div>
          <div className="text-left">
            <span className="block text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em] mb-8">Legal Trace</span>
            <ul className="text-[11px] text-zinc-500 space-y-4 font-light">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">Data Sovereignty</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors">System Ethics</Link></li>
            </ul>
          </div>
          <div className="text-left">
            <span className="block text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em] mb-8">System Health</span>
            <div className="flex items-center gap-4 text-[11px] text-zinc-500">
              <div className="w-2 h-2 bg-cyan-400 shadow-[0_0_12px_#00FFFF] rounded-full animate-pulse"></div>
              Cognito Grid: Active
            </div>
          </div>
          <div className="text-right flex flex-col items-end">
            <span className="block text-[10px] font-mono text-zinc-700 uppercase tracking-[0.5em] mb-8">Network</span>
            <div className="flex gap-8">
              <Link href="https://x.com/demarkuss1" target="_blank" rel="noopener noreferrer"><Twitter className="text-zinc-600 hover:text-cyan-400 transition-colors text-xl" /></Link>
              <Link href="#"><Github className="text-zinc-600 hover:text-cyan-400 transition-colors text-xl" /></Link>
              <Link href="https://www.linkedin.com/in/demarkuss-day-a1202b20/" target="_blank" rel="noopener noreferrer"><Linkedin className="text-zinc-600 hover:text-cyan-400 transition-colors text-xl" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-24 text-[10px] font-mono text-zinc-800 tracking-[0.6em] uppercase">
          © 2026 Cognito Media & Business Solutions | Exceptional by Design
        </div>
      </div>
    </footer>
  );
};
