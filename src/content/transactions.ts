import { logos } from "@/content/logos";
import type { Transaction } from "@/types/content";

/**
 * Card-level copy from mandragolaltd.com/transactions. The original detail pop-ups are
 * not used: most repeat the DFSL/BiomX summary regardless of the deal.
 */
export const selectedTransactions = [
  {
    id: "dfsl-tessera",
    headline: "DFSL has agreed to be acquired by Tessera",
    sectors: ["Defense"],
    dealType: "Mergers & Acquisitions",
    role: "Transaction M&A Consulting and Financing",
    logos: [logos.dfsl, logos.tessera],
  },
  {
    id: "zorronet-tessera",
    headline: "Zorronet has agreed to be acquired by Tessera",
    sectors: ["Defense"],
    dealType: "Mergers & Acquisitions",
    role: "Transaction M&A Consulting",
    logos: [logos.zorronet, logos.tessera],
  },
  {
    id: "star26-t3",
    headline: "Star26 has agreed to be acquired by T3 Defense",
    sectors: ["Defense"],
    dealType: "Mergers & Acquisitions",
    role: "Transaction M&A Consulting",
    logos: [logos.star26, logos.t3],
  },
  {
    id: "kochav-spac",
    headline: "Kochav (NASDAQ:KVHS) has raised $253 Millions as a special acquisition company",
    sectors: ["Defense"],
    dealType: "Financial Consulting",
    role: "Consulting",
    logos: [logos.kochav],
  },
  {
    id: "versamed-ge",
    headline:
      "VersaMed Corporation, an Israeli provider of portable critical care ventilators for respiratory care, has been acquired by GE Healthcare.",
    sectors: ["Healthcare"],
    dealType: "VC",
    role: "Shareholder & Consulting",
    logos: [logos.versamed],
  },
  {
    id: "dentfreak-curaprox",
    headline:
      "Strategic investment fund raising, BusDev and consulting of DentFreak (acquired by Curaprox)",
    sectors: ["Healthcare"],
    dealType: "VC",
    role: "Consulting",
    logos: [logos.samba],
  },
] as const satisfies readonly Transaction[];
