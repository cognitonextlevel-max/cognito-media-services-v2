"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Hexagon, Network, ShieldCheck, Target, Zap } from "lucide-react";
import Link from "next/link";

const nodes = [
  {
    title: "PROCESS CAPTURE",
    subtitle: "SYSTEMIC OBSERVATION",
    description: "We map your current manual workflows. We translate operational logic into structured digital assets with zero friction.",
    stats: [
      { label: "FIDELITY", value: "HIGH" },
      { label: "SYNC", value: "REAL-TIME" }
    ],
    icon: Hexagon
  },
  {
    title: "LIVING MANUALS",
    subtitle: "DYNAMIC SOPS",
    description: "Install systems that execute your processes perfectly every time. Your SOPs stay active as your business logic scales.",
    stats: [
      { label: "TYPE", value: "DYNAMIC" },
      { label: "OWNERSHIP", value: "100%" }
    ],
    icon: Target
  },
  {
    title: "ZERO-TOUCH TASKS",
    subtitle: "AUTONOMOUS HANDOFF",
    description: "Eliminate administrative noise. We engineer consistency at scale by handing off manual bottlenecks to digital systems.",
    stats: [
      { label: "LOGIC", value: "ACTIVE" },
      { label: "NOISE", value: "ZERO" }
    ],
    icon: Network
  }
];

export const Intelligence = () => {
  return (
    <section id="intelligence" className="relative py-24 sm:py-40 md:py-56 bg-black overflow-hidden border-t border-zinc-900">
      {/* Decorative Blueprint Background */}
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none"></div>

      {/* Target Crosshairs Background Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border border-zinc-900 rounded-full flex items-center justify-center opacity-30 pointer-events-none hidden sm:flex">
        <div className="w-[1px] h-full bg-zinc-900"></div>
        <div className="w-full h-[1px] bg-zinc-900 absolute"></div>
      </div>
      <div className="absolute bottom-40 left-10 w-64 h-64 border border-zinc-900 rounded-full flex items-center justify-center opacity-20 pointer-events-none hidden sm:flex">
        <div className="w-[1px] h-full bg-zinc-900 top-0"></div>
        <div className="w-full h-[1px] bg-zinc-900 absolute left-0"></div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 sm:gap-16 mb-16 sm:mb-24 md:mb-48 border-b border-zinc-900 pb-12 sm:pb-24 relative">
          {/* Section Scanline */}
          <div className="absolute bottom-0 left-0 h-[1px] bg-cyan-400/50 w-full opacity-50 shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>

          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0.1, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 border border-cyan-400/40 rotate-45 flex items-center justify-center relative shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                <Zap size={14} className="text-cyan-400 -rotate-45" />
                {/* Glowing corner on the diamond */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-400 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(0,255,255,1)]"></div>
              </div>
              <span className="text-[9px] sm:text-[11px] font-mono uppercase tracking-[0.4em] sm:tracking-[0.8em] text-cyan-400 font-bold leading-relaxed">
                Cognito Media | Core Engine
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] xl:text-[130px] font-cabinet font-black leading-none mb-8 sm:mb-12 uppercase break-words overflow-hidden"
            >
              OPERATIONAL <br />
              <span className="text-zinc-400 italic">PRECISION</span> <br />
              <span className="text-white">ENGINE</span><span className="text-cyan-400">.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="pb-4"
          >
            <Link
              href="#contact"
              className="group flex flex-col items-start lg:items-end gap-4 sm:gap-6 relative"
            >
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-[0.6em] group-hover:text-cyan-400 transition-colors lg:text-right font-bold">Initiate<br />Sequence</span>
              <div className="w-16 h-16 sm:w-24 sm:h-24 border border-zinc-800 bg-[#050505] rounded-full flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-950/20 transition-all duration-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-cyan-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center blur-md"></div>
                <ArrowUpRight size={24} className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-zinc-900 bg-[#050505]">
          {nodes.map((node, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`group relative p-6 sm:p-10 md:p-12 lg:p-16 overflow-hidden flex flex-col transition-all duration-700 hover:bg-[#0a0a0a] border-zinc-900
                ${idx !== nodes.length - 1 ? 'border-b lg:border-b-0 lg:border-r' : ''}`}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              {/* Data readouts on hover */}
              <div className="absolute top-4 right-4 text-[8px] font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 tracking-[0.2em] text-right pointer-events-none hidden sm:block">
                SYS.CAL: OK<br />
                LATENCY: 12MS<br />
                SYNC: 100%
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-8 sm:mb-12 md:mb-16 flex items-center justify-between">
                  <div className="p-3 sm:p-4 bg-black border border-zinc-800 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-500">
                    <node.icon className="w-6 h-6 sm:w-8 sm:h-8 text-zinc-500 group-hover:text-cyan-400 transition-all duration-700" />
                  </div>
                  <span className="text-[11px] sm:text-[12px] font-mono text-zinc-400 group-hover:text-cyan-400 transition-colors font-bold tracking-widest text-right">
                    NODE // 0{idx + 1}
                  </span>
                </div>

                <span className="block text-[10px] sm:text-[11px] font-mono text-zinc-500 tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 font-bold group-hover:text-cyan-400 transition-colors">
                  {node.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-cabinet font-black mb-4 sm:mb-6 uppercase text-white group-hover:text-white transition-colors">
                  {node.title}
                </h3>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-16 group-hover:text-zinc-300 transition-colors flex-grow font-light">
                  {node.description}
                </p>

                <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-zinc-900 mt-auto">
                  {node.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-center font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase bg-black/50 p-2.5 sm:p-3 border border-zinc-900 group-hover:border-zinc-800 transition-colors">
                      <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">{stat.label}</span>
                      <span className="text-zinc-400 group-hover:text-cyan-400 transition-colors font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
