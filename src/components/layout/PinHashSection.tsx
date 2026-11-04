"use client";

import { useEffect } from "react";
import { scrollToSiteSection } from "@/lib/scrollToSection";

export function PinHashSection({ id }: { id: string }) {
  useEffect(() => {
    if (window.location.hash !== `#${id}`) return;
    const frame = window.requestAnimationFrame(() => scrollToSiteSection(id));
    return () => window.cancelAnimationFrame(frame);
  }, [id]);

  return null;
}
