import { Button } from "@/components/ui/button";

const serif = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Celebrate() {
  return (
    <section id="celebrate" className="relative z-10 px-6 py-32 sm:py-40">
      <div className="max-w-3xl mx-auto text-center">
        <div className="reveal mb-7 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.4em] text-gold/90">
          <span className="h-px w-8 bg-gold/40" /> 30th Anniversary
          <span className="h-px w-8 bg-gold/40" />
        </div>

        <h2
          style={serif}
          className="reveal text-5xl sm:text-7xl leading-[0.98] tracking-[-1.5px] font-normal"
        >
          The next <em className="not-italic gold-text">step</em>
          <br /> is always yours to take.
        </h2>

        <p className="reveal text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mt-8 leading-relaxed">
          Thirty years in, the adventure has never been bigger. Whether you're
          opening your first pack or your thousandth, there's a place for you on
          the trail. Here's to the next thirty.
        </p>

        <div className="reveal mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="goldGlass" size="lg">
            Begin Journey
          </Button>
          <Button variant="ghost" size="lg" className="px-8 py-5">
            Share your story
          </Button>
        </div>
      </div>
    </section>
  );
}
