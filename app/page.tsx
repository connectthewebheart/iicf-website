import { AnnouncementBar } from "@/components/interactive/AnnouncementBar";
import { SiteHeader } from "@/components/sections/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { PartnerStrip } from "@/components/sections/PartnerStrip";
import { Welcome } from "@/components/sections/Welcome";
import { FestivalHighlights } from "@/components/sections/FestivalHighlights";
import { BuntingDivider } from "@/components/ui/BuntingDivider";
import { FeaturedCompetitions } from "@/components/sections/FeaturedCompetitions";
import { ExperienceBento } from "@/components/sections/ExperienceBento";
import { Testimonials } from "@/components/sections/Testimonials";
import { SiteFooter } from "@/components/sections/SiteFooter";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <PartnerStrip />
        <Welcome />
        <FestivalHighlights />
        <BuntingDivider />
        <FeaturedCompetitions />
        <ExperienceBento />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
