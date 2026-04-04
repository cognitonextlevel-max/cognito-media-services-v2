import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { AIReadiness } from "@/components/AIReadiness";
import { Modules } from "@/components/Modules";
import { Process } from "@/components/Process";
import { Training } from "@/components/Training";
import { Founder } from "@/components/Founder";
import { Reviews } from "@/components/Reviews";
import { WhatsNew } from "@/components/WhatsNew";
import { Qualify } from "@/components/Qualify";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { ScrollingMarquee } from "@/components/ScrollingMarquee";
import { ClientEffects } from "@/components/ClientEffects";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black pb-20 sm:pb-0">
      <ClientEffects />
      <Navigation />
      <Hero />
      <ScrollingMarquee
        text="CLAUDE · ELEVENLABS · VAPI · AUTOMATION · AI TRAINING · ON-SITE"
        speed={30}
        variant="outline"
      />
      <Problem />
      <AIReadiness />
      <Modules />
      <ScrollingMarquee
        text="BUILD ONCE · EXECUTE FOREVER · DEMARKUSS DAY"
        speed={40}
        direction="right"
        variant="large"
      />
      <Process />
      <Training />
      <Founder />
      <Reviews />
      <WhatsNew />
      <Qualify />
      <ScrollingMarquee
        text="DEPLOY WITH DEMARKUSS · AI INSTALLATION · UNFAIR ADVANTAGE"
        speed={28}
        variant="outline"
      />
      <Booking />
      <Footer />
    </main>
  );
}
