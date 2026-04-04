"use client";

import { motion } from "framer-motion";
import { Bot, Headphones, PenTool, MessageSquare, Filter, Star, Database, BookOpen } from "lucide-react";
import { ScrambleText } from "@/components/ScrambleText";
import { TiltCard } from "@/components/TiltCard";

const systems = [
  { icon: Bot, title: "AI Sales Agent", description: "Follows up with every lead 24/7 via text, email, or voice call. Never misses a prospect.", replaces: "missed follow-ups, dead leads" },
  { icon: Headphones, title: "AI Receptionist", description: "Answers calls, books appointments, handles FAQs all without a human.", replaces: "missed calls, scheduling chaos" },
  { icon: PenTool, title: "AI Content Engine", description: "Generates social posts, emails, and blog content on your brand voice.", replaces: "content bottleneck, social media stress" },
  { icon: MessageSquare, title: "AI Customer Service", description: "Handles support questions on your website, text, or email instantly.", replaces: "slow response times, repetitive questions" },
  { icon: Filter, title: "AI Lead Qualifier", description: "Scores and routes leads before they hit your sales team.", replaces: "wasted time on bad leads" },
  { icon: Star, title: "AI Review Manager", description: "Responds to Google reviews and requests new ones automatically.", replaces: "ignored reviews, reputation gaps" },
  { icon: Database, title: "CRM Automation", description: "Auto-updates records, triggers follow-ups, tracks your entire pipeline.", replaces: "manual data entry, lost deals" },
  { icon: BookOpen, title: "AI SOP System", description: "Documents all your business processes so anyone can follow them.", replaces: "tribal knowledge, training nightmares" },
];

export const AIInstall = () => {
  return (
    <section className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-zinc-900/50">
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
            <span className="section-label">What We Install</span>
          </motion.div>

          <ScrambleText
            text="WE DON'T TEACH AI. WE INSTALL IT."
            as="h2"
            className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase"
            speed={30}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {systems.map((system, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.19, 1, 0.22, 1] }}
            >
              <TiltCard className="h-full">
                <div className="group relative p-6 sm:p-8 border border-zinc-900/50 h-full flex flex-col transition-all duration-700 hover:border-cyan-500/30 bg-[#050505]">
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="p-3 bg-black border border-zinc-800 group-hover:border-cyan-400/40 transition-all duration-500 w-fit mb-6">
                      <system.icon className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 transition-colors duration-500" />
                    </div>

                    <h3 className="text-caption font-cabinet font-black uppercase tracking-wide mb-3 text-white group-hover:text-cyan-400 transition-colors duration-500">
                      {system.title}
                    </h3>
                    <p className="text-body text-zinc-500 font-light leading-relaxed mb-6 flex-grow group-hover:text-zinc-300 transition-colors duration-500">
                      {system.description}
                    </p>

                    <div className="pt-4 border-t border-zinc-900/50 mt-auto">
                      <span className="text-micro font-mono text-zinc-700 uppercase tracking-[0.2em] group-hover:text-cyan-400/50 transition-colors duration-500">
                        Replaces: {system.replaces}
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
