const serif = { fontFamily: "'Instrument Serif', serif" } as const;

const COLS = [
  { title: "Explore", links: ["The Journey", "Nine Eras", "Timeline", "Cards"] },
  { title: "Community", links: ["Trainers", "Trade Hub", "Events", "Journal"] },
  { title: "Reach Us", links: ["Contact", "Press", "Careers", "Support"] },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span
                style={serif}
                className="text-3xl tracking-tight text-foreground"
              >
                Pokémon<sup className="text-xs align-super text-gold">®</sup>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold/90 border border-gold/30 rounded-full px-2.5 py-1">
                30 Years
              </span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Celebrating thirty years of dreams caught one card at a time.
              1996 — 2026.
            </p>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-medium text-foreground mb-4">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            A fan-made tribute. Pokémon and all related marks are trademarks of
            Nintendo, Game Freak &amp; The Pokémon Company.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with care · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
