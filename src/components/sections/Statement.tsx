import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Section } from "@/components/ui/Section";

type StatementProps = {
  id: string;
  eyebrow: string;
  statement: string;
  asHeading?: boolean;
  body: string;
  action?: ReactNode;
};

export function Statement({ id, eyebrow, statement, asHeading = true, body, action }: StatementProps) {
  const statementClass = "font-serif text-h2 leading-tight font-normal text-charcoal";

  return (
    <Section labelledBy={id}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          {asHeading ? (
            <h2 id={id} className={`mt-5 ${statementClass}`}>
              {statement}
            </h2>
          ) : (
            <>
              <h2 id={id} className="sr-only">
                {eyebrow}
              </h2>
              <p className={`mt-5 ${statementClass}`}>{statement}</p>
            </>
          )}
        </div>
        <div className="flex flex-col justify-end gap-8 lg:col-span-5 lg:pb-1">
          <p className="text-lg leading-relaxed">{body}</p>
          {action}
        </div>
      </div>
    </Section>
  );
}
