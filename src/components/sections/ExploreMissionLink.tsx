"use client";

import { ArrowIcon } from "@/components/icons/Icons";
import { scrollToSiteSection } from "@/lib/scrollToSection";

export function ExploreMissionLink() {
  return (
    <a
      href="#mission-content"
      className="group mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium tracking-[0.2em] text-amber-200/90 uppercase transition-colors duration-300 hover:text-white"
      onClick={(event) => {
        event.preventDefault();
        scrollToSiteSection("mission-content");
      }}
    >
      Explore Mission
      <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </a>
  );
}
