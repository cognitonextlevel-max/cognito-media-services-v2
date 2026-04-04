"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "@/components/ScrambleText";
import { Briefcase, Home, Building, User, DollarSign } from "lucide-react";

const audiences = [
  { icon: Briefcase, text: "Service businesses drowning in follow-ups and scheduling" },
  { icon: Home, text: "Real estate teams losing leads to slow response times" },
  { icon: Building, text: "Short-term rental operators manually managing guests and reviews" },
  { icon: User, text: "Small businesses where the owner IS the system" },
  { icon: DollarSign, text: "Sales teams leaving money on the table" },
];

export const AIAudience = () => {
  return (
    <section className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-5 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-cyan-400/30" />
            <span className="section-label">Who This Is For</span>
          </motion.div>

          <ScrambleText
            text="BUILT FOR BUSINESSES THAT ARE DONE GUESSING."
            as="h2"
            className="text-heading font-cabinet font-black leading-[0.9] tracking-tighter uppercase"
            speed={30}
          />
        </div>

        <div className="space-y-4 sm:space-y-5">
          {audiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className="group flex items-center gap-5 sm:gap-6 p-5 sm:p-6 bg-[#050505] border border-zinc-900/50 hover:border-zinc-800 transition-all duration-500"
            >
              <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-400/30 transition-colors duration-500">
                <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-700 group-hover:text-cyan-400 transition-colors duration-500" />
              </div>
              <p className="text-body text-zinc-400 font-light group-hover:text-zinc-200 transition-colors duration-500">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
