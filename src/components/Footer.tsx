"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { CognitoLogo } from "./ui/CognitoLogo";

export const Footer = () => {
  return (
    <footer className="relative py-16 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 lg:px-24 border-t border-zinc-900/30 bg-black overflow-hidden pb-32 sm:pb-24">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-blueprint opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top — Logo + CTA */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <CognitoLogo className="w-12 h-12 sm:w-16 sm:h-16 text-cyan-400/30 mb-10 sm:mb-14" pulse={false} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-heading font-cabinet font-black uppercase tracking-tighter mb-8 sm:mb-12 max-w-2xl"
          >
            Deploy <span className="cyan-shimmer block mt-1">Cognito</span>
          </motion.h2>

          <Link
            href="mailto:systems@cognitomedia.com"
            className="text-body-lg sm:text-subheading font-mono text-zinc-700 hover:text-cyan-400 transition-all duration-500 underline underline-offset-8 decoration-zinc-900/50 hover:decoration-cyan-400/30 tracking-wider group break-all sm:break-normal"
          >
            systems<span className="text-zinc-800 group-hover:text-white transition-colors">@</span>cognitomedia.com
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pt-12 sm:pt-16 border-t border-zinc-900/20">
          <div>
            <span className="block section-label mb-5 sm:mb-6">Industries</span>
            <ul className="text-caption text-zinc-600 space-y-3 font-light">
              <li className="hover:text-cyan-400 transition-colors duration-500 cursor-pointer">Service Operations</li>
              <li className="hover:text-cyan-400 transition-colors duration-500 cursor-pointer">Real Estate</li>
              <li className="hover:text-cyan-400 transition-colors duration-500 cursor-pointer">Short Term Rentals</li>
            </ul>
          </div>
          <div>
            <span className="block section-label mb-5 sm:mb-6">Legal</span>
            <ul className="text-caption text-zinc-600 space-y-3 font-light">
              <li><Link href="#" className="hover:text-cyan-400 transition-colors duration-500">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-cyan-400 transition-colors duration-500">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <span className="block section-label mb-5 sm:mb-6">Status</span>
            <div className="flex items-center gap-3 text-caption text-zinc-600">
              <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.6)] animate-pulse shrink-0" />
              All Systems Active
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="block section-label mb-5 sm:mb-6">Connect</span>
            <div className="flex gap-5 sm:gap-6">
              <Link href="https://x.com/demarkuss1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={16} className="text-zinc-700 hover:text-cyan-400 transition-colors duration-500" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github size={16} className="text-zinc-700 hover:text-cyan-400 transition-colors duration-500" />
              </Link>
              <Link href="https://www.linkedin.com/in/demarkuss-day-a1202b20/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={16} className="text-zinc-700 hover:text-cyan-400 transition-colors duration-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 text-center">
          <span className="text-[7px] sm:text-[8px] font-mono text-zinc-900 tracking-[0.5em] uppercase">
            © {new Date().getFullYear()} Cognito Media & Business Solutions · Dallas, TX
          </span>
        </div>
      </div>
    </footer>
  );
};
