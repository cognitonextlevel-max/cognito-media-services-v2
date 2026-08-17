"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "./ScrambleText";
import { PhoneOff, Clock, MapPinOff } from "lucide-react";
import { TiltCard } from "./TiltCard";

const problems = [
  {
    icon: MapPinOff,
    stat: "Losing",
    headline: "The Neighborhood",
    detail: "Your competitors are stealing local market share because they know how to use local SEO and targeted Facebook ads.",
  },
  {
    icon: Clock,
    stat: "Trapped",
    headline: "By The Tech Barrier",
    detail: "You have a business to run. You don't have time to sit on YouTube learning how to build a website or configure an AI receptionist.",
  },
  {
    icon: PhoneOff,
    stat: "Ignored",
    headline: "By Online Agencies",
    detail: "You send $5k to an agency across the country and get nothing. You need someone on-site, in-person, in DFW who actually answers the phone.",
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
