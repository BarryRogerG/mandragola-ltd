import type { Graph, Thing } from "schema-dts";

type JsonLdProps = {
  items: readonly Exclude<Thing, string>[];
};

export function JsonLd({ items }: JsonLdProps) {
  const graph: Graph = { "@context": "https://schema.org", "@graph": [...items] };

  return (
    <script
      type="application/ld+json"
      // Escape "<" so content can never close the script tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }}
    />
  );
}
