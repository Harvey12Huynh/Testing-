import EraCrest, { type MotifKey } from "@/components/EraCrest";

const serif = { fontFamily: "'Instrument Serif', serif" } as const;

// AI-generated region cover art (atmospheric landscapes, no characters)
const CDN =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38cYFPHRQ9kuGWY9ofCm1F7rJKu/";

type Era = {
  gen: string;
  numeral: string;
  motif: MotifKey;
  region: string;
  year: string;
  signature: string;
  blurb: string;
  glow: string;
  image: string;
};

const ERAS: Era[] = [
  {
    gen: "Gen I",
    numeral: "I",
    motif: "flame",
    region: "Kanto",
    year: "1996",
    signature: "Charizard",
    blurb: "Where it all began — 151 originals and a base-set holo dream.",
    glow: "16 100% 60%",
    image: CDN + "hf_20260626_101456_4d612f2f-be02-47bf-a6b3-f5b9c814f202.jpeg",
  },
  {
    gen: "Gen II",
    numeral: "II",
    motif: "wing",
    region: "Johto",
    year: "1999",
    signature: "Lugia",
    blurb: "Day & night, breeding, and the bells of Ecruteak City.",
    glow: "190 90% 55%",
    image: CDN + "hf_20260626_101509_3e1b3808-a95e-4cd3-97bf-5bfcdce13699.jpeg",
  },
  {
    gen: "Gen III",
    numeral: "III",
    motif: "waves",
    region: "Hoenn",
    year: "2002",
    signature: "Rayquaza",
    blurb: "Land, sea and sky collide as the weather trio awakens.",
    glow: "140 70% 50%",
    image: CDN + "hf_20260626_101511_6dbd69d2-ea20-447a-9c7c-ad7e1f39eff8.jpeg",
  },
  {
    gen: "Gen IV",
    numeral: "IV",
    motif: "diamond",
    region: "Sinnoh",
    year: "2006",
    signature: "Dialga",
    blurb: "Time and space themselves bend around Mt. Coronet.",
    glow: "260 80% 65%",
    image: CDN + "hf_20260626_101513_b1b44cc9-35f1-429b-a8e2-c22e5dc62f15.jpeg",
  },
  {
    gen: "Gen V",
    numeral: "V",
    motif: "duality",
    region: "Unova",
    year: "2010",
    signature: "Reshiram",
    blurb: "Truth and ideals — a bold new world far from home.",
    glow: "0 0% 90%",
    image: CDN + "hf_20260626_101515_4b6237d3-ecb7-4454-984b-373a71b167a7.png",
  },
  {
    gen: "Gen VI",
    numeral: "VI",
    motif: "antler",
    region: "Kalos",
    year: "2013",
    signature: "Xerneas",
    blurb: "Mega Evolution and the first step into full 3D.",
    glow: "320 80% 65%",
    image: CDN + "hf_20260626_101525_a45febc1-fcbf-441c-9488-35433b0738a9.jpeg",
  },
  {
    gen: "Gen VII",
    numeral: "VII",
    motif: "sun",
    region: "Alola",
    year: "2016",
    signature: "Solgaleo",
    blurb: "Island trials, Z-Moves and an endless tropical sun.",
    glow: "38 95% 58%",
    image: CDN + "hf_20260626_101527_49c73c4f-c95f-42a1-aaaa-1d9f497c5e7d.jpeg",
  },
  {
    gen: "Gen VIII",
    numeral: "VIII",
    motif: "crown",
    region: "Galar",
    year: "2019",
    signature: "Zacian",
    blurb: "Dynamax stadiums roar across a region of legends.",
    glow: "210 90% 60%",
    image: CDN + "hf_20260626_101528_8d0641d1-66ee-4bd4-93d1-7c87214cb696.jpeg",
  },
  {
    gen: "Gen IX",
    numeral: "IX",
    motif: "compass",
    region: "Paldea",
    year: "2022",
    signature: "Koraidon",
    blurb: "An open world to roam — past and future, your way.",
    glow: "350 85% 60%",
    image: CDN + "hf_20260626_101529_afe30a88-afe2-431a-a0cd-97470fc66dcb.png",
  },
];

export default function Eras() {
  return (
    <section id="eras" className="relative z-10 px-6 py-28 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="reveal mb-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-gold/90">
            <span className="h-px w-6 bg-gold/40" /> Nine Eras
            <span className="h-px w-6 bg-gold/40" />
          </div>
          <h2
            style={serif}
            className="reveal text-4xl sm:text-6xl tracking-[-1px] font-normal"
          >
            Every region, one{" "}
            <em className="not-italic gold-text">journey</em>.
          </h2>
          <p className="reveal text-muted-foreground max-w-xl mx-auto mt-5 leading-relaxed">
            Three decades of worlds to explore — each generation a new map, a
            new starter, and a new reason to believe in the next adventure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ERAS.map((e, i) => (
            <article
              key={e.gen}
              className="reveal group relative liquid-glass rounded-2xl overflow-hidden transition-transform duration-500 hover:-translate-y-1.5"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              {/* Representative crest for the era */}
              <EraCrest
                gen={e.gen}
                numeral={e.numeral}
                motif={e.motif}
                glow={e.glow}
                image={e.image}
                region={e.region}
              />

              <div className="relative z-10 px-6 pb-6 pt-2">
                <div className="flex items-baseline justify-between">
                  <h3
                    style={serif}
                    className="text-3xl tracking-tight text-foreground"
                  >
                    {e.region}
                  </h3>
                  <span className="text-xs text-muted-foreground">
                    {e.year}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {e.blurb}
                </p>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: `hsl(${e.glow})` }}
                  />
                  <span className="text-xs text-foreground/80">
                    Signature ·{" "}
                    <span className="text-foreground">{e.signature}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
