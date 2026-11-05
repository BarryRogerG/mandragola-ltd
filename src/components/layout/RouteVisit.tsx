"use client";

import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

const RouteVisitContext = createContext(0);

export function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Increments when the App Router enters a path from another path.
 * Page client trees can be restored from the Next.js cache with their old
 * state; this value still updates because the layout stays mounted.
 */
export function RouteVisitProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [previousPath, setPreviousPath] = useState(pathname);
  const [visits, setVisits] = useState(() => new Map<string, number>());

  if (previousPath !== pathname) {
    setPreviousPath(pathname);
    setVisits((current) => {
      const next = new Map(current);
      next.set(pathname, (current.get(pathname) ?? 0) + 1);
      return next;
    });
  }

  useLayoutEffect(() => {
    if (window.history.scrollRestoration !== "manual") {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) return;

    scrollToPageTop();
    const frame = window.requestAnimationFrame(() => scrollToPageTop());
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return <RouteVisitContext.Provider value={visits.get(pathname) ?? 0}>{children}</RouteVisitContext.Provider>;
}

export function useRouteVisit(): number {
  return useContext(RouteVisitContext);
}
