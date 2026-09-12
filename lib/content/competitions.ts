import type { Competition } from "@/lib/types";

const palettes: Competition["palette"][] = ["lilac", "teal", "gold", "green"];

/** Reproduced verbatim from the design — all eight cards are the same placeholder. */
export const competitions: Competition[] = Array.from({ length: 8 }, (_, i) => ({
  id: `nbc-${i + 1}`,
  title: "National Barista Championship",
  description:
    "A stage where baristas from across India compete under real-time pressure, showcasing skill and hospitality at their finest.",
  status: "Open",
  palette: palettes[i % 4],
  prelims: "Aug – Oct 2026 · 3 Cities",
  href: "#competitions",
}));

export const competitionBadge = {
  src: "/assets/competitions/nbc-badge.png",
  width: 600,
  height: 600,
  alt: "",
};
