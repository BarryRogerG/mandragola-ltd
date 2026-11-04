"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { AtmospherePhoto } from "@/content/images";

const luxuryEase = [0.21, 0.47, 0.32, 0.98] as const;

type AtmosphereBackdropProps = {
  image: AtmospherePhoto;
  sizes?: string;
};

export function AtmosphereBackdrop({ image, sizes = "100vw" }: AtmosphereBackdropProps) {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: luxuryEase }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover object-center"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-[#0B0A09]/45 via-[#0B0A09]/62 to-[#0B0A09]/80"
      />
    </>
  );
}
