"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { ScrambleText } from "@/components/ScrambleText";
import { TiltCard } from "@/components/TiltCard";

const tiers = [
  {
    name: "AI AUDIT",
    price: "Free",
    description: "Assessment + custom AI roadmap",
    duration: "45 minutes",
    cta: "Book Now",
    href: "#ai-audit",
    featured: false,
  },
  {
    name: "AI SETUP",
    price: "From $3,500",
    description: "On-site installation + team training",
    duration: "1-2 weeks",
    cta: "Get Started",
    href: "#ai-audit",
    featured: true,
  },
  {
    name: "AI RETAINER",
    price: "From $1,500/mo",
    description: "Ongoing management + new builds",
    duration: "Month-to-month",
    cta: "Add After Setup",
    href: "#ai-audit",
    featured: false,
  },
];

export const AIPricing = () => {
  return (
    <section className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-zinc-950 overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-8 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="w-8 h-px bg-cyan-400/30" />
            <span className="section-label">Pricing</span>
            <div className="w-8 h-px bg-cyan-400/30" />
          </motion.div>

          <ScrambleText
            text="CLEAR PRICING. NO RETAINER REQUIRED TO START."
            as="h2"
            className="text-heading font-cabinet font-black leading-[0.9] tracking-tighter uppercase"
            speed={30}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.19, 1, 0.22, 1] }}
            >
              <TiltCard className="h-full">
                <div className={`group relative p-8 sm:p-10 border h-full flex flex-col transition-all duration-700 ${
                  tier.featured
                    ? "border-cyan-400/30 bg-[#050505] shadow-[0_0_40px_rgba(0,255,255,0.05)]"
                    : "border-zinc-900/50 bg-[#050505]"
                } hover:border-cyan-400/40`}>
                  {/* Featured badge */}
                  {tier.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-cyan-400 text-black text-micro font-mono font-black uppercase tracking-[0.3em]">
                      Most Popular
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    <span className="text-micro font-mono text-cyan-400/50 font-bold uppercase tracking-[0.5em] mb-4">
                      {tier.name}
                    </span>
                    <span className="text-subheading sm:text-heading font-cabinet font-black text-white mb-3 tracking-tighter">
                      {tier.price}
                    </span>
                    <p className="text-body text-zinc-500 font-light mb-2">
                      {tier.description}
                    </p>
                    <span className="text-micro font-mono text-zinc-700 uppercase tracking-[0.3em] mb-8 sm:mb-10">
                      {tier.duration}
                    </span>

                    <div className="mt-auto">
                      <Link
                        href={tier.href}
                        className={`group/btn flex items-center justify-center gap-3 w-full py-4 text-caption font-mono font-black uppercase tracking-[0.4em] rounded-sm transition-all duration-500 ${
                          tier.featured
                            ? "bg-cyan-400 text-black hover:bg-white shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                            : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-cyan-400/40 hover:text-cyan-400"
                        }`}
                      >
                        {tier.cta}
                        <ChevronRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
