import { AtmosphereBackdrop } from "@/components/sections/AtmosphereBackdrop";
import { ValuesRotateGrid } from "@/components/sections/ValuesRotateGrid";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { AtmospherePhoto } from "@/content/images";
import type { Value } from "@/types/content";

type PrincipleSequenceProps = {
  values: readonly Value[];
  image: AtmospherePhoto;
  quote: {
    lines: readonly string[];
  };
};

export function PrincipleSequence({ values, quote, image }: PrincipleSequenceProps) {
  return (
    <section id="values-content" className="relative overflow-hidden bg-[#0B0A09] text-[#CDBBA8]">
      <AtmosphereBackdrop image={image} />
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 md:px-20 md:py-20">
        <ValuesRotateGrid values={values} />

        <p className="sr-only">
          Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
        </p>

        <ScrollReveal className="mt-24 md:mt-32">
          <blockquote className="max-w-3xl border-t border-[#C4A07A]/20 pt-12 font-serif text-[1.75rem] font-light leading-[1.12] tracking-[-0.02em] text-[#F3EBE0] md:pt-20 md:text-5xl">
            {quote.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
