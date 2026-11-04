import type { PageCopy, Value } from "@/types/content";

export const valuesMeta = {
  path: "/values",
  title: "Investment Philosophy & Values | Mandragola",
  description:
    "Mandragola's investment values: disciplined capital allocation, trusted relationships, sound judgment and strategic execution for long-term value.",
} as const satisfies PageCopy;

export const valuesCopy = {
  hero: {
    eyebrow: "Values",
    title: "The principles that guide how we invest, build relationships, and create long-term value.",
  },
  values: [
    {
      title: "Capital with Discipline",
      body: "Capital is most effective when applied with patience, rigor, and purpose. We evaluate opportunities carefully, structure investments thoughtfully, and focus on decisions built to create durable value over time.",
    },
    {
      title: "Relationships Before Transactions",
      body: "We believe the strongest opportunities are built on trust. For Mandragola, relationships are not a byproduct of business. They are the foundation that allows capital, access, and execution to become meaningful outcomes.",
    },
    {
      title: "Judgment in Complexity",
      body: "Important opportunities are rarely simple. We bring clear thinking to complex situations, combining market understanding, practical experience, and sound judgment to identify where value can be created.",
    },
    {
      title: "Out of the Box Solutions",
      body: "We are willing to think differently, move deliberately, and pursue opportunities others may overlook. Our perspective is shaped by experience, not by the need to follow the market’s prevailing view.",
    },
    {
      title: "Execution as a Standard",
      body: "Ideas and relationships only matter when they lead to action. We focus on the practical work required to move opportunities forward, align stakeholders, and turn potential into lasting business value.",
    },
  ] satisfies Value[],
  quote: {
    lines: ["Capital Opens Doors.", "Relationships Create Value."] as const,
  },
} as const;
