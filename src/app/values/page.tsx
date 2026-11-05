import { PhilosophyHero } from "@/components/sections/PhilosophyHero";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { PinHashSection } from "@/components/layout/PinHashSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { photos, valuePhotos } from "@/content/images";
import { valuesCopy, valuesMeta } from "@/content/values";
import { buildMetadata } from "@/lib/metadata";
import { pageSchema, valuesListSchema } from "@/lib/schema";

export const metadata = buildMetadata(valuesMeta);

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Values", href: "/values" },
] as const;

export default function ValuesPage() {
  const { hero, values, quote } = valuesCopy;

  return (
    <>
      <PhilosophyHero eyebrow={hero.eyebrow} title={hero.title} crumbs={crumbs} image={photos.values} />
      <PinHashSection id="values-content" />
      <FeatureGrid
        id="values-heading"
        sectionId="values-content"
        eyebrow={hero.eyebrow}
        title={
          <>
            {quote.lines[0]}
            <span className="block">{quote.lines[1]}</span>
          </>
        }
        items={values}
        images={valuePhotos}
        numbered={false}
        centerLast
        spacing="snug"
        itemIdPrefix="principle"
      />
      <JsonLd
        items={[
          pageSchema({
            page: valuesMeta,
            crumbs,
            image: photos.values,
            images: valuePhotos,
          }),
          valuesListSchema(values, valuesMeta.path),
        ]}
      />
    </>
  );
}
