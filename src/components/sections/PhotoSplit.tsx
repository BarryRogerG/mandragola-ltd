"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { AtmospherePhoto } from "@/content/images";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const luxuryEase = [0.21, 0.47, 0.32, 0.98] as const;

type PhotoSplitProps = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: AtmospherePhoto;
  imageSide?: "left" | "right";
  action?: ReactNode;
};

export function PhotoSplit({
  id,
  eyebrow,
  title,
  body,
  image,
  imageSide = "left",
  action,
}: PhotoSplitProps) {
  const reduceMotion = usePrefersReducedMotion();
  const imageRight = imageSide === "right";

  return (
    <section aria-labelledby={id} className="overflow-hidden bg-paper">
      <div className="grid lg:grid-cols-12">
        <motion.div
          className={cn(
            "relative flex flex-col justify-center px-5 py-16 md:px-8 lg:col-span-7 lg:px-16 lg:py-24 xl:px-24",
            imageRight ? "lg:order-1" : "lg:order-2",
          )}
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: luxuryEase }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 id={id} className="mt-5 max-w-xl font-serif text-h2 font-normal">
            {title}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed">{body}</p>
          {action ? <div className="mt-8">{action}</div> : null}
        </motion.div>

        <figure
          className={cn(
            "group relative min-h-[22rem] overflow-hidden lg:col-span-5 lg:min-h-[36rem]",
            imageRight ? "lg:order-2" : "lg:order-1",
          )}
        >
          <motion.div
            className="absolute inset-0 origin-center"
            initial={reduceMotion ? false : { scale: 1.12 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: luxuryEase }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
            />
          </motion.div>
          <figcaption className="sr-only">
            Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
