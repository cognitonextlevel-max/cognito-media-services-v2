"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const philosophies = [
  {
    number: "01",
    title: "ELIMINATE ERROR",
    subtitle: "PRECISION",
    description: "Build once. Execute forever. Install systems that execute your processes perfectly every time."
  },
  {
    number: "02",
    title: "KNOWLEDGE ASSETS",
    subtitle: "SOVEREIGNTY",
    description: "Turn tribal knowledge into permanent digital assets. Own your business logic, not just your leads."
  },
  {
    number: "03",
    title: "ENGINEERED GROWTH",
    subtitle: "VELOCITY",
    description: "Chaos doesn't scale. Systems do. We reclaim founder time by replacing manual guesswork with autonomous engines."
  }
];

export const Philosophy = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="system" ref={containerRef} className="relative py-48 px-8 md:px-24 bg-zinc-950 overflow-hidden">
      {/* Dynamic Background Text - Subdued further */}
      <motion.div
        style={{ x }}
        className="absolute top-24 left-0 whitespace-nowrap text-[300px] font-cabinet font-black text-white/[0.005] select-none pointer-events-none uppercase"
      >
        Operational Logic Grid System Protocol Cognito Media
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0.1, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-48"
            >
              <h2 className="text-7xl md:text-[90px] font-cabinet font-black leading-[0.85] tracking-[-0.04em] uppercase mb-8">
                THE <br />
                <span className="text-zinc-600">MANIFESTO.</span>
              </h2>
              <p className="text-xl text-zinc-400 font-light leading-snug tracking-tight max-w-sm">
                We replace guesswork with systems that scale without adding headcount.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-24 lg:space-y-32">
            {philosophies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0.1, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="flex items-start gap-12">
                  <span className="text-[10px] font-mono text-cyan-400/20 font-black tracking-[0.5em] pt-4">
                    {item.number}
                  </span>
                  <div>
                    <span className="block text-[10px] font-mono text-zinc-800 tracking-[0.5em] uppercase mb-6">
                      {item.subtitle}
                    </span>
                    <h3 className="text-5xl md:text-6xl font-cabinet font-black tracking-[-0.03em] uppercase mb-10 text-white group-hover:text-cyan-400 transition-colors duration-700">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed font-light text-xl max-w-xl group-hover:text-zinc-200 transition-colors duration-700">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Visual Accent */}
                <div className="absolute -left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent group-hover:via-cyan-400/30 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
