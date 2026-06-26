import { useEffect, useRef, useState } from "react";

const serif = { fontFamily: "'Instrument Serif', serif" } as const;

type Stat = {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  label: string;
  caption: string;
};

const STATS: Stat[] = [
  { to: 30, label: "Years", caption: "Of an endless adventure" },
  { to: 1025, label: "Species", caption: "From Bulbasaur to Pecharunt" },
  { to: 9, label: "Generations", caption: "Kanto through Paldea" },
  {
    to: 64.8,
    suffix: "B+",
    decimals: 1,
    label: "Cards Printed",
    caption: "Traded across the world",
  },
];

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function Counter({ stat }: { stat: Stat }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const dur = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            setVal(stat.to * easeOut(p));
            if (p < 1) requestAnimationFrame(tick);
            else setVal(stat.to);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stat.to]);

  const display = stat.decimals
    ? val.toFixed(stat.decimals)
    : Math.round(val).toLocaleString();

  return (
    <div
      ref={ref}
      className="reveal liquid-glass rounded-2xl px-6 py-9 text-center"
    >
      <div
        style={serif}
        className="text-5xl sm:text-6xl gold-text tracking-tight"
      >
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <div className="mt-3 text-sm font-medium text-foreground">
        {stat.label}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{stat.caption}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative z-10 px-6 pb-8 pt-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STATS.map((s) => (
          <Counter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
