import Image from "next/image";
import { ExploreValuesLink } from "@/components/sections/ExploreValuesLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { AtmospherePhoto } from "@/content/images";
import type { Crumb } from "@/types/content";

type PhilosophyHeroProps = {
  eyebrow: string;
  title: string;
  crumbs: readonly Crumb[];
  image: AtmospherePhoto;
};

export function PhilosophyHero({ eyebrow, title, crumbs, image }: PhilosophyHeroProps) {
  return (
    <header className="relative isolate min-h-dvh overflow-hidden bg-[#0B0A09]">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-[#0B0A09]"
      />
      <div className="relative z-10 flex min-h-dvh items-end px-6 pt-36 pb-24 md:px-20 md:pt-48 md:pb-40 lg:pb-48">
        <div className="w-full max-w-3xl">
          <Breadcrumbs crumbs={crumbs} tone="dark" />
          <p className="mt-10 mb-3 text-xs font-semibold tracking-[0.3em] text-[#D4C5B0] uppercase md:mt-14">
            {eyebrow}
          </p>
          <h1
            id="page-title"
            className="max-w-3xl font-serif text-[2.125rem] font-light leading-[1.15] text-[#F4F0EA] sm:text-4xl md:text-6xl"
          >
            {title}
          </h1>
          <ExploreValuesLink />
        </div>
      </div>
      <p className="sr-only">
        Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
      </p>
    </header>
  );
}
