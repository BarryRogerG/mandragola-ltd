"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { scrollToPageTop } from "@/components/layout/RouteVisit";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types/content";

type NavTone = "light" | "dark" | "dusk";

type SiteNavProps = {
  items: readonly NavItem[];
  onContact: () => void;
  tone?: NavTone;
};

export function SiteNav({ items, onContact, tone = "light" }: SiteNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const light = tone === "light";
  const dusk = tone === "dusk";

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && open) {
      setOpen(false);
      toggleRef.current?.focus();
    }
  };

  const goToPage = () => {
    close();
    scrollToPageTop();
  };

  const linkProps = (item: NavItem) => ({
    href: item.href,
    scroll: true as const,
    onClick: (event: { preventDefault: () => void }) => {
      if (item.href === pathname) event.preventDefault();
      goToPage();
    },
    "aria-current": pathname === item.href ? ("page" as const) : undefined,
  });

  const navLinkClass = cn(
    "inline-flex min-h-11 items-center text-[11px] font-light tracking-[0.25em] uppercase transition-colors duration-300",
    light && "text-white/80 hover:text-white aria-[current=page]:text-white",
    dusk && "text-[#CDBBA8] hover:text-[#F3EBE0] aria-[current=page]:text-[#C4A07A]",
    !light && !dusk && "text-charcoal/80 hover:text-charcoal aria-[current=page]:text-forest",
  );

  return (
    <nav aria-label="Primary" onKeyDown={handleKeyDown} className="flex items-center">
      <ul className="hidden items-center gap-12 md:flex">
        {items.map((item) => (
          <li key={item.href}>
            <Link {...linkProps(item)} className={navLinkClass}>
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <button
            type="button"
            onClick={onContact}
            className={cn(navLinkClass, "cursor-pointer border-0 bg-transparent p-0")}
            aria-haspopup="dialog"
          >
            Contact us
          </button>
        </li>
      </ul>

      <button
        ref={toggleRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex size-11 items-center justify-center md:hidden",
          light || dusk ? "text-white" : "text-charcoal",
        )}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
          ) : (
            <path d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className={cn(
          "absolute inset-x-0 top-full border-t md:hidden",
          light && "border-white/10 bg-[#0B0A09]/96 backdrop-blur-md",
          dusk && "border-[#C4A07A]/20 bg-[#0B0A09]/96 backdrop-blur-md",
          !light && !dusk && "border-line/80 bg-paper/96 backdrop-blur-md",
        )}
      >
        <ul className="flex flex-col px-6 py-2 md:px-20">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                {...linkProps(item)}
                className={cn(
                  "flex min-h-12 items-center text-[11px] font-light tracking-[0.25em] uppercase",
                  light && "text-white/80 aria-[current=page]:text-white",
                  dusk && "text-[#CDBBA8] aria-[current=page]:text-[#C4A07A]",
                  !light && !dusk && "text-charcoal aria-[current=page]:text-forest",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={() => {
                close();
                onContact();
              }}
              aria-haspopup="dialog"
              className={cn(
                "flex min-h-12 w-full cursor-pointer items-center border-0 bg-transparent p-0 text-[11px] font-light tracking-[0.25em] uppercase",
                light && "text-white/80",
                dusk && "text-[#CDBBA8]",
                !light && !dusk && "text-charcoal",
              )}
            >
              Contact us
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
