"use client";

import { createContext, useContext, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

const RouteVisitContext = createContext(0);

/**
 * Increments when the App Router enters a path from another path.
 * Page client trees can be restored from the Next.js cache with their old
 * state; this value still updates because the layout stays mounted.
 */
export function RouteVisitProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const previousPath = useRef(pathname);
  const visits = useRef(new Map<string, number>());

  if (previousPath.current !== pathname) {
    visits.current.set(pathname, (visits.current.get(pathname) ?? 0) + 1);
    previousPath.current = pathname;
  }

  return <RouteVisitContext.Provider value={visits.current.get(pathname) ?? 0}>{children}</RouteVisitContext.Provider>;
}

export function useRouteVisit(): number {
  return useContext(RouteVisitContext);
}
