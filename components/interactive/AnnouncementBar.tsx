"use client";

import Image from "next/image";
import { site } from "@/lib/content/site";
import { Close } from "@/components/icons";

/**
 * Dismissal is driven entirely by `html[data-announce="off"]` (see base.css):
 * the inline <head> script in layout.tsx restores it before first paint, so there is no
 * React state to hydrate and no flash for returning visitors.
 */
export function AnnouncementBar() {
  const dismiss = () => {
    document.documentElement.dataset.announce = "off";
    try {
      localStorage.setItem(site.announcementKey, "1");
    } catch {}
    // Keep keyboard focus somewhere sensible instead of on a hidden node.
    (document.querySelector<HTMLElement>("header a, header button") ?? document.body).focus();
  };

  return (
    <div data-announce-bar role="region" aria-label="Festival announcement" className="relative z-50 h-[var(--announce-h)] bg-maroon text-cream-text">
      <div className="container-site flex h-full items-center justify-center gap-1.5">
        <Image src="/assets/icons/coffee-beans.png" width={26} height={24} alt="" className="h-6 w-[26px] shrink-0 object-cover" />
        <p className="text-[15px] font-medium sm:text-lead">Festival Dates: {site.dates.label}</p>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss announcement"
          className="absolute right-[max(0.5rem,calc(var(--spacing-gutter)-0.75rem))] top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-pill text-cream-text/90 transition hover:bg-white/10 hover:text-white"
        >
          <Close className="size-5" />
        </button>
      </div>
    </div>
  );
}
