"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import Link from "next/link";

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
            <span className="text-5xl sm:text-6xl text-cyan-400/30 mb-10 sm:mb-14 block" style={{ fontFamily: 'var(--font-signature)' }}>DD</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-heading font-cabinet font-black uppercase tracking-tighter mb-8 sm:mb-12 max-w-2xl"
          >
            Let&apos;s <span className="cyan-shimmer block mt-1">Build</span>
          </motion.h2>

          <Link
            href="mailto:demarkuss@demarkussday.com"
            className="text-body-lg sm:text-subheading font-mono text-zinc-700 hover:text-cyan-400 transition-all duration-500 underline underline-offset-8 decoration-zinc-900/50 hover:decoration-cyan-400/30 tracking-wider group break-all sm:break-normal"
          >
            demarkuss<span className="text-zinc-800 group-hover:text-white transition-colors">@</span>demarkussday.com
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pt-12 sm:pt-16 border-t border-zinc-900/20">
          <div>
            <span className="block section-label mb-5 sm:mb-6">Ecosystem</span>
            <ul className="text-caption text-zinc-600 space-y-3 font-light">
              <li>
                <Link href="https://cognitomediaservice.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-500 flex items-center gap-1.5">
                  Cognito Media Services <ExternalLink size={12} />
                </Link>
              </li>
              <li>
                <Link href="https://apps.apple.com/us/app/cognito-media-services/id6451157247" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-500 flex items-center gap-1.5">
                  Cognito iOS App <ExternalLink size={12} />
                </Link>
              </li>
              <li>
                <Link href="https://shoutoutdfw.com/meet-demarkuss-day-smart-home-specialist-founder-cognito-media-services/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors duration-500 flex items-center gap-1.5">
                  SHOUTOUT DFW Press <ExternalLink size={12} />
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="block section-label mb-5 sm:mb-6">Published Books</span>
            <ul className="text-caption text-zinc-600 space-y-3 font-light">
              <li className="hover:text-cyan-400 transition-colors duration-500 cursor-pointer">
                How to Make 6 Figures with TV Installation
              </li>
              <li className="hover:text-cyan-400 transition-colors duration-500 cursor-pointer">
                LUMA: Learn, Understand, Master, Achieve
              </li>
            </ul>
          </div>
          <div>
            <span className="block section-label mb-5 sm:mb-6">Status</span>
            <div className="flex items-center gap-3 text-caption text-zinc-600 mb-3">
              <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.6)] animate-pulse shrink-0" />
              All Systems Active
            </div>
            <span className="text-micro font-mono text-zinc-700 block">Phone: +1 (469) 970-6943</span>
            <span className="text-micro font-mono text-zinc-700 block">12100 Ford Rd, Dallas TX</span>
          </div>
          <div className="flex flex-col items-start md:items-end">
            <span className="block section-label mb-5 sm:mb-6">Connect</span>
            <div className="flex flex-wrap gap-3.5 sm:gap-4 max-w-[200px] justify-start md:justify-end">
              <Link href="https://x.com/demarkuss1" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <Twitter size={16} className="text-zinc-700 hover:text-cyan-400 transition-colors duration-500" />
              </Link>
              <Link href="https://www.linkedin.com/in/demarkuss-day-a1202b20/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={16} className="text-zinc-700 hover:text-cyan-400 transition-colors duration-500" />
              </Link>
              <Link href="https://demarkussday.substack.com" target="_blank" rel="noopener noreferrer" aria-label="Substack" className="text-zinc-700 hover:text-cyan-400 transition-colors duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11L22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </Link>
              <Link href="https://www.facebook.com/cognitomediaservices" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 hover:text-cyan-400 transition-colors duration-500">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link href="https://www.instagram.com/demarkuss_day" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 hover:text-cyan-400 transition-colors duration-500">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
              <Link href="https://www.youtube.com/@CognitoMediaServices" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-700 hover:text-cyan-400 transition-colors duration-500">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-16 text-center">
          <span className="text-[7px] sm:text-[8px] font-mono text-zinc-900 tracking-[0.5em] uppercase">
            © {new Date().getFullYear()} DeMarkuss Day · Dallas, TX · All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

