import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Crumb } from "@/types/content";

type BreadcrumbsProps = {
  crumbs: readonly Crumb[];
  tone?: "light" | "dark";
};

export function Breadcrumbs({ crumbs, tone = "light" }: BreadcrumbsProps) {
  const muted = tone === "dark" ? "text-white/70" : "text-mist";
  const current = tone === "dark" ? "text-white" : "text-charcoal";

  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn("flex flex-wrap items-center gap-2 text-xs tracking-wide", muted)}>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {isLast ? (
                <span aria-current="page" className={current}>
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.href} className="underline-offset-4 hover:underline">
                    {crumb.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
