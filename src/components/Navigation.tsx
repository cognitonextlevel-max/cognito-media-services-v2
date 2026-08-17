"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Activity, Bot, Calendar, Cpu, Terminal } from "lucide-react";
import { WritingRevealLogo } from "./HandwrittenLogo";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);

      // Track active section
      const sections = ["system", "comparison", "manifesto", "services", "reviews", "audit"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar — appears on scroll with progress */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="fixed top-0 left-0 right-0 z-[101] hidden sm:block"
          >
            <div className="h-12 bg-black/70 backdrop-blur-2xl border-b border-white/[0.03] flex items-center justify-between px-8 md:px-12 lg:px-24">
              <Link href="#home" className="flex items-center gap-2.5 group text-2xl text-cyan-400 group-hover:text-white transition-colors duration-500 leading-none">
                <WritingRevealLogo text="DeMarkuss Day" delay={0.3} duration={1.8} />
              </Link>
              <div className="flex items-center gap-8">
                <Link href="tel:4699706943" className="text-micro font-mono text-zinc-600 hover:text-cyan-400 transition-colors tracking-[0.2em]">
                  469.970.6943
                </Link>
                <Link
                  href="#audit"
                  data-magnetic
                  className="px-5 py-1.5 bg-cyan-400 text-black text-micro font-mono font-black uppercase tracking-[0.3em] rounded-sm hover:bg-white transition-all duration-300"
                >
                  Book Audit
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop floating bottom nav */}
      <motion.nav
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, ease: [0.19, 1, 0.22, 1] }}
        className="fixed bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-[100] hidden sm:flex items-center gap-1 p-1.5 bg-black/70 backdrop-blur-2xl border border-white/[0.06] rounded-full shadow-[0_8px_60px_rgba(0,0,0,0.8)]"
      >
        <NavItem href="#system" icon={Activity} label="System" active={activeSection === "system"} />
        <NavItem href="#audit" icon={Calendar} label="Audit" active={activeSection === "audit"} />
        <div className="w-px h-5 bg-white/[0.06] mx-2" />
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-7 py-2.5 bg-zinc-900/80 border border-white/[0.06] text-zinc-300 text-micro font-black tracking-[0.3em] uppercase rounded-full transition-all duration-500 flex items-center gap-2 group hover:border-cyan-400/30 hover:shadow-[0_0_25px_rgba(0,255,255,0.1)]"
            data-magnetic
          >
            <span className="text-lg leading-none" style={{ fontFamily: 'var(--font-signature)' }}>DD</span>
          </motion.div>
        </Link>
        <div className="w-px h-5 bg-white/[0.06] mx-2" />
        <NavItem href="#services" icon={Terminal} label="Solutions" active={activeSection === "services"} />
        <NavItem href="/ai" icon={Bot} label="AI" active={false} />
      </motion.nav>

      {/* Mobile — bottom tab bar */}
      <motion.nav
        initial={{ y: 60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.5, ease: [0.19, 1, 0.22, 1] }}
        className="fixed bottom-0 left-0 right-0 z-[100] sm:hidden bg-black/90 backdrop-blur-2xl border-t border-white/[0.04] safe-area-bottom"
      >
        <div className="flex items-center justify-around py-2 px-1">
          <MobileNavItem href="#system" icon={Activity} label="System" active={activeSection === "system"} />
          <MobileNavItem href="/ai" icon={Bot} label="AI" active={false} />
          <Link href="/" className="flex flex-col items-center gap-0.5 px-3 py-1">
            <div className="w-11 h-11 bg-zinc-900 border border-white/[0.06] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.08)]">
              <span className="text-cyan-400 text-lg leading-none font-bold" style={{ fontFamily: 'var(--font-signature)' }}>DD</span>
            </div>
          </Link>
          <MobileNavItem href="#services" icon={Terminal} label="Solutions" active={activeSection === "services"} />
          <MobileNavItem href="#audit" icon={Calendar} label="Audit" active={activeSection === "audit"} />
        </div>
      </motion.nav>
    </>
  );
};

const NavItem = ({ href, icon: Icon, label, active }: { href: string; icon: any; label: string; active: boolean }) => (
  <Link href={href}>
    <motion.div
      whileHover={{ y: -3 }}
      className={`group relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ${
        active ? "bg-white/[0.04]" : ""
      }`}
    >
      <Icon className={`w-4 h-4 transition-colors duration-500 ${active ? "text-cyan-400" : "text-zinc-600 group-hover:text-cyan-400"}`} />
      <span className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-all duration-300 text-micro font-mono tracking-[0.3em] text-cyan-400 uppercase bg-zinc-950/95 px-3 py-1 rounded-sm border border-cyan-400/20 whitespace-nowrap backdrop-blur-md shadow-[0_0_20px_rgba(0,255,255,0.1)]">
        {label}
      </span>
      {active && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-0.5 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,255,255,0.8)]"
        />
      )}
    </motion.div>
  </Link>
);

const MobileNavItem = ({ href, icon: Icon, label, active }: { href: string; icon: any; label: string; active: boolean }) => (
  <Link href={href} className="flex flex-col items-center gap-1 px-2 py-1.5 min-w-[52px] active:opacity-60 transition-opacity">
    <Icon className={`w-5 h-5 transition-colors duration-300 ${active ? "text-cyan-400" : "text-zinc-600"}`} />
    <span className={`text-[7px] font-mono uppercase tracking-[0.15em] leading-none transition-colors duration-300 ${active ? "text-cyan-400" : "text-zinc-600"}`}>
      {label}
    </span>
  </Link>
);
