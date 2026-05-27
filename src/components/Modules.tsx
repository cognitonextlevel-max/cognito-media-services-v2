"use client";

import { motion } from "framer-motion";
import { Search, Code, Smartphone, Bot, Cpu, GraduationCap } from "lucide-react";
import { ScrambleText } from "./ScrambleText";
import { TiltCard } from "./TiltCard";
import Link from "next/link";

const modules = [
  {
    number: "01",
    title: "MAP DOMINANCE",
    subtitle: "Local SEO",
    description: "I put you in the top 3 Google Map results so every local search sends customers to you — not your competitor.",
    metric: "Top 3 Rankings",
    icon: Search,
    featured: false,
  },
  {
    number: "02",
    title: "REVENUE ENGINE",
    subtitle: "Website",
    description: "Your website stops being a brochure and starts being a machine that forces visitors to take action.",
    metric: "Conversion-Optimized",
    icon: Code,
    featured: false,
  },
  {
    number: "03",
    title: "OPERATIONAL LOGIC",
    subtitle: "Custom Apps",
    description: "I automate the workflows that eat 20+ hours of your week — scheduling, invoicing, CRM, reporting.",
    metric: "20+ Hours Saved/Week",
    icon: Cpu,
    featured: false,
  },
  {
    number: "04",
    title: "AI SYSTEMS",
    subtitle: "Voice + Automation",
    description: "AI answers your phone 24/7, responds to every lead in under 60 seconds, and requests reviews automatically.",
    metric: "Zero Missed Calls",
    icon: Bot,
    featured: true,
    href: "/ai",
  },
  {
    number: "05",
    title: "SALES AGENTS",
    subtitle: "Follow-Up",
    description: "Automated follow-up sequences that nurture every lead until they buy — or until they say no five times.",
    metric: "100% Follow-Up Rate",
    icon: Smartphone,
    featured: false,
  },
];

export const Modules = () => {
  return (
    <section id="services" className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/[0.06] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        <div className="mb-14 sm:mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 sm:mb-10"
          >
            <div className="h-px bg-cyan-400 w-8 sm:w-12 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
            <span className="section-label">The System</span>
          </motion.div>

          <ScrambleText
            text="ONE SYSTEM. FIVE ENGINES. ZERO CHAOS."
            as="h2"
            className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase mb-6 sm:mb-8"
            speed={30}
          />
          <p className="text-body-lg text-zinc-500 font-light max-w-2xl leading-relaxed">
            When I walk into your business, I don&apos;t sell you pieces. I install a complete operating system that handles everything you&apos;re doing manually.
          </p>
        </div>

        {/* Module grid — 2x2 + 1, or stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {modules.slice(0, 4).map((mod, idx) => (
            <ModuleCard key={idx} mod={mod} idx={idx} />
          ))}
        </div>
        {/* 5th module full width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="md:col-span-2">
            <ModuleCard mod={modules[4]} idx={4} />
          </div>
        </div>

        {/* Loop description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-6 sm:p-8 border border-zinc-900/50 bg-[#050505]"
        >
          <p className="text-body-lg text-zinc-400 font-light leading-relaxed max-w-3xl">
            Every module connects. Your SEO drives leads → your website captures them → AI responds instantly → sales agents close them → your reputation grows.{" "}
            <span className="text-cyan-400 font-medium">That&apos;s the loop.</span>
          </p>
        </motion.div>
      </div>

    </section>
  );
};

const ModuleCard = ({ mod, idx }: { mod: typeof modules[0]; idx: number }) => {
  const CardInner = (
    <TiltCard className="h-full">
      <div className={`group relative p-6 sm:p-10 md:p-12 border overflow-hidden h-full flex flex-col transition-all duration-700 ${
        mod.featured
          ? "border-cyan-400/30 bg-[#050505] shadow-[0_0_50px_rgba(0,255,255,0.06)] hover:shadow-[0_0_80px_rgba(0,255,255,0.12)]"
          : "border-zinc-900/50 bg-[#050505] hover:border-cyan-500/30"
      } ${mod.href ? "cursor-pointer" : "cursor-default"}`}>
        {/* Featured glow */}
        {mod.featured && (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent pointer-events-none" />
        )}

        {/* Scanning line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_15px_rgba(0,255,255,0.8)] -translate-y-full group-hover:animate-[scan_3s_ease-in-out_infinite] pointer-events-none z-20" />

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-l-2 border-zinc-800 transition-all duration-500 group-hover:border-cyan-400/60 group-hover:w-6 group-hover:h-6" />
        <div className="absolute top-0 right-0 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-r-2 border-zinc-800 transition-all duration-500 group-hover:border-cyan-400/60 group-hover:w-6 group-hover:h-6" />
        <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-l-2 border-zinc-800 transition-all duration-500 group-hover:border-cyan-400/60 group-hover:w-6 group-hover:h-6" />
        <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-r-2 border-zinc-800 transition-all duration-500 group-hover:border-cyan-400/60 group-hover:w-6 group-hover:h-6" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-8 sm:mb-10 flex items-center justify-between">
            <div className={`p-3 sm:p-4 bg-black border transition-all duration-500 ${
              mod.featured ? "border-cyan-400/40 shadow-[0_0_15px_rgba(0,255,255,0.1)]" : "border-zinc-800 group-hover:border-cyan-400/40"
            }`}>
              <mod.icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-500 ${
                mod.featured ? "text-cyan-400" : "text-zinc-600 group-hover:text-cyan-400"
              }`} />
            </div>
            <span className="text-micro font-mono text-zinc-600 tracking-[0.4em] font-bold uppercase">
              MODULE {mod.number}
            </span>
          </div>

          <span className="block text-micro font-mono text-zinc-600 tracking-[0.4em] uppercase mb-3 font-bold group-hover:text-cyan-400/50 transition-colors duration-500">
            {mod.subtitle}
          </span>
          <h3 className="text-subheading sm:text-heading font-cabinet font-black uppercase tracking-tighter mb-4 sm:mb-6 text-white group-hover:text-cyan-400 transition-colors duration-700">
            {mod.title}
          </h3>
          <p className="text-body text-zinc-500 font-light leading-relaxed mb-8 flex-grow group-hover:text-zinc-300 transition-colors duration-500">
            {mod.description}
          </p>

          <div className="pt-5 border-t border-zinc-900/50 mt-auto flex items-center justify-between">
            <span className="text-micro font-mono text-zinc-700 uppercase tracking-[0.3em] group-hover:text-cyan-400/60 transition-colors">Metric</span>
            <span className={`text-caption font-mono font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${
              mod.featured ? "text-cyan-400" : "text-zinc-400 group-hover:text-cyan-400"
            }`}>
              {mod.metric}
            </span>
          </div>
        </div>
      </div>
    </TiltCard>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.19, 1, 0.22, 1] }}
    >
      {mod.href ? <Link href={mod.href}>{CardInner}</Link> : CardInner}
    </motion.div>
  );
};
