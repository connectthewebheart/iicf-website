import Image from "next/image";
import { experience } from "@/lib/content/experience";

/** Maroon band with angled top/bottom edges + the angled bunting riding its top edge (Figma "Divider / Bunting 2" + "Section Edge" rects). */
export function ExperienceBento() {
  return (
    <section id="experience" data-tone="maroon" className="relative mt-[clamp(80px,11vw,160px)] overflow-x-clip text-sage">
      {/* Maroon band with angled top/bottom edges — clip-path lives on this layer only, so the bunting above it isn't clipped */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-maroon"
        style={{ clipPath: "polygon(0 7.4vw, 100% 1vw, 100% 100%, 0 calc(100% - 3vw))" }}
      />
      <img
        src="/assets/dividers/bunting-angled.svg"
        width={1462}
        height={254}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-1%] top-[-7.8vw] w-[102%] max-w-none"
      />

      <div className="relative mx-auto w-full max-w-[calc(1267px+2*var(--spacing-gutter))] px-gutter pt-[clamp(140px,17vw,244px)] pb-[clamp(96px,14vw,200px)]">
        {/* Heading */}
        <div className="relative mx-auto flex max-w-[480px] flex-col items-center gap-4 text-center">
          <span data-reveal className="flex items-center gap-3 font-script text-script-lg text-sage">
            <span aria-hidden="true" className="size-2 rounded-full bg-green-light" />
            {experience.kicker}
          </span>
          <h2 data-reveal className="font-display text-display-xl uppercase text-sage text-balance">
            The <span className="text-gold">IICF</span> Experience
          </h2>
          <p data-reveal className="text-lead font-medium text-white text-pretty">{experience.subtitle}</p>
          <img src="/assets/experience/doodle-squiggle.svg" width={29} height={48} alt="" aria-hidden="true" className="absolute -left-14 top-4 hidden h-12 w-auto lg:block" />
          <img src="/assets/experience/doodle-arrow.svg" width={41} height={80} alt="" aria-hidden="true" className="absolute -right-24 bottom-[-40px] hidden h-20 w-auto lg:block" />
        </div>

        {/* Bento */}
        <div data-reveal-stagger className="mt-[clamp(40px,4.8vw,61px)] grid gap-4 md:grid-cols-2 lg:grid-cols-[412fr_519fr_305fr] lg:h-[600px]">
          {/* Visitors */}
          <div data-reveal className="lift flex min-h-[420px] flex-col gap-6 rounded-tile bg-sage p-3 md:row-span-2 lg:row-span-1">
            <div className="relative flex flex-1 items-center justify-center overflow-hidden rounded-xl bg-gold">
              <img src="/assets/experience/coffee-pot.svg" width={151} height={270} alt="" aria-hidden="true" className="h-[62%] w-auto" />
            </div>
            <p className="pb-3 text-center font-display text-display-sm uppercase leading-none text-green-deep">{experience.visitors.stat}</p>
          </div>

          {/* Center column */}
          <div className="flex flex-col gap-4">
            <div data-reveal className="lift flex flex-col gap-6 rounded-tile bg-sage p-3 lg:h-[323px]">
              <div className="relative aspect-[494/236] flex-1 overflow-hidden rounded-xl">
                <Image src={experience.brands.image.src} alt={experience.brands.image.alt} fill sizes="(max-width: 1024px) 100vw, 494px" className="object-cover" />
              </div>
              <p className="pb-3 text-center font-display text-display-sm uppercase leading-none text-green-deep">{experience.brands.stat}</p>
            </div>
            <div className="flex gap-4 lg:h-[261px]">
              <div data-reveal className="lift flex flex-1 flex-col justify-between gap-6 rounded-tile bg-gold p-7 text-green-deep">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-script text-script">{experience.address.kicker}</span>
                  <img src="/assets/experience/icon-pin.svg" width={54} height={84} alt="" aria-hidden="true" className="h-14 w-auto" />
                </div>
                <address className="font-display text-display-sm uppercase not-italic leading-[1.05]">
                  {experience.address.lines.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </address>
              </div>
              <a
                href={experience.sayHello.href}
                className="lift flex w-[76px] shrink-0 flex-col items-center gap-6 rounded-card border-[3px] border-gold bg-gold px-6 py-7 text-green-deep"
              >
                <img src="/assets/experience/icon-image.svg" width={28} height={22} alt="" aria-hidden="true" className="h-[22px] w-7" />
                <span className="font-display text-display-xs uppercase leading-none [writing-mode:vertical-rl] rotate-180">{experience.sayHello.label}</span>
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 md:col-span-2 md:grid md:grid-cols-2 lg:col-span-1 lg:flex">
            <div data-reveal className="lift flex items-center justify-between gap-6 rounded-tile bg-sage p-7 text-green-deep lg:h-[149px]">
              <div className="flex flex-col gap-1">
                <span className="font-script text-script">{experience.hours.kicker}</span>
                <p className="font-display text-display-sm uppercase leading-[1.05]">
                  Everyday, 7am<span className="punct">–</span>6pm.
                </p>
              </div>
              <img src="/assets/experience/icon-hours.svg" width={40} height={53} alt="" aria-hidden="true" className="h-[53px] w-auto shrink-0" />
            </div>
            <div data-reveal className="lift flex min-h-[300px] flex-col gap-3 rounded-tile bg-sage p-3 lg:flex-1">
              <div className="tile-grad-green relative flex-1 overflow-hidden rounded-xl">
                <img src="/assets/experience/moka-pot.svg" width={128} height={175} alt="" aria-hidden="true" className="absolute right-[10%] top-[22%] h-[52%] w-auto" />
              </div>
              <p className="px-4 pb-3 text-center font-display text-display-sm uppercase leading-none text-green-deep">{experience.competitions.stat}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
