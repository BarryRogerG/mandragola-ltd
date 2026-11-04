import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  tone?: "forest" | "mist" | "white";
  className?: string;
};

export function Eyebrow({ children, tone = "forest", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[0.7rem] font-medium tracking-[0.18em] uppercase",
        tone === "forest" && "text-forest",
        tone === "mist" && "text-mist",
        tone === "white" && "text-white/90",
        className,
      )}
    >
      {children}
    </p>
  );
}
