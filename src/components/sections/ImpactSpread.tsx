import { ImpactStat } from "@/components/sections/ImpactStat";
import { Section } from "@/components/ui/Section";
import type { Stat } from "@/types/content";

type ImpactSpreadProps = {
  heading: string;
  stats: readonly Stat[];
};

export function ImpactSpread({ heading, stats }: ImpactSpreadProps) {
  return (
    <Section tone="ivory" labelledBy="impact-heading" spacing="loose">
      <h2 id="impact-heading" className="sr-only">
        {heading}
      </h2>
      <dl className="divide-y divide-line">
        {stats.map((stat, index) => (
          <ImpactStat key={stat.label} stat={stat} delayMs={index * 120} />
        ))}
      </dl>
    </Section>
  );
}
