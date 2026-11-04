"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Compass, Handshake, LineChart, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import type { AtmospherePhoto } from "@/content/images";
import type { Feature } from "@/types/content";

const luxuryEase = [0.21, 0.47, 0.32, 0.98] as const;

const featureIcons: Record<string, LucideIcon> = {
  "Capital Markets": LineChart,
  "Company Building": Building2,
  "Strategic Relationships": Handshake,
  "Opportunity Sourcing": Compass,
};

type FeatureGridProps = {
  id: string;
  eyebrow: string;
  title: string;
  items: readonly Feature[];
  images: readonly AtmospherePhoto[];
};

export function FeatureGrid({ id, eyebrow, title, items, images }: FeatureGridProps) {
  const reduceMotion = useReducedMotion();

  return (
    <Section labelledBy={id} tone="ivory">
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading level={2} id={id} className="mt-5">
          {title}
        </Heading>
      </div>
      <ol className="mt-14 grid gap-5 md:grid-cols-2">
        {items.map((item, index) => {
          const Icon = featureIcons[item.title] ?? Compass;
          const image = images[index];
          return (
            <motion.li
              key={item.title}
              className="group relative overflow-hidden rounded-xl border border-line bg-paper"
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
              <article className="relative p-7 md:p-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-forest transition-transform duration-500 group-hover:scale-y-100 group-active:scale-y-100"
                />
                <div className="flex items-start justify-between gap-3">
                  <span className="font-serif text-2xl font-light text-forest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    aria-hidden="true"
                    className="size-5 text-forest transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>
                <Heading level={3} className="mt-5">
                  {item.title}
                </Heading>
                <p className="mt-3 max-w-md leading-relaxed">{item.body}</p>
              </article>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
