import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Apos } from "@/components/ui/Punct";
import { site } from "@/lib/content/site";

export function Hero() {
  return (
    <section className="pt-[clamp(40px,6vw,88px)]">
      <Container>
        <h1 className="font-display text-display-hero uppercase text-maroon text-center lg:text-left lg:pl-[63px] text-balance">
          India<Apos />s Largest <span className="text-green">Coffee</span> Festival
        </h1>

        <div className="relative mt-3 sm:mt-2">
          <div className="hero-image relative aspect-[16/10] sm:aspect-[1316/575] overflow-hidden rounded-card bg-sage">
            <Image
              src="/assets/hero/cafe-interior.jpg"
              alt="A warm café interior with wooden shelves, pendant lights and exposed brick"
              fill
              priority
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1440px) 100vw, 1316px"
              className="object-cover"
            />
          </div>

          {/* Sticker CTAs + tumbler — overlap the photo from 640px up, stack beneath it on phones */}
          <div className="hero-stickers relative mt-4 flex flex-wrap justify-center gap-3 sm:mt-0 sm:absolute sm:left-[35.7%] sm:top-[78.4%] sm:block sm:w-[43.3%] sm:aspect-[570/282] sm:pointer-events-none">
            <Link
              href={site.cta.tickets.href}
              className="sticker sticker-plate pointer-events-auto grid place-items-center bg-[url('/assets/hero/sticker-plate-green.svg')] bg-[length:100%_100%] bg-no-repeat px-6 py-3 sm:absolute sm:left-[1.6%] sm:top-[14.5%] sm:w-[85.6%] sm:px-0 sm:py-0 [--sticker-rot:-4.13deg] rotate-[-2.5deg] sm:rotate-[-4.13deg]"
            >
              <span className="sticker-text font-display text-[22px] uppercase leading-none text-gold">Book Tickets!</span>
            </Link>
            <Link
              href={site.cta.exhibit.href}
              className="sticker sticker-plate pointer-events-auto grid place-items-center bg-[url('/assets/hero/sticker-plate-teal.svg')] bg-[length:100%_100%] bg-no-repeat px-6 py-3 sm:absolute sm:left-[0.9%] sm:top-[58%] sm:w-[85.6%] sm:px-0 sm:py-0 [--sticker-rot:2.53deg] rotate-[1.5deg] sm:rotate-[2.53deg]"
            >
              <span className="sticker-text font-display text-[22px] uppercase leading-none text-green">Exhibit Now!</span>
            </Link>
            <img
              src="/assets/hero/tumbler.svg"
              width={164}
              height={282}
              alt=""
              aria-hidden="true"
              data-reveal="scale"
              className="hidden sm:block sm:absolute sm:left-[71.2%] sm:top-0 sm:h-full sm:w-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
