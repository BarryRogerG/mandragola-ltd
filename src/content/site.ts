import type { NavItem } from "@/types/content";

const officialUrl = "https://mandragolaltd.com";

export const site = {
  name: "Mandragola Ltd",
  shortName: "Mandragola",
  description:
    "Mandragola Ltd. is an investment firm combining capital, connections, and company building for long-term value across vital industries.",
  officialUrl,
  /** Where this demo is deployed. Used for canonical URLs, the sitemap and Open Graph. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  demoNotice: "Demonstration for a recruitment assignment, not the official Mandragola website.",
  tagline:
    "Strategic Capital, Uncompromising Alliances, and High-Impact Scale for Essential Industries.",
  email: "info@mandragolaltd.com",
  address: {
    street: "8 HaGavish",
    locality: "Netanya",
    countryCode: "IL",
    countryName: "Israel",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/mandragola-ltd/",
    facebook: "https://www.facebook.com/profile.php?id=100057343732850",
    x: "https://x.com/MandragolaLtd",
  },
  logo: {
    light: { src: "/brand/mandragola-logo-white.svg", width: 121, height: 78 },
    dark: { src: "/brand/mandragola-logo-dark.svg", width: 121, height: 78 },
  },
} as const;

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Our Mission", href: "/our-mission" },
  { label: "Values", href: "/values" },
] as const satisfies readonly NavItem[];

/** Sections of the original site that are not part of this rebuild. */
export const officialPages = {
  expertise: `${officialUrl}/expertise/`,
  transactions: `${officialUrl}/transactions/`,
  articles: `${officialUrl}/articles/`,
} as const;

