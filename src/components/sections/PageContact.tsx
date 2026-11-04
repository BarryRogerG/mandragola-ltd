import { contactCopy } from "@/content/shared";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type PageContactTone = "dusk" | "paper" | "ivory";

type PageContactProps = {
  tone?: PageContactTone;
};

export function PageContact({ tone = "dusk" }: PageContactProps) {
  const dusk = tone === "dusk";
  const ivory = tone === "ivory";

  const fieldClass = dusk
    ? "mt-2 w-full rounded-md border border-[#C4A07A]/45 bg-[#E8D5B8]/[0.08] px-3 py-2.5 font-sans text-sm text-[#F3EBE0] outline-none transition-colors placeholder:text-[#C4A07A]/50 focus:border-[#C4A07A] focus:bg-[#E8D5B8]/[0.12]"
    : "mt-2 w-full rounded-md border border-line bg-paper px-3 py-2.5 font-sans text-sm text-charcoal outline-none transition-colors placeholder:text-mist focus:border-forest";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={cn(
        "px-5 py-14 md:px-20 md:py-16",
        dusk
          ? "bg-linear-to-b from-[#140F0C] to-[#0B0A09] text-[#CDBBA8]"
          : ivory
            ? "bg-ivory text-ink-soft"
            : "border-t border-line bg-paper text-ink-soft",
      )}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-12">
        <div>
          <p
            className={cn(
              "text-xs font-semibold tracking-[0.3em] uppercase",
              dusk ? "text-[#C4A07A]" : "text-forest",
            )}
          >
            Get in touch
          </p>
          <h2
            id="contact-heading"
            className={cn(
              "mt-3 font-serif text-2xl font-light leading-[1.15] tracking-[-0.01em] md:text-3xl",
              dusk ? "text-[#F3EBE0]" : "text-charcoal",
            )}
          >
            {contactCopy.title}
          </h2>
          <p
            className={cn(
              "mt-3 max-w-md font-sans text-sm leading-relaxed md:text-base",
              dusk ? "text-[#CDBBA8]" : "text-ink-soft",
            )}
          >
            {contactCopy.body}
          </p>
          <a
            href={`mailto:${site.email}`}
            className={cn(
              "mt-5 inline-flex min-h-11 items-center text-sm font-medium tracking-wide underline underline-offset-4",
              dusk
                ? "text-[#E4D5C3] decoration-[#C4A07A]/50 hover:text-[#C4A07A]"
                : "text-forest decoration-forest/40 hover:text-charcoal",
            )}
          >
            {site.email}
          </a>
          <address
            className={cn(
              "mt-3 text-sm leading-relaxed not-italic",
              dusk ? "text-[#CDBBA8]" : "text-ink-soft",
            )}
          >
            {site.name}
            <br />
            {site.address.street}, {site.address.locality}, {site.address.countryName}
          </address>
        </div>

        <form aria-label="Contact form" aria-describedby="contact-form-note">
          <div>
            <label
              htmlFor="contact-name"
              className={cn(
                "text-xs font-semibold tracking-[0.22em] uppercase",
                dusk ? "text-[#C4A07A]" : "text-forest",
              )}
            >
              Name
            </label>
            <input id="contact-name" name="name" type="text" autoComplete="name" className={fieldClass} />
          </div>
          <div className="mt-4">
            <label
              htmlFor="contact-email"
              className={cn(
                "text-xs font-semibold tracking-[0.22em] uppercase",
                dusk ? "text-[#C4A07A]" : "text-forest",
              )}
            >
              Email
            </label>
            <input id="contact-email" name="email" type="email" autoComplete="email" className={fieldClass} />
          </div>
          <div className="mt-4">
            <label
              htmlFor="contact-message"
              className={cn(
                "text-xs font-semibold tracking-[0.22em] uppercase",
                dusk ? "text-[#C4A07A]" : "text-forest",
              )}
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={3}
              className={`${fieldClass} min-h-24 resize-none`}
            />
          </div>
          <button
            type="button"
            className={cn(
              "mt-6 inline-flex min-h-11 items-center justify-center rounded-md px-6 text-xs font-semibold tracking-[0.18em] uppercase transition-colors",
              dusk
                ? "bg-[#C4A07A] text-[#0B0A09] hover:bg-[#D4B896]"
                : "bg-forest text-paper hover:bg-charcoal",
            )}
          >
            Send
          </button>
          <p
            id="contact-form-note"
            className={cn(
              "mt-3 max-w-sm text-xs leading-relaxed",
              dusk ? "text-[#CDBBA8]/70" : "text-mist",
            )}
          >
            {contactCopy.demoNote}
          </p>
        </form>
      </div>
    </section>
  );
}
