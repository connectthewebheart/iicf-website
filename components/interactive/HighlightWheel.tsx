"use client";

import { useCallback, useId, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { wheelOrder } from "@/lib/content/highlights";
import type { Highlight } from "@/lib/types";

type Props = { items: Highlight[] };

const cornerRadius: Record<Highlight["quadrant"], string> = {
  tl: "rounded-tl-full",
  tr: "rounded-tr-full",
  bl: "rounded-bl-full",
  br: "rounded-br-full",
};
// Labels anchor to the hub-side corner of each quadrant, inset by Figma's per-quadrant padding (40 / 60–80px)
const labelAnchor: Record<Highlight["quadrant"], string> = {
  tl: "items-end justify-end pr-10 pb-20",
  tr: "items-end justify-start pl-10 pb-[60px]",
  bl: "items-start justify-end pr-10 pt-[60px]",
  br: "items-start justify-start pl-10 pt-[60px]",
};

export function HighlightWheel({ items }: Props) {
  const [activeId, setActiveId] = useState(items[0].id);
  const active = items.find((h) => h.id === activeId) ?? items[0];
  const baseId = useId();
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const ordered = wheelOrder.map((q) => items.find((h) => h.quadrant === q)!).filter(Boolean);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      const idx = ordered.findIndex((h) => h.id === activeId);
      let next = idx;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % ordered.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + ordered.length) % ordered.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = ordered.length - 1;
      else return;
      e.preventDefault();
      const target = ordered[next];
      setActiveId(target.id);
      tabRefs.current[target.id]?.focus();
    },
    [activeId, ordered],
  );

  return (
    <>
      {/* ── Desktop: wheel + arrow + detail card ─────────────────────── */}
      <div className="hidden lg:grid lg:grid-cols-[auto_minmax(96px,1fr)_auto] lg:items-center lg:gap-10">
        <div className="flex items-center gap-10">
          <span
            aria-hidden="true"
            className="self-center whitespace-pre-line text-center font-bold text-body uppercase tracking-[0.06em] text-sage [writing-mode:vertical-rl] rotate-180"
          >
            {"Festival\nHighlights"}
          </span>

          <div className="wheel relative size-[504px] shrink-0" style={{ "--pointer-angle": `${active.angle}deg` } as CSSProperties}>
            <div role="tablist" aria-label="Festival highlights" aria-orientation="horizontal" onKeyDown={onKeyDown} className="grid size-full grid-cols-2 grid-rows-2 gap-1">
              {ordered.map((h) => {
                const selected = h.id === activeId;
                return (
                  <button
                    key={h.id}
                    ref={(el) => {
                      tabRefs.current[h.id] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`${baseId}-tab-${h.id}`}
                    aria-selected={selected}
                    aria-controls={`${baseId}-panel-${h.id}`}
                    tabIndex={selected ? 0 : -1}
                    onMouseEnter={() => setActiveId(h.id)}
                    onFocus={() => setActiveId(h.id)}
                    onClick={() => setActiveId(h.id)}
                    className={cn(
                      "wheel-quadrant group relative flex cursor-pointer bg-sage text-green-deep outline-none",
                      cornerRadius[h.quadrant],
                      labelAnchor[h.quadrant],
                    )}
                  >
                    <span className="flex w-[176px] flex-col items-center gap-1.5 text-center">
                      <span className="wheel-kicker font-script text-script text-green-deep">{h.kicker}</span>
                      <span
                        className={cn(
                          "font-display-shadow uppercase leading-none tracking-[-0.01em] transition-[font-size,color] duration-base ease-out-soft",
                          selected ? "text-[28px] text-green-deep" : "text-[24px] text-green",
                        )}
                      >
                        {h.title}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Hub + pointer */}
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="wheel-pointer absolute left-1/2 top-1/2 h-[26px] w-[104px] origin-left -translate-y-1/2">
                <img src="/assets/highlights/pointer.svg" width={104} height={26} alt="" className="absolute left-[30px] top-0 h-[26px] w-[104px]" />
              </div>
              <div className="relative grid size-20 place-items-center rounded-full border-[3px] border-green-deep bg-green transition-transform duration-base ease-spring group-hover:scale-105">
                <img src="/assets/highlights/heart.svg" width={32} height={32} alt="" className="size-8" />
              </div>
            </div>
          </div>
        </div>

        {/* Hand-drawn arrow, nudges each time the selection changes */}
        <div aria-hidden="true" className="flex justify-center self-start pt-[182px]">
          <img key={active.id} src="/assets/highlights/arrow-to-card.svg" width={144} height={36} alt="" className="arrow-nudge h-9 w-36" />
        </div>

        {/* Detail panels — all rendered, stacked, cross-faded */}
        <div className="grid w-[360px] [&>*]:col-start-1 [&>*]:row-start-1">
          {ordered.map((h) => {
            const selected = h.id === activeId;
            return (
              <div
                key={h.id}
                role="tabpanel"
                id={`${baseId}-panel-${h.id}`}
                aria-labelledby={`${baseId}-tab-${h.id}`}
                aria-hidden={!selected}
                inert={!selected}
                className={cn(
                  "flex flex-col gap-7 rounded-[20px] bg-sage p-3 transition-[opacity,transform] duration-base ease-out-soft",
                  selected ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-3",
                )}
              >
                <div className="relative aspect-[336/252] overflow-hidden rounded-xl">
                  <Image
                    src={h.image.src}
                    alt={h.image.alt}
                    fill
                    sizes="336px"
                    className={cn("object-cover transition-transform duration-slow ease-out-soft", selected ? "scale-100" : "scale-105")}
                  />
                </div>
                <div className="flex flex-col gap-2 px-4 pb-4 text-green-deep">
                  <span className="text-eyebrow font-bold uppercase">{h.eyebrow}</span>
                  <h3 className="font-display text-[30px] uppercase leading-none tracking-[-0.01em]">{h.title}</h3>
                  <p className="text-body font-medium">{h.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Mobile / tablet: plain cards, no wheel ───────────────────── */}
      <ul data-reveal-stagger className="grid gap-5 sm:grid-cols-2 lg:hidden">
        {ordered.map((h) => (
          <li key={h.id} data-reveal className="flex flex-col gap-5 rounded-[20px] bg-sage p-3">
            <div className="relative aspect-[336/252] overflow-hidden rounded-xl">
              <Image src={h.image.src} alt={h.image.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 px-3 pb-3 text-green-deep">
              <span className="font-script text-script-lg">{h.kicker}</span>
              <h3 className="font-display text-[28px] uppercase leading-none">{h.title}</h3>
              <p className="text-body font-medium">{h.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
