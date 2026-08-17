"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "./ScrambleText";
import { 
  XCircle, 
  CheckCircle2, 
  PhoneCall, 
  PhoneOff, 
  Calendar, 
  Clock, 
  Laptop, 
  Users, 
  Search, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";

interface ComparisonRow {
  category: string;
  icon: typeof PhoneCall;
  oldWay: {
    title: string;
    description: string;
    consequence: string;
  };
  newWay: {
    title: string;
    description: string;
    benefit: string;
  };
}

const comparisonData: ComparisonRow[] = [
  {
    category: "Inbound Call & Lead Capture",
    icon: PhoneCall,
    oldWay: {
      title: "Missed Calls & Voicemail Graveyard",
      description: "Phones ring while your team is on jobs or after hours. Calls roll to voicemail with 2–6 hour callback delays.",
      consequence: "78% of customers hire the first competitor who actually picks up.",
    },
    newWay: {
      title: "24/7 Sub-Second AI Voice Receptionist",
      description: "Answered in under 2 rings, 24/7/365. Natural human cadence answers questions, qualifies budget, and books appointments.",
      benefit: "Zero lost revenue. 100% lead capture rate instantly.",
    },
  },
  {
    category: "Dispatch & Quote Scheduling",
    icon: Calendar,
    oldWay: {
      title: "Manual Phone Tag & Sticky Notes",
      description: "Scribbled customer notes, forgotten follow-ups, and 15-minute phone tag loops to find an open time slot.",
      consequence: "10–15 hours lost every week to manual administrative chaos.",
    },
    newWay: {
      title: "Autonomous Calendar Sync & SMS Flow",
      description: "Instant two-way booking into Google Calendar or CRM. Caller receives an automated quote and SMS confirmation in 5 seconds.",
      benefit: "Frictionless customer booking with zero manual typing.",
    },
  },
  {
    category: "Implementation Protocol",
    icon: Laptop,
    oldWay: {
      title: "Disconnected Zoom Courses & Templates",
      description: "Outsourced overseas agencies sending generic software links or asking you to watch 40 hours of YouTube tutorials.",
      consequence: "Expensive tools sit unconfigured and abandoned after 30 days.",
    },
    newWay: {
      title: "In-Person Physical Deployment in DFW",
      description: "DeMarkuss Day physically walks into your Dallas–Fort Worth facility, installs on your machines, and connects your real tools.",
      benefit: "Turnkey operational systems live and working on Day 1.",
    },
  },
  {
    category: "Staff Training & Adoption",
    icon: Users,
    oldWay: {
      title: "Overwhelmed & Resistant Staff",
      description: "Employees intimidated by complex tech jargon, reverting back to slow manual habits when management isn't looking.",
      consequence: "Zero productivity gain despite paying monthly software fees.",
    },
    newWay: {
      title: "On-Site Hands-On Coaching",
      description: "We sit directly next to your team, running live customer scenarios until every dispatcher and tech is 100% confident.",
      benefit: "100% team adoption with zero tech anxiety.",
    },
  },
  {
    category: "Search & AI Discovery (GEO)",
    icon: Search,
    oldWay: {
      title: "Invisible on Google Maps & AI Search",
      description: "Outdated directory listings. Zero structured schema. AI search tools (ChatGPT, Perplexity, Gemini) omit your company.",
      consequence: "Losing high-ticket local jobs to digitally optimized competitors.",
    },
    newWay: {
      title: "Triangulated Entity Knowledge Graph",
      description: "Verified Google Business CID citations, Schema.org JSON-LD graph, and AI search crawler whitelisting.",
      benefit: "Dominant organic rank across Google Maps and generative AI search.",
    },
  },
];

export const SystemComparison = () => {
  return (
    <section id="comparison" className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-zinc-900/60">
      {/* Background blueprint grid and subtle radial glow */}
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-900/[0.06] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-6 sm:mb-8"
        >
          <div className="h-px bg-cyan-400 w-8 sm:w-12 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
          <span className="section-label text-cyan-400">Architecture Gap · SITE Framework</span>
        </motion.div>

        {/* Section Headline */}
        <ScrambleText
          text="THE OLD MANUAL CHAOS VS. THE DEMARKUSS DAY AUTONOMOUS STACK"
          as="h2"
          className="text-heading sm:text-display font-cabinet font-black leading-[0.9] tracking-tighter uppercase mb-6 sm:mb-8 text-white"
          speed={25}
        />
        
        <p className="text-body-lg text-zinc-400 font-light max-w-3xl leading-relaxed mb-12 sm:mb-16">
          Traditional businesses don’t lose customers because they lack skill. They lose customers because of <strong className="text-white font-medium">operational lag</strong>. Here is the exact difference between the manual status quo and our deployed AI systems.
        </p>

        {/* Column Headers (Desktop) */}
        <div className="hidden lg:grid grid-cols-12 gap-6 pb-4 border-b border-zinc-900 text-micro font-mono uppercase tracking-[0.3em]">
          <div className="col-span-3 text-zinc-500">Operational Dimension</div>
          <div className="col-span-4 text-red-400/80 flex items-center gap-2">
            <XCircle size={14} className="text-red-500" /> The Old Manual Way (Revenue Bleed)
          </div>
          <div className="col-span-5 text-cyan-400 flex items-center gap-2">
            <CheckCircle2 size={14} className="text-cyan-400" /> The DeMarkuss Day System (Autonomous Scale)
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="divide-y divide-zinc-900/80">
          {comparisonData.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch group"
            >
              {/* Category Label */}
              <div className="lg:col-span-3 flex flex-col justify-start">
                <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest block mb-1">0{idx + 1} // AREA</span>
                <h3 className="text-lg font-cabinet font-bold uppercase tracking-tight text-white flex items-center gap-2.5">
                  <row.icon size={18} className="text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                  {row.category}
                </h3>
              </div>

              {/* The Old Way Card */}
              <div className="lg:col-span-4 p-6 bg-[#080505] border border-red-950/40 rounded-sm flex flex-col justify-between hover:border-red-500/30 transition-colors">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-wider mb-2.5">
                    <XCircle size={14} className="text-red-500 shrink-0" />
                    {row.oldWay.title}
                  </div>
                  <p className="text-sm text-zinc-400 font-light leading-relaxed mb-4">
                    {row.oldWay.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-red-950/60 text-xs font-mono text-red-300/80">
                  <strong className="text-red-400 uppercase tracking-wider font-semibold">Cost: </strong>
                  {row.oldWay.consequence}
                </div>
              </div>

              {/* The DeMarkuss Day Way Card */}
              <div className="lg:col-span-5 p-6 bg-[#040809] border border-cyan-950/60 rounded-sm flex flex-col justify-between hover:border-cyan-400/40 transition-colors relative shadow-[0_0_30px_rgba(0,255,255,0.02)]">
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl pointer-events-none" />
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2.5">
                    <CheckCircle2 size={14} className="text-cyan-400 shrink-0 shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                    {row.newWay.title}
                  </div>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed mb-4">
                    {row.newWay.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-cyan-950/80 text-xs font-mono text-cyan-300 flex items-center justify-between">
                  <span>
                    <strong className="text-cyan-400 uppercase tracking-wider font-semibold">Advantage: </strong>
                    {row.newWay.benefit}
                  </span>
                  <Zap size={14} className="text-cyan-400 shrink-0 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Proof Strip & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 p-8 sm:p-10 bg-[#050505] border border-zinc-900/80 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
              <span className="text-micro font-mono uppercase tracking-[0.3em] text-cyan-400 font-bold">THE BOTTOM LINE</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-cabinet font-black text-white uppercase tracking-tight">
              Reclaim 15+ Hours &amp; Stop Bleeding High-Ticket Leads.
            </h4>
            <p className="text-sm text-zinc-400 font-light mt-1 max-w-xl">
              We don&apos;t sell theories. We physically arrive at your DFW office, connect your phone lines, deploy your voice agent, and train your staff.
            </p>
          </div>

          <Link
            href="#booking"
            className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 hover:bg-white text-black text-caption font-mono font-black uppercase tracking-[0.3em] transition-all duration-500 shrink-0 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
          >
            Claim Your On-Site Audit <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
