"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Clock, Shield } from "lucide-react";
import { ScrambleText } from "@/components/ScrambleText";
import { SystemGrid } from "@/components/SystemGrid";

export const AICTA = () => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "ai-audit" });
        cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } catch {
        // Cal.com failed — button still works
      }
    })();
  }, []);

  return (
    <section id="ai-audit" className="relative section-padding bg-black overflow-hidden border-t border-white/[0.03]">
      <div className="absolute inset-0 z-0 opacity-8 pointer-events-none">
        <SystemGrid />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/[0.08] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
        >
          <div className="w-8 h-px bg-cyan-400/30" />
          <span className="section-label">Final Step</span>
          <div className="w-8 h-px bg-cyan-400/30" />
        </motion.div>

        <ScrambleText
          text="STOP FALLING BEHIND."
          as="h2"
          className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase mb-6 sm:mb-8"
          speed={30}
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-body-lg text-zinc-500 font-light leading-relaxed max-w-xl mx-auto mb-12 sm:mb-16"
        >
          Book a free AI audit. We&apos;ll show you exactly where AI fits in your business and what it&apos;ll save you.
        </motion.p>

        {/* Calendar card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-lg mx-auto"
        >
          <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl opacity-20 pointer-events-none" />

          <div className="relative bg-zinc-950/80 border border-white/[0.04] rounded-sm overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            <div className="p-4 border-b border-white/[0.04] bg-black/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(0,255,255,0.6)]" />
                <span className="text-micro font-mono text-zinc-600 uppercase tracking-[0.3em]">AI Audit Scheduler</span>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 bg-zinc-900/50 border border-white/[0.04] rounded-sm rotate-45">
                <Calendar className="text-cyan-400 -rotate-45" size={20} />
              </div>

              <h3 className="text-subheading font-cabinet font-black text-white uppercase mb-3 tracking-tight">
                BOOK YOUR AI AUDIT
              </h3>
              <p className="text-micro font-mono text-zinc-600 uppercase tracking-[0.25em] mb-8 max-w-xs mx-auto">
                Free · 45 minutes · Zero pressure
              </p>

              <button
                type="button"
                data-cal-namespace="ai-audit"
                data-cal-link="demarkuss-day-jdzixm/assessment"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="group inline-flex items-center justify-center gap-3 w-full py-4 sm:py-5 bg-cyan-400 text-black text-caption font-mono font-black uppercase tracking-[0.4em] rounded-sm hover:bg-white transition-all duration-500 shadow-[0_0_50px_rgba(34,211,238,0.12)] glow-pulse"
              >
                Book Free AI Audit
                <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
              </button>

              <div className="mt-6 flex items-center justify-center gap-4 text-micro font-mono text-zinc-700 uppercase tracking-[0.2em]">
                <a href="tel:4699706943" className="hover:text-cyan-400 transition-colors">469.970.6943</a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/[0.03] flex justify-center gap-8 opacity-25">
                <span className="text-[7px] font-mono uppercase tracking-[0.3em] flex items-center gap-1.5">
                  <Shield size={8} /> Secure
                </span>
                <span className="text-[7px] font-mono uppercase tracking-[0.3em] flex items-center gap-1.5">
                  <Clock size={8} /> Instant
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
