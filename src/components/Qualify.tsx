"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "./ScrambleText";
import { Check, X } from "lucide-react";

const ready = [
  "You're missing calls and losing leads every week",
  "You're still doing things manually that should be automated",
  "Your website doesn't generate leads on its own",
  "You can't find your business on Google Maps",
  "You know AI could help but don't know where to start",
];

const notReady = [
  "You're not ready to invest in systems",
  "You want the cheapest option, not the best one",
  "You're looking for a quick fix, not a real infrastructure",
  "Your business does under $200K/year in revenue",
];

export const Qualify = () => {
  return (
    <section className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-cyan-400/30" />
            <span className="section-label">Who I Work With</span>
          </motion.div>

          <ScrambleText
            text="THIS IS FOR YOU IF..."
            as="h2"
            className="text-heading font-cabinet font-black leading-[0.9] tracking-tighter uppercase"
            speed={35}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {/* Ready column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="p-6 sm:p-8 md:p-10 border border-cyan-400/15 bg-[#050505]"
          >
            <h3 className="text-caption font-mono font-bold text-cyan-400 uppercase tracking-[0.4em] mb-6 sm:mb-8">
              You&apos;re ready if:
            </h3>
            <ul className="space-y-4 sm:space-y-5 list-none">
              {ready.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 sm:gap-4 list-none"
                >
                  <div className="shrink-0 w-5 h-5 mt-0.5 border border-cyan-400/40 flex items-center justify-center">
                    <Check size={12} className="text-cyan-400" />
                  </div>
                  <span className="text-body text-zinc-300 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Not ready column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
            className="p-6 sm:p-8 md:p-10 border border-zinc-900/50 bg-[#050505] hover:border-red-500/10 transition-colors duration-500"
          >
            <h3 className="text-caption font-mono font-bold text-red-400/80 uppercase tracking-[0.4em] mb-6 sm:mb-8">
              This isn&apos;t for you if:
            </h3>
            <ul className="space-y-4 sm:space-y-5 list-none">
              {notReady.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 sm:gap-4 list-none"
                >
                  <div className="shrink-0 w-5 h-5 mt-0.5 border border-red-500/20 bg-red-950/10 flex items-center justify-center">
                    <X size={12} className="text-red-500/80" />
                  </div>
                  <span className="text-body text-zinc-500 font-light">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
