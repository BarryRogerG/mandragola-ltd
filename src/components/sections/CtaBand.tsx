"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { AtmospherePhoto } from "@/content/images";

const luxuryEase = [0.21, 0.47, 0.32, 0.98] as const;

type CtaBandProps = {
  id: string;
  title: string;
  kicker?: string;
  body: string;
  actions: ReactNode;
  image?: AtmospherePhoto;
};

export function CtaBand({ id, title, kicker, body, actions, image }: CtaBandProps) {
  const reduceMotion = useReducedMotion();

  if (!image) {
    return (
      <section aria-labelledby={id} className="bg-paper py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <h2 id={id} className="font-serif text-h2 font-normal text-charcoal">
            {title}
          </h2>
          {kicker ? <p className="mt-5 font-serif text-2xl text-charcoal md:text-3xl">{kicker}</p> : null}
          <p className="mt-6 text-lead">{body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">{actions}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      aria-labelledby={id}
      className="relative isolate min-h-[28rem] overflow-hidden bg-[#0F241C] md:min-h-[32rem]"
    >
      <motion.div
        className="absolute inset-0 origin-center"
        initial={reduceMotion ? false : { scale: 1.1 }}
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
        className="absolute inset-0 bg-linear-to-r from-[#0F241C]/90 via-[#0F241C]/72 to-[#0F241C]/45"
      />
      <div className="relative z-10 flex min-h-[28rem] items-center justify-center px-5 py-20 text-center md:min-h-[32rem] md:px-8 md:py-28">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl">
            <h2 id={id} className="font-serif text-h2 font-normal text-white">
              {title}
            </h2>
            {kicker ? (
              <p className="mt-5 font-serif text-2xl font-light text-amber-100/90 md:text-3xl">{kicker}</p>
            ) : null}
            <p className="mt-6 text-lead text-slate-300">{body}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-8">{actions}</div>
          </div>
        </ScrollReveal>
      </div>
      <p className="sr-only">
        Photograph used for atmosphere. It does not depict a Mandragola office, holding or transaction.
      </p>
    </section>
  );
}
