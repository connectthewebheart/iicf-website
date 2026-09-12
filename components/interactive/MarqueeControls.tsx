"use client";

import { useState } from "react";
import { Pause, Play } from "@/components/icons";

/** WCAG 2.2.2 — moving content longer than 5s needs a real pause control. Toggles data-paused on the .marquee parent. */
export function MarqueeControls() {
  const [paused, setPaused] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={paused}
      aria-label={paused ? "Play testimonials" : "Pause testimonials"}
      onClick={(e) => {
        const next = !paused;
        setPaused(next);
        e.currentTarget.closest(".marquee")?.toggleAttribute("data-paused", next);
      }}
      className="absolute right-[var(--spacing-gutter)] top-0 z-10 grid size-11 -translate-y-14 place-items-center rounded-pill border border-green/30 bg-shell text-green transition hover:bg-green hover:text-white"
    >
      {paused ? <Play /> : <Pause />}
    </button>
  );
}
