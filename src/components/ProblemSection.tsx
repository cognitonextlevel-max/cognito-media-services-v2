"use client";
import { motion } from "framer-motion";

const painPoints = [
  {
    number: "01",
    problem: "Wires Everywhere",
    detail: "HDMI cables, power cords, ethernet — snaking down walls and across floors. Cable covers make it worse.",
  },
  {
    number: "02",
    problem: "Too Many Remotes",
    detail: "One for the TV, one for the soundbar, one for streaming. Your family gave up and watches on their phones.",
  },
  {
    number: "03",
    problem: "Sound That Disappoints",
    detail: "You spent $2K on speakers but dialogue is muffled and bass rattles the windows. YouTube tutorials didn't help.",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-[#09090b]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="label mb-4">Sound Familiar?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Your Home Deserves <span className="text-[#B91C1C]">Better</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {painPoints.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111113] border border-[#27272a] rounded-2xl p-8 hover:border-[#B91C1C]/50 transition-colors"
            >
              <span className="text-[#B91C1C] text-xs font-bold tracking-widest block mb-4">
                {p.number}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{p.problem}</h3>
              <p className="text-sm text-[#71717a] leading-relaxed">{p.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
