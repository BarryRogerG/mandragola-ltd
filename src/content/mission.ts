import type { PageCopy } from "@/types/content";

export const missionMeta = {
  path: "/our-mission",
  title: "Our Mission",
  description:
    "How Mandragola connects capital, relationships, and opportunity across strategically important sectors, from financial markets to aerospace and defense.",
} as const satisfies PageCopy;

export const missionCopy = {
  hero: {
    eyebrow: "Our Mission",
    title: "Capital, access, and strategic execution",
    lead: "Drawing on Machiavelli’s enduring insights into human nature, Mandragola applies strategy and foresight to complex situations, helping companies access capital, build trusted relationships, and pursue long-term growth.",
  },
  positioning: {
    eyebrow: "Our approach",
    statement:
      "Mandragola creates value by connecting capital, relationships, and opportunity across strategically important sectors.",
    body: "Our approach combines investment expertise with a global network developed across financial markets, technology, aerospace and defense, and international business. By leveraging these relationships, we help connect capital with opportunity and transform ideas into lasting enterprises.",
    theatres: [
      "Financial markets",
      "Technology",
      "Aerospace and defense",
      "International business",
    ] as const,
  },
  story: {
    eyebrow: "Our story",
    title: "The Mandragola Story",
    founded: "Mandragola was founded on a simple belief:",
    pull: "Capital alone does not build great companies.",
    continuation:
      "Opportunity becomes meaningful when it is supported by the right relationships, the right judgement, and the ability to execute.",
    closing:
      "We work at the intersection of investment, industry, and entrepreneurship, helping bring together companies, investors, and partners who can create value together. Across cross-border ventures, strategic partnerships, and complex investment opportunities, our focus is on turning potential into progress.",
  },
  closing: {
    title: "Building the Foundations of Tomorrow",
    kicker: "Every great enterprise begins with a relationship.",
    body: "At Mandragola, we help connect entrepreneurs, investors, and industry leaders around opportunities built for long-term value. By combining capital, relationships, and execution, we help create the foundations that tomorrow’s leading companies are built upon.",
  },
} as const;
