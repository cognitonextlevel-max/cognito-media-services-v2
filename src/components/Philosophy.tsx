"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TextReveal } from "./TextReveal";
import { ScrambleText } from "./ScrambleText";

const philosophies = [
  {
    number: "01",
    title: "ELIMINATE ERROR",
    subtitle: "PRECISION",
    description: "Every manual process is a liability. We replace human error with systems that execute perfectly — every time, at any scale, without supervision."
  },
  {
    number: "02",
    title: "KNOWLEDGE ASSETS",
    subtitle: "SOVEREIGNTY",
    description: "Your business knowledge shouldn't live in someone's head. We turn tribal knowledge into permanent digital assets that you own forever."
  },
  {
    number: "03",
    title: "ENGINEERED GROWTH",
    subtitle: "VELOCITY",
    description: "Chaos doesn't scale. We reclaim founder time by replacing manual guesswork with autonomous engines that compound growth while you sleep."
  }
];

export const Philosophy = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgX = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      id="system"
      ref={containerRef}
      className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-zinc-950 overflow-hidden"
    >
      {/* Moving background text */}
      <motion.div
        style={{ x: bgX }}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap text-[100px] sm:text-[200px] md:text-[300px] font-cabinet font-black text-white/[0.008] select-none pointer-events-none uppercase hidden sm:block"
      >
        Operational Logic Grid System Protocol
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24">
          {/* Sticky left heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="lg:sticky lg:top-32"
            >
              <span className="section-label block mb-6">Core Logic</span>
              <ScrambleText
                text="CORE LOGIC."
                as="h2"
                className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase mb-6 sm:mb-8"
                speed={35}
              />
              <p className="text-body-lg text-zinc-500 font-light leading-relaxed max-w-sm border-l border-cyan-400/15 pl-5 sm:pl-6">
                We reclaim founder time by replacing human error with autonomous infrastructure.
              </p>
            </motion.div>
          </div>

          {/* Scrolling philosophy items */}
          <div className="lg:col-span-7 space-y-20 sm:space-y-28 lg:space-y-36">
            {philosophies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1, delay: idx * 0.1, ease: [0.19, 1, 0.22, 1] }}
                className="group relative"
              >
                <div className="flex items-start gap-5 sm:gap-8 md:gap-12">
                  <span className="text-micro font-mono text-cyan-400/15 font-black tracking-[0.5em] pt-4 shrink-0">
                    {item.number}
                  </span>
                  <div className="min-w-0">
                    <span className="block text-micro font-mono text-zinc-800 tracking-[0.5em] uppercase mb-5 sm:mb-6 group-hover:text-cyan-400/40 transition-colors duration-700">
                      {item.subtitle}
                    </span>
                    <h3 className="text-heading font-cabinet font-black tracking-tighter uppercase mb-6 sm:mb-10 text-white group-hover:text-cyan-400 transition-colors duration-700">
                      {item.title}
                    </h3>
                    <TextReveal
                      text={item.description}
                      className="text-body-lg text-zinc-400 font-light leading-relaxed max-w-xl"
                    />
                  </div>
                </div>

                {/* Accent line */}
                <div className="absolute -left-3 sm:-left-6 md:-left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-900/30 to-transparent group-hover:via-cyan-400/20 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
