import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ManifestoAndEcosystem } from "@/components/ManifestoAndEcosystem";
import { ClientEffects } from "@/components/ClientEffects";
import { Award, BookOpen, Building2, CheckCircle2, ExternalLink, ShieldCheck, Smartphone, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About DeMarkuss Day | Systems Architect, Author & Founder",
  description: "Learn about DeMarkuss Day, founder of Cognito Media Services and DeMarkuss Day AI Systems. From commercial low-voltage trade roots to retail contracts with Nebraska Furniture Mart, trade mentorship, published author, and on-site AI implementation.",
  alternates: {
    canonical: "https://www.demarkussday.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black pb-20 sm:pb-0 text-white">
      <ClientEffects />
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 px-5 sm:px-8 md:px-12 lg:px-24 border-b border-zinc-900/50">
        <div className="absolute inset-0 grid-blueprint opacity-10 pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-900/[0.08] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1800px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="section-label flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-cyan-400/40 shadow-[0_0_8px_rgba(0,255,255,0.6)]" />
                FOUNDER &amp; ARCHITECT
              </span>

              <h1 className="text-display font-cabinet font-black leading-[0.9] tracking-tighter uppercase mb-6">
                BUILT IN THE FIELD.<br />
                <span className="cyan-shimmer">SCALED WITH INTELLIGENCE.</span>
              </h1>

              <blockquote className="text-body-lg text-zinc-400 font-light italic leading-relaxed mb-8 border-l-2 border-cyan-400/40 pl-6 bg-gradient-to-r from-cyan-950/20 to-transparent py-3">
                “We believe in technology. We believe everyone should have access to good services.”
              </blockquote>

              <p className="text-body text-zinc-400 font-light leading-relaxed mb-6 max-w-2xl">
                DeMarkuss Day is a Dallas-Fort Worth based systems architect, licensed low-voltage contractor, published author, and founder of Cognito Media Services and DeMarkuss Day AI Systems.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="#manifesto"
                  className="px-6 py-3 bg-cyan-400 text-black font-mono text-caption uppercase tracking-widest font-bold hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                >
                  Read The Manifesto
                </Link>
                <Link
                  href="https://cognitomediaservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-zinc-800 bg-zinc-950 text-white font-mono text-caption uppercase tracking-widest hover:border-cyan-400/40 transition-colors flex items-center gap-2"
                >
                  Cognito Media Services <ExternalLink size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative group p-3 border border-zinc-900 bg-[#070707]">
                <div className="relative aspect-[4/5] overflow-hidden bg-zinc-950">
                  <Image
                    src="/founder.jpg"
                    alt="DeMarkuss Day - Founder of Cognito Media Services and DeMarkuss Day AI Systems"
                    fill
                    className="object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <div className="p-4 flex items-center justify-between border-t border-zinc-900 mt-3">
                  <div>
                    <span className="block font-cabinet font-black uppercase text-white tracking-wider">DeMarkuss Day</span>
                    <span className="block text-micro font-mono text-zinc-500 uppercase tracking-widest">Dallas–Fort Worth, TX</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span className="text-micro font-mono text-cyan-400 uppercase tracking-widest">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Manifesto & Ecosystem Section */}
      <ManifestoAndEcosystem />

      <Footer />
    </main>
  );
}
