"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ScrambleText } from "./ScrambleText";
import { TiltCard } from "./TiltCard";
import { Brain, Phone, Workflow, ChevronRight, Terminal } from "lucide-react";
import Link from "next/link";

/* ─── Animated counter ─── */
const Counter = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: [0.19, 1, 0.22, 1] });
      const unsub = rounded.on("change", (v) => setDisplay(v));
      return () => { controls.stop(); unsub(); };
    }
  }, [isInView, count, value, rounded]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{display}{suffix}
    </span>
  );
};

/* ─── Terminal typing demo ─── */
const TerminalDemo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });
  const [promptText, setPromptText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing-prompt" | "thinking" | "typing-response">("idle");

  const prompt = "Write a follow-up email to a client who requested a plumbing estimate last week";
  const response = `Subject: Your Plumbing Estimate Ready When You Are

Hi Marcus,

Thanks for reaching out last week about the kitchen remodel plumbing. I've put together a detailed estimate covering the pipe rerouting, fixture installation, and code compliance inspection.

Total: $4,200 (includes parts + labor)
Timeline: 3-4 business days

I have availability this Thursday and Friday. Want me to lock in a slot?

Best,
Mike | Thompson Plumbing Co.`;

  useEffect(() => {
    if (!isInView || phase !== "idle") return;
    setPhase("typing-prompt");
    let i = 0;
    const typePrompt = setInterval(() => {
      if (i < prompt.length) {
        setPromptText(prompt.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typePrompt);
        setPhase("thinking");
        setTimeout(() => {
          setPhase("typing-response");
          let j = 0;
          const typeResponse = setInterval(() => {
            if (j < response.length) {
              setResponseText(response.slice(0, j + 1));
              j++;
            } else {
              clearInterval(typeResponse);
            }
          }, 12);
        }, 1200);
      }
    }, 30);
  }, [isInView, phase]);

  return (
    <div ref={ref} className="relative bg-[#0a0a0a] border border-zinc-800/80 rounded-sm overflow-hidden font-mono text-xs sm:text-sm">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#111] border-b border-zinc-800/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
        </div>
        <span className="text-[10px] text-zinc-600 tracking-wider uppercase ml-2 flex items-center gap-1.5">
          <Terminal size={10} /> AI Systems — Installed by DeMarkuss Day
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_6px_rgba(0,255,255,0.8)]" />
          <span className="text-[9px] text-cyan-400/70 uppercase tracking-widest font-bold">Live</span>
        </div>
      </div>

      <div className="p-4 sm:p-6 space-y-4 max-h-[400px] overflow-y-auto">
        {/* Prompt */}
        {promptText && (
          <div>
            <span className="text-cyan-400/60 text-[10px] uppercase tracking-widest block mb-1">You</span>
            <p className="text-zinc-300 leading-relaxed">
              {promptText}
              {phase === "typing-prompt" && <span className="inline-block w-[2px] h-4 bg-cyan-400 ml-0.5 animate-pulse" />}
            </p>
          </div>
        )}

        {/* Thinking */}
        {phase === "thinking" && (
          <div className="flex items-center gap-2 text-zinc-600">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
            <span className="text-[10px] uppercase tracking-widest">System is connecting...</span>
          </div>
        )}

        {/* Response */}
        {responseText && (
          <div className="border-l-2 border-cyan-400/20 pl-4">
            <span className="text-cyan-400/60 text-[10px] uppercase tracking-widest block mb-1">System</span>
            <pre className="text-zinc-400 leading-relaxed whitespace-pre-wrap font-mono text-xs">
              {responseText}
              {phase === "typing-response" && <span className="inline-block w-[2px] h-4 bg-cyan-400 ml-0.5 animate-pulse" />}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─── Training cards ─── */
const trainings = [
  {
    icon: Brain,
    title: "AI FOR BUSINESS",
    description: "We implement custom AI workflows on your team's machines and teach them how to draft emails, proposals, invoices, and SOPs in seconds. No YouTube required.",
    tag: "AI CORE",
  },
  {
    icon: Phone,
    title: "AI VOICE RECEPTIONIST",
    description: "We set up autonomous voice agents so your phone is answered 24/7 by an AI that sounds human. We train your team to manage it.",
    tag: "VOICE AI",
  },
  {
    icon: Workflow,
    title: "WORKFLOW AUTOMATION",
    description: "We connect your tools like QuickBooks, Google Calendar, and your CRM so data flows automatically. We show your team exactly how it works.",
    tag: "AUTOMATION",
  },
];

const stats = [
  { value: 72, suffix: "%", label: "of companies are already using AI in at least one business function" },
  { value: 5, suffix: "x", label: "faster response times with AI voice agents vs. human staff" },
  { value: 0, prefix: "$", suffix: "", label: "what it costs you to learn, we train you on-site, free during install" },
];

export const AIReadiness = () => {
  return (
    <section className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/[0.08] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-900/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8 sm:mb-10"
        >
          <div className="h-px bg-cyan-400 w-8 sm:w-12 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
          <span className="section-label">AI Readiness</span>
        </motion.div>

        {/* Headline */}
        <ScrambleText
          text="YOUR COMPETITORS ARE USING AI. YOU'RE STILL GOOGLING IT."
          as="h2"
          className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase mb-6 sm:mb-8"
          speed={30}
        />
        <p className="text-body-lg text-zinc-500 font-light max-w-2xl leading-relaxed mb-14 sm:mb-20">
          You don&apos;t need a computer science degree. You need someone to walk in, set it up, and show your team how to use it.{" "}
          <span className="text-cyan-400 font-medium">That&apos;s what I do.</span>
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="group p-6 sm:p-8 border border-zinc-900/50 bg-[#050505] hover:border-cyan-400/20 transition-all duration-700"
            >
              <div className="text-display font-cabinet font-black text-cyan-400 tracking-tighter leading-none mb-3">
                <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <p className="text-body text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Training cards + Terminal demo grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-14 sm:mb-20">
          {/* Left — Training cards */}
          <div className="space-y-4 sm:space-y-6">
            {trainings.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
              >
                <TiltCard className="h-full">
                  <div className="group relative p-6 sm:p-8 border border-zinc-900/50 bg-[#050505] hover:border-cyan-400/30 transition-all duration-700 h-full overflow-hidden">
                    {/* Scan line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_15px_rgba(0,255,255,0.8)] -translate-y-full group-hover:animate-[scan_3s_ease-in-out_infinite] pointer-events-none z-20" />

                    <div className="relative z-10 flex gap-5">
                      <div className="shrink-0 p-3 bg-black border border-zinc-800 group-hover:border-cyan-400/40 transition-all duration-500">
                        <t.icon className="w-5 h-5 text-zinc-600 group-hover:text-cyan-400 transition-colors duration-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-body-lg font-cabinet font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-700">
                            {t.title}
                          </h3>
                          <span className="text-[9px] font-mono font-bold tracking-[0.3em] text-cyan-400/50 bg-cyan-950/20 border border-cyan-400/15 px-2 py-0.5 rounded-sm">
                            {t.tag}
                          </span>
                        </div>
                        <p className="text-body text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                          {t.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Right — Terminal demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <TerminalDemo />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 border border-cyan-400/15 bg-[#050505] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <p className="text-body-lg text-zinc-400 font-light leading-relaxed max-w-xl">
            We don&apos;t just install it. We sit with your team until they get it.{" "}
            <span className="text-cyan-400 font-medium">No Loom videos. No PDFs. Real, in-person coaching.</span>
          </p>
          <Link
            href="#audit"
            className="group shrink-0 px-8 sm:px-12 py-4 bg-cyan-400 text-black text-caption font-mono font-black uppercase tracking-[0.4em] rounded-sm hover:bg-white transition-all duration-500 shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:shadow-[0_0_60px_rgba(34,211,238,0.35)] glow-pulse flex items-center gap-3"
          >
            Book On-Site Training
            <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>

    </section>
  );
};
