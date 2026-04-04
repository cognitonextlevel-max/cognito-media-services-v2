"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Clock, Globe, Shield } from "lucide-react";
import { SystemGrid } from "./SystemGrid";
import { ScrambleText } from "./ScrambleText";

export const Booking = () => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ "namespace": "assessment" });
        cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
      } catch {
        // Cal.com embed failed to load — button still works via data attributes
      }
    })();
  }, []);

  return (
    <section id="audit" className="relative section-padding bg-black overflow-hidden border-t border-white/[0.03]">
      <div className="absolute inset-0 z-0 opacity-8 pointer-events-none">
        <SystemGrid />
      </div>
      {/* Large glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/[0.08] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:gap-24 items-center">
          {/* Left — conversion copy */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8 sm:mb-10"
            >
              <div className="w-8 sm:w-12 h-px bg-cyan-400/30 shadow-[0_0_8px_rgba(0,255,255,0.3)]" />
              <span className="section-label">Let&apos;s Go</span>
            </motion.div>

            <ScrambleText
              text="BOOK YOUR FREE STRATEGIC AUDIT."
              as="h2"
              className="text-display font-cabinet font-black uppercase leading-[0.85] tracking-tighter mb-8 sm:mb-10"
              speed={30}
            />

            <p className="text-body-lg text-zinc-500 font-light leading-relaxed max-w-md border-l-2 border-cyan-400/15 pl-5 sm:pl-8 mb-10 sm:mb-14">
              30 minutes. Zero pressure. Just a blueprint for where the money is hiding.{" "}
              <span className="text-white font-medium">Or call me directly: 469.970.6943</span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <BookingFeature icon={Clock} text="30-Minute Deep Review" />
              <BookingFeature icon={Globe} text="Custom Systems Blueprint" />
              <BookingFeature icon={Shield} text="Zero Pressure, Just Strategy" />
              <BookingFeature icon={Calendar} text="Same-Day Availability" />
            </div>
          </div>

          {/* Right — calendar embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/10 to-transparent blur-3xl opacity-20 pointer-events-none" />

            <div className="relative bg-zinc-950/80 border border-white/[0.04] rounded-sm overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm">
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-white/[0.04] bg-black/40 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(0,255,255,0.6)]" />
                  <span className="text-micro font-mono text-zinc-600 uppercase tracking-[0.3em]">Scheduler</span>
                </div>
                <span className="text-micro font-mono text-zinc-800 uppercase tracking-[0.2em]">DD Systems</span>
              </div>

              {/* Calendar body */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 text-center">
                <div className="mb-8 sm:mb-10 inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-zinc-900/50 border border-white/[0.04] rounded-sm rotate-45 transition-all duration-700 hover:border-cyan-400/20 hover:shadow-[0_0_30px_rgba(0,255,255,0.08)]">
                  <Calendar className="text-cyan-400 -rotate-45" size={22} />
                </div>

                <h3 className="text-subheading font-cabinet font-black text-white uppercase mb-3 tracking-tight">
                  ACCESS CALENDAR
                </h3>
                <p className="text-micro font-mono text-zinc-600 uppercase tracking-[0.25em] mb-8 sm:mb-10 max-w-xs mx-auto leading-relaxed">
                  Secure your slot for operational logic review
                </p>

                <button
                  type="button"
                  data-cal-namespace="assessment"
                  data-cal-link="demarkuss-day-jdzixm/assessment"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className="group inline-flex items-center justify-center gap-3 w-full py-4 sm:py-5 bg-cyan-400 text-black text-caption font-mono font-black uppercase tracking-[0.4em] rounded-sm hover:bg-white transition-all duration-500 shadow-[0_0_50px_rgba(34,211,238,0.12)] hover:shadow-[0_0_70px_rgba(34,211,238,0.25)] glow-pulse"
                  data-magnetic
                >
                  Book Free Audit
                  <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
                </button>

                <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/[0.03] flex justify-center gap-8 sm:gap-12 opacity-25">
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
      </div>
    </section>
  );
};

const BookingFeature = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-10 h-10 sm:w-11 sm:h-11 border border-white/[0.04] flex items-center justify-center rounded-sm group-hover:border-cyan-400/15 transition-colors duration-500 bg-zinc-950 shrink-0">
      <Icon size={15} className="text-zinc-700 group-hover:text-cyan-400 transition-colors duration-500" />
    </div>
    <span className="text-micro font-mono uppercase tracking-[0.3em] text-zinc-600 group-hover:text-zinc-300 transition-colors duration-500 font-bold leading-tight">
      {text}
    </span>
  </div>
);
