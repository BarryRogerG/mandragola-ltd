import { PhilosophyHero } from "@/components/sections/PhilosophyHero";
import { PrincipleSequence } from "@/components/sections/PrincipleSequence";
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
      <article className="bg-[#0B0A09] text-[#CDBBA8]">
        <PhilosophyHero eyebrow={hero.eyebrow} title={hero.title} crumbs={crumbs} image={photos.values} />
        <PrincipleSequence values={values} quote={quote} image={photos.officeLounge} />
      </article>
      <JsonLd
        items={[
          pageSchema({
            page: valuesMeta,
            crumbs,
            image: photos.values,
            images: [photos.officeLounge, ...valuePhotos],
          }),
          valuesListSchema(values, valuesMeta.path),
        ]}
      />
    </>
  );
}
