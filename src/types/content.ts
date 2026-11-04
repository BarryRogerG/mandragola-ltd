export type NavItem = {
  label: string;
  href: string;
};

export type ExternalLink = NavItem & {
  external: true;
};

export type LogoAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Stat = {
  /** Final accessible value, e.g. "100+" or "Billions". */
  value: string;
  label: string;
  /** When set, the figure counts from 0 to this number when scrolled into view. */
  countTo?: number;
  suffix?: string;
};

export type Feature = {
  title: string;
  body: string;
};

export type Value = {
  title: string;
  body: string;
};

export type Sector = "Defense" | "Aerospace" | "Healthcare" | "Software";

export type DealType =
  | "Mergers & Acquisitions"
  | "Financial Consulting"
  | "Structured Investments"
  | "Joint Venture"
  | "VC";

export type Transaction = {
  id: string;
  /** Card text exactly as published on mandragolaltd.com/transactions. */
  headline: string;
  sectors: readonly Sector[];
  dealType: DealType;
  role: string;
  logos: readonly LogoAsset[];
};

export type Crumb = {
  name: string;
  href: string;
};

export type PageCopy = {
  path: string;
  title: string;
  description: string;
};
