"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrambleText } from "./ScrambleText";
import { MapPin, Download, GraduationCap, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "I ARRIVE",
    description: "I come to your office, warehouse, shop, or clinic. Dallas-Fort Worth only. No Zoom. No Loom. Me, at your door.",
    icon: MapPin,
    detail: "Same-day scheduling available",
  },
  {
    number: "02",
    title: "I INSTALL",
    description: "AI Workflows, Voice Agents, Website, SEO: everything gets set up on YOUR machines, on YOUR network. Production-ready before I leave.",
    icon: Download,
    detail: "All tools configured live",
  },
  {
    number: "03",
    title: "I TRAIN",
    description: "Your team gets hands-on training. No Loom videos. No PDFs. Real, in-person coaching until everyone is confident.",
    icon: GraduationCap,
    detail: "Entire staff onboarded",
  },
  {
    number: "04",
    title: "I SUPPORT",
    description: "30 days of direct access to me. Text, call, or book another on-site session. Your system doesn't break because I don't disappear.",
    icon: HeadphonesIcon,
    detail: "30-day direct line",
  },
];

export const Training = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={sectionRef}
      className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-zinc-900/50"
    >
      <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-900/[0.06] rounded-full blur-[180px] pointer-events-none" />

      {/* Scanning line animation */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={isInView ? { x: "200%" } : { x: "-100%" }}
        transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatDelay: 2 }}
        className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none z-20"
      />

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-8 sm:mb-10"
        >
          <div className="h-px bg-cyan-400 w-8 sm:w-12 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
          <span className="section-label">The Training</span>
        </motion.div>

        <ScrambleText
          text="I DON'T SEND YOU A LINK. I SHOW UP."
          as="h2"
          className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase mb-6 sm:mb-8"
          speed={30}
        />
        <p className="text-body-lg text-zinc-500 font-light max-w-2xl leading-relaxed mb-14 sm:mb-20">
          Every tool gets installed on-site. Every team member gets trained in-person.{" "}
          <span className="text-white font-medium">This is what separates me from every agency on the internet.</span>
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop: Horizontal line connecting all steps */}
          <div className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-zinc-800/50 z-0" />
          {/* Animated glow line on desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="hidden md:block absolute top-[60px] left-0 right-0 h-px bg-gradient-to-r from-cyan-400/50 via-cyan-400/20 to-cyan-400/50 z-0 origin-left shadow-[0_0_15px_rgba(0,255,255,0.3)]"
          />

          {/* Mobile: Vertical line */}
          <div className="md:hidden absolute top-0 bottom-0 left-[29px] w-px bg-zinc-800/50 z-0" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
            className="md:hidden absolute top-0 bottom-0 left-[29px] w-px bg-gradient-to-b from-cyan-400/50 via-cyan-400/20 to-cyan-400/50 z-0 origin-top shadow-[0_0_15px_rgba(0,255,255,0.3)]"
          />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.19, 1, 0.22, 1] }}
                className="group relative"
              >
                {/* Node dot */}
                <div className="flex md:flex-col items-start md:items-center gap-5 md:gap-0">
                  {/* Circle node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    className="relative shrink-0"
                  >
                    <div className="w-[60px] h-[60px] rounded-full bg-black border-2 border-zinc-800 group-hover:border-cyan-400/60 transition-all duration-700 flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(0,255,255,0.15)]">
                      <step.icon className="w-6 h-6 text-zinc-600 group-hover:text-cyan-400 transition-colors duration-500" />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-full border border-cyan-400/0 group-hover:border-cyan-400/20 group-hover:scale-150 transition-all duration-1000 pointer-events-none" />
                  </motion.div>

                  {/* Content — horizontal on mobile */}
                  <div className="md:mt-8 md:text-center flex-1">
                    <span className="text-micro font-mono text-cyan-400/50 font-bold tracking-[0.4em] block mb-2">
                      STEP {step.number}
                    </span>
                    <h3 className="text-subheading font-cabinet font-black uppercase tracking-tighter text-white group-hover:text-cyan-400 transition-colors duration-700 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-body text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500 mb-4">
                      {step.description}
                    </p>
                    {/* Tag */}
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold tracking-[0.3em] text-cyan-400/50 bg-cyan-950/20 border border-cyan-400/10 px-3 py-1 rounded-sm uppercase">
                      <span className="w-1 h-1 rounded-full bg-cyan-400/60 animate-pulse" />
                      {step.detail}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-20 p-6 sm:p-8 border border-zinc-900/50 bg-[#050505]"
        >
          <p className="text-body-lg text-zinc-400 font-light leading-relaxed max-w-3xl">
            Most agencies send you a Zoom link and disappear. I drive to your business, sit with your team, and build the system{" "}
            <span className="text-cyan-400 font-medium">in front of you.</span> When I leave, your team knows exactly how everything works.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
