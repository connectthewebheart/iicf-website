import Link from "next/link";
import Image from "next/image";
import { primaryNav } from "@/lib/content/nav";
import { site } from "@/lib/content/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "@/components/interactive/MobileNav";
import { HeaderScrollState } from "@/components/interactive/HeaderScrollState";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-40 bg-shell">
      <div className="container-site relative flex h-[var(--header-h)] items-center justify-between lg:h-[124px] lg:[.site-header[data-scrolled]_&]:h-[96px] transition-[height] duration-base ease-out-soft">
        {/* Left: nav */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-5">
          {primaryNav.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link font-bold text-body text-maroon" aria-current={l.href === "/" ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile: logo left */}
        <Link href="/" className="lg:hidden flex items-center" aria-label="IICF home">
          <Image src="/assets/logo/iicf-logo.svg" width={90} height={87} alt="" className="h-14 w-auto" priority />
        </Link>

        {/* Center: logo */}
        <Link href="/" className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:block transition-transform duration-base ease-out-soft hover:scale-105" aria-label="IICF home">
          <Image src="/assets/logo/iicf-logo.svg" width={90} height={87} alt="India International Coffee Festival 2027" priority className="h-[87px] w-[90px]" />
        </Link>

        {/* Right: CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button href={site.cta.tickets.href}>{site.cta.tickets.label}</Button>
          <Button href={site.cta.exhibit.href}>{site.cta.exhibit.label}</Button>
        </div>

        <MobileNav />
      </div>
      <HeaderScrollState />
    </header>
  );
}
