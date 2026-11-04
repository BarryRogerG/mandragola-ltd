import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type DemoBannerProps = {
  tone?: "light" | "dark" | "dusk";
};

export function DemoBanner({ tone = "light" }: DemoBannerProps) {
  return (
    <div
      className={cn(
        "px-6 pt-4 pb-1 text-center text-xs leading-snug tracking-wide md:px-20 md:pt-5 sm:text-[0.8rem]",
        tone === "light" && "text-white/70",
        tone === "dusk" && "text-[#CDBBA8]/70",
        tone === "dark" && "text-ink-soft",
      )}
    >
      <p>{site.demoNotice}</p>
    </div>
  );
}
