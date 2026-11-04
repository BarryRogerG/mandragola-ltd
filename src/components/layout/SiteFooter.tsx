"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalIcon } from "@/components/icons/Icons";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { primaryNav, site } from "@/content/site";
import { cn } from "@/lib/cn";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Facebook", href: site.social.facebook },
  { label: "X (Twitter)", href: site.social.x },
] as const;

function ExternalLink({ href, children, className }: { href: string; children: string; className: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <ExternalIcon className="size-3.5" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export function SiteFooter() {
  const dark = usePathname() === "/values";
  const logo = dark ? site.logo.light : site.logo.dark;
  const linkClass = cn(
    "inline-flex min-h-11 items-center gap-1.5 text-sm transition-colors md:min-h-9",
    dark ? "text-[#CDBBA8] hover:text-[#C4A07A]" : "text-ink-soft hover:text-charcoal",
  );
  const headingClass = cn(
    "text-[0.7rem] font-medium tracking-[0.18em] uppercase",
    dark ? "text-[#C4A07A]" : "text-mist",
  );

  return (
    <footer className={cn("border-t", dark ? "border-[#C4A07A]/20 bg-[#0B0A09]" : "border-line bg-paper")}>
      <ScrollReveal>
        <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-6">
            <Image
              src={logo.src}
              width={logo.width}
              height={logo.height}
              alt={site.name}
              className="h-10 w-auto"
            />
            <p
              className={cn(
                "mt-6 max-w-sm font-serif text-xl leading-snug",
                dark ? "text-[#F3EBE0]" : "text-charcoal",
              )}
            >
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h2 className={headingClass}>Pages</h2>
            <ul className="mt-4">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className={headingClass}>Follow</h2>
            <ul className="mt-4">
              {socialLinks.map((item) => (
                <li key={item.href}>
                  <ExternalLink href={item.href} className={linkClass}>
                    {item.label}
                  </ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </ScrollReveal>

      <div className={cn("border-t", dark ? "border-[#C4A07A]/20" : "border-line")}>
        <Container className={cn("py-5 text-xs", dark ? "text-[#CDBBA8]/70" : "text-mist")}>
          <p>{site.demoNotice}</p>
        </Container>
      </div>
    </footer>
  );
}
