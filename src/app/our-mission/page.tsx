import { ApproachSection } from "@/components/sections/ApproachSection";
import { FoundationsClose } from "@/components/sections/FoundationsClose";
import { ImpactSpread } from "@/components/sections/ImpactSpread";
import { MissionHero } from "@/components/sections/MissionHero";
import { PageContact } from "@/components/sections/PageContact";
import { StoryNarrative } from "@/components/sections/StoryNarrative";
import { JsonLd } from "@/components/seo/JsonLd";
import { photos } from "@/content/images";
import { missionCopy, missionMeta } from "@/content/mission";
import { companyStats } from "@/content/shared";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema } from "@/lib/schema";

export const metadata = buildMetadata(missionMeta);

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Our Mission", href: "/our-mission" },
] as const;

const impactHeading =
  "100+ Financing Transactions, Billions of Dollars of Capital Raised, Thousands of Underlying Shareholders";

export default function OurMissionPage() {
  const { hero, positioning, story, closing } = missionCopy;

  return (
    <>
      <MissionHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        lead={hero.lead}
        crumbs={crumbs}
        image={photos.mission}
      />

      <ApproachSection
        id="approach-heading"
        eyebrow={positioning.eyebrow}
        statement={positioning.statement}
        body={positioning.body}
        theatres={positioning.theatres}
        image={photos.approach}
      />

      <ImpactSpread heading={impactHeading} stats={companyStats} />

      <StoryNarrative
        id="story-heading"
        eyebrow={story.eyebrow}
        title={story.title}
        founded={story.founded}
        pull={story.pull}
        continuation={story.continuation}
        closing={story.closing}
        image={photos.philosophy}
      />

      <FoundationsClose
        id="foundations-heading"
        title={closing.title}
        kicker={closing.kicker}
        body={closing.body}
        image={photos.foundations}
      />

      <PageContact tone="paper" />

      <JsonLd items={[pageSchema({ page: missionMeta, type: "AboutPage", crumbs, image: photos.mission })]} />
    </>
  );
}
