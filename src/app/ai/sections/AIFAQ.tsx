"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ScrambleText } from "@/components/ScrambleText";

const faqs = [
  {
    q: "What if my team isn't tech-savvy?",
    a: "That's exactly why we train in person. We don't leave until everyone is comfortable. No jargon, no assumptions, just hands-on guidance until it clicks.",
  },
  {
    q: "What AI tools do you use?",
    a: "We install custom AI workflows, voice agents, and automation tools directly on your machines. We pick the best system for your needs, not the trendy one. Every system is custom-built for YOUR business.",
  },
  {
    q: "Do I need to keep paying after setup?",
    a: "No. The setup works on its own. The retainer is for ongoing optimization and new builds, which is completely optional.",
  },
  {
    q: "How fast will I see results?",
    a: "Most clients see ROI within the first week as automated follow-ups and lead capture start immediately after setup.",
  },
  {
    q: "Is this just ChatGPT?",
    a: "No. We build custom AI agents tailored to YOUR business, using multiple platforms orchestrated together. It's not a chatbot, it's a complete system.",
  },
];

const FAQItem = ({ q, a, isOpen, toggle }: { q: string; a: string; isOpen: boolean; toggle: () => void }) => (
  <div className="border-b border-zinc-900/50">
    <button
      type="button"
      onClick={toggle}
      className="w-full flex items-center justify-between py-6 sm:py-8 text-left group"
    >
      <span className="text-body-lg font-cabinet font-bold text-white group-hover:text-cyan-400 transition-colors duration-500 pr-4 uppercase tracking-tight">
        {q}
      </span>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
        className="shrink-0"
      >
        <ChevronDown size={18} className={`transition-colors duration-500 ${isOpen ? "text-cyan-400" : "text-zinc-700"}`} />
      </motion.div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="overflow-hidden"
        >
          <p className="text-body text-zinc-400 font-light leading-relaxed pb-6 sm:pb-8 pl-0 sm:pl-4 max-w-2xl">
            {a}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

export const AIFAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-zinc-900/50">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-cyan-400/30" />
            <span className="section-label">FAQ</span>
            <div className="w-8 h-px bg-cyan-400/30" />
          </motion.div>

          <ScrambleText
            text="QUESTIONS? ANSWERED."
            as="h2"
            className="text-heading font-cabinet font-black leading-[0.9] tracking-tighter uppercase"
            speed={35}
          />
        </div>

        <div>
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <FAQItem
                q={faq.q}
                a={faq.a}
                isOpen={open === idx}
                toggle={() => setOpen(open === idx ? null : idx)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
