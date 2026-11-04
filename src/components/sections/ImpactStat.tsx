"use client";

import { useStatDisplay } from "@/components/ui/AnimatedStat";
import type { Stat } from "@/types/content";

type ImpactStatProps = {
  stat: Stat;
  delayMs?: number;
};

export function ImpactStat({ stat, delayMs = 0 }: ImpactStatProps) {
  const { ref, display } = useStatDisplay(stat, delayMs);

  return (
    <div
      ref={ref}
      className="grid items-baseline gap-3 py-10 first:pt-0 last:pb-0 md:grid-cols-12 md:gap-8 md:py-14"
    >
      <dt className="order-2 text-[0.8rem] font-semibold tracking-[0.14em] text-forest uppercase md:order-1 md:col-span-4 md:text-[0.9rem]">
        {stat.label}
      </dt>
      <dd className="order-1 font-serif text-[length:clamp(2.5rem,12vw,5.5rem)] font-light tracking-tight text-charcoal tabular-nums lining-nums md:order-2 md:col-span-8 md:text-right md:text-stat">
        <span aria-hidden="true">{display}</span>
        <span className="sr-only">{stat.value}</span>
      </dd>
    </div>
  );
}
