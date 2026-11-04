import type { Metadata } from "next";
import { site } from "@/content/site";
import type { PageCopy } from "@/types/content";

/**
 * Per-page metadata. `openGraph` and `twitter` are returned in full because Next.js replaces
 * (rather than merges) nested metadata objects defined in a parent layout.
 */
export function buildMetadata({ path, title, description }: PageCopy): Metadata {
  const isHome = path === "/";
  /** Titles that already include a brand suffix must not receive the layout template again. */
  const isAbsolute = isHome || title.includes(" | ");
  const documentTitle = isAbsolute ? title : `${title} | ${site.name}`;

  return {
    title: isAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: path,
      title: documentTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: documentTitle,
      description,
    },
  };
}
