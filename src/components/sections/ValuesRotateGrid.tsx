import { PrincipleCard } from "@/components/sections/PrincipleCard";
import type { Value } from "@/types/content";

type ValuesRotateGridProps = {
  values: readonly Value[];
};

export function ValuesRotateGrid({ values }: ValuesRotateGridProps) {
  const [first, second, third, fourth, fifth] = values;
  if (!first || !second || !third || !fourth || !fifth) return null;

  const top = [first, second];
  const middle = [third, fourth];

  return (
    <div className="grid gap-5 md:gap-6">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {top.map((value, index) => (
          <PrincipleCard key={value.title} value={value} origin={index + 1} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        {middle.map((value, index) => (
          <PrincipleCard key={value.title} value={value} origin={index + 3} />
        ))}
      </div>
      <PrincipleCard value={fifth} origin={5} />
    </div>
  );
}
