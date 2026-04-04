"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Founder = () => {
  return (
    <section className="relative section-padding bg-black overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-8 pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-900/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          {/* Image — cinematic frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className="relative group">
              {/* Frame border */}
              <div className="absolute -inset-3 sm:-inset-4 border border-zinc-900/50 group-hover:border-cyan-400/10 transition-colors duration-1000" />

              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-cyan-400/20 group-hover:border-cyan-400/60 transition-colors duration-700 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]" />
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-cyan-400/20 group-hover:border-cyan-400/60 transition-colors duration-700" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-cyan-400/20 group-hover:border-cyan-400/60 transition-colors duration-700" />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-cyan-400/20 group-hover:border-cyan-400/60 transition-colors duration-700 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]" />

              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950">
                {/* Scan overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/[0.06] to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2s] ease-linear pointer-events-none z-20" />

                {/* Live indicator */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-zinc-800/50 rounded-full">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(0,255,255,0.8)]" />
                  <span className="text-[7px] font-mono text-cyan-400/70 uppercase tracking-[0.3em] font-bold">Live</span>
                </div>

                <Image
                  src="/founder.jpg"
                  alt="DeMarkuss Day - Business Systems Architect, Dallas TX"
                  fill
                  className="object-cover grayscale-[0.6] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.03]"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.19, 1, 0.22, 1] }}
            className="relative"
          >
            <span className="section-label flex items-center gap-3 mb-8">
              <span className="w-6 sm:w-8 h-px bg-cyan-400/30 shadow-[0_0_6px_rgba(0,255,255,0.5)]" />
              Executive Directive
            </span>

            <h2 className="text-heading font-cabinet font-black leading-[0.9] tracking-tighter uppercase mb-8 sm:mb-12 text-white">
              BUILT IN <span className="italic text-zinc-500">THE FIELD.</span>
              <br />SCALED WITH LOGIC.
            </h2>

            <p className="text-body-lg text-zinc-400 font-light leading-relaxed mb-10 sm:mb-14 max-w-lg">
              I built this system to solve the bottlenecks in my own business. We replace human guesswork with{" "}
              <span className="text-white font-medium">engineered consistency.</span>
            </p>

            {/* Quote */}
            <blockquote className="text-body text-zinc-500 italic leading-relaxed border-l-2 border-cyan-400/20 pl-5 sm:pl-8 mb-10 sm:mb-12 bg-gradient-to-r from-cyan-900/[0.04] to-transparent py-4 pr-4">
              &ldquo;Chaos doesn&apos;t scale. Systems do. We install a digital nervous system that ensures growth is predictable and your time is protected.&rdquo;
            </blockquote>

            {/* Founder info */}
            <div className="flex items-center gap-5 sm:gap-6">
              <div>
                <span className="block text-white font-cabinet font-bold uppercase tracking-[0.15em] text-subheading leading-none mb-1.5">
                  DeMarkuss Day
                </span>
                <span className="block text-micro font-mono text-zinc-600 uppercase tracking-[0.35em] font-bold">
                  Business Systems Architect · Dallas, TX
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
