"use client";

import { createContext, useContext, useLayoutEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

const RouteVisitContext = createContext(0);

export function scrollToPageTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function pinPageTop() {
  if (window.location.hash) return;
  if (window.scrollY === 0 && document.documentElement.scrollTop === 0 && document.body.scrollTop === 0) {
    return;
  }
  scrollToPageTop();
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

    let frame2 = 0;
    const frame1 = window.requestAnimationFrame(() => {
      pinPageTop();
      frame2 = window.requestAnimationFrame(pinPageTop);
    });
    const t0 = window.setTimeout(pinPageTop, 0);
    const t1 = window.setTimeout(pinPageTop, 80);

    return () => {
      window.cancelAnimationFrame(frame1);
      window.cancelAnimationFrame(frame2);
      window.clearTimeout(t0);
      window.clearTimeout(t1);
    };
  }, [pathname]);

  return <RouteVisitContext.Provider value={visits.get(pathname) ?? 0}>{children}</RouteVisitContext.Provider>;
}

export function useRouteVisit(): number {
  return useContext(RouteVisitContext);
}
