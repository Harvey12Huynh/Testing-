const serif = { fontFamily: "'Instrument Serif', serif" } as const;

export default function Journey() {
  return (
    <section id="journey" className="relative z-10 px-6 py-28 sm:py-36">
      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal mb-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-gold/90">
          <span className="h-px w-6 bg-gold/40" /> The Journey
          <span className="h-px w-6 bg-gold/40" />
        </div>

        <p
          style={serif}
          className="reveal text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-1px] font-normal"
        >
          It began with a{" "}
          <em className="not-italic text-muted-foreground">pixelated</em> world,
          two cartridges, and a promise that there was always one more{" "}
          <em className="not-italic gold-text">Pokémon</em> over the next ridge.
        </p>

        <p className="reveal text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-10 leading-relaxed">
          From Red &amp; Green on the Game Boy in 1996 to a card game traded in
          every schoolyard on Earth, Pokémon grew into the most beloved journey
          in entertainment. Thirty years on, the silence before a booster pack
          opens still sounds exactly the same.
        </p>
      </div>
    </section>
  );
}
