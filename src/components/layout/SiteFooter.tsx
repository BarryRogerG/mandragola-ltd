"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FacebookIcon, LinkedInIcon, MailIcon, XIcon } from "@/components/icons/Icons";
import { useContact } from "@/components/layout/ContactProvider";
import { scrollToPageTop } from "@/components/layout/RouteVisit";
import { Container } from "@/components/ui/Container";
import { footerCopy, quickAccess, site } from "@/content/site";
import { cn } from "@/lib/cn";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedInIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
  { label: "X (Twitter)", href: site.social.x, Icon: XIcon },
] as const;

export function SiteFooter() {
  const { openContact } = useContact();
  const dark = usePathname() === "/values";
  const logo = dark ? site.logo.light : site.logo.dark;
  const muted = dark ? "text-[#CDBBA8]" : "text-ink-soft";
  const headingClass = cn(
    "border-b pb-2 text-sm font-medium",
    dark ? "border-[#C4A07A]/25 text-[#F3EBE0]" : "border-line text-charcoal",
  );
  const linkClass = cn(
    "inline-flex min-h-11 items-center gap-1.5 text-sm transition-colors md:min-h-9",
    dark ? "text-[#CDBBA8] hover:text-[#C4A07A]" : "text-ink-soft hover:text-charcoal",
  );
  const iconClass = cn(
    "inline-flex size-11 items-center justify-center rounded-sm transition-colors",
    dark ? "text-[#CDBBA8] hover:text-[#C4A07A]" : "text-charcoal hover:text-forest",
  );

  return (
    <footer className={cn("border-t", dark ? "border-[#C4A07A]/20 bg-[#0B0A09]" : "border-line bg-ivory")}>
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
        <div className="sm:col-span-2 lg:col-span-3">
          <Link href="/" scroll onClick={scrollToPageTop} aria-label={`${site.name}, home`}>
            <Image src={logo.src} width={logo.width} height={logo.height} alt="" className="h-12 w-auto" />
          </Link>
        </div>

        <div className="lg:col-span-3">
          <h2 className={headingClass}>{footerCopy.contactHeading}</h2>
          <p className={cn("mt-4 text-sm leading-relaxed", muted)}>{footerCopy.addressLine}</p>
          <p className={cn("mt-2 text-sm leading-relaxed", muted)}>
            {footerCopy.emailLabel}{" "}
            <a
              href={`mailto:${site.email}`}
              className={cn("underline-offset-4 hover:underline", dark ? "text-[#E4D5C3]" : "text-charcoal")}
            >
              {site.email}
            </a>
          </p>
          <ul className="mt-5 flex items-center gap-0.5">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={iconClass}>
                  <Icon className="size-5" />
                  <span className="sr-only">{label} (opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <button type="button" onClick={openContact} className={iconClass} aria-haspopup="dialog">
                <MailIcon className="size-5" />
                <span className="sr-only">Contact us</span>
              </button>
            </li>
          </ul>
        </div>

        <nav aria-label="Quick access" className="lg:col-span-3">
          <h2 className={headingClass}>{footerCopy.quickAccessHeading}</h2>
          <ul className="mt-3">
            {quickAccess.map((item) => (
              <li key={item.href}>
                {"external" in item && item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {item.label}
                    <span className="sr-only">(opens the official website in a new tab)</span>
                  </a>
                ) : (
                  <Link href={item.href} scroll onClick={scrollToPageTop} className={linkClass}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <ul className="lg:pt-0">
            <li className={cn("text-sm leading-loose", muted)}>{footerCopy.privacy}</li>
            <li className={cn("text-sm leading-loose", muted)}>{footerCopy.terms}</li>
          </ul>
        </div>
      </Container>

      <div className={cn("border-t", dark ? "border-[#C4A07A]/20" : "border-line")}>
        <Container className={cn("py-5 text-xs", dark ? "text-[#CDBBA8]/70" : "text-mist")}>
          <p>{site.demoNotice}</p>
        </Container>
      </div>
    </footer>
  );
}
