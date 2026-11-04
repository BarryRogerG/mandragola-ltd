import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingLevel = 1 | 2 | 3;
type HeadingSize = "display" | "h2" | "h3";

const sizeClasses: Record<HeadingSize, string> = {
  display: "font-serif text-display font-normal",
  h2: "font-serif text-h2 font-normal",
  h3: "font-sans text-lg font-medium leading-snug text-charcoal md:text-xl",
};

const defaultSize: Record<HeadingLevel, HeadingSize> = { 1: "display", 2: "h2", 3: "h3" };

type HeadingProps = {
  level: HeadingLevel;
  size?: HeadingSize;
  id?: string;
  className?: string;
  children: ReactNode;
};

export function Heading({ level, size, id, className, children }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag id={id} className={cn(sizeClasses[size ?? defaultSize[level]], className)}>
      {children}
    </Tag>
  );
}
