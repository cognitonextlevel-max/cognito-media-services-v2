import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { TimeCalculator } from "@/components/TimeCalculator";
import { Founder } from "@/components/Founder";
import { Services } from "@/components/Services";
import { Intelligence } from "@/components/Intelligence";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { VoiceAgent } from "@/components/VoiceAgent";
import { SmoothScroll } from "@/components/SmoothScroll";
import { MagneticCursor } from "@/components/MagneticCursor";
import { NoiseCanvas } from "@/components/NoiseCanvas";
import { ScrollingMarquee } from "@/components/ScrollingMarquee";
import { Preloader } from "@/components/Preloader";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black pb-20 sm:pb-0">
      <Preloader />
      <SmoothScroll />
      <MagneticCursor />
      <NoiseCanvas />
      <Navigation />
      <Hero />
      <ScrollingMarquee
        text="SYSTEMS · LOGIC · PRECISION · AUTOMATION · SCALE"
        speed={30}
        variant="outline"
      />
      <Philosophy />
      <ScrollingMarquee
        text="BUILD ONCE · EXECUTE FOREVER · COGNITO MEDIA"
        speed={40}
        direction="right"
        variant="large"
      />
      <TimeCalculator />
      <Founder />
      <ScrollingMarquee
        text="LOCAL SEO · WEBSITES · CUSTOM APPS · SALES AGENTS · OPERATIONAL LOGIC"
        speed={25}
      />
      <Services />
      <ScrollingMarquee
        text="ELIMINATE ERROR · KNOWLEDGE ASSETS · ENGINEERED GROWTH"
        speed={35}
        direction="right"
        variant="outline"
      />
      <Intelligence />
      <ScrollingMarquee
        text="DEPLOY COGNITO · STRATEGIC AUDIT · UNFAIR ADVANTAGE"
        speed={28}
        variant="large"
      />
      <Booking />
      <Footer />
      <VoiceAgent />
    </main>
  );
}
