import Image from "next/image";
import { ExploreMissionLink } from "@/components/sections/ExploreMissionLink";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { AtmospherePhoto } from "@/content/images";
import type { Crumb } from "@/types/content";

type MissionHeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  crumbs: readonly Crumb[];
  image: AtmospherePhoto;
};

export function MissionHero({ eyebrow, title, lead, crumbs, image }: MissionHeroProps) {
  return (
    <header className="relative isolate min-h-dvh overflow-hidden bg-black">
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
        className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/70 to-transparent md:h-48"
      />
      <div className="relative z-10 flex min-h-dvh items-end px-6 pt-36 pb-24 md:items-center md:px-20 md:pt-48 md:pb-24">
        <div className="w-full max-w-xl">
          <Breadcrumbs crumbs={crumbs} tone="dark" />
          <p className="mt-10 mb-3 text-xs font-semibold tracking-[0.3em] text-amber-200/90 uppercase md:mt-14">
            {eyebrow}
          </p>
          <h1
            id="page-title"
            className="mb-6 font-serif text-[2.125rem] font-light leading-[1.15] text-white sm:text-4xl md:text-6xl"
          >
            {title}
          </h1>
          <p className="max-w-xl font-sans text-base leading-relaxed text-slate-300 md:text-lg">
            {lead}
          </p>
          <ExploreMissionLink />
        </div>
      </div>
      <p className="sr-only">
        Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
      </p>
    </header>
  );
}
