import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/LinkButton";

export default function NotFound() {
  return (
    <Container className="flex flex-1 flex-col items-start justify-center pt-44 pb-24 md:pt-52 md:pb-32">
      <p className="text-[0.7rem] font-medium tracking-[0.18em] text-forest uppercase">404</p>
      <h1 className="mt-5 max-w-2xl font-serif text-display font-normal">This page is not part of the demonstration.</h1>
      <p className="mt-6 max-w-xl text-lead">
        The rebuild includes the homepage, Our Mission, and Values. Other pages on the official site have not been
        rebuilt here.
      </p>
      <div className="mt-10 flex flex-wrap gap-8">
        <LinkButton href="/">Back to home</LinkButton>
        <LinkButton href="/our-mission" variant="quiet">
          Our Mission
        </LinkButton>
      </div>
    </Container>
  );
}
