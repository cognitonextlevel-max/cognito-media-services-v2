"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "./ScrambleText";
import { Search, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "STRATEGIC AUDIT",
    tag: "FREE",
    description: "I analyze your entire operation in 30 minutes. Where you're losing leads. Where you're wasting time. Where the money is hiding. No pitch. Just a blueprint.",
    icon: Search,
  },
  {
    number: "02",
    title: "SYSTEM BUILD",
    tag: "1-2 WEEKS",
    description: "I build your custom system — SEO, website, AI, automations — and install it on-site. I train your team. Everything works before I leave.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "OPTIMIZE & SCALE",
    tag: "ONGOING",
    description: "Monthly optimization. New automations. Performance reporting. Your system gets smarter every month. You get more time back every week.",
    icon: TrendingUp,
  },
];

export const Process = () => {
  return (
    <section id="process" className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-zinc-950 overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-8 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 sm:mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-cyan-400/30" />
            <span className="section-label">The Process</span>
            <div className="w-8 h-px bg-cyan-400/30" />
          </motion.div>

          <ScrambleText
            text="THREE STEPS. THEN YOUR BUSINESS RUNS ITSELF."
            as="h2"
            className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase"
            speed={30}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-zinc-900/50 bg-[#050505]">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.19, 1, 0.22, 1] }}
              className={`group relative p-8 sm:p-12 md:p-14 flex flex-col transition-all duration-700 hover:bg-[#0a0a0a] ${
                idx !== steps.length - 1 ? "border-b md:border-b-0 md:border-r border-zinc-900/50" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Top — icon + number + tag */}
                <div className="mb-10 sm:mb-14 flex items-center justify-between">
                  <div className="p-3 sm:p-4 bg-black border border-zinc-800 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-500">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 group-hover:text-cyan-400 transition-colors duration-500" />
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-micro font-mono text-zinc-700 font-bold tracking-[0.4em]">
                      {step.number}
                    </span>
                    <span className="text-micro font-mono text-cyan-400 font-bold tracking-[0.3em] px-2 py-0.5 bg-cyan-950/20 border border-cyan-400/15 rounded-sm">
                      {step.tag}
                    </span>
                  </div>
                </div>

                <h3 className="text-subheading sm:text-heading font-cabinet font-black tracking-tighter uppercase mb-5 sm:mb-8 text-white group-hover:text-cyan-400 transition-colors duration-700">
                  {step.title}
                </h3>

                <p className="text-body text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-700">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector */}
              {idx !== steps.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-zinc-950 border border-zinc-900/50 items-center justify-center text-zinc-700 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all duration-500">
                  <span className="text-xs">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
