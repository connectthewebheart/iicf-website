import { SectionHeading } from "@/components/ui/SectionHeading";
import { Apos } from "@/components/ui/Punct";
import { HighlightWheel } from "@/components/interactive/HighlightWheel";
import { highlights } from "@/lib/content/highlights";

export function FestivalHighlights() {
  return (
    <section id="highlights" data-tone="green" className="relative bg-green pt-section-lg pb-[clamp(140px,14vw,200px)] text-white">
      <div className="mx-auto w-full max-w-[1352px] px-gutter">
        <SectionHeading
          title={
            <>
              Here<Apos />s what awaits you at IICF 2027
            </>
          }
          subtitle="Explore captivating experiences crafted for coffee enthusiasts"
          titleClassName="text-gold"
          subtitleClassName="text-white"
        />
        <div data-reveal className="relative mt-[clamp(48px,6vw,80px)]">
          <HighlightWheel items={highlights} />
          <img
            src="/assets/highlights/doodle.svg"
            width={80}
            height={64}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-[615px] top-[calc(100%-32px)] hidden h-16 w-20 lg:block"
          />
        </div>
      </div>
    </section>
  );
}
