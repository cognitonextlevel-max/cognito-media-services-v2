"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Clock, Globe, Shield } from "lucide-react";
import { SystemGrid } from "./SystemGrid";

export const Booking = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "assessment" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  return (
    <section id="audit" className="relative py-16 sm:py-24 md:py-32 bg-black overflow-hidden border-t border-white/5">
      {/* Background Logic Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <SystemGrid />
      </div>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 md:gap-24 items-center">

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12"
            >
              <div className="w-8 sm:w-12 h-px bg-cyan-400/40"></div>
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.4em] sm:tracking-[0.6em] text-cyan-400/60 font-black">
                Phase 01: Audit
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-cabinet font-black uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[5.5vw] xl:text-[100px] leading-[0.9] mb-8 sm:mb-12 tracking-tighter"
            >
              BOOK YOUR <br />
              <span className="cyan-shimmer italic">STRATEGIC</span> <br />
              AUDIT<span className="text-cyan-400">.</span>
            </motion.h2>

            <p className="text-base sm:text-lg md:text-xl text-zinc-500 font-light leading-relaxed max-w-xl border-l-2 border-cyan-400/20 pl-4 sm:pl-8 mb-10 sm:mb-16">
              Identify bottlenecks. Eliminate manual chaos. <br />
              Map your unfair systems advantage in <span className="text-white font-medium">30 minutes.</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <BookingFeature icon={Clock} text="30-Min High-IQ Review" />
              <BookingFeature icon={Globe} text="Operational Asset Scan" />
              <BookingFeature icon={Shield} text="Zero-Pressure Analysis" />
              <BookingFeature icon={Calendar} text="Immediate Activation" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/20 to-transparent blur-2xl opacity-30"></div>
            <div className="relative bg-zinc-950 border border-white/[0.05] rounded-sm overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="p-4 sm:p-6 border-b border-white/[0.05] bg-black/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]">Operational Scheduler</span>
                </div>
                <div className="h-4 w-[1px] bg-zinc-800"></div>
              </div>

              <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-center">
                <div className="mb-8 sm:mb-10 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900 border border-white/[0.05] rounded-sm rotate-45 group transition-all duration-700">
                  <Calendar className="text-cyan-400 -rotate-45" size={24} />
                </div>

                <h3 className="text-xl sm:text-2xl font-cabinet font-black text-white uppercase mb-3 sm:mb-4 tracking-tight">ACCESS CALENDAR</h3>
                <p className="text-zinc-500 text-[10px] sm:text-[11px] mb-8 sm:mb-10 max-w-xs mx-auto font-mono uppercase tracking-[0.2em] leading-relaxed">
                  Secure your slot for <br /> operational logic review
                </p>

                <button
                  data-cal-namespace="assessment"
                  data-cal-link="demarkuss-day-jdzixm/assessment"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className="group inline-flex items-center justify-center gap-3 sm:gap-4 w-full py-4 sm:py-6 bg-cyan-400 text-black text-[11px] sm:text-[13px] font-mono font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] rounded-sm hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                >
                  Confirm Protocol <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-6 sm:mt-10 pt-6 sm:pt-10 border-t border-white/[0.03] flex justify-center gap-6 sm:gap-10 opacity-30">
                  <div className="text-[8px] font-mono uppercase tracking-[0.3em] flex items-center gap-2">
                    <Shield size={10} /> Secure Connection
                  </div>
                  <div className="text-[8px] font-mono uppercase tracking-[0.3em] flex items-center gap-2">
                    <Clock size={10} /> Sync: 100%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BookingFeature = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-4 sm:gap-6 group">
    <div className="w-10 h-10 sm:w-12 sm:h-12 border border-white/[0.03] flex items-center justify-center rounded-sm group-hover:border-cyan-400/20 transition-colors bg-zinc-950 shrink-0">
      <Icon size={16} className="text-zinc-800 group-hover:text-cyan-400 transition-colors" />
    </div>
    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-zinc-600 group-hover:text-zinc-300 transition-colors font-bold leading-tight">{text}</span>
  </div>
);
