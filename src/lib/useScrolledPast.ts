"use client";

import { useSyncExternalStore } from "react";

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

/**
 * Whether the document is scrolled past `threshold`.
 * Hydration always starts as `false` so overlay headers match SSR.
 */
export function useScrolledPast(threshold: number): boolean {
  return useSyncExternalStore(subscribe, () => window.scrollY > threshold, () => false);
}
