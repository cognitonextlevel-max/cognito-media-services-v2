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
export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Philosophy />
      <TimeCalculator />
      <Founder />
      <Services />
      <Intelligence />
      <Booking />
      <Footer />
      <VoiceAgent />
    </main>
  );
}
