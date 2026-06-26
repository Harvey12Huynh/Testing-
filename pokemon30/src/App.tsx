import { useReveal } from "@/lib/useReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Journey from "@/components/Journey";
import Stats from "@/components/Stats";
import Eras from "@/components/Eras";
import Timeline from "@/components/Timeline";
import Celebrate from "@/components/Celebrate";
import Footer from "@/components/Footer";

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-background text-foreground font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Journey />
        <Stats />
        <Eras />
        <Timeline />
        <Celebrate />
      </main>
      <Footer />
    </div>
  );
}
