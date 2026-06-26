# Pokémon · 30th Anniversary

A cinematic single-page tribute celebrating thirty years of Pokémon (1996 – 2026), built around the official Pokémon TCG 30th Anniversary trailer as a fullscreen looping hero background.

Built with **React + Vite + TypeScript + Tailwind CSS** with shadcn/ui-style primitives.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To make a production build:

```bash
npm run build
npm run preview
```

## What's inside

- **Cinematic hero** — fullscreen autoplay/loop/muted/playsInline video, glassmorphic fixed nav, Instrument Serif display type, liquid-glass CTA buttons, and staggered `fade-rise` entrance animations.
- **Marquee ribbon** — infinite-scrolling anniversary tagline.
- **The Journey** — editorial statement section.
- **Animated stats** — count-up counters (30 years, 1025 species, 9 generations, 64.8B+ cards).
- **Nine Eras** — a glass bento grid, one card per generation (Kanto → Paldea) with region-tinted glow.
- **Timeline** — alternating 30-year milestone trail.
- **Celebrate** — high-contrast closing CTA.
- **Footer** — link columns + trademark note.

## Design tokens

Dark, cinematic navy theme with an anniversary **gold** accent. All colors are HSL CSS variables in `src/index.css`. The `.liquid-glass` effect and `fade-rise` keyframes match the original spec; a gold-tinted `.glass-gold` variant and scroll `.reveal` system extend it.

## Media

`public/media/pokemon-30th.mp4` is the Pokémon TCG 30th Anniversary trailer you provided; `hero-poster.jpg` is a poster frame extracted from it for fast first paint.

Each **Era card** uses an AI-generated atmospheric cover image (one per region, no characters — copyright-safe), served from a CDN and referenced by URL in `src/components/Eras.tsx`. To make the project fully self-contained for offline use, download those URLs into `public/media/regions/` and swap the `CDN + "..."` references for local `/media/regions/...` paths.

## Note

Fan-made tribute. Pokémon and all related marks are trademarks of Nintendo, Game Freak, and The Pokémon Company.
