type MotifKey =
  | "flame"
  | "wing"
  | "waves"
  | "diamond"
  | "duality"
  | "antler"
  | "sun"
  | "crown"
  | "compass";

function Motif({ k }: { k: MotifKey }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (k) {
    case "flame":
      return (
        <path
          {...common}
          d="M24 6c2 6 8 9 8 16a8 8 0 0 1-16 0c0-3 1-5 2-6 .5 3 2 4 3 4-1-4 1-9 3-14Z"
        />
      );
    case "wing":
      return (
        <path
          {...common}
          d="M8 30c10-1 18-7 20-22 4 8 10 11 12 12-6 1-9 4-10 8-5-1-9 0-12 4-3-3-7-3-10-2Z"
        />
      );
    case "waves":
      return (
        <g {...common}>
          <path d="M8 18c4-4 8-4 12 0s8 4 12 0" />
          <path d="M8 26c4-4 8-4 12 0s8 4 12 0" />
          <path d="M8 34c4-4 8-4 12 0s8 4 12 0" />
        </g>
      );
    case "diamond":
      return (
        <g {...common}>
          <path d="M24 6 38 24 24 42 10 24Z" />
          <path d="M16 24h16M24 14v20" opacity={0.5} />
        </g>
      );
    case "duality":
      return (
        <g {...common}>
          <circle cx="24" cy="24" r="17" />
          <path d="M24 7a8.5 8.5 0 0 0 0 17 8.5 8.5 0 0 1 0 17" />
        </g>
      );
    case "antler":
      return (
        <g {...common}>
          <path d="M24 42V16" />
          <path d="M24 22 14 12M24 22l10-10M24 30 12 22M24 30l12-8" />
          <circle cx="24" cy="12" r="2.4" />
        </g>
      );
    case "sun":
      return (
        <g {...common}>
          <circle cx="24" cy="24" r="8" />
          <path d="M24 6v5M24 37v5M6 24h5M37 24h5M11 11l3.5 3.5M33.5 33.5 37 37M37 11l-3.5 3.5M14.5 33.5 11 37" />
        </g>
      );
    case "crown":
      return (
        <g {...common}>
          <path d="M9 32 12 14l7 7 5-9 5 9 7-7 3 18Z" />
          <path d="M9 36h30" />
        </g>
      );
    case "compass":
      return (
        <g {...common}>
          <circle cx="24" cy="24" r="17" />
          <path d="m17 31 4.5-11L31 16l-4.5 11Z" />
          <circle cx="24" cy="24" r="1.6" fill="currentColor" />
        </g>
      );
  }
}

export default function EraCrest({
  gen,
  numeral,
  motif,
  glow,
  image,
  region,
}: {
  gen: string;
  numeral: string;
  motif: MotifKey;
  glow: string;
  image: string;
  region: string;
}) {
  return (
    <div className="relative h-44 overflow-hidden">
      {/* Region photo */}
      <img
        src={image}
        alt={`${region} region`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
      />

      {/* color wash + legibility scrim */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, hsl(${glow} / 0.12) 0%, transparent 30%, hsl(var(--background) / 0.65) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 mix-blend-multiply opacity-50"
        style={{ background: `hsl(${glow} / 0.35)` }}
      />

      {/* faint engraved Roman numeral */}
      <span
        style={{
          fontFamily: "'Instrument Serif', serif",
          color: "#fff",
        }}
        className="absolute right-2 -bottom-7 text-[7rem] leading-none opacity-20 select-none drop-shadow"
      >
        {numeral}
      </span>

      {/* crest medallion */}
      <div className="absolute left-4 bottom-4">
        <div
          className="h-14 w-14 rounded-full grid place-items-center backdrop-blur-md"
          style={{
            background: "rgba(10,20,30,0.45)",
            boxShadow: `inset 0 0 0 1.5px hsl(${glow} / 0.7), 0 0 24px hsl(${glow} / 0.35)`,
          }}
        >
          <div className="h-9 w-9" style={{ color: `hsl(${glow})` }}>
            <svg viewBox="0 0 48 48" className="h-full w-full">
              <Motif k={motif} />
            </svg>
          </div>
        </div>
      </div>

      {/* gen tag */}
      <span
        className="absolute right-4 top-4 text-[9px] uppercase tracking-[0.2em] px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-sm border border-white/15"
        style={{ color: `hsl(${glow})` }}
      >
        {gen}
      </span>
    </div>
  );
}

export type { MotifKey };
