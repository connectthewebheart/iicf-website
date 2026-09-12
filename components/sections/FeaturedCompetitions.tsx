import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { competitions, competitionBadge } from "@/lib/content/competitions";
import type { Competition } from "@/lib/types";

const gradient: Record<Competition["palette"], string> = {
  lilac: "card-grad-lilac",
  teal: "card-grad-teal",
  gold: "card-grad-gold",
  green: "card-grad-green",
};

export function FeaturedCompetitions() {
  return (
    <section id="competitions" className="pt-[clamp(40px,5vw,74px)] pb-section">
      <div className="mx-auto w-full max-w-[calc(1280px+2*var(--spacing-gutter))] px-gutter">
        <SectionHeading
          className="pt-12"
          title={
            <>
              <span className="text-rose">Featured </span>
              <span className="text-green-light">Competitions</span>
            </>
          }
          subtitle="Explore captivating experiences crafted for coffee enthusiasts"
          subtitleClassName="text-black"
        />

        <ul data-reveal-stagger className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {competitions.map((c) => (
            <li key={c.id} data-reveal className="flex">
              <article className={cn("card-inner-glow lift flex w-full flex-col gap-4 rounded-card border-[3px] border-white p-6", gradient[c.palette])}>
                <div className="flex justify-end">
                  <span className="rounded-pill bg-badge-bg px-2 py-1 text-badge font-bold text-badge-text">{c.status}</span>
                </div>
                <div className="relative mx-auto mt-4 h-[151px] w-[200px]">
                  <Image src={competitionBadge.src} alt="" fill sizes="200px" className="object-contain" />
                </div>
                <h3 className="mt-4 text-center font-display text-display-sm uppercase leading-none text-green">{c.title}</h3>
                <p className="text-center text-body font-medium text-ink-deep text-pretty">{c.description}</p>
                <p className="flex flex-wrap items-center justify-center gap-2 rounded-pill border border-hairline bg-white/40 px-4 py-2 text-body">
                  <span className="font-bold text-black">Prelims:</span>
                  <span className="text-ink-soft">{c.prelims}</span>
                </p>
                <Link
                  href={c.href}
                  className="btn-arrow mt-auto grid h-16 place-items-center rounded-pill bg-gold px-10 text-body font-bold text-black transition-colors hover:bg-gold-hover"
                >
                  View Details
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
