import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { partners } from "@/lib/content/partners";

export function PartnerStrip() {
  return (
    <section className="pt-[clamp(120px,14vw,200px)] sm:pt-[clamp(96px,10.7vw,154px)] pb-section" aria-label="Organisers and supporters">
      <Container>
        <ul data-reveal-stagger className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          {partners.map((p) => (
            <li key={p.id} data-reveal className="w-full max-w-[412px]">
              <a
                href={p.href}
                target="_blank"
                rel="noopener"
                className="lift flex flex-col items-center gap-[18px] rounded-card bg-gold-pale px-10 pt-9 pb-9"
              >
                <span className="relative block h-[200px] w-full max-w-[332px]">
                  <Image src={p.logo.src} alt={p.logo.alt} fill sizes="332px" className="object-contain" />
                </span>
                <span className="font-display text-display-sm uppercase text-green">{p.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
