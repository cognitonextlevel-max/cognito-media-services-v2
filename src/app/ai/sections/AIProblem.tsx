"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "@/components/ScrambleText";
import { TextReveal } from "@/components/TextReveal";

export const AIProblem = () => {
  return (
    <section className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-zinc-950 overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-8 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8 sm:mb-10"
        >
          <div className="w-8 h-px bg-cyan-400/30" />
          <span className="section-label">The Problem</span>
        </motion.div>

        <ScrambleText
          text="YOU KNOW AI MATTERS. YOU JUST DON'T KNOW WHERE TO START."
          as="h2"
          className="text-heading font-cabinet font-black leading-[0.9] tracking-tighter uppercase mb-10 sm:mb-14"
          speed={30}
        />

        <div className="space-y-6 border-l-2 border-cyan-400/15 pl-5 sm:pl-8">
          <TextReveal
            text="Every week you wait, your competitors are automating their follow-ups, generating content in seconds, and closing leads while they sleep. You're still doing it all manually, or worse, you signed up for 6 AI tools and none of them talk to each other."
            className="text-body-lg text-zinc-400 font-light leading-relaxed"
          />
          <TextReveal
            text="You don't need another tutorial. You don't need a course. You need someone to come in, set it up, and make sure your team actually uses it."
            className="text-body-lg text-zinc-300 font-medium leading-relaxed"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-body-lg text-cyan-400 font-medium italic"
          >
            That&apos;s what we do.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
