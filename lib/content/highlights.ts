import type { Highlight } from "@/lib/types";

/**
 * The Figma file only carries copy + imagery for the active quadrant (Coffee Workshops).
 * The other three descriptions/images below are placeholders written to match tone — swap when final copy lands.
 */
export const highlights: Highlight[] = [
  {
    id: "workshops",
    quadrant: "tl",
    angle: -135,
    kicker: "Energized",
    eyebrow: "Experience",
    title: "Coffee Workshops",
    description: "Hands-on learning sessions with industry experts covering roasting, cupping, and brewing techniques.",
    image: { src: "/assets/highlights/coffee-workshops.jpg", width: 1200, height: 900, alt: "A glass of iced coffee on a warm beige backdrop" },
  },
  {
    id: "panel",
    quadrant: "tr",
    angle: -45,
    kicker: "Cozy",
    eyebrow: "Conversations",
    title: "Interactive Panel Discussion",
    description: "Candid conversations with growers, roasters and café founders on where Indian coffee is headed next.",
    image: { src: "/assets/experience/brands-bar.jpg", width: 1200, height: 900, alt: "Guests talking at a café counter" },
  },
  {
    id: "exhibition",
    quadrant: "br",
    angle: 45,
    kicker: "Indulgent",
    eyebrow: "Showcase",
    title: "Trade Exhibition",
    description: "70+ leading brands showcasing machines, beans and equipment across dedicated B2B networking zones.",
    image: { src: "/assets/hero/cafe-interior.jpg", width: 2400, height: 1600, alt: "A bright café interior with exposed brick" },
  },
  {
    id: "competitions",
    quadrant: "bl",
    angle: 135,
    kicker: "Refreshed",
    eyebrow: "Live Championships",
    title: "Coffee Competitions",
    description: "Watch India's finest baristas, brewers and roasters go head-to-head in live national championships.",
    image: { src: "/assets/highlights/coffee-workshops.jpg", width: 1200, height: 900, alt: "A glass of iced coffee on a warm beige backdrop" },
  },
];

/** Render order for the wheel grid: TL, TR, BL, BR */
export const wheelOrder = ["tl", "tr", "bl", "br"] as const;
