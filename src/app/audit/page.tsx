"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ArrowRight, Shield, Terminal, Zap } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown"; // You might need to install react-markdown

export default function AuditPage() {
    const [formData, setFormData] = useState({
        leadName: "",
        leadEmail: "",
        leadPhone: "",
        businessName: "",
        websiteUrl: "",
        location: "",
        primaryServices: "",
        targetKeywords: "",
        knownCompetitors: "",
        notes: "",
    });

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const response = await fetch("/api/audit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to generate audit");
            }

            setResult(data.result);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="min-h-screen bg-black text-zinc-300 font-inter selection:bg-cyan-500/30 selection:text-cyan-200">
            {/* Background Matrix/Grid effect */}
            <div className="fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 p-3 sm:p-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5">
                <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] font-black uppercase text-white group-hover:text-cyan-400 transition-colors">
                        DD SYSTEMS
                    </span>
                </Link>
                <Link href="/">
                    <button className="px-3 sm:px-6 py-2 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-400/10 text-[9px] sm:text-[10px] font-black tracking-widest uppercase transition-all duration-300 rounded text-zinc-400 hover:text-cyan-400 flex items-center gap-1.5 sm:gap-2">
                        <ArrowRight className="w-3 h-3 rotate-180" /> <span className="hidden sm:inline">Back to</span> System
                    </button>
                </Link>
            </header>

            {/* Main Content */}
            <main className="relative z-10 pt-20 sm:pt-32 pb-24 px-4 sm:px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16">

                {/* Left Column: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 space-y-8 sm:space-y-12"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-3 sm:mb-4">
                            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                            <span className="text-cyan-400 font-mono text-[9px] sm:text-[10px] tracking-widest uppercase font-bold">Diagnostics Engine</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-cabinet font-black leading-[0.95] tracking-[-0.03em] uppercase mb-4 sm:mb-6 text-white">
                            SEO Site Audit
                        </h1>
                        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light max-w-lg">
                            Input your business parameters below. Our neural engine will analyze your site, compare it against competitors, and generate a strategic growth architecture.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 max-w-xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500">Your Name</label>
                                <input
                                    required
                                    name="leadName"
                                    value={formData.leadName}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-none px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder:text-zinc-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500">Your Email</label>
                                <input
                                    required
                                    type="email"
                                    name="leadEmail"
                                    value={formData.leadEmail}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-none px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder:text-zinc-600"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    name="leadPhone"
                                    value={formData.leadPhone}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-none px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder:text-zinc-600"
                                    placeholder="(555) 123-4567"
                                />
                            </div>
                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500">Business Name</label>
                                <input
                                    required
                                    name="businessName"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-none px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder:text-zinc-600"
                                    placeholder="e.g. Acme Plumbing"
                                />
                            </div>
                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500">Website URL</label>
                                <input
                                    required
                                    type="url"
                                    name="websiteUrl"
                                    value={formData.websiteUrl}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-none px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder:text-zinc-600"
                                    placeholder="https://acme.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500">Service Area / Location</label>
                                <input
                                    required
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-none px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder:text-zinc-600"
                                    placeholder="e.g. Austin, TX"
                                />
                            </div>
                            <div className="space-y-1.5 sm:space-y-2">
                                <label className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500">Primary Services</label>
                                <input
                                    required
                                    name="primaryServices"
                                    value={formData.primaryServices}
                                    onChange={handleChange}
                                    className="w-full bg-zinc-900/50 border border-white/10 rounded-none px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder:text-zinc-600"
                                    placeholder="e.g. Roof repair, Installation"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5 sm:space-y-2">
                            <label className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500">Target Keywords (Comma Separated)</label>
                            <input
                                required
                                name="targetKeywords"
                                value={formData.targetKeywords}
                                onChange={handleChange}
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-none px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder:text-zinc-600"
                                placeholder="e.g. best roofer near me, emergency roof repair"
                            />
                        </div>

                        <div className="space-y-1.5 sm:space-y-2">
                            <label className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500">Known Competitors (Optional)</label>
                            <input
                                name="knownCompetitors"
                                value={formData.knownCompetitors}
                                onChange={handleChange}
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-none px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder:text-zinc-600"
                                placeholder="e.g. JoesRoofing.com"
                            />
                        </div>

                        <div className="space-y-1.5 sm:space-y-2">
                            <label className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-zinc-500">Notes / Goals (Optional)</label>
                            <textarea
                                name="notes"
                                value={formData.notes}
                                onChange={handleChange}
                                rows={3}
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-none px-3 sm:px-4 py-3 text-sm focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/50 transition-all text-white placeholder:text-zinc-600 resize-none"
                                placeholder="Tell us about specific challenges..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full group relative px-6 sm:px-8 py-4 bg-white text-black text-[11px] sm:text-[12px] font-black tracking-[0.2em] uppercase overflow-hidden mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <div className="absolute inset-0 bg-cyan-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                            <span className="relative flex items-center justify-center gap-3">
                                {loading ? (
                                    <>
                                        <Activity className="w-4 h-4 animate-spin" />
                                        Generating Audit...
                                    </>
                                ) : (
                                    <>
                                        <Terminal className="w-4 h-4" />
                                        Run Engine Audit
                                    </>
                                )}
                            </span>
                        </button>
                        {error && (
                            <p className="text-red-400 text-sm mt-4 p-3 sm:p-4 border border-red-500/20 bg-red-500/10">
                                {error}
                            </p>
                        )}
                    </form>
                </motion.div>

                {/* Right Column: Output / Terminal */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 border border-white/10 bg-zinc-900/30 backdrop-blur-xl relative overflow-hidden"
                >
                    {/* Output Header */}
                    <div className="border-b border-white/10 bg-black/40 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-zinc-600 bg-zinc-800" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-zinc-600 bg-zinc-800" />
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border border-zinc-600 bg-zinc-800" />
                        </div>
                        <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-zinc-500 uppercase">Output.log</span>
                    </div>

                    {/* Output Content */}
                    <div className="p-4 sm:p-6 h-[400px] sm:h-[500px] lg:h-[800px] overflow-y-auto custom-scrollbar font-mono text-sm leading-relaxed">
                        <AnimatePresence mode="wait">
                            {loading ? (
                                <motion.div
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex flex-col items-center justify-center text-zinc-500 gap-4 sm:gap-6"
                                >
                                    <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 animate-pulse" />
                                    <div className="space-y-2 text-center">
                                        <p className="uppercase tracking-widest text-[9px] sm:text-[10px]">Processing Parameters</p>
                                        <p className="uppercase tracking-widest text-[9px] sm:text-[10px]">Analyzing SERP Data</p>
                                        <p className="uppercase tracking-widest text-[9px] sm:text-[10px]">Compiling Directives</p>
                                    </div>
                                </motion.div>
                            ) : result ? (
                                <motion.div
                                    key="result"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="prose prose-invert prose-cyan max-w-none prose-sm sm:prose-base
                    prose-headings:font-cabinet prose-headings:font-black prose-headings:tracking-[-0.03em] prose-headings:uppercase
                    prose-a:text-cyan-400
                    prose-strong:text-white prose-strong:font-bold
                    prose-ul:list-square"
                                >
                                    <ReactMarkdown>{result}</ReactMarkdown>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="idle"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="h-full flex flex-col items-center justify-center text-zinc-600 gap-4"
                                >
                                    <Shield className="w-10 h-10 sm:w-12 sm:h-12 opacity-20" />
                                    <p className="uppercase tracking-widest text-[9px] sm:text-[10px]">Awaiting inputs...</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </main>

            {/* Global simple scrollbar styles for prose */}
            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.5); 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 255, 0.2); 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 255, 0.4); 
        }
      `}} />
        </div>
    );
}
