"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Terminal, Shield, Cpu, Activity, Calendar, Menu, X } from "lucide-react";
import { CognitoLogo } from "./ui/CognitoLogo";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation - unchanged */}
      <nav className="fixed bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 z-[100] hidden sm:flex items-center gap-1 p-2 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-cyan-400/5">
        <NavItem href="#system" icon={Activity} label="Philosophy" />
        <NavItem href="#audit" icon={Calendar} label="Audit" />
        <div className="w-px h-6 bg-white/10 mx-3" />
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05, backgroundColor: "#00FFFF", color: "#000" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-zinc-900 border border-white/10 text-zinc-300 text-[10px] font-black tracking-[0.2em] uppercase rounded-full transition-all duration-300 flex items-center gap-2 group whitespace-nowrap"
          >
            <CognitoLogo className="w-4 h-4 text-cyan-400 group-hover:text-black transition-colors duration-300" pulse={false} />
            COGNITO
          </motion.div>
        </Link>
        <div className="w-px h-6 bg-white/10 mx-3" />
        <NavItem href="#services" icon={Terminal} label="Solutions" />
        <NavItem href="#intelligence" icon={Cpu} label="Growth" />
      </nav>

      {/* Mobile Navigation - Bottom Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-[100] sm:hidden bg-black/90 backdrop-blur-2xl border-t border-white/10 safe-area-bottom">
        <div className="flex items-center justify-around py-2 px-2">
          <MobileNavItem href="#system" icon={Activity} label="Philosophy" />
          <MobileNavItem href="#audit" icon={Calendar} label="Audit" />
          <Link href="/" className="flex flex-col items-center gap-1 px-3 py-1.5">
            <div className="w-10 h-10 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center">
              <CognitoLogo className="w-4 h-4 text-cyan-400" pulse={false} />
            </div>
          </Link>
          <MobileNavItem href="#services" icon={Terminal} label="Solutions" />
          <MobileNavItem href="#intelligence" icon={Cpu} label="Growth" />
        </div>
      </nav>
    </>
  );
};

const NavItem = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <Link href={href}>
    <motion.div
      whileHover={{ y: -4, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      className="group relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300"
    >
      <Icon className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 transition-colors" />
      <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all text-[9px] font-mono tracking-widest text-cyan-400 uppercase bg-zinc-900/90 px-3 py-1.5 rounded-sm border border-cyan-400/20 whitespace-nowrap backdrop-blur-md">
        {label}
      </span>
    </motion.div>
  </Link>
);

const MobileNavItem = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <Link href={href} className="flex flex-col items-center gap-1 px-2 py-1.5 min-w-[56px] active:opacity-60 transition-opacity">
    <Icon className="w-5 h-5 text-zinc-400" />
    <span className="text-[8px] font-mono uppercase tracking-wider text-zinc-500 leading-none">
      {label}
    </span>
  </Link>
);
