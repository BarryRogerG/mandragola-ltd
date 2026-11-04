import { Container } from "@/components/ui/Container";
import type { Value } from "@/types/content";

const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"] as const;

type ValueListProps = {
  values: readonly Value[];
  start?: number;
  labelledBy?: string;
};

export function ValueList({ values, start = 1, labelledBy }: ValueListProps) {
  return (
    <Container>
      <ol start={start} aria-labelledby={labelledBy} className="divide-y divide-line">
        {values.map((value, index) => {
          const position = start + index;
          return (
            <li key={value.title} className="grid gap-4 py-12 md:grid-cols-12 md:gap-12 md:py-16">
              <span
                aria-hidden="true"
                className="font-serif text-4xl leading-none font-normal text-mist md:col-span-2 md:text-5xl"
              >
                {romanNumerals[position - 1] ?? position}
              </span>
              <h3 className="font-serif text-3xl leading-tight font-normal text-charcoal md:col-span-4 md:text-[2rem]">
                {value.title}
              </h3>
              <p className="text-lg leading-relaxed md:col-span-6">{value.body}</p>
            </li>
          );
        })}
      </ol>
    </Container>
  );
}
