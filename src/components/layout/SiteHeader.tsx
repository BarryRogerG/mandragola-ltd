"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav, site } from "@/content/site";
import { scrollToPageTop } from "@/components/layout/RouteVisit";
import { cn } from "@/lib/cn";
import { useContact } from "./ContactProvider";
import { DemoBanner } from "./DemoBanner";
import { SiteNav } from "./SiteNav";

const overlayPaths = new Set(["/", "/our-mission", "/values"]);

export function SiteHeader() {
  const pathname = usePathname();
  const overlay = overlayPaths.has(pathname);
  const [scrolled, setScrolled] = useState(false);
  const chromeRef = useRef<HTMLDivElement>(null);
  const { openContact } = useContact();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 48);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  useEffect(() => {
    const chrome = chromeRef.current;
    if (!chrome) return;

    const publishOffset = () => {
      document.documentElement.style.setProperty("--site-header-offset", `${chrome.offsetHeight}px`);
    };

    publishOffset();
    const observer = new ResizeObserver(publishOffset);
    observer.observe(chrome);
    return () => observer.disconnect();
  }, [pathname]);

  const dusk = pathname === "/values";
  const solid = !overlay || scrolled;
  const duskSolid = dusk && solid;
  const logo = !solid || duskSolid ? site.logo.light : site.logo.dark;
  const chrome = duskSolid ? "dusk" : solid ? "dark" : "light";

  return (
    <div
        ref={chromeRef}
        data-site-chrome
        className={cn(
          "fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300",
          duskSolid &&
            "border-b border-[#C4A07A]/20 bg-[#0B0A09]/90 shadow-[0_1px_0_rgba(0,0,0,0.35)] backdrop-blur-md [--focus-ring:#C4A07A]",
          solid &&
            !duskSolid &&
            "border-b border-line/70 bg-paper/90 shadow-[0_1px_0_rgba(26,26,26,0.04)] backdrop-blur-md [--focus-ring:var(--color-forest)]",
          !solid && "border-b border-transparent bg-transparent [--focus-ring:white]",
        )}
      >
        <DemoBanner tone={chrome} />
        <header className={cn("px-6 md:px-20", solid ? "py-3.5 md:py-5" : "py-5 md:py-8")}>
          <div className="flex items-center justify-between">
            <Link
              href="/"
              scroll
              onClick={scrollToPageTop}
              aria-label={`${site.name}, home`}
              className="inline-flex items-center py-2"
            >
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt=""
                loading="eager"
                className={cn(
                  "w-auto",
                  solid ? "h-12 md:h-16" : "h-14 md:h-20",
                  !solid && "drop-shadow-[0_1px_16px_rgba(0,0,0,0.45)]",
                )}
              />
            </Link>
            <SiteNav items={primaryNav} onContact={openContact} tone={chrome} />
          </div>
        </header>
    </div>
  );
}
