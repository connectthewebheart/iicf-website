import { Star } from "@/components/icons";
import { MarqueeControls } from "@/components/interactive/MarqueeControls";
import { testimonials } from "@/lib/content/testimonials";
import type { Testimonial } from "@/lib/types";

function Card({ t, clone }: { t: Testimonial; clone?: boolean }) {
  return (
    <blockquote
      aria-hidden={clone || undefined}
      className="lift flex h-[389px] w-[520px] max-w-[85vw] shrink-0 flex-col rounded-quote bg-shell p-8 sm:p-10"
    >
      <span className="flex gap-1 text-star" aria-hidden="true">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="size-6" />
        ))}
      </span>
      <span className="sr-only">Rated {t.rating} out of 5</span>
      <p className="mt-6 font-accent text-[20px] leading-[1.4] tracking-[0.04em] text-ink-black sm:text-[24px]">{t.quote}</p>
      <footer className="mt-auto text-lead font-medium text-rust">
        <cite className="not-italic">{t.author}</cite>
      </footer>
    </blockquote>
  );
}

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="pt-[clamp(80px,10vw,144px)] pb-section">
      <div className="mx-auto w-full max-w-[calc(1240px+2*var(--spacing-gutter))] px-gutter">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 data-reveal className="whitespace-pre font-display text-display-lg uppercase tracking-[-0.03em] text-green">
            {"Loved By Every\nCoffee Moment"}
          </h2>
          <p data-reveal className="max-w-[345px] text-lead font-medium text-black md:text-right">
            Real experiences from people who made Beanro part of their daily ritual.
          </p>
        </div>
      </div>

      <div className="marquee relative mt-16" style={{ "--marquee-duration": "55s" } as React.CSSProperties}>
        <MarqueeControls />
        <div className="marquee-track">
          {testimonials.map((t) => (
            <Card key={t.id} t={t} />
          ))}
          {testimonials.map((t) => (
            <Card key={`${t.id}-clone`} t={t} clone />
          ))}
        </div>
      </div>
    </section>
  );
}
