"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { LinkButton } from "@/components/ui/LinkButton";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";
import type { LogoAsset } from "@/types/content";

const luxuryEase = [0.21, 0.47, 0.32, 0.98] as const;

type TransactionsShowcaseProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  logos: readonly LogoAsset[];
  moreHref: string;
  moreLabel: string;
};

export function TransactionsShowcase({
  id,
  eyebrow,
  title,
  lead,
  logos,
  moreHref,
  moreLabel,
}: TransactionsShowcaseProps) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <Section labelledBy={id} tone="ivory">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading level={2} id={id} className="mt-5">
            {title}
          </Heading>
          <p className="mt-4 text-lead">{lead}</p>
        </div>
        <LinkButton href={moreHref} external>
          {moreLabel}
        </LinkButton>
      </div>

      <motion.ul
        className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
        initial={reduceMotion ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-80px", amount: 0.15 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: reduceMotion ? 0 : 0.045 },
          },
        }}
      >
        {logos.map((logo) => (
          <motion.li
            key={logo.src}
            className={cn(
              "group relative flex min-h-24 items-center justify-center px-5 py-10 md:min-h-28 md:px-8 md:py-14",
              "border-line border-r last:border-r-0",
              "max-sm:even:border-r-0",
              "sm:max-lg:nth-[3n]:border-r-0",
              "lg:nth-[4n]:border-r-0",
            )}
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: luxuryEase },
              },
            }}
            whileHover={reduceMotion ? undefined : { y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="h-auto max-h-8 w-auto max-w-[9.5rem] object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100 md:max-h-10 md:max-w-[11rem]"
            />
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
