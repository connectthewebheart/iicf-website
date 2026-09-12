"use client";

import { useEffect } from "react";

/**
 * One IntersectionObserver for every [data-reveal] element on the page.
 * Sections stay Server Components — they only add data attributes.
 * A MutationObserver picks up nodes added after mount (client navigation, HMR, dynamic content).
 */
export function MotionProvider() {
  useEffect(() => {
    const html = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-inview", "");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const stagger = (group: Element) =>
      Array.from(group.children).forEach((child, i) => (child as HTMLElement).style.setProperty("--stagger-i", String(i)));

    const observe = (root: ParentNode, initial = false) => {
      const vh = window.innerHeight;
      root.querySelectorAll<HTMLElement>("[data-reveal-stagger]").forEach(stagger);
      const els = root.querySelectorAll<HTMLElement>("[data-reveal]:not([data-inview])");
      els.forEach((el) => {
        // On first paint, mark anything already on screen synchronously so nothing flashes in.
        if (initial) {
          const r = el.getBoundingClientRect();
          if (r.top < vh * 0.92 && r.bottom > 0) {
            el.setAttribute("data-inview", "");
            return;
          }
        }
        io.observe(el);
      });
    };

    observe(document, true);
    html.setAttribute("data-motion", "");

    const mo = new MutationObserver((records) => {
      for (const rec of records) {
        rec.addedNodes.forEach((n) => {
          if (!(n instanceof HTMLElement)) return;
          if (n.matches("[data-reveal]") && !n.hasAttribute("data-inview")) io.observe(n);
          observe(n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
