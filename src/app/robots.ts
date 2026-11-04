import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/**
 * Allow crawling so bots can see the noindex robots meta and X-Robots-Tag header.
 * A robots.txt Disallow would hide those signals.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", site.url).toString(),
    host: site.url,
  };
}
