import type { AboutPage, BreadcrumbList, ImageObject, ItemList, Organization, WebPage, WebSite } from "schema-dts";
import type { AtmospherePhoto } from "@/content/images";
import { site } from "@/content/site";
import type { Crumb, PageCopy, Value } from "@/types/content";

/** schema-dts types also allow a bare string (an IRI); builders always return objects. */
type Node<T> = Exclude<T, string>;

const absolute = (path: string) => new URL(path, site.url).toString();

const organizationId = `${site.officialUrl}/#organization`;
const websiteId = absolute("/#website");

/** The company is described by its official URL; this demo site is only the publisher of these pages. */
export function organizationSchema(): Node<Organization> {
  return {
    "@type": "Organization",
    "@id": organizationId,
    name: site.name,
    url: site.officialUrl,
    description: site.description,
    logo: absolute("/icon.png"),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressCountry: site.address.countryCode,
    },
    sameAs: [site.social.linkedin, site.social.facebook, site.social.x],
  };
}

export function websiteSchema(): Node<WebSite> {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: absolute("/"),
    name: `${site.name} (recruitment demonstration)`,
    description: site.demoNotice,
    inLanguage: "en",
    about: { "@id": organizationId },
  };
}

export function breadcrumbSchema(crumbs: readonly Crumb[]): Node<BreadcrumbList> {
  const current = crumbs[crumbs.length - 1];

  return {
    "@type": "BreadcrumbList",
    ...(current ? { "@id": `${absolute(current.href)}#breadcrumb` } : {}),
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absolute(crumb.href),
    })),
  };
}

type PageSchemaOptions = {
  page: PageCopy;
  type?: "WebPage" | "AboutPage";
  crumbs: readonly Crumb[];
  image?: AtmospherePhoto;
  images?: readonly AtmospherePhoto[];
};

export function imageObjectSchema(photo: AtmospherePhoto): Node<ImageObject> {
  return {
    "@type": "ImageObject",
    contentUrl: absolute(photo.src),
    url: absolute(photo.src),
    width: String(photo.width),
    height: String(photo.height),
    caption: photo.alt,
    creditText: photo.credit,
    copyrightNotice: `Photo by ${photo.credit}. Atmosphere photograph; it does not depict a Mandragola office, holding or transaction.`,
    ...(photo.licenseUrl ? { license: photo.licenseUrl } : {}),
    ...(photo.sourceUrl ? { acquireLicensePage: photo.sourceUrl } : {}),
  };
}

export function pageSchema({ page, type = "WebPage", crumbs, image, images }: PageSchemaOptions): Node<WebPage> | Node<AboutPage> {
  const url = absolute(page.path);
  const imageNode = image ? imageObjectSchema(image) : undefined;
  const extraNodes = images?.map(imageObjectSchema) ?? [];
  const allImages = [...(imageNode ? [imageNode] : []), ...extraNodes];

  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    breadcrumb: breadcrumbSchema(crumbs),
    ...(imageNode ? { primaryImageOfPage: imageNode } : {}),
    ...(allImages.length === 1 ? { image: allImages[0] } : allImages.length > 1 ? { image: allImages } : {}),
  };
}

export function valuesListSchema(values: readonly Value[], pagePath = "/values"): Node<ItemList> {
  const pageUrl = absolute(pagePath);

  return {
    "@type": "ItemList",
    "@id": `${pageUrl}#values`,
    name: "Mandragola’s Values",
    numberOfItems: values.length,
    itemListElement: values.map((value, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: value.title,
      description: value.body,
      item: `${pageUrl}#principle-${index + 1}`,
    })),
  };
}
