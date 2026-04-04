"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "@/components/ScrambleText";
import { Search, Wrench, Users, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "AI Audit",
    tag: "FREE",
    description: "We assess your operations, identify the highest-ROI automation opportunities, and build your custom AI roadmap.",
    icon: Search,
  },
  {
    number: "02",
    title: "On-Site Setup",
    tag: "WEEK 1-2",
    description: "We come to your location and install your AI systems. Sales agents, voice bots, content engines, whatever the audit identified.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Team Training",
    tag: "INCLUDED",
    description: "We don't leave until your team is confident. Hands-on training, not a Zoom tutorial.",
    icon: Users,
  },
  {
    number: "04",
    title: "Ongoing Intelligence",
    tag: "OPTIONAL",
    description: "AI evolves fast. We keep your systems optimized, build new agents as you grow, and make sure nothing breaks.",
    icon: TrendingUp,
  },
];

export const AIProcess = () => {
  return (
    <section className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-zinc-950 overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-8 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
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
            text="FROM AUDIT TO AUTOPILOT IN 2 WEEKS."
            as="h2"
            className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase"
            speed={30}
          />
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/20 via-cyan-400/10 to-transparent hidden sm:block" />

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="group flex gap-6 sm:gap-10 items-start relative"
              >
                {/* Number dot */}
                <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-black border border-zinc-800 flex items-center justify-center group-hover:border-cyan-400/40 group-hover:shadow-[0_0_25px_rgba(0,255,255,0.08)] transition-all duration-700 relative z-10">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 group-hover:text-cyan-400 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8 sm:pb-12">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                    <span className="text-micro font-mono text-cyan-400/30 font-black tracking-[0.5em]">{step.number}</span>
                    <span className="text-micro font-mono text-cyan-400 font-bold tracking-[0.3em] px-2 py-0.5 bg-cyan-950/20 border border-cyan-400/15 rounded-sm">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-subheading font-cabinet font-black uppercase tracking-tighter mb-3 sm:mb-4 text-white group-hover:text-cyan-400 transition-colors duration-700">
                    {step.title}
                  </h3>
                  <p className="text-body text-zinc-500 font-light leading-relaxed max-w-lg group-hover:text-zinc-300 transition-colors duration-700">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
