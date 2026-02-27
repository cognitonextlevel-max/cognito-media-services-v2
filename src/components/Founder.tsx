"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const Founder = () => {
    return (
        <section className="relative py-32 bg-black overflow-hidden border-t border-zinc-900">
            {/* Background elements */}
            <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
                    >
                        <div className="relative group p-4 border border-zinc-900 bg-[#050505]">
                            {/* Frame Decoration Edge Pieces */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400/40 transition-colors duration-500 group-hover:border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.2)]"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/40 transition-colors duration-500 group-hover:border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.2)]"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/40 transition-colors duration-500 group-hover:border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.2)]"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400/40 transition-colors duration-500 group-hover:border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.2)]"></div>

                            <div className="relative aspect-[3/4] overflow-hidden rounded-none grayscale group-hover:grayscale-[0.2] transition-all duration-1000 bg-black border border-zinc-900">
                                {/* Cyber Scan Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent -translate-y-full group-hover:animate-[scan_4s_linear_infinite] pointer-events-none z-20"></div>

                                <div className="absolute top-4 right-4 z-20 flex gap-2">
                                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(0,255,255,0.8)]"></div>
                                    <span className="text-[8px] font-mono text-cyan-400 uppercase tracking-widest">Live Record</span>
                                </div>

                                <div className="absolute bottom-4 left-4 z-20 bg-black/60 px-3 py-1.5 border border-zinc-800 backdrop-blur-sm">
                                    <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-[0.5em] block mb-0.5">Identity Profile</span>
                                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-bold">ID: DD-8472</span>
                                </div>

                                <Image
                                    src="/founder.jpg"
                                    alt="Founder"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
                        className="relative"
                    >
                        {/* Small background grid line */}
                        <div className="absolute left-[-40px] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-zinc-800 to-transparent hidden lg:block"></div>

                        <span className="flex items-center gap-4 text-[11px] font-mono text-cyan-400 uppercase tracking-[0.8em] mb-8 font-bold">
                            <span className="w-8 h-[1px] bg-cyan-400 shadow-[0_0_8px_rgba(0,255,255,0.8)]"></span>
                            Executive Directive
                        </span>
                        <h2 className="text-4xl md:text-6xl font-cabinet font-black leading-[1.1] mb-12 uppercase text-white">
                            BUILT IN <span className="italic text-zinc-400 transition-colors duration-1000">THE FIELD.</span> <br />
                            SCALED WITH LOGIC.
                        </h2>
                        <div className="space-y-12">
                            <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-2xl text-balance">
                                I built the Cognito Media & Business Solutions formula to solve the bottlenecks in my own business. We replace human guesswork with <span className="text-zinc-200 font-medium">engineered consistency.</span>
                            </p>

                            <div className="py-8 border-y border-zinc-900 bg-black/30">
                                <h3 className="flex items-center gap-3 font-mono text-[10px] text-zinc-400 uppercase tracking-[0.3em] mb-6 font-bold">
                                    <div className="w-1.5 h-1.5 bg-zinc-600"></div>
                                    Systems Built for Scale
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative text-zinc-400">
                                    <div className="p-5 bg-black border border-zinc-900 group relative overflow-hidden hover:border-zinc-700 transition-colors">
                                        <div className="w-1 h-full bg-cyan-400 absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="block text-zinc-200 font-cabinet font-bold uppercase tracking-wide mb-1 text-sm group-hover:text-cyan-400 transition-colors">Service Operations</span>
                                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] block">Logic for leaders</span>
                                    </div>
                                    <div className="p-5 bg-black border border-zinc-900 group relative overflow-hidden hover:border-zinc-700 transition-colors">
                                        <div className="w-1 h-full bg-cyan-400 absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="block text-zinc-200 font-cabinet font-bold uppercase tracking-wide mb-1 text-sm group-hover:text-cyan-400 transition-colors">Real Estate</span>
                                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] block">Automated workflows</span>
                                    </div>
                                    <div className="p-5 bg-black border border-zinc-900 group relative overflow-hidden hover:border-zinc-700 transition-colors">
                                        <div className="w-1 h-full bg-cyan-400 absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="block text-zinc-200 font-cabinet font-bold uppercase tracking-wide mb-1 text-sm group-hover:text-cyan-400 transition-colors">Short Term Rentals</span>
                                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] block">Process management</span>
                                    </div>
                                    <div className="p-5 bg-black border border-zinc-900 group relative overflow-hidden hover:border-zinc-700 transition-colors">
                                        <div className="w-1 h-full bg-cyan-400 absolute left-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <span className="block text-zinc-200 font-cabinet font-bold uppercase tracking-wide mb-1 text-sm group-hover:text-cyan-400 transition-colors">Small Business OS</span>
                                        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em] block">System documentation</span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-zinc-400 italic text-lg leading-relaxed border-l-[3px] border-cyan-400/40 pl-8 bg-gradient-to-r from-cyan-900/10 to-transparent py-4 pr-4">
                                "Chaos doesn't scale. Systems do. We install a digital nervous system that ensures growth is predictable and your time is protected."
                            </p>

                            <div className="pt-8 relative flex items-center gap-6">
                                <div>
                                    <span className="block text-white font-cabinet font-bold uppercase tracking-[0.2em] text-xl mb-1">DeMarkuss Day</span>
                                    <span className="block text-zinc-400 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">Founder, Cognito Media & Business Solutions</span>
                                </div>
                                <div className="h-[40px] w-[1px] bg-zinc-800"></div>
                                <div className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest text-right">
                                    AUTH: VERIFIED<br />
                                    LVL: OMEGA
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
