"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  BookOpen, 
  ExternalLink, 
  ShieldCheck, 
  Smartphone, 
  Zap, 
  Users, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export const ManifestoAndEcosystem = () => {
  return (
    <section id="manifesto" className="relative section-padding px-5 sm:px-8 md:px-12 lg:px-24 bg-black overflow-hidden border-t border-zinc-900/50">
      <div className="absolute inset-0 grid-blueprint opacity-8 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-900/[0.07] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-cyan-400 w-8 sm:w-12 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
            <span className="section-label">The Core Creed &amp; Ecosystem</span>
          </div>
          <h2 className="text-display font-cabinet font-black leading-[0.85] tracking-tighter uppercase mb-6 sm:mb-8 text-white">
            WE BELIEVE IN TECHNOLOGY.<br />
            <span className="cyan-shimmer">EVERYONE DESERVES GREAT SERVICES.</span>
          </h2>
          <p className="text-body-lg text-zinc-400 font-light max-w-3xl leading-relaxed">
            Technology is not meant to replace human drive; it is meant to eliminate chaos so real humans can build, execute, and scale. We don’t hide behind Zoom links or generic video courses. We show up directly, install the systems on your machines, and make excellence predictable.
          </p>
        </div>

        {/* 3 Manifesto Tenets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24">
          <div className="p-8 bg-[#050505] border border-zinc-900/60 hover:border-cyan-400/30 transition-all duration-700">
            <span className="text-micro font-mono text-cyan-400 font-bold tracking-[0.4em] block mb-4">TENET 01</span>
            <h3 className="text-2xl font-cabinet font-black uppercase tracking-tight text-white mb-3">
              Equal Access to Scale
            </h3>
            <p className="text-body text-zinc-500 font-light leading-relaxed">
              Every neighborhood business, local trade contractor, and clinic deserves the same cutting-edge voice AI, custom Next.js web speed, and automated backend that Silicon Valley takes for granted.
            </p>
          </div>

          <div className="p-8 bg-[#050505] border border-zinc-900/60 hover:border-cyan-400/30 transition-all duration-700">
            <span className="text-micro font-mono text-cyan-400 font-bold tracking-[0.4em] block mb-4">TENET 02</span>
            <h3 className="text-2xl font-cabinet font-black uppercase tracking-tight text-white mb-3">
              Systems Over Chaos
            </h3>
            <p className="text-body text-zinc-500 font-light leading-relaxed">
              Working 18-hour days while balancing on a ladder answering client calls is a bottleneck. We build digital nervous systems so growth happens predictably while your time is protected.
            </p>
          </div>

          <div className="p-8 bg-[#050505] border border-zinc-900/60 hover:border-cyan-400/30 transition-all duration-700">
            <span className="text-micro font-mono text-cyan-400 font-bold tracking-[0.4em] block mb-4">TENET 03</span>
            <h3 className="text-2xl font-cabinet font-black uppercase tracking-tight text-white mb-3">
              Hands-On Integrity
            </h3>
            <p className="text-body text-zinc-500 font-light leading-relaxed">
              From commercial low-voltage conduits behind hotel walls to multi-agent neural networks: hide the complexity, test every wire and API, and never leave until the team is fully trained.
            </p>
          </div>
        </div>

        {/* The Business Journey & Retail Contracts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mb-16 sm:mb-24 items-start">
          <div className="lg:col-span-7 p-8 sm:p-12 border border-zinc-900/60 bg-[#050505]">
            <span className="text-micro font-mono text-cyan-400 font-bold tracking-[0.4em] block mb-4">THE ORIGIN &amp; SCALE</span>
            <h3 className="text-3xl sm:text-4xl font-cabinet font-black uppercase tracking-tight text-white mb-6">
              From Pulling Wire to Nebraska Furniture Mart Contracts &amp; AI
            </h3>
            <div className="space-y-4 text-body text-zinc-400 font-light leading-relaxed mb-8">
              <p>
                In 2009, DeMarkuss Day started in commercial infrastructure—pulling low-voltage cable, terminating fiber, and wiring commercial towers and hotels across Texas. In 2012, that obsession became <strong className="text-white font-medium">Cognito Media Services</strong>.
              </p>
              <p>
                Cognito Media grew into a high-volume powerhouse, securing certified installation partnerships with retail giants like <strong className="text-white font-medium">Nebraska Furniture Mart (NFM)</strong> and partnering with <strong className="text-white font-medium">Best Buy</strong> on complex residential and commercial audiovisual and smart integration projects throughout North Texas.
              </p>
              <p>
                To provide clients an unbeatable experience, we engineered our own proprietary client app on iOS and Android. When legacy CMS performance and security issues bottlenecked the original <code className="text-cyan-400 font-mono text-xs">cognitomediaservices.net</code>, we re-architected the entire platform onto <code className="text-cyan-400 font-mono text-xs">cognitomediaservice.com</code> with sub-second Next.js speeds and live quote engines.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-900">
              <div>
                <span className="text-2xl sm:text-3xl font-cabinet font-black text-cyan-400">2,847+</span>
                <span className="block text-micro font-mono text-zinc-600 uppercase tracking-widest mt-1">Installs Completed</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-cabinet font-black text-cyan-400">NFM</span>
                <span className="block text-micro font-mono text-zinc-600 uppercase tracking-widest mt-1">Retail Contracts</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-cabinet font-black text-cyan-400">50+</span>
                <span className="block text-micro font-mono text-zinc-600 uppercase tracking-widest mt-1">Techs Mentored</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            {/* Press Feature */}
            <div className="p-8 border border-zinc-900/60 bg-[#050505] hover:border-cyan-400/30 transition-all duration-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-micro font-mono text-cyan-400 font-bold tracking-[0.3em] flex items-center gap-2">
                  <Award size={16} /> PRESS RECOGNITION
                </span>
                <span className="text-micro font-mono text-zinc-600">SHOUTOUT DFW</span>
              </div>
              <h4 className="text-xl font-cabinet font-black uppercase text-white mb-2">
                “Meet DeMarkuss Day: Smart Home Specialist &amp; Founder”
              </h4>
              <p className="text-body text-zinc-500 font-light text-sm mb-4">
                Featured in the SHOUTOUT DFW Decision Makers Series, exploring DeMarkuss&apos;s journey from direct sales to commercial low-voltage infrastructure and AI systems.
              </p>
              <Link 
                href="https://shoutoutdfw.com/meet-demarkuss-day-smart-home-specialist-founder-cognito-media-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-micro font-mono text-cyan-400 hover:text-white uppercase tracking-widest transition-colors font-bold"
              >
                Read Feature Article <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Flagship Business Link */}
            <div className="p-8 border border-zinc-900/60 bg-[#050505] hover:border-cyan-400/30 transition-all duration-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-micro font-mono text-cyan-400 font-bold tracking-[0.3em] flex items-center gap-2">
                  <Building2 size={16} /> FLAGSHIP BUSINESS
                </span>
                <span className="text-micro font-mono text-zinc-600">SINCE 2012</span>
              </div>
              <h4 className="text-xl font-cabinet font-black uppercase text-white mb-2">
                Cognito Media Services
              </h4>
              <p className="text-body text-zinc-500 font-light text-sm mb-4">
                Dallas–Fort Worth’s premier smart home automation, Dolby Atmos cinema, commercial AV, and zero-wire TV wall mounting provider.
              </p>
              <Link 
                href="https://cognitomediaservice.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-micro font-mono text-cyan-400 hover:text-white uppercase tracking-widest transition-colors font-bold"
              >
                Visit CognitoMediaService.com <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Books & Tech Mentorship */}
        <div className="mb-16 sm:mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-cyan-400 w-8 sm:w-12 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
            <span className="section-label">Published Works &amp; Trade Blueprint</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Book 1 */}
            <div className="p-8 sm:p-10 border border-zinc-900/60 bg-[#050505] hover:border-cyan-400/30 transition-all duration-700 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-black border border-zinc-800 w-fit text-cyan-400 mb-6">
                  <BookOpen size={24} />
                </div>
                <span className="text-micro font-mono text-zinc-600 uppercase tracking-widest block mb-2">Author &amp; Mentor</span>
                <h3 className="text-2xl font-cabinet font-black uppercase text-white mb-4">
                  How to Make 6 Figures with a TV Installation Company
                </h3>
                <p className="text-body text-zinc-400 font-light leading-relaxed mb-6">
                  The battle-tested blueprint used to mentor over 50 technicians across the country on pricing, commercial tooling, customer acquisition, and scaling multi-vehicle service businesses.
                </p>
              </div>
              <div className="pt-6 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-micro font-mono text-cyan-400/70 uppercase tracking-widest">Trade Scaling Blueprint</span>
                <span className="text-micro font-mono text-zinc-500 uppercase tracking-widest">Amazon Published</span>
              </div>
            </div>

            {/* Book 2 */}
            <div className="p-8 sm:p-10 border border-zinc-900/60 bg-[#050505] hover:border-cyan-400/30 transition-all duration-700 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-black border border-zinc-800 w-fit text-cyan-400 mb-6">
                  <Sparkles size={24} />
                </div>
                <span className="text-micro font-mono text-zinc-600 uppercase tracking-widest block mb-2">Co-Authored with Montrel Powell</span>
                <h3 className="text-2xl font-cabinet font-black uppercase text-white mb-4">
                  LUMA: Learn, Understand, Master, Achieve
                </h3>
                <p className="text-body text-zinc-400 font-light leading-relaxed mb-6">
                  A comprehensive operating framework for high-performance mindset, discipline, and execution—helping individuals break out of reactive routines and achieve mastery.
                </p>
              </div>
              <div className="pt-6 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-micro font-mono text-cyan-400/70 uppercase tracking-widest">Mindset &amp; Execution</span>
                <span className="text-micro font-mono text-zinc-500 uppercase tracking-widest">Amazon Published</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Apps & Developer Pages & Socials */}
        <div className="p-8 sm:p-12 border border-zinc-900/60 bg-[#050505]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-micro font-mono text-cyan-400 font-bold tracking-[0.4em] block mb-3">DEVELOPER &amp; APP ECOSYSTEM</span>
              <h3 className="text-2xl sm:text-3xl font-cabinet font-black uppercase text-white mb-4">
                Verified App Store &amp; Developer Registries
              </h3>
              <p className="text-body text-zinc-400 font-light leading-relaxed mb-6">
                Custom mobile software engineering for client booking and real-time operations, distributed through official Apple Developer and Google Play developer accounts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://apps.apple.com/us/app/cognito-media-services/id6451157247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-cyan-400/40 text-caption font-mono uppercase tracking-widest text-white transition-all flex items-center gap-2"
                >
                  <Smartphone size={16} className="text-cyan-400" /> Apple App Store <ArrowUpRight size={14} />
                </Link>
                <Link
                  href="https://cognitomediaservice.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-zinc-900 border border-zinc-800 hover:border-cyan-400/40 text-caption font-mono uppercase tracking-widest text-white transition-all flex items-center gap-2"
                >
                  <Building2 size={16} className="text-cyan-400" /> Cognito Media Services <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-micro font-mono text-zinc-600 uppercase tracking-widest mb-1">Official Channels &amp; Registries</span>
              <div className="grid grid-cols-2 gap-2.5">
                <Link href="https://x.com/demarkuss1" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-zinc-900 bg-black hover:border-cyan-400/40 text-caption font-mono uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-all flex items-center justify-between">
                  X / Twitter <ArrowUpRight size={12} />
                </Link>
                <Link href="https://www.linkedin.com/in/demarkuss-day-a1202b20/" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-zinc-900 bg-black hover:border-cyan-400/40 text-caption font-mono uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-all flex items-center justify-between">
                  LinkedIn <ArrowUpRight size={12} />
                </Link>
                <Link href="https://demarkussday.substack.com" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-zinc-900 bg-black hover:border-cyan-400/40 text-caption font-mono uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-all flex items-center justify-between">
                  Substack <ArrowUpRight size={12} />
                </Link>
                <Link href="https://www.instagram.com/demarkuss_day" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-zinc-900 bg-black hover:border-cyan-400/40 text-caption font-mono uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-all flex items-center justify-between">
                  Instagram <ArrowUpRight size={12} />
                </Link>
                <Link href="https://www.youtube.com/@CognitoMediaServices" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-zinc-900 bg-black hover:border-cyan-400/40 text-caption font-mono uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-all flex items-center justify-between">
                  YouTube <ArrowUpRight size={12} />
                </Link>
                <Link href="https://www.tiktok.com/@demarkuss_day" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-zinc-900 bg-black hover:border-cyan-400/40 text-caption font-mono uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-all flex items-center justify-between">
                  TikTok <ArrowUpRight size={12} />
                </Link>
                <Link href="https://maps.google.com/?cid=16640237412327876977" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-zinc-900 bg-black hover:border-cyan-400/40 text-caption font-mono uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-all flex items-center justify-between">
                  Google Maps <ArrowUpRight size={12} />
                </Link>
                <Link href="https://www.yelp.com/biz/cognito-media-services-farmers-branch-3" target="_blank" rel="noopener noreferrer" className="p-2.5 border border-zinc-900 bg-black hover:border-cyan-400/40 text-caption font-mono uppercase tracking-wider text-zinc-300 hover:text-cyan-400 transition-all flex items-center justify-between">
                  Yelp Business <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
