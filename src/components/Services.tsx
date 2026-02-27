"use client";

import { motion } from "framer-motion";
import { Bot, Code, Cpu, LineChart, Search, Smartphone, Zap } from "lucide-react";

const services = [
    {
        title: "LOCAL SEO",
        subtitle: "MAP DOMINANCE",
        description: "If you're not on the first page, you don't exist. We deploy a systematic ground-game for your Google presence so the right prospects find you first.",
        icon: Search,
        stats: [
            { label: "RANKING", value: "TOP-TIER" },
            { label: "TRAFFIC", value: "QUALIFIED" }
        ]
    },
    {
        title: "WEBSITES",
        subtitle: "REVENUE ENGINES",
        description: "A website's only job is to capture leads and convert sales. We build high-velocity assets that tell your story and force a decision from every visitor.",
        icon: Code,
        stats: [
            { label: "CONVERSION", value: "FLUID" },
            { label: "LEAD CAPTURE", value: "SYSTEMIC" }
        ]
    },
    {
        title: "CUSTOM APPS",
        subtitle: "OPERATIONAL LOGIC",
        description: "Turn your business into a scalable asset. We build custom applications that automate your specific workflow and eliminate the founder as the bottleneck.",
        icon: Smartphone,
        stats: [
            { label: "AUTOMATION", value: "MAX" },
            { label: "EFFICIENCY", value: "100%" }
        ]
    },
    {
        title: "SALES AGENTS",
        subtitle: "CONVERSION NURTURE",
        description: "Most sales are lost in the follow-up. We build custom agents that nurture leads and close sales 24/7, ensuring no prospect is left behind.",
        icon: Bot,
        stats: [
            { label: "FOLLOW-UP", value: "100% ACTIVE" },
            { label: "SALES", value: "AUTONOMOUS" }
        ]
    }
];

export const Services = () => {
    return (
        <section id="services" className="relative py-48 bg-black overflow-hidden border-t border-zinc-900">
            {/* Background Blueprint Grid */}
            <div className="absolute inset-0 grid-blueprint opacity-20 pointer-events-none"></div>

            {/* Ambient Base Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-24 relative z-10">
                <div className="flex flex-col mb-32 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-6 mb-12"
                    >
                        <div className="h-px bg-cyan-400 w-16 shadow-[0_0_15px_rgba(0,255,255,0.8)] relative">
                            {/* Scanning dot on the line */}
                            <motion.div
                                animate={{ x: [0, 64, 0] }}
                                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                                className="absolute top-1/2 -translate-y-1/2 left-0 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_white]"
                            />
                        </div>
                        <span className="text-[11px] font-mono uppercase tracking-[0.8em] text-cyan-400 font-bold">
                            Strategic Deployment | v2.0
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-[11.5vw] sm:text-6xl md:text-8xl font-cabinet font-black uppercase mb-12 break-words"
                    >
                        THE 4 SYSTEMS <br />
                        <span className="text-zinc-600 font-black italic">FOR SCALING</span> <br />
                        <span className="text-white">YOUR BUSINESS</span><span className="text-cyan-400">.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            className="group relative bg-[#050505] p-10 md:p-14 border border-zinc-900 overflow-hidden h-full flex flex-col transition-all duration-700 hover:border-cyan-500/40 hover:shadow-[0_0_50px_rgba(0,255,255,0.05)] cursor-default"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            {/* Scanning Line Effect on Hover */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/50 shadow-[0_0_15px_rgba(0,255,255,0.8)] -translate-y-full group-hover:animate-[scan_3s_ease-in-out_infinite] pointer-events-none z-20"></div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-zinc-800 transition-colors duration-500 group-hover:border-cyan-400/60"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-zinc-800 transition-colors duration-500 group-hover:border-cyan-400/60"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-zinc-800 transition-colors duration-500 group-hover:border-cyan-400/60"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-zinc-800 transition-colors duration-500 group-hover:border-cyan-400/60"></div>

                            <div className="relative z-10 w-full flex flex-col h-full">
                                <div className="mb-14 flex items-center justify-between">
                                    <div className="p-5 bg-black border border-zinc-800 group-hover:border-cyan-400/60 group-hover:bg-cyan-950/20 transition-all duration-500 relative">
                                        {/* Status Dot */}
                                        <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-zinc-800 rounded-full group-hover:bg-cyan-400 group-hover:shadow-[0_0_8px_rgba(0,255,255,1)] transition-colors duration-500"></div>
                                        <service.icon className="w-8 h-8 text-zinc-500 group-hover:text-cyan-400 transition-colors duration-500 relative z-10" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[10px] font-mono text-zinc-600 tracking-[0.3em] font-bold uppercase mb-1">
                                            MODULE {String(idx + 1).padStart(2, '0')}
                                        </span>
                                        <span className="flex items-center gap-2 text-[9px] font-mono text-zinc-700 group-hover:text-cyan-400/80 transition-colors uppercase tracking-widest">
                                            <span className="inline-block w-1 h-3 bg-zinc-800 group-hover:bg-cyan-400 transition-colors animate-pulse"></span>
                                            Status: Active
                                        </span>
                                    </div>
                                </div>

                                <span className="block text-[11px] font-mono text-zinc-500 group-hover:text-cyan-400 tracking-[0.4em] uppercase mb-4 font-bold transition-colors duration-500">
                                    {service.subtitle}
                                </span>
                                <h4 className="text-4xl md:text-5xl font-cabinet font-black mb-8 uppercase text-white group-hover:text-white transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-zinc-400 group-hover:text-zinc-300 text-lg leading-relaxed mb-16 transition-colors duration-500 flex-grow font-light">
                                    {service.description}
                                </p>

                                <div className="space-y-4 pt-8 border-t border-zinc-900 mt-auto relative">
                                    {/* Small crosshair decoration */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] text-zinc-800 group-hover:text-cyan-400/30 transition-colors duration-500">+</div>

                                    {service.stats.map((stat, sIdx) => (
                                        <div key={sIdx} className="flex justify-between items-center font-mono text-[11px] tracking-[0.2em] uppercase bg-black/40 p-3 border border-zinc-900 group-hover:border-zinc-800 transition-colors duration-500">
                                            <span className="text-zinc-600 group-hover:text-zinc-400 transition-colors">{stat.label}</span>
                                            <span className="text-zinc-300 group-hover:text-cyan-400 transition-colors font-bold tracking-widest">{stat.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Standard styles definition for the scan animation if it doesn't exist */}
            <style jsx global>{`
                @keyframes scan {
                    0% { transform: translateY(-100%); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(500px); opacity: 0; }
                }
            `}</style>
        </section>
    );
};
