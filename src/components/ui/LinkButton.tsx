import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon, ExternalIcon } from "@/components/icons/Icons";
import { cn } from "@/lib/cn";

type Variant = "primary" | "quiet" | "invert";

const variantClasses: Record<Variant, string> = {
  primary: "text-forest hover:text-charcoal",
  quiet: "text-charcoal hover:text-forest",
  invert: "text-white hover:text-white/80",
};

type LinkButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};

export function LinkButton({ href, children, variant = "primary", external, className, onClick }: LinkButtonProps) {
  const classes = cn(
    "group inline-flex min-h-11 items-center gap-2 border-0 bg-transparent p-0 text-sm font-medium tracking-wide",
    variantClasses[variant],
    className,
  );

  if (!href) {
    return (
      <button type="button" onClick={onClick} className={cn(classes, "cursor-pointer")} aria-haspopup={onClick ? "dialog" : undefined}>
        {children}
        <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
      </button>
    );
  }

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
        <ExternalIcon className="size-3.5" />
        <span className="sr-only">(opens the official website in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} scroll={false} className={classes}>
      {children}
      <ArrowIcon className="size-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
    </Link>
  );
}
