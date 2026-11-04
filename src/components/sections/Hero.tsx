import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { cn } from "@/lib/cn";
import type { AtmospherePhoto } from "@/content/images";
import type { Crumb } from "@/types/content";

type HeroProps = {
  eyebrow: string;
  title: string;
  lead: string;
  size?: "home" | "page";
  crumbs?: readonly Crumb[];
  actions?: ReactNode;
  image?: AtmospherePhoto;
  /** Homepage dusk wash vs inner-page left-to-right reading panel. */
  overlay?: "dusk" | "directional";
  /** Full-bleed photo, or a solid slate field with the image on the right. */
  imageLayout?: "full" | "split";
};

const revealClass = "animate-fade-up motion-reduce:animate-none";

export function Hero({
  eyebrow,
  title,
  lead,
  size = "page",
  crumbs,
  actions,
  image,
  overlay,
  imageLayout = "full",
}: HeroProps) {
  const animate = size === "home";
  const overlayStyle = overlay ?? (size === "home" ? "dusk" : "directional");

  const copy = (
    <PhotoHeroCopy
      eyebrow={eyebrow}
      title={title}
      lead={lead}
      crumbs={crumbs}
      actions={actions}
      animate={animate}
      leadClassName={overlayStyle === "directional" || imageLayout === "split" ? "text-slate-200" : "text-white/80"}
    />
  );

  if (image && imageLayout === "split") {
    return (
      <section aria-labelledby="page-title" className="relative isolate overflow-hidden bg-slate-950">
        <div className="grid min-h-dvh lg:grid-cols-2">
          <div className="relative z-10 flex items-end px-6 pt-36 pb-16 md:px-20 md:pt-44 md:pb-24 lg:items-center">
            <div className="w-full max-w-xl">{copy}</div>
          </div>
          <div className="relative min-h-[46vh] lg:min-h-full">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              preload
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="absolute inset-0 size-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-slate-950/75 to-transparent lg:h-44"
            />
          </div>
        </div>
        <p className="sr-only">
          Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
        </p>
      </section>
    );
  }

  if (image) {
    return (
      <section aria-labelledby="page-title" className="relative isolate h-dvh min-h-screen overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          preload
          sizes="100vw"
          className={cn(
            "absolute inset-0 size-full object-cover",
            overlayStyle === "directional" ? "object-[68%_center]" : "object-center",
          )}
        />
        {overlayStyle === "directional" ? (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-r from-slate-950/85 via-slate-950/60 to-transparent"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-slate-950/70 to-transparent md:h-48"
            />
          </>
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-black/80"
          />
        )}
        <div
          className={cn(
            "relative z-10 flex h-full px-6 md:px-20",
            size === "home"
              ? "items-end pb-16 md:pb-24 lg:pb-28"
              : "items-end pt-36 pb-16 md:items-center md:pt-24 md:pb-24",
          )}
        >
          <div
            className={cn(
              size === "home" ? "max-w-3xl" : "w-full max-w-xl lg:w-1/2 lg:max-w-2xl",
              overlayStyle === "directional" && "[text-shadow:0_2px_24px_rgba(2,6,23,0.55)]",
            )}
          >
            {copy}
          </div>
        </div>
        <p className="sr-only">
          Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
        </p>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="page-title"
      className={cn("bg-paper", size === "home" ? "pt-40 pb-20 md:pt-48 md:pb-28" : "pt-40 pb-16 md:pt-48 md:pb-24")}
    >
      <Container>
        {crumbs ? (
          <div className="mb-10">
            <Breadcrumbs crumbs={crumbs} />
          </div>
        ) : null}
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 id="page-title" className="mt-5 font-serif text-display font-normal">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lead">{lead}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-6">{actions}</div> : null}
        </div>
      </Container>
    </section>
  );
}

function PhotoHeroCopy({
  eyebrow,
  title,
  lead,
  crumbs,
  actions,
  animate,
  leadClassName,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  crumbs?: readonly Crumb[];
  actions?: ReactNode;
  animate: boolean;
  leadClassName: string;
}) {
  return (
    <>
      {crumbs ? (
        <div className={cn("mb-6", animate && revealClass)}>
          <Breadcrumbs crumbs={crumbs} tone="dark" />
        </div>
      ) : null}
      {animate ? (
        <p
          className={cn(
            "mb-4 block text-xs font-semibold tracking-[0.35em] text-white/90 uppercase md:text-sm",
            revealClass,
          )}
        >
          {eyebrow}
        </p>
      ) : (
        <Eyebrow tone="white">{eyebrow}</Eyebrow>
      )}
      <h1
        id="page-title"
        className={cn(
          "font-serif text-[2.5rem] font-light leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl",
          !animate && "mt-4",
          animate && revealClass,
        )}
        style={animate ? { animationDelay: "140ms" } : undefined}
      >
        {title}
      </h1>
      <p
        className={cn("mt-4 max-w-xl text-lg font-light tracking-wide", leadClassName, animate && revealClass)}
        style={animate ? { animationDelay: "280ms" } : undefined}
      >
        {lead}
      </p>
      {actions ? (
        <div
          className={cn("mt-8 flex flex-wrap gap-6", animate && revealClass)}
          style={animate ? { animationDelay: "420ms" } : undefined}
        >
          {actions}
        </div>
      ) : null}
    </>
  );
}
