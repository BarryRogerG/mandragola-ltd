"use client";

import { motion } from "framer-motion";
import { Box, Building2, Compass, Handshake, LineChart, Scale, Target, type LucideIcon } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import type { AtmospherePhoto } from "@/content/images";
import type { Feature } from "@/types/content";

const luxuryEase = [0.21, 0.47, 0.32, 0.98] as const;

const featureIcons: Record<string, LucideIcon> = {
  "Capital Markets": LineChart,
  "Company Building": Building2,
  "Strategic Relationships": Handshake,
  "Opportunity Sourcing": Compass,
  "Capital with Discipline": Scale,
  "Relationships Before Transactions": Handshake,
  "Judgment in Complexity": Compass,
  "Out of the Box Solutions": Box,
  "Execution as a Standard": Target,
};

type FeatureGridProps = {
  id: string;
  sectionId?: string;
  eyebrow: string;
  title: ReactNode;
  items: readonly Feature[];
  images: readonly AtmospherePhoto[];
  numbered?: boolean;
  centerLast?: boolean;
  spacing?: "default" | "compact" | "loose" | "snug";
  /** Prefix for per-item DOM ids used by JSON-LD fragment identifiers. */
  itemIdPrefix?: string;
};

export function FeatureGrid({
  id,
  sectionId,
  eyebrow,
  title,
  items,
  images,
  numbered = true,
  centerLast = false,
  spacing = "default",
  itemIdPrefix,
}: FeatureGridProps) {
  const reduceMotion = usePrefersReducedMotion();
  const lastIndex = items.length - 1;

  return (
    <Section id={sectionId} labelledBy={id} tone="ivory" spacing={spacing}>
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading level={2} id={id} className="mt-5">
          {title}
        </Heading>
      </div>
      <ol className={cn("mt-14 grid gap-5", centerLast ? "md:grid-cols-4" : "md:grid-cols-2")}>
        {items.map((item, index) => {
          const Icon = featureIcons[item.title] ?? Compass;
          const image = images[index];
          return (
            <motion.li
              id={itemIdPrefix ? `${itemIdPrefix}-${index + 1}` : undefined}
              key={item.title}
              className={cn(
                "group relative overflow-hidden rounded-xl border border-line bg-paper",
                centerLast && "md:col-span-2",
                centerLast && index === lastIndex && "md:col-start-2",
              )}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.1, ease: luxuryEase }}
              whileHover={
                reduceMotion ? undefined : { y: -6, transition: { duration: 0.28, ease: "easeOut" } }
              }
            >
              {image ? (
                <div className="relative h-44 overflow-hidden md:h-52">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-charcoal/55 via-charcoal/10 to-transparent"
                  />
                </div>
              ) : null}
              <article
                className={cn(
                  "relative px-7 md:px-8",
                  numbered ? "py-5 md:py-6" : "pb-7 pt-6 md:pb-8 md:pt-7",
                )}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-forest transition-transform duration-500 group-hover:scale-y-100 group-active:scale-y-100"
                />
                <div className="flex items-start justify-between gap-3">
                  {numbered ? (
                    <Heading level={3}>{item.title}</Heading>
                  ) : (
                    <h3 className="font-serif text-[1.65rem] font-normal leading-snug text-charcoal md:text-[1.85rem]">
                      {item.title}
                    </h3>
                  )}
                  <Icon
                    aria-hidden="true"
                    className="size-5 shrink-0 text-forest transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
                <p className="mt-3 max-w-md leading-relaxed">{item.body}</p>
              </article>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
