import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section, type SectionTone } from "@/components/ui/Section";

type SplitSectionProps = {
  id: string;
  sectionId?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  tone?: SectionTone;
  stickyHeading?: boolean;
};

export function SplitSection({
  id,
  sectionId,
  eyebrow,
  title,
  children,
  tone = "paper",
  stickyHeading,
}: SplitSectionProps) {
  return (
    <Section tone={tone} labelledBy={id} id={sectionId}>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className={stickyHeading ? "lg:sticky lg:top-36" : undefined}>
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <Heading level={2} id={id} className={eyebrow ? "mt-5" : undefined}>
              {title}
            </Heading>
          </div>
        </div>
        <div className="space-y-6 text-lg leading-relaxed lg:col-span-7 lg:pt-10">{children}</div>
      </div>
    </Section>
  );
}
