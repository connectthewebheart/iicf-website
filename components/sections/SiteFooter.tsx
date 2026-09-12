import Link from "next/link";
import Image from "next/image";
import { footerNav, socialLinks } from "@/lib/content/nav";
import { site } from "@/lib/content/site";

const linkClass = "font-accent text-[28px] leading-[1.1] tracking-[-0.03em] text-shell transition-opacity hover:opacity-80 sm:text-[32px]";

export function SiteFooter() {
  return (
    <footer id="contact" data-tone="rose" className="bg-rose py-20 text-shell">
      <div className="container-site">
        {/* Top */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <Link href="/" aria-label="IICF home" data-reveal className="lift block size-[154px] shrink-0 overflow-hidden rounded-[28px] bg-logo-card">
            <Image src="/assets/footer/logo-card.png" width={308} height={305} alt="" className="size-full object-cover" />
          </Link>
          <p data-reveal className="max-w-[354px] font-display text-display-md uppercase text-gold sm:text-right text-balance">
            Make every coffee moment feel intentional
          </p>
        </div>

        {/* Columns */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-[200px_1fr_200px]">
          <nav aria-label="Footer" className="flex flex-col gap-4">
            <h3 className="sr-only">Site navigation</h3>
            {footerNav.map((l) => (
              <Link key={l.label} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col items-start gap-10 sm:col-span-2 sm:items-center lg:col-span-1">
            <div className="flex flex-col gap-2 sm:items-center sm:text-center">
              <h3 className={linkClass}>Contact</h3>
              <a href={`mailto:${site.email}`} className="text-lead font-medium text-cream-text transition-opacity hover:opacity-80">
                {site.email}
              </a>
              <a href={site.phoneHref} className="text-lead font-medium text-cream-text transition-opacity hover:opacity-80">
                {site.phone}
              </a>
            </div>
            <img src="/assets/footer/cup.svg" width={120} height={166} alt="" aria-hidden="true" data-reveal="scale" className="h-[166px] w-auto" />
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <h3 className="sr-only">Follow us</h3>
            {socialLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener" className={linkClass}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-shell/40 pt-6 text-body text-cream-text sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 India International Coffee Festival. All rights reserved.</p>
          <Link href="#" className="transition-opacity hover:opacity-80">Privacy Policy</Link>
          <a href="#main" className="transition-opacity hover:opacity-80">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
