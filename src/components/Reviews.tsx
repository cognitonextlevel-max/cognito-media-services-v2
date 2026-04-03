"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
    text: "Our extensive Sonos music system had not been working for weeks. When it quit altogether, I called Cognito. They are now our go-to for anything media related.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label mb-4">Client Praise</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5.0 on Google
          </h2>
          <p className="text-sm text-[#71717a]">17 five-star reviews</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111113] border border-[#27272a] rounded-2xl p-8"
            >
              <Stars />
              <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6 italic">
                &ldquo;{r.text}&rdquo;
              </p>
              <p className="text-xs font-bold tracking-widest uppercase text-white">
                {r.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
