import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const paragraphs = [
  "The India International Coffee Festival (IICF) is India's largest celebration of coffee — a three-day experience in Bengaluru where the entire coffee value chain comes together under one roof. Organized by the Specialty Coffee Association of India (SCAI) and supported by the Coffee Board of India, IICF has grown into the country's most influential platform for coffee growers, roasters, baristas, retailers, cafe owners, and enthusiasts alike.",
  "Now in its 9th edition, IICF brings together over 30,000 visitors and 70+ leading brands for a packed agenda of live championships, hands-on workshops, immersive brand showcases, and dedicated B2B networking zones. It's a space where business happens — deals are struck, partnerships are formed, and industry trends are set — while also being a space where coffee culture comes alive for everyday enthusiasts.",
];

export function Welcome() {
  return (
    <section id="about" className="relative overflow-hidden">
      <Container className="grid items-end gap-10 lg:grid-cols-[493px_minmax(0,564px)] lg:justify-between lg:gap-16 lg:pl-[calc(var(--spacing-gutter)+48px)] lg:pr-[calc(var(--spacing-gutter)+48px)]">
        {/* Copy */}
        <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:pb-[96px] lg:pt-[178px]">
          <div data-reveal="scale" className="relative mb-2 flex flex-col items-center">
            <span className="rotate-[1.5deg] rounded-chip bg-maroon-deep px-8 py-4 font-display text-[clamp(34px,4vw,56px)] uppercase leading-[1.3] text-shell">
              Welcome to
            </span>
            <span className="relative -mt-2 ml-[68px] rotate-[1.5deg] rounded-chip bg-rose px-8 py-4 font-display text-[clamp(28px,3.1vw,44px)] uppercase leading-[1.3] text-shell">
              IICF 2027
            </span>
          </div>
          <div data-reveal className="flex flex-col gap-6 text-lead font-medium text-ink text-pretty">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 12)}>{p}</p>
            ))}
          </div>
          <div data-reveal className="mt-10">
            <Button href="#about" variant="green" face="display">
              Read our story
            </Button>
          </div>
        </div>

        {/* Illustration sits on the green band below */}
        <div data-reveal="left" className="order-2 mx-auto w-full max-w-[493px] self-end lg:order-1 lg:mx-0">
          <img src="/assets/welcome/illustration.svg" width={493} height={730} alt="" aria-hidden="true" className="block h-auto w-full" />
        </div>
      </Container>
    </section>
  );
}
