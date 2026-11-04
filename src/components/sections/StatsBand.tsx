import { AnimatedStat } from "@/components/ui/AnimatedStat";
import { Section } from "@/components/ui/Section";
import type { Stat } from "@/types/content";

type StatsBandProps = {
  stats: readonly Stat[];
  heading: string;
};

export function StatsBand({ stats, heading }: StatsBandProps) {
  return (
    <Section tone="ivory" labelledBy="stats-heading">
      <h2 id="stats-heading" className="sr-only">
        {heading}
      </h2>
      <dl className="grid min-w-0 gap-4 md:grid-cols-3 md:gap-5">
        {stats.map((stat, index) => (
          <AnimatedStat key={stat.label} stat={stat} delayMs={index * 160} />
        ))}
      </dl>
    </Section>
  );
}
