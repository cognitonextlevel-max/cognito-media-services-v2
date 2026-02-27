"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Terminal, Shield, Cpu, Activity, Calendar } from "lucide-react";
import { CognitoLogo } from "./ui/CognitoLogo";

export const Navigation = () => {
  return (
    <nav className="fixed bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-0 sm:gap-1 p-1 sm:p-2 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full ultra-glow shadow-2xl shadow-cyan-400/10 w-[95%] sm:w-auto max-w-[450px] justify-between sm:justify-center">
      <NavItem href="#system" icon={Activity} label="Manifesto" />
      <NavItem href="/audit" icon={Calendar} label="Site Audit" />
      <div className="hidden sm:block w-px h-6 bg-white/10 mx-1 sm:mx-3" />
      <Link href="/">
        <motion.div
          whileHover={{ scale: 1.05, backgroundColor: "#00FFFF", color: "#000" }}
          whileTap={{ scale: 0.95 }}
          className="mx-1 sm:mx-0 px-4 sm:px-8 py-2.5 sm:py-3 bg-zinc-900 border border-white/10 text-zinc-300 text-[10px] font-black tracking-[0.2em] uppercase rounded-full transition-all duration-300 flex items-center gap-2 group whitespace-nowrap"
        >
          <CognitoLogo className="w-4 h-4 text-cyan-400 group-hover:text-black transition-colors duration-300" pulse={true} />
          COGNITO
        </motion.div>
      </Link>
      <div className="hidden sm:block w-px h-6 bg-white/10 mx-1 sm:mx-3" />
      <NavItem href="#services" icon={Terminal} label="System Engine" />
      <NavItem href="#connect" icon={Shield} label="Network" />
    </nav>
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
