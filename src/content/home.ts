import type { Feature, PageCopy } from "@/types/content";

export const homeMeta = {
  path: "/",
  title: "Mandragola Ltd | Global Investments & Partnerships",
  description:
    "Mandragola Ltd. is an investment firm combining capital, connections, and company building for long-term value across vital industries.",
} as const satisfies PageCopy;

export const homeCopy = {
  hero: {
    eyebrow: "Mandragola",
    title: "Global Investments & Partnerships",
    lead: "Connecting capital, relationships, and opportunity across A&D, and technology.",
  },
  intro: {
    title: "Identifying and developing high potential growth opportunities",
    body: "With a focus on the A&D sector, we have strong relationships in the Aerospace & Aviation industry through our global partnerships, as well as across the Israeli tech ecosystem.",
  },
  philosophy: {
    eyebrow: "Our philosophy",
    title: "Capital. Access. Strategic execution.",
    body: "Mandragola was built on the belief that capital alone does not create lasting value. The right relationships, sound judgment, and disciplined execution are what turn opportunity into progress.",
  },
  opportunity: {
    title: "Where capital meets opportunity",
    body: "Mandragola enables access to strategically important sectors through targeted public and private investments.",
  },
  expertise: {
    eyebrow: "Expertise",
    title: "Experience that extends beyond capital",
    items: [
      {
        title: "Capital Markets",
        body: "Experience across global financial markets, investment management, and capital allocation.",
      },
      {
        title: "Company Building",
        body: "Supporting businesses through growth, expansion, and strategic execution.",
      },
      {
        title: "Strategic Relationships",
        body: "Connecting companies, investors, and industry leaders across international markets.",
      },
      {
        title: "Opportunity Sourcing",
        body: "Recognizing and pursuing opportunities across industries, technologies, and markets.",
      },
    ] satisfies Feature[],
  },
  transactions: {
    eyebrow: "Transactions",
    title: "Transactions",
    lead: "Selected M&A, joint ventures, and financing transactions.",
    cta: "Discover Transactions",
  },
  team: {
    title: "A team built for execution",
    body: "Mandragola brings together investors, operators, entrepreneurs, and industry leaders whose backgrounds span finance, technology, international business, and national security. The breadth of our collective experience enables us to see opportunities others may miss, forge relationships built on mutual trust, and support the companies we partner with through every stage of growth.",
  },
} as const;
