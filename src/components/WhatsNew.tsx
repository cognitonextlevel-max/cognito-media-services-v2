"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ScrambleText } from "./ScrambleText";
import { Sparkles, Mic, Phone, Cpu, Globe, Zap } from "lucide-react";

const tools = [
  {
    name: "AI SYSTEMS",
    version: "Opus 4",
    description: "The most advanced AI model on earth. We install it for your team.",
    icon: Sparkles,
    color: "from-amber-500/20 to-orange-600/10",
    borderColor: "hover:border-amber-400/40",
    tagColor: "text-amber-400 bg-amber-950/30 border-amber-400/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.1)]",
  },
  {
    name: "VOICE AGENTS",
    version: "Voice AI",
    description: "Human-sounding AI phone agents. Your phone never goes unanswered.",
    icon: Mic,
    color: "from-purple-500/20 to-violet-600/10",
    borderColor: "hover:border-purple-400/40",
    tagColor: "text-purple-400 bg-purple-950/30 border-purple-400/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.1)]",
  },
  {
    name: "AUTOMATION",
    version: "Voice Agents",
    description: "Custom AI receptionists trained on YOUR business data and processes.",
    icon: Phone,
    color: "from-emerald-500/20 to-green-600/10",
    borderColor: "hover:border-emerald-400/40",
    tagColor: "text-emerald-400 bg-emerald-950/30 border-emerald-400/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(52,211,153,0.1)]",
  },
  {
    name: "ANTIGRAVITY",
    version: "Dev System",
    description: "The AI coding system we use to build your entire digital infrastructure.",
    icon: Cpu,
    color: "from-cyan-500/20 to-blue-600/10",
    borderColor: "hover:border-cyan-400/40",
    tagColor: "text-cyan-400 bg-cyan-950/30 border-cyan-400/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]",
  },
  {
    name: "NEXT.JS",
    version: "Vercel",
    description: "Enterprise-grade websites that load in milliseconds and convert visitors.",
    icon: Globe,
    color: "from-white/10 to-zinc-500/10",
    borderColor: "hover:border-zinc-400/40",
    tagColor: "text-zinc-400 bg-zinc-900/50 border-zinc-600/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(161,161,170,0.1)]",
  },
  {
    name: "GEMINI",
    version: "Google AI",
    description: "AI-powered analytics, content generation, and intelligent search.",
    icon: Zap,
    color: "from-blue-500/20 to-indigo-600/10",
    borderColor: "hover:border-blue-400/40",
    tagColor: "text-blue-400 bg-blue-950/30 border-blue-400/20",
    glowColor: "group-hover:shadow-[0_0_40px_rgba(96,165,250,0.1)]",
  },
];

export const WhatsNew = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let pos = 0;
    const speed = 0.5;

    const scroll = () => {
      if (!isDragging) {
        pos += speed;
        if (pos >= el.scrollWidth / 2) pos = 0;
        el.scrollLeft = pos;
      }
      animId = requestAnimationFrame(scroll);
    };
    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, [isDragging]);

  // Duplicate tools for infinite scroll
  const allTools = [...tools, ...tools];

  return (
    <section className="relative section-padding px-0 bg-zinc-950 overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-8 pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-24 relative z-10 mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8 sm:mb-10"
        >
          <div className="h-px bg-cyan-400 w-8 sm:w-12 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
          <span className="section-label">What&apos;s New</span>
        </motion.div>

        <ScrambleText
          text="THE AI LANDSCAPE MOVES FAST. WE MOVE FASTER."
          as="h2"
          className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase mb-6 sm:mb-8"
          speed={30}
        />
        <p className="text-body-lg text-zinc-500 font-light max-w-2xl leading-relaxed">
          These are the tools I deploy inside your business.{" "}
          <span className="text-white font-medium">Not demos. Not trials. The real thing, installed and configured.</span>
        </p>
      </div>

      {/* Scrolling tool cards */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-5 sm:px-8 md:px-12 lg:px-24 cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
        >
          {allTools.map((tool, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % tools.length) * 0.08 }}
              className="shrink-0 w-[280px] sm:w-[320px]"
            >
              <div className={`group relative p-6 sm:p-8 border border-zinc-800/50 bg-[#080808] ${tool.borderColor} transition-all duration-700 h-full overflow-hidden ${tool.glowColor}`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-zinc-800 group-hover:border-current transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-zinc-800 group-hover:border-current transition-colors duration-500" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-2.5 bg-black border border-zinc-800 group-hover:border-zinc-600 transition-colors duration-500">
                      <tool.icon className="w-5 h-5 text-zinc-600 group-hover:text-zinc-200 transition-colors duration-500" />
                    </div>
                    {/* Live indicator */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(0,255,255,0.8)]" />
                      <span className="text-[8px] font-mono text-cyan-400/70 uppercase tracking-[0.3em] font-bold">Live</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-subheading font-cabinet font-black uppercase tracking-tighter text-white">
                      {tool.name}
                    </h3>
                    <span className={`text-[9px] font-mono font-bold tracking-[0.2em] ${tool.tagColor} border px-2 py-0.5 rounded-sm`}>
                      {tool.version}
                    </span>
                  </div>

                  <p className="text-body text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                    {tool.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
