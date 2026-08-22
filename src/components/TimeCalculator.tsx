"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, DollarSign, Clock, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { ScrambleText } from "./ScrambleText";

export const TimeCalculator = () => {
  // Sliders state
  const [monthlyCalls, setMonthlyCalls] = useState<number>(90);
  const [dealValue, setDealValue] = useState<number>(1200);
  const [closeRate, setCloseRate] = useState<number>(25);

  // Hard mathematical calculations
  // Average service business misses 27% of calls during busy job hours/after 5pm
  const missedCallsPerMonth = Math.round(monthlyCalls * 0.27);
  // AI Voice Agent captures 100% of these calls and qualifies them with instant SMS booking
  const convertedMissedPerMonth = Math.max(1, Math.round(missedCallsPerMonth * (closeRate / 100)));
  const monthlyRevenueRecovered = convertedMissedPerMonth * dealValue;
  const annualRevenueRecovered = monthlyRevenueRecovered * 12;
  
  // Administrative time saved (phone tag, quoting, rescheduling: ~25 mins per lead)
  const hoursSavedPerWeek = Math.round(((monthlyCalls * 25) / 60) / 4);

  return (
    <section id="simulator" className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-zinc-900/60">
      {/* Blueprint grid and atmospheric radial glow */}
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-900/[0.08] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6 sm:mb-8"
        >
          <div className="h-px bg-cyan-400 w-8 sm:w-12 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
          <span className="section-label text-cyan-400 flex items-center gap-2">
            <Calculator size={14} /> Revenue Recovery Simulator
          </span>
        </motion.div>

        {/* Headline */}
        <ScrambleText
          text="CALCULATE YOUR UNCAPTURED MONTHLY REVENUE"
          as="h2"
          className="text-heading sm:text-display font-cabinet font-black leading-[0.9] tracking-tighter uppercase mb-6 sm:mb-8 text-white max-w-4xl"
          speed={25}
        />

        <p className="text-body-lg text-zinc-400 font-light max-w-3xl leading-relaxed mb-12 sm:mb-16">
          Every missed call is a customer hiring your competitor in 60 seconds. Slide your real business metrics below to see how much cash our on-site AI deployment reclaims for your team.
        </p>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Controls Panel (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 bg-[#060606] border border-zinc-900/80 rounded-sm flex flex-col justify-between space-y-8">
            
            {/* Slider 1: Monthly Calls */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-cabinet font-bold uppercase tracking-wider text-zinc-200">
                  Monthly Inbound Calls &amp; Leads
                </label>
                <span className="font-mono text-cyan-400 font-bold text-lg bg-cyan-950/40 px-3 py-1 border border-cyan-400/20">
                  {monthlyCalls} calls/mo
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={500}
                step={10}
                value={monthlyCalls}
                onChange={(e) => setMonthlyCalls(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-600">
                <span>20 calls (Boutique)</span>
                <span>250 calls (Mid-size)</span>
                <span>500 calls (Enterprise)</span>
              </div>
            </div>

            {/* Slider 2: Average Job Value */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-cabinet font-bold uppercase tracking-wider text-zinc-200">
                  Average Job / Customer Value
                </label>
                <span className="font-mono text-cyan-400 font-bold text-lg bg-cyan-950/40 px-3 py-1 border border-cyan-400/20">
                  ${dealValue.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min={250}
                max={5000}
                step={50}
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-600">
                <span>$250 (Residential/Basic)</span>
                <span>$2,500 (Commercial/HVAC)</span>
                <span>$5,000+ (High-Ticket)</span>
              </div>
            </div>

            {/* Slider 3: Close Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-cabinet font-bold uppercase tracking-wider text-zinc-200">
                  Current Lead Close Rate
                </label>
                <span className="font-mono text-cyan-400 font-bold text-lg bg-cyan-950/40 px-3 py-1 border border-cyan-400/20">
                  {closeRate}%
                </span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                step={5}
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] font-mono text-zinc-600">
                <span>10% (Conservative)</span>
                <span>25% (Standard)</span>
                <span>50% (High-Converting)</span>
              </div>
            </div>

            {/* Proof Mechanism Callout */}
            <div className="p-4 bg-zinc-950 border border-zinc-900 text-xs font-mono text-zinc-400 flex items-start gap-3">
              <ShieldCheck size={16} className="text-cyan-400 shrink-0 mt-0.5" />
              <span>
                Based on industry data showing 27% of incoming contractor &amp; professional calls go unanswered during peak field hours. AI voice handles, qualifies, and logs appointments in &lt;800ms.
              </span>
            </div>

          </div>

          {/* Real-Time Output Dashboard (5 Cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-[#040809] border border-cyan-950/80 rounded-sm flex flex-col justify-between relative shadow-[0_0_50px_rgba(0,255,255,0.03)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/5 blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between border-b border-cyan-950/80 pb-4 mb-6">
                <span className="text-micro font-mono uppercase tracking-[0.25em] text-cyan-400 font-bold">
                  PROJECTED ANNUAL VALUE
                </span>
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
              </div>

              {/* Big Annual Number */}
              <div className="mb-6">
                <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 mb-1">
                  Annual Revenue Reclaimed:
                </div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-cabinet font-black text-cyan-400 tracking-tight leading-none">
                  +${annualRevenueRecovered.toLocaleString()}
                  <span className="text-xs font-mono text-zinc-500 ml-2 font-normal">/yr</span>
                </div>
              </div>

              {/* Breakdown Rows */}
              <div className="space-y-4 pt-4 border-t border-cyan-950/60">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Zap size={14} className="text-cyan-400" /> Missed Leads Recovered:
                  </span>
                  <span className="font-mono text-white font-bold">
                    ~{missedCallsPerMonth} calls/mo
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <DollarSign size={14} className="text-cyan-400" /> Extra Closed Jobs:
                  </span>
                  <span className="font-mono text-cyan-300 font-bold">
                    +{convertedMissedPerMonth} jobs/mo (+${monthlyRevenueRecovered.toLocaleString()}/mo)
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-zinc-400 flex items-center gap-2">
                    <Clock size={14} className="text-cyan-400" /> Admin Time Eliminated:
                  </span>
                  <span className="font-mono text-white font-bold">
                    ~{hoursSavedPerWeek} hrs/week saved
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Link
                href="#booking"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 bg-cyan-400 hover:bg-white text-black text-caption font-mono font-black uppercase tracking-[0.25em] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,255,0.3)]"
              >
                Reclaim This Revenue On-Site <ArrowRight size={15} />
              </Link>
              <p className="text-center text-[10px] font-mono text-zinc-500 mt-2 uppercase tracking-widest">
                Installed In-Person at your DFW facility
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
