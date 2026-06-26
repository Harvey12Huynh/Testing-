const ITEMS = [
  "Gotta Catch 'Em All",
  "1996 — 2026",
  "Thirty Years",
  "Kanto to Paldea",
  "1025 Species",
  "Nine Generations",
  "The Journey Continues",
];

function Row() {
  return (
    <div className="flex items-center gap-8 px-4 shrink-0">
      {ITEMS.map((t, i) => (
        <span key={i} className="flex items-center gap-8 shrink-0">
          <span
            style={{ fontFamily: "'Instrument Serif', serif" }}
            className="text-xl sm:text-2xl text-foreground/80 whitespace-nowrap"
          >
            {t}
          </span>
          <span className="text-gold text-lg">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative z-10 border-y border-white/10 bg-background/40 py-5 overflow-hidden">
      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
