import { Container } from "@/components/ui/Container";

export function QuoteBand({ lines }: { lines: readonly string[] }) {
  return (
    <figure className="bg-paper py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl border-y border-line py-12 text-center md:py-16">
          <blockquote className="font-serif text-h2 leading-tight font-normal text-charcoal">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </blockquote>
        </div>
      </Container>
    </figure>
  );
}
