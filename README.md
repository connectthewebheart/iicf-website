# IICF 2027 — Home Page

Next.js 16 (App Router) build of the India International Coffee Festival home page, implemented from the Figma frame
[`IICF HOME PAGE` → `61:188`](https://www.figma.com/design/GHlVrLhqPZO8ERdSrs13Xi/IICF-HOME-PAGE?node-id=61-188).

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build && pnpm start
```

## Stack

- **Next.js 16** App Router, React 19, TypeScript, **Tailwind CSS v4** (CSS-first `@theme` tokens)
- Server Components everywhere; `'use client'` on exactly five leaves: `AnnouncementBar`, `MobileNav`,
  `HeaderScrollState`, `HighlightWheel`, `MarqueeControls`, plus one global `MotionProvider`
- No animation library — every motion is CSS keyframes/transitions driven by data attributes

## Where things live

| Path | What |
|---|---|
| `app/styles/tokens.css` | **Single source of truth** for colours, type scale, radii, spacing, motion. Sampled from Figma. |
| `app/styles/base.css` | Resets, focus rings, reduced-motion, the `.punct` fallback for Casino Flat's missing glyphs |
| `app/styles/patterns.css` | Scroll-reveal, marquee, wheel pointer, hover micro-interactions, card gradients |
| `lib/fonts.ts` | `next/font` — Casino Flat (local woff2), Manrope, Bayon, Gochi Hand |
| `lib/content/*.ts` | All copy and data. Edit here, not in components. |
| `components/sections/*` | One file per page section, top to bottom |
| `components/interactive/*` | The client islands |
| `public/assets/*` | Exported straight from Figma (`download_assets`), SVGO'd — never hand-drawn |
| `docs/reference/` | Full-res render of the Figma frame for visual diffing |

## Fonts

**Casino Flat** ships with only 72 glyphs (A–Z, a–z, 0–9 and `! , . : ; ?`). No apostrophe, quotes, dashes or `&`.
The Figma file silently substituted a fallback face for those characters; we do the same deliberately — the font
stack falls through to Manrope, and `<Apos />` / `.punct` tune the size and baseline so they sit against the caps.

## Motion

- **Scroll reveal** — add `data-reveal` (or `data-reveal="left|right|scale"`) to any element; `data-reveal-stagger` on a
  parent staggers its children by 90ms. One `IntersectionObserver` in `MotionProvider` toggles `data-inview`.
- **Highlights wheel** — `role="tablist"` with roving tabindex. Hover, click, focus or arrow keys select a quadrant;
  the hub pointer rotates via `--pointer-angle` and the four detail panels cross-fade. Below `lg` it renders as plain cards.
- **Testimonials** — pure-CSS marquee, pauses on hover/focus, has a real pause button (WCAG 2.2.2), degrades to a
  scroll-snap row under `prefers-reduced-motion`.
- Everything respects `prefers-reduced-motion: reduce`.

## Content notes (from the design, flagged for the client)

- All eight competition cards are the same "National Barista Championship" placeholder.
- The Experience address reads "28 Roastery Lane, Brooklyn, NY" while the copy says Bengaluru — JSON-LD `Event`
  schema is intentionally **not** wired until the real venue lands.
- Testimonials reference "Beanro".
- Footer contrast (cream/gold on `#D05467`) fails WCAG AA as designed. Darkening the rose to `#A83248` would fix it.
