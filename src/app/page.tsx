import { CtaBand } from "@/components/sections/CtaBand";
import { ExploreHomeLink } from "@/components/sections/ExploreHomeLink";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Hero } from "@/components/sections/Hero";
import { PhotoSplit } from "@/components/sections/PhotoSplit";
import { SplitSection } from "@/components/sections/SplitSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { TransactionsShowcase } from "@/components/sections/TransactionsShowcase";
import { JsonLd } from "@/components/seo/JsonLd";
import { LinkButton } from "@/components/ui/LinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { homeCopy, homeMeta } from "@/content/home";
import { expertisePhotos, photos } from "@/content/images";
import { featuredCompanyLogos } from "@/content/logos";
import { companyStats } from "@/content/shared";
import { officialPages } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

export const metadata = buildMetadata(homeMeta);

const crumbs = [{ name: "Home", href: "/" }] as const;

export default function HomePage() {
  const { hero, intro, philosophy, opportunity, expertise, transactions, team } = homeCopy;

  return (
    <>
      <Hero
        size="home"
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
        image={photos.hero}
        actions={
          <>
            <ExploreHomeLink />
            <LinkButton href="/our-mission" variant="invert">
              Our Mission
            </LinkButton>
          </>
        }
      />

      <ScrollReveal>
        <SplitSection sectionId="home-content" id="intro-heading" eyebrow="Overview" title={intro.title}>
          <p className="text-lead">{intro.body}</p>
        </SplitSection>
      </ScrollReveal>

      <StatsBand heading="Mandragola in numbers" stats={companyStats} />

      <PhotoSplit
        id="philosophy-heading"
        eyebrow={philosophy.eyebrow}
        title={philosophy.title}
        body={philosophy.body}
        image={photos.philosophy}
        action={<LinkButton href="/our-mission">Read our mission</LinkButton>}
      />

      <FeatureGrid
        id="expertise-heading"
        eyebrow={expertise.eyebrow}
        title={expertise.title}
        items={expertise.items}
        images={expertisePhotos}
      />

      <CtaBand
        id="opportunity-heading"
        title={opportunity.title}
        body={opportunity.body}
        image={photos.approach}
        actions={
          <LinkButton href="/values" variant="invert">
            Discover our values
          </LinkButton>
        }
      />

      <TransactionsShowcase
        id="transactions-heading"
        eyebrow={transactions.eyebrow}
        title={transactions.title}
        lead={transactions.lead}
        logos={featuredCompanyLogos}
        moreHref={officialPages.transactions}
        moreLabel={transactions.cta}
      />

      <PhotoSplit
        id="team-heading"
        eyebrow="Our team"
        title={team.title}
        body={team.body}
        image={photos.team}
        imageSide="right"
      />

      <JsonLd items={[pageSchema({ page: homeMeta, crumbs, image: photos.hero })]} />
    </>
  );
}
