"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { ScrambleText } from "./ScrambleText";

const reviews = [
  {
    name: "Crystal Freudiger",
    text: "Hands down best TV, camera, surround sound, and locks installation experience from start to finish!",
  },
  {
    name: "Shawntoyia Johnson",
    text: "Demarkuss and his team are absolutely amazing! They came out to both my properties and did phenomenal work.",
  },
  {
    name: "Roy Anderson",
    text: "Our extensive Sonos music system had not been working for weeks. When it quit altogether, I called DeMarkuss. They are now our go-to for anything media related.",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]" />
    ))}
  </div>
);

export const Reviews = () => {
  return (
    <section id="reviews" className="relative section-padding bg-[#050505] overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-cyan-400/30" />
            <span className="section-label">Social Proof</span>
            <div className="w-8 h-px bg-cyan-400/30" />
          </motion.div>

          <ScrambleText
            text="WHAT THEY SAY AFTER I LEAVE."
            as="h2"
            className="text-display font-cabinet font-black tracking-tighter uppercase mb-6"
            speed={35}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
            <span className="text-micro font-mono text-zinc-500 uppercase tracking-[0.4em]">17 verified five-star reviews</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-caption font-mono text-cyan-400 font-bold uppercase tracking-[0.3em] flex items-center gap-1.5 bg-cyan-950/20 border border-cyan-400/20 px-3 py-1 rounded-sm shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              5.0★ Google Rating
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="bg-black border border-zinc-900/50 rounded-sm p-6 sm:p-8 hover:border-zinc-800 transition-colors duration-500"
            >
              <Stars />
              <p className="text-body text-zinc-400 leading-relaxed mb-6 italic font-light">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-micro font-mono font-bold tracking-[0.4em] uppercase text-white">
                {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
