"use client";

import { ArrowIcon } from "@/components/icons/Icons";
import { scrollToSiteSection } from "@/lib/scrollToSection";

export function ExploreHomeLink() {
  return (
    <a
      href="#home-content"
      className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:text-white/80"
      onClick={(event) => {
        event.preventDefault();
        scrollToSiteSection("home-content");
      }}
    >
      Explore
      <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </a>
  );
}
