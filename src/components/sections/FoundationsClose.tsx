"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "@/components/ui/LinkButton";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { AtmospherePhoto } from "@/content/images";

const luxuryEase = [0.21, 0.47, 0.32, 0.98] as const;

type FoundationsCloseProps = {
  id: string;
  title: string;
  kicker: string;
  body: string;
  image: AtmospherePhoto;
};

export function FoundationsClose({ id, title, kicker, body, image }: FoundationsCloseProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby={id}
      className="relative isolate min-h-[32rem] overflow-hidden bg-[#0F241C] md:min-h-[40rem]"
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
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-[#0F241C]/92 via-[#0F241C]/74 to-[#0F241C]/40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#0F241C] to-transparent"
      />

      <div className="relative z-10 flex min-h-[32rem] items-end px-5 py-20 md:min-h-[40rem] md:px-8 md:py-28 lg:px-16 lg:py-32 xl:px-24">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 id={id} className="font-serif text-h2 font-normal text-white">
              {title}
            </h2>
            <p className="mt-6 font-serif text-2xl font-light leading-snug text-amber-100/90 md:text-3xl">
              {kicker}
            </p>
            <p className="mt-8 max-w-2xl text-lead text-slate-300">{body}</p>
            <div className="mt-12 flex flex-wrap gap-8">
              <LinkButton href="#contact" variant="invert">
                Contact us
              </LinkButton>
              <LinkButton href="/values" variant="invert" className="text-white/70 hover:text-white">
                Our Values
              </LinkButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
      <p className="sr-only">
        Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
      </p>
    </section>
  );
}
