"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
// Brand monogram replaces old logo

export const AINav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          scrolled ? "bg-black/80 backdrop-blur-2xl border-b border-white/[0.04]" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-24 flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="flex items-center gap-2 text-micro font-mono text-zinc-500 hover:text-cyan-400 transition-colors uppercase tracking-[0.2em] group">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              Home
            </Link>
            <div className="w-px h-4 bg-zinc-800" />
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg text-cyan-400 leading-none" style={{ fontFamily: 'var(--font-signature)' }}>DD</span>
              <span className="text-micro font-mono font-black uppercase tracking-[0.3em] text-zinc-400">AI Deployment</span>
            </Link>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="tel:4699706943" className="text-micro font-mono text-zinc-600 hover:text-cyan-400 transition-colors tracking-[0.2em] hidden sm:block">
              469.970.6943
            </Link>
            <Link
              href="#ai-audit"
              className="px-5 sm:px-6 py-2 bg-cyan-400 text-black text-micro font-mono font-black uppercase tracking-[0.3em] rounded-sm hover:bg-white transition-all duration-300"
            >
              Book Audit
            </Link>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
