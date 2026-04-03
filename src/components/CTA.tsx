"use client";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="cta" className="py-24 md:py-32 bg-[#111113] border-y border-[#27272a]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="label mb-4">Let&apos;s Go</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform
            <br />
            <span className="text-[#B91C1C]">Your Space?</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] mb-10 max-w-md mx-auto">
            Free estimates. Same-day availability. 72-hour perfection promise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4699706943"
              className="bg-[#B91C1C] hover:bg-[#991b1b] text-white text-sm font-semibold tracking-wide uppercase px-10 py-4 rounded-xl transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call (469) 970-6943
            </a>
          </div>

          <p className="text-xs text-[#71717a] mt-6">
            12200 Ford Rd, Dallas TX · Mon–Sun 9am–5pm
          </p>
        </motion.div>
      </div>
    </section>
  );
}
