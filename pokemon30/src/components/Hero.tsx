import { Button } from "@/components/ui/button";

const serif = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      {/* Fullscreen background video */}
      <video
        className="hero-video absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="/media/hero-poster.jpg"
        preload="auto"
      >
        <source src="/media/pokemon-30th.mp4" type="video/mp4" />
      </video>

      {/* Navy wash + cinematic vignette to keep type legible over a bright video */}
      <div className="absolute inset-0 z-[1] hero-tint pointer-events-none" />
      <div className="absolute inset-0 z-[1] hero-vignette pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-32 pb-40 max-w-7xl mx-auto">
        <div className="animate-fade-rise mb-7 inline-flex items-center gap-3 text-[11px] sm:text-xs uppercase tracking-[0.4em] text-gold/90">
          <span className="h-px w-8 bg-gold/40" />
          1996 — 2026
          <span className="h-px w-8 bg-gold/40" />
        </div>

        <h1
          style={serif}
          className="text-cinematic animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-2.46px] max-w-7xl font-normal"
        >
          Thirty years of{" "}
          <em className="not-italic text-muted-foreground">dreams</em>,
          <br className="hidden sm:block" /> caught one{" "}
          <em className="not-italic gold-text">card</em> at a time.
        </h1>

        <p className="text-cinematic animate-fade-rise-delay text-foreground/80 text-base sm:text-lg max-w-2xl mt-8 leading-relaxed">
          Three decades ago a single trainer set out from Pallet Town. We've
          been collecting ever since — for the dreamers, the rivals, and the
          quiet kids trading by flashlight. Welcome to thirty years of the
          journey that never ends.
        </p>

        <div className="animate-fade-rise-delay-2 mt-12 flex flex-col sm:flex-row items-center gap-4">
          <Button
            variant="goldGlass"
            size="lg"
            onClick={() =>
              document
                .querySelector("#journey")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Begin Journey
          </Button>
          <Button
            variant="ghost"
            size="lg"
            className="px-8 py-5"
            onClick={() =>
              document
                .querySelector("#eras")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore the eras
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 animate-fade-rise-delay-3 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="block h-10 w-px overflow-hidden bg-white/15">
          <span className="block h-4 w-px bg-gold animate-float" />
        </span>
      </div>
    </section>
  );
}
