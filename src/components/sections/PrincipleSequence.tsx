import { AtmosphereBackdrop } from "@/components/sections/AtmosphereBackdrop";
import { PrincipleCard } from "@/components/sections/PrincipleCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { AtmospherePhoto } from "@/content/images";
import type { Value } from "@/types/content";

type PrincipleSequenceProps = {
  values: readonly Value[];
  images: readonly AtmospherePhoto[];
  quote: {
    lines: readonly string[];
  };
};

export function PrincipleSequence({ values, quote, images }: PrincipleSequenceProps) {
  const [first, second, third, fourth, fifth] = values;
  const [imageOne, , imageThree, imageFour] = images;

  if (!first || !second || !third || !fourth || !fifth) {
    return null;
  }

  if (!imageOne || !imageThree || !imageFour) {
    return null;
  }

  const aaloLens = imageThree;

  return (
    <div>
      <section
        id="values-content"
        className="relative overflow-hidden bg-[#0B0A09] text-[#CDBBA8]"
      >
        <AtmosphereBackdrop image={imageOne} />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-20 md:py-32">
          <ScrollReveal>
            <ol aria-labelledby="page-title" className="grid list-none grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
              <PrincipleCard value={first} position={1} variant="card" />
              <PrincipleCard value={second} position={2} image={aaloLens} variant="card" />
            </ol>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B0908] text-[#CDBBA8]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,170,120,0.12),transparent_70%)]"
        />
        <div className="relative z-10 border-y border-[#C4A07A]/20 py-28 md:py-40">
          <div className="mx-auto max-w-7xl px-5 md:px-20">
            <ScrollReveal>
              <ol start={3} aria-labelledby="page-title" className="list-none">
                <PrincipleCard value={third} position={3} image={aaloLens} variant="spotlight" />
              </ol>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B0A09] text-[#CDBBA8]">
        <AtmosphereBackdrop image={imageFour} />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-20 md:py-32">
          <ScrollReveal>
            <ol
              start={4}
              aria-labelledby="page-title"
              className="grid list-none grid-cols-1 gap-10 md:grid-cols-2 md:gap-12"
            >
              <PrincipleCard value={fourth} position={4} variant="card" />
              <PrincipleCard value={fifth} position={5} variant="card" />
            </ol>
          </ScrollReveal>

          <p className="sr-only">
            Photographs used for atmosphere. They do not depict a Mandragola office, holding or transaction.
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
    </div>
  );
}
