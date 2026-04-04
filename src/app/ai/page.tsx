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
  title: "AI Deployment — On-Site AI Setup for Dallas Businesses | DeMarkuss Day",
  description: "We come to your business, install custom AI agents — voice bots, sales automation, content engines — and train your team in person. DFW only. Setup in 1-2 weeks.",
};

export default function AIPage() {
  return (
    <main className="relative min-h-screen bg-black pb-20 sm:pb-0">
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
