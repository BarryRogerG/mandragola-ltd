import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { AtmospherePhoto } from "@/content/images";

type StoryNarrativeProps = {
  id: string;
  eyebrow: string;
  title: string;
  founded: string;
  pull: string;
  continuation: string;
  closing: string;
  image: AtmospherePhoto;
};

export function StoryNarrative({
  id,
  eyebrow,
  title,
  founded,
  pull,
  continuation,
  closing,
  image,
}: StoryNarrativeProps) {
  return (
    <section aria-labelledby={id} className="bg-paper">
      <ScrollReveal>
        <div className="grid lg:grid-cols-12">
          <figure className="relative min-h-[22rem] lg:col-span-5 lg:min-h-[40rem]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="absolute inset-0 size-full object-cover"
            />
            <figcaption className="sr-only">
              Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
            </figcaption>
          </figure>
          <div className="flex flex-col justify-center px-5 py-16 md:px-8 lg:col-span-7 lg:px-16 lg:py-24 xl:px-24">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id={id} className="mt-5 max-w-xl font-serif text-h2 font-normal">
              {title}
            </h2>
            <p className="mt-10 text-lg leading-relaxed text-ink-soft">{founded}</p>
            <blockquote className="mt-4 max-w-xl font-serif text-2xl font-light leading-snug tracking-tight text-charcoal md:text-3xl">
              {pull}
            </blockquote>
            <p className="mt-8 max-w-xl text-lg leading-relaxed">{continuation}</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{closing}</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
