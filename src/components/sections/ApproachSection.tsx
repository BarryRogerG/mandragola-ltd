"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Cpu, Globe, LineChart, Shield, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { AtmospherePhoto } from "@/content/images";

const luxuryEase = [0.21, 0.47, 0.32, 0.98] as const;

const theatreIcons: Record<string, LucideIcon> = {
  "Financial markets": LineChart,
  Technology: Cpu,
  "Aerospace and defense": Shield,
  "International business": Globe,
};

type ApproachSectionProps = {
  id: string;
  eyebrow: string;
  statement: string;
  body: string;
  theatres: readonly string[];
  image: AtmospherePhoto;
};

export function ApproachSection({
  id,
  eyebrow,
  statement,
  body,
  theatres,
  image,
}: ApproachSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="mission-content" aria-labelledby={id} className="overflow-hidden bg-paper">
      <div className="grid lg:grid-cols-12">
        <div className="relative flex flex-col justify-center px-5 py-16 md:px-8 lg:col-span-7 lg:px-16 lg:py-24 xl:px-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(31,74,60,0.1),transparent_58%)]"
          />
          <div className="relative">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 id={id} className="mt-5 font-serif text-h2 font-normal text-charcoal">
              {statement}
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed">{body}</p>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2">
              {theatres.map((theatre, index) => {
                const Icon = theatreIcons[theatre] ?? Globe;
                return (
                  <motion.li
                    key={theatre}
                    className="group relative overflow-hidden rounded-xl border border-line bg-ivory p-5 md:p-6"
                    initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: luxuryEase }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -5, transition: { duration: 0.28, ease: "easeOut" } }
                    }
                  >
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
                    <p className="mt-4 text-[0.72rem] font-medium tracking-[0.16em] text-charcoal uppercase">
                      {theatre}
                    </p>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        <figure className="relative min-h-[20rem] overflow-hidden lg:col-span-5 lg:min-h-full">
          <motion.div
            className="absolute inset-0 origin-center"
            initial={reduceMotion ? false : { scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: luxuryEase }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover object-[center_18%]"
            />
          </motion.div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-paper/50 lg:to-paper/25"
          />
          <figcaption className="sr-only">
            Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
