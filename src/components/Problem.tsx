"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "./ScrambleText";
import { PhoneOff, Clock, MapPinOff } from "lucide-react";
import { TiltCard } from "./TiltCard";

const problems = [
  {
    icon: PhoneOff,
    stat: "62%",
    headline: "Unanswered Calls",
    detail: "62% of your calls go unanswered. 85% of those people never call back. That's $126K/year walking out the door.",
  },
  {
    icon: Clock,
    stat: "5 Min",
    headline: "Leads Go Cold",
    detail: "If you don't respond in 5 minutes, you're 21x less likely to close. Your competitors respond in 30 seconds.",
  },
  {
    icon: MapPinOff,
    stat: "Top 3",
    headline: "Google Can't Find You",
    detail: "If you're not in the top 3 map results, you don't exist. 46% of all Google searches are local.",
  },
];

export const Problem = () => {
  return (
    <section className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-zinc-950 overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-8 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8 sm:mb-10"
        >
          <div className="w-8 h-px bg-red-500/40" />
          <span className="text-micro font-mono uppercase tracking-[0.5em] text-red-400/60 font-bold">The Reality</span>
        </motion.div>

        <ScrambleText
          text="YOU'RE LOSING MONEY EVERY DAY YOU DON'T FIX THIS."
          as="h2"
          className="text-heading font-cabinet font-black leading-[0.9] tracking-tighter uppercase mb-14 sm:mb-20"
          speed={30}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {problems.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.19, 1, 0.22, 1] }}
            >
              <TiltCard className="h-full">
                <div className="group relative p-6 sm:p-8 md:p-10 border border-zinc-900/50 h-full flex flex-col bg-[#050505] hover:border-red-500/20 transition-all duration-700">
                  <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6 sm:mb-8">
                      <div className="p-3 bg-black border border-zinc-800 group-hover:border-red-500/30 transition-colors duration-500">
                        <p.icon className="w-5 h-5 text-zinc-600 group-hover:text-red-400 transition-colors duration-500" />
                      </div>
                      <span className="text-subheading sm:text-heading font-cabinet font-black text-red-400/80 tracking-tighter">
                        {p.stat}
                      </span>
                    </div>

                    <h3 className="text-body-lg font-cabinet font-black uppercase tracking-tight mb-3 text-white">
                      {p.headline}
                    </h3>
                    <p className="text-body text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-body-lg text-zinc-500 font-light border-l-2 border-cyan-400/15 pl-5 sm:pl-8 max-w-2xl"
        >
          This isn&apos;t a tech problem. It&apos;s a systems problem.{" "}
          <span className="text-white font-medium">And systems are what I build.</span>
        </motion.p>
      </div>
    </section>
  );
};
