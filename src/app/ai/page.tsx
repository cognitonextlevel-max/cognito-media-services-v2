import { AIHero } from "./sections/AIHero";
import { AIProblem } from "./sections/AIProblem";
import { AIInstall } from "./sections/AIInstall";
import { AIProcess } from "./sections/AIProcess";
import { AIAudience } from "./sections/AIAudience";
import { AIPricing } from "./sections/AIPricing";
import { AIFAQ } from "./sections/AIFAQ";
import { AICTA } from "./sections/AICTA";
import { AINav } from "./sections/AINav";
import { Footer } from "@/components/Footer";
import { ClientEffects } from "@/components/ClientEffects";
import { ScrollingMarquee } from "@/components/ScrollingMarquee";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Deployment - On-Site AI Setup for Dallas Businesses | DeMarkuss Day",
  description: "We come to your business, install custom AI agents like voice bots, sales automation, and content engines and train your team in person. DFW only. Setup in 1-2 weeks.",
  alternates: {
    canonical: "https://www.demarkussday.com/ai",
  },
};

const aiFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What if my team isn't tech-savvy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly why we train in person. We don't leave until everyone is comfortable. No jargon, no assumptions, just hands-on guidance until it clicks.",
      },
    },
    {
      "@type": "Question",
      name: "What AI tools do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install custom AI workflows, voice agents, and automation tools directly on your machines. We pick the best system for your needs, not the trendy one. Every system is custom-built for YOUR business.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to keep paying after setup?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The setup works on its own. The retainer is for ongoing optimization and new builds, which is completely optional.",
      },
    },
    {
      "@type": "Question",
      name: "How fast will I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most clients see ROI within the first week as automated follow-ups and lead capture start immediately after setup.",
      },
    },
    {
      "@type": "Question",
      name: "Is this just ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We build custom AI agents tailored to YOUR business, using multiple platforms orchestrated together. It's not a chatbot, it's a complete system.",
      },
    },
  ],
};

export default function AIPage() {
  return (
    <main className="relative min-h-screen bg-black pb-20 sm:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiFaqJsonLd) }}
      />
      <ClientEffects />
      <AINav />
      <AIHero />
      <ScrollingMarquee
        text="AI SALES AGENTS · AI RECEPTIONIST · CONTENT ENGINE · CRM AUTOMATION · REVIEW MANAGER"
        speed={30}
        variant="outline"
      />
      <AIProblem />
      <AIInstall />
      <ScrollingMarquee
        text="AUDIT · SETUP · TRAINING · SCALE"
        speed={35}
        direction="right"
        variant="large"
      />
      <AIProcess />
      <AIAudience />
      <AIPricing />
      <AIFAQ />
      <AICTA />
      <Footer />
    </main>
  );
}
