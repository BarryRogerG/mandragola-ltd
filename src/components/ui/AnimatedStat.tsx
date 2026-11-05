"use client";

import { useEffect, useState } from "react";
import { useRouteVisit } from "@/components/layout/RouteVisit";
import { cn } from "@/lib/cn";
import type { Stat } from "@/types/content";

type AnimatedStatProps = {
  stat: Stat;
  delayMs?: number;
};

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function useOnceInView() {
  const visit = useRouteVisit();
  const [node, setNode] = useState<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [seenVisit, setSeenVisit] = useState(visit);

  if (seenVisit !== visit) {
    setSeenVisit(visit);
    setInView(false);
  }

  useEffect(() => {
    if (!node || inView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.1)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: [0.1, 0.25], rootMargin: "0px 0px -80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, inView, visit]);

  return { ref: setNode, inView } as const;
}

function useCountUp(target: number, active: boolean, duration: number, delayMs: number): number {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    const reduced = prefersReducedMotion();
    const runFor = reduced ? 700 : duration;
    const wait = reduced ? 0 : delayMs;

    let frame = 0;
    let startAt: number | null = null;

    const tick = (now: number) => {
      if (startAt == null) startAt = now;
      const progress = Math.min(1, (now - startAt) / runFor);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    const timeout = window.setTimeout(() => {
      setValue(0);
      frame = requestAnimationFrame(tick);
    }, wait);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [active, delayMs, duration, target]);

  return active ? value : 0;
}

export function useStatDisplay(stat: Stat, delayMs = 0) {
  const { ref, inView } = useOnceInView();
  const isNumeric = stat.countTo != null;
  const counted = useCountUp(stat.countTo ?? 0, inView && isNumeric, 2200, delayMs);
  const display = isNumeric ? `${counted}${stat.suffix ?? ""}` : stat.value;
  return { ref, inView, isNumeric, display } as const;
}

export function AnimatedStat({ stat, delayMs = 0 }: AnimatedStatProps) {
  const { ref, inView, isNumeric, display } = useStatDisplay(stat, delayMs);

  return (
    <div
      ref={ref}
      className="group relative flex min-w-0 flex-col-reverse overflow-visible rounded-xl border border-line bg-paper px-5 py-10 @container transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none md:px-7 md:py-12"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-4 left-0 w-[3px] origin-top scale-y-0 bg-forest transition-transform duration-500 group-hover:scale-y-100 group-active:scale-y-100"
      />
      <dt className="mt-4 max-w-full text-[0.65rem] leading-5 font-medium tracking-[0.16em] text-ink-soft uppercase sm:text-[0.7rem]">
        {stat.label}
      </dt>
      <dd
        className={cn(
          "max-w-full min-w-0 overflow-visible font-serif font-light tracking-[-0.03em] text-charcoal tabular-nums lining-nums whitespace-nowrap leading-none",
          isNumeric
            ? "text-[length:clamp(2.35rem,16cqi,3.75rem)]"
            : "text-[length:clamp(1.85rem,13cqi,3.15rem)]",
          !isNumeric && inView && "animate-fade-up",
          !isNumeric && !inView && "motion-safe:opacity-0",
        )}
        style={!isNumeric && inView ? { animationDelay: `${delayMs}ms` } : undefined}
      >
        <span aria-hidden="true">{display}</span>
        <span className="sr-only">{stat.value}</span>
      </dd>
    </div>
  );
}
