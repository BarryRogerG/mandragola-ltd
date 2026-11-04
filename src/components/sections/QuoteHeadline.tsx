"use client";

import { motion, useReducedMotion } from "framer-motion";

type QuoteHeadlineProps = {
  lines: readonly string[];
};

export function QuoteHeadline({ lines }: QuoteHeadlineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <h2 className="max-w-3xl font-serif text-[1.75rem] font-light leading-[1.12] tracking-[-0.02em] text-[#F3EBE0] md:text-5xl">
      <motion.span
        className="group inline-block cursor-default"
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -6,
                scale: 1.035,
                transition: { type: "spring", stiffness: 320, damping: 16 },
              }
        }
      >
        {lines.map((line, index) => (
          <motion.span
            key={line}
            className="block origin-left transition-[color,text-shadow] duration-500 group-hover:text-[#FFF8EE] group-hover:[text-shadow:0_0_22px_rgba(255,236,210,0.55),0_0_42px_rgba(196,160,122,0.32)]"
            initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.86 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.65 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 18,
              delay: reduceMotion ? 0 : index * 0.12,
            }}
          >
            {line}
          </motion.span>
        ))}
      </motion.span>
    </h2>
  );
}
