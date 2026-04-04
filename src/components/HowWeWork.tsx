"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "./ScrambleText";
import { Hexagon, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "PROCESS CAPTURE",
    subtitle: "OBSERVE",
    description: "We map your current workflows and identify every bottleneck, manual task, and missed opportunity.",
    icon: Hexagon,
  },
  {
    number: "02",
    title: "SYSTEM BUILD",
    subtitle: "ENGINEER",
    description: "We build the automated systems like AI agents, workflows, and SOPs that replace the manual work permanently.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "DEPLOY & SCALE",
    subtitle: "ACTIVATE",
    description: "Your systems go live. Your team gets trained. Growth becomes predictable, not random.",
    icon: Rocket,
  },
];

export const HowWeWork = () => {
  return (
    <section id="system" className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
          >
            <div className="w-8 sm:w-12 h-px bg-cyan-400/30" />
            <span className="section-label">The Process</span>
            <div className="w-8 sm:w-12 h-px bg-cyan-400/30" />
          </motion.div>

          <ScrambleText
            text="HOW WE WORK."
            as="h2"
            className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase"
            speed={35}
          />
        </div>

        {/* 3-step layout */}
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
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Top row — icon + number */}
                <div className="mb-10 sm:mb-14 flex items-center justify-between">
                  <div className="p-3 sm:p-4 bg-black border border-zinc-800 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-500">
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-600 group-hover:text-cyan-400 transition-colors duration-500" />
                  </div>
                  <span className="text-micro font-mono text-zinc-700 group-hover:text-cyan-400/60 transition-colors font-bold tracking-[0.4em]">
                    STEP {step.number}
                  </span>
                </div>

                {/* Subtitle */}
                <span className="block text-micro font-mono text-zinc-600 tracking-[0.5em] uppercase mb-4 sm:mb-5 font-bold group-hover:text-cyan-400/50 transition-colors duration-500">
                  {step.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-subheading sm:text-heading font-cabinet font-black tracking-tighter uppercase mb-5 sm:mb-8 text-white group-hover:text-cyan-400 transition-colors duration-700">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-body text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-700">
                  {step.description}
                </p>
              </div>

              {/* Connecting arrow — desktop only */}
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
