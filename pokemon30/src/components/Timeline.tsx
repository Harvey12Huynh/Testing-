const serif = { fontFamily: "'Instrument Serif', serif" } as const;

type Moment = { year: string; title: string; text: string };

const MOMENTS: Moment[] = [
  {
    year: "1996",
    title: "A world in your pocket",
    text: "Pocket Monsters Red & Green launch on the Game Boy in Japan. The first 151 are loose in the world.",
  },
  {
    year: "1998",
    title: "Gotta Catch 'Em All",
    text: "The Trading Card Game and the animated series cross the ocean. Pikachu becomes a global icon overnight.",
  },
  {
    year: "1999",
    title: "Base Set fever",
    text: "A first-edition holographic Charizard turns cardboard into legend — and lunch-tables into trading floors.",
  },
  {
    year: "2006",
    title: "Time & space",
    text: "Diamond & Pearl push the series online, connecting trainers across continents for the first time.",
  },
  {
    year: "2016",
    title: "The world plays together",
    text: "Pokémon GO sends a generation back outside. Parks fill with trainers chasing the same dream.",
  },
  {
    year: "2022",
    title: "An open world",
    text: "Scarlet & Violet hand players a region with no set path — go anywhere, in any order, your way.",
  },
  {
    year: "2026",
    title: "Thirty years on",
    text: "The cards still shine, the theme still plays, and somewhere a new trainer is about to take their first step.",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative z-10 px-6 py-28 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="reveal mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-gold/90">
            <span className="h-px w-6 bg-gold/40" /> The Timeline
            <span className="h-px w-6 bg-gold/40" />
          </div>
          <h2
            style={serif}
            className="reveal text-4xl sm:text-6xl tracking-[-1px] font-normal"
          >
            Three decades, <em className="not-italic gold-text">one trail</em>.
          </h2>
        </div>

        <ol className="relative">
          {/* vertical line */}
          <span className="absolute left-[7px] sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-gold/10 via-gold/40 to-gold/10 sm:-translate-x-1/2" />

          {MOMENTS.map((m, i) => (
            <li
              key={m.year}
              className={`reveal relative pl-10 sm:pl-0 mb-10 sm:mb-14 sm:w-1/2 ${
                i % 2 === 0
                  ? "sm:pr-12 sm:text-right"
                  : "sm:ml-auto sm:pl-12 sm:text-left"
              }`}
            >
              {/* node */}
              <span
                className={`absolute top-1.5 left-0 sm:left-auto ${
                  i % 2 === 0
                    ? "sm:right-0 sm:translate-x-1/2"
                    : "sm:left-0 sm:-translate-x-1/2"
                } h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-gold/15`}
              />
              <div className="text-gold text-sm font-medium tracking-wide">
                {m.year}
              </div>
              <h3
                style={serif}
                className="mt-1 text-2xl sm:text-3xl text-foreground tracking-tight"
              >
                {m.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {m.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
