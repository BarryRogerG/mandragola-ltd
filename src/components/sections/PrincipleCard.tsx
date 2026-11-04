"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Box, Compass, Handshake, Scale, Target, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Value } from "@/types/content";

const valueIcons: Record<string, LucideIcon> = {
  "Capital with Discipline": Scale,
  "Relationships Before Transactions": Handshake,
  "Judgment in Complexity": Compass,
  "Out of the Box Solutions": Box,
  "Execution as a Standard": Target,
};

type PrincipleCardProps = {
  value: Value;
  origin: number;
  className?: string;
};

export function PrincipleCard({ value, origin, className }: PrincipleCardProps) {
  const reduceMotion = useReducedMotion();
  const Icon = valueIcons[value.title] ?? Scale;
  const headingId = `principle-${origin}`;

  return (
    <motion.div
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -6,
              transition: { duration: 0.3, ease: "easeOut" },
            }
      }
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#E4D5C3]/[0.08] bg-[#0B0A09]/40 p-4 backdrop-blur-[2px] transition-[border-color,box-shadow] duration-500 hover:border-[#E2C39A]/70 hover:shadow-[0_18px_40px_rgba(197,168,128,0.16)] md:p-5",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(232,210,176,0.28),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-white/12 via-transparent to-[#C4A07A]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <article className="relative">
        <h2
          id={headingId}
          className="flex items-start gap-2.5 font-serif text-2xl font-light leading-[1.2] tracking-[-0.01em] text-[#E8DCC8] transition-[color,text-shadow] duration-500 group-hover:text-[#FFF8EE] group-hover:[text-shadow:0_0_22px_rgba(255,236,210,0.45)] md:text-[1.85rem]"
        >
          <Icon
            aria-hidden="true"
            className="mt-1 size-[1.125rem] shrink-0 text-[#C4A07A] transition-[transform,color,filter] duration-500 group-hover:scale-110 group-hover:text-[#F0D7B0] group-hover:drop-shadow-[0_0_10px_rgba(232,210,176,0.65)] md:size-5"
            strokeWidth={1.4}
          />
          <span>{value.title}</span>
        </h2>
        <p className="mt-2.5 font-sans text-base leading-[1.7] text-[#CDBBA8] transition-[color,text-shadow] duration-500 group-hover:text-[#F6EBDD] group-hover:[text-shadow:0_0_18px_rgba(255,236,210,0.28)] md:text-[1.0625rem] md:leading-[1.75]">
          {value.body}
        </p>
      </article>
    </motion.div>
  );
}
