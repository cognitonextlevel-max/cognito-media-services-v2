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
    <section id="audit" className="relative py-48 bg-black overflow-hidden border-t border-white/5">
      {/* Background Logic Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <SystemGrid />
      </div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 mb-16"
            >
              <div className="w-12 h-px bg-cyan-400"></div>
              <span className="text-[10px] font-mono uppercase tracking-[0.8em] text-cyan-400/80 font-black">
                Lead Capture | Protocol 01
              </span>
            </motion.div>

            {/* Headline Block - Layered for precision */}
            <div className="relative mb-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.02 }}
                transition={{ duration: 2 }}
                className="absolute -top-20 -left-6 md:-top-24 md:-left-12 text-[80px] md:text-[300px] font-cabinet font-black leading-none text-transparent select-none pointer-events-none italic uppercase -z-10"
                style={{ WebkitTextStroke: '1px rgba(0, 255, 255, 0.4)' }}
              >
                BOOK
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 font-cabinet font-black uppercase text-[10.5vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[130px] flex flex-col items-start w-full overflow-visible break-words"
              >
                <span className="block">BOOK YOUR</span>
                <span className="cyan-shimmer italic block overflow-visible mt-2">OPERATIONAL</span>
                <span className="block">AUDIT<span className="text-cyan-400">.</span></span>
              </motion.h2>
            </div>

            <p className="text-xl md:text-2xl text-zinc-500 font-light leading-snug tracking-tight max-w-2xl text-balance border-l-2 border-cyan-400/20 pl-8 mb-24">
              Stop guessing why your business isn't scaling. Book a 30-minute strategic audit to identify your founder bottlenecks and map your system for growth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <BookingFeature icon={Clock} text="30-Min Logic Review" />
              <BookingFeature icon={Globe} text="Digital Asset Scan" />
              <BookingFeature icon={Shield} text="Zero-Pressure Analysis" />
              <BookingFeature icon={Calendar} text="Immediate Activation" />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group mt-24 lg:mt-0"
          >
            <div className="absolute -inset-4 bg-cyan-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative bg-zinc-950 border border-white/[0.03] rounded-sm overflow-hidden shadow-2xl group-hover:border-cyan-400/20 transition-all duration-700">
              <div className="p-8 border-b border-white/[0.03] bg-black/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-400/20 border border-cyan-400/40 animate-pulse"></div>
                  <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Secure Protocol: 0x2A</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-1 bg-zinc-900"></div>
                  <div className="w-4 h-1 bg-zinc-900"></div>
                </div>
              </div>

              <div className="p-16 text-center">
                <div className="mb-12 inline-flex items-center justify-center w-24 h-24 bg-zinc-900 border border-white/[0.05] rounded-sm rotate-45 group-hover:border-cyan-400/30 transition-all duration-700">
                  <Calendar className="text-zinc-700 group-hover:text-cyan-400 transition-colors -rotate-45" size={32} />
                </div>

                <h3 className="text-3xl font-cabinet font-black text-white uppercase mb-6">ACCESS CALENDAR</h3>
                <p className="text-zinc-500 text-sm mb-12 max-w-xs mx-auto font-light leading-relaxed font-mono uppercase tracking-widest">
                  Select Slot For Review
                </p>

                <button
                  data-cal-namespace="assessment"
                  data-cal-link="demarkuss-day-jdzixm/assessment"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className="inline-flex items-center justify-center gap-4 w-full py-7 bg-cyan-400 text-black text-[13px] font-mono font-black uppercase tracking-[0.5em] rounded-sm hover:bg-white transition-all duration-500 shadow-2xl"
                >
                  Confirm Protocol <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="mt-12 flex justify-center gap-12 opacity-20">
                  <div className="text-[8px] font-mono uppercase tracking-[0.4em]">Encryption: Active</div>
                  <div className="text-[8px] font-mono uppercase tracking-[0.4em]">Auth: Standard</div>
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
  <div className="flex items-center gap-6 group">
    <div className="w-12 h-12 border border-white/[0.03] flex items-center justify-center rounded-sm group-hover:border-cyan-400/20 transition-colors bg-zinc-950">
      <Icon size={18} className="text-zinc-800 group-hover:text-cyan-400 transition-colors" />
    </div>
    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-600 group-hover:text-zinc-300 transition-colors font-bold leading-none">{text}</span>
  </div>
);
