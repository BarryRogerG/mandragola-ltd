"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Box, Compass, Handshake, Scale, Target, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { AtmospherePhoto } from "@/content/images";
import type { Value } from "@/types/content";

const valueIcons: readonly LucideIcon[] = [Scale, Handshake, Compass, Box, Target];

function indexLabel(position: number) {
  return String(position).padStart(2, "0");
}

export type PrincipleVariant = "card" | "spotlight";

type PrincipleCardProps = {
  value: Value;
  position: number;
  image?: AtmospherePhoto;
  variant?: PrincipleVariant;
};

export function PrincipleCard({
  value,
  position,
  image,
  variant = "card",
}: PrincipleCardProps) {
  const reduceMotion = useReducedMotion();
  const Icon = valueIcons[position - 1] ?? Scale;
  const headingId = `principle-${position}`;
  const spotlight = variant === "spotlight";

  return (
    <li className={cn("min-w-0", spotlight && "w-full")}>
      <motion.div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-[#E4D5C3]/[0.08] p-6 transition-all duration-500 hover:border-[#C4A07A]/50 hover:shadow-[0_24px_48px_rgba(180,112,56,0.12)] md:p-12",
          image ? "bg-[#0B0A09]" : "bg-[#0B0A09]/40 backdrop-blur-[2px]",
        )}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -6,
                scale: 1.01,
                transition: { duration: 0.3, ease: "easeOut" },
              }
        }
      >
        {image ? (
          <>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes={spotlight ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-b from-[#0B0A09]/35 via-[#0B0A09]/58 to-[#0B0A09]/78"
            />
          </>
        ) : null}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(196,140,90,0.16),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <article className={cn("relative", spotlight && "text-center")}>
          <p
            aria-hidden="true"
            className={cn(
              "bg-linear-to-b from-[#E8D4B8] to-[#A07850] bg-clip-text font-serif font-light tracking-[0.06em] text-transparent",
              spotlight ? "text-7xl md:text-[9rem]" : "text-4xl md:text-6xl",
            )}
          >
            {indexLabel(position)}
          </p>
          <h2
            id={headingId}
            className={cn(
              "mt-5 flex items-start gap-3 font-serif font-light leading-[1.15] tracking-[-0.01em] text-[#F3EBE0]",
              spotlight && "mx-auto mt-6 max-w-xl justify-center text-3xl md:text-5xl",
              !spotlight && "max-w-xl text-2xl md:text-3xl",
            )}
          >
            <Icon
              aria-hidden="true"
              className={cn(
                "mt-1 shrink-0 text-[#C4A07A] transition-transform duration-500 group-hover:scale-110",
                spotlight ? "size-6 md:size-7" : "size-5",
              )}
              strokeWidth={1.4}
            />
            <span>{value.title}</span>
          </h2>
          <p
            className={cn(
              "mt-5 max-w-xl font-sans text-base leading-[1.75] text-[#CDBBA8] md:text-lg",
              spotlight && "mx-auto mt-8",
            )}
          >
            {value.body}
          </p>
        </article>
      </motion.div>
    </li>
  );
}
