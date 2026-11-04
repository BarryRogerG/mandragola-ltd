import type { MetadataRoute } from "next";
import { homeMeta } from "@/content/home";
import { missionMeta } from "@/content/mission";
import { site } from "@/content/site";
import { valuesMeta } from "@/content/values";

const lastModified = new Date("2026-11-02");

export default function sitemap(): MetadataRoute.Sitemap {
  return [homeMeta, missionMeta, valuesMeta].map((page, index) => ({
    url: new URL(page.path, site.url).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : 0.8,
  }));
}
