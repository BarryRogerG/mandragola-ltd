import { AtmosphereBackdrop } from "@/components/sections/AtmosphereBackdrop";
import { QuoteHeadline } from "@/components/sections/QuoteHeadline";
import { ValuesRotateGrid } from "@/components/sections/ValuesRotateGrid";
import { PinHashSection } from "@/components/layout/PinHashSection";
import type { AtmospherePhoto } from "@/content/images";
import type { Value } from "@/types/content";

type PrincipleSequenceProps = {
  values: readonly Value[];
  image: AtmospherePhoto;
  quoteImage: AtmospherePhoto;
  quote: {
    lines: readonly string[];
  };
};

export function PrincipleSequence({ values, quote, image, quoteImage }: PrincipleSequenceProps) {
  return (
    <>
      <PinHashSection id="values-content" />
      <section id="values-content" className="relative overflow-hidden bg-[#0B0A09] text-[#CDBBA8]">
        <AtmosphereBackdrop image={image} />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-5 py-5 md:h-[calc(100dvh-var(--site-header-offset,6.5rem))] md:px-16 md:py-5 lg:px-20">
          <ValuesRotateGrid values={values} />
          <p className="sr-only">
            Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B0A09] text-[#CDBBA8]">
        <AtmosphereBackdrop image={quoteImage} />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 md:px-20 md:py-24">
          <QuoteHeadline lines={quote.lines} />
          <p className="sr-only">
            Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
          </p>
        </div>
      </section>
    </>
  );
}
