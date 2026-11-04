import { PrincipleCard } from "@/components/sections/PrincipleCard";
import type { Value } from "@/types/content";

type ValuesRotateGridProps = {
  values: readonly Value[];
};

export function ValuesRotateGrid({ values }: ValuesRotateGridProps) {
  return (
    <div className="grid min-h-0 flex-1 grid-cols-1 gap-3 md:h-full md:grid-cols-4 md:grid-rows-3 md:gap-4">
      {values.map((value, index) => (
        <PrincipleCard
          key={value.title}
          value={value}
          origin={index + 1}
          className={
            index === values.length - 1
              ? "md:col-span-2 md:col-start-2"
              : "md:col-span-2"
          }
        />
      ))}
    </div>
  );
}
