import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

export type SectionTone = "paper" | "ivory";

const toneClasses: Record<SectionTone, string> = {
  paper: "bg-paper",
  ivory: "bg-ivory",
};

type SectionProps = {
  children: ReactNode;
  tone?: SectionTone;
  labelledBy?: string;
  id?: string;
  className?: string;
  containerClassName?: string;
  spacing?: "default" | "compact" | "loose" | "snug";
};

export function Section({
  children,
  tone = "paper",
  labelledBy,
  id,
  className,
  containerClassName,
  spacing = "default",
}: SectionProps) {
  const padding =
    spacing === "loose"
      ? "py-20 md:py-28 lg:py-32"
      : spacing === "compact"
        ? "py-14 md:py-20"
        : spacing === "snug"
          ? "pt-8 pb-16 md:pt-10 md:pb-24 lg:pb-28"
          : "py-16 md:py-24 lg:py-28";

  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(toneClasses[tone], padding, className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
