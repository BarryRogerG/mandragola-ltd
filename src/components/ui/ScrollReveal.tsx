"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

const luxuryEase = [0.21, 0.47, 0.32, 0.98] as const;

const transition: Transition = {
  duration: 0.8,
  ease: luxuryEase,
};

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  );
}
