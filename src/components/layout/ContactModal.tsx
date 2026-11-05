"use client";

import { useEffect, useId, useRef } from "react";
import { ArrowIcon, CloseIcon } from "@/components/icons/Icons";
import { contactCopy } from "@/content/shared";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

const fieldClass =
  "w-full rounded-md border border-line bg-paper px-3 py-2 font-sans text-sm text-charcoal outline-none transition-colors placeholder:text-mist focus:border-forest md:py-2.5";

export function ContactModal({ open, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const noteId = useId();

  useEffect(() => {
    const node = dialogRef.current;
    if (!node) return;
    if (open && !node.open) node.showModal();
    if (!open && node.open) node.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={noteId}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto w-[min(34rem,calc(100%-1.5rem))] max-h-[min(32rem,calc(100svh-1.25rem))] overflow-hidden border-0 bg-transparent p-0 shadow-[0_24px_80px_rgba(14,23,38,0.28)] backdrop:bg-navy/55 open:flex"
    >
      <div className="flex max-h-[min(32rem,calc(100svh-1.25rem))] w-full min-h-0 flex-col overflow-hidden rounded-sm bg-paper text-ink-soft">
        <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden px-5 pt-6 pb-4 md:px-10 md:pt-9 md:pb-7">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-1.5 right-1.5 inline-flex size-11 cursor-pointer items-center justify-center text-ink-soft transition-colors hover:text-charcoal md:top-2.5 md:right-2.5"
          >
            <CloseIcon className="size-4" />
            <span className="sr-only">Close</span>
          </button>

          <h2
            id={titleId}
            className="pr-10 font-serif text-[1.65rem] font-light leading-[1.1] tracking-[-0.02em] text-charcoal uppercase md:text-[2.35rem]"
          >
            {contactCopy.title}
          </h2>
          <p className="mt-1.5 max-w-md font-sans text-sm leading-relaxed md:mt-2 md:text-base">{contactCopy.body}</p>

          <svg
            aria-hidden="true"
            viewBox="0 0 220 16"
            className="mt-2.5 h-3.5 w-32 text-gold md:mt-4 md:h-4 md:w-44"
          >
            <path
              d="M2 10c28-6 54 4 82-2 22-5 44 6 70 1 22-4 44-8 64-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          <form
            aria-label={contactCopy.title}
            aria-describedby={noteId}
            className="mt-3 flex min-h-0 flex-1 flex-col md:mt-5"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <div className="min-h-0 flex-1 overflow-y-auto">
            <label htmlFor="modal-contact-name" className="sr-only">
              {contactCopy.fields.name}
            </label>
            <input
              id="modal-contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder={`${contactCopy.fields.name}*`}
              className={fieldClass}
            />

            <div className="mt-2 grid grid-cols-2 gap-2 md:mt-3 md:gap-3">
              <div>
                <label htmlFor="modal-contact-phone" className="sr-only">
                  {contactCopy.fields.phone}
                </label>
                <input
                  id="modal-contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder={`${contactCopy.fields.phone}*`}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="modal-contact-email" className="sr-only">
                  {contactCopy.fields.email}
                </label>
                <input
                  id="modal-contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder={`${contactCopy.fields.email}*`}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="modal-contact-sector" className="sr-only">
                  {contactCopy.fields.sector}
                </label>
                <input
                  id="modal-contact-sector"
                  name="sector"
                  type="text"
                  placeholder={contactCopy.fields.sector}
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="modal-contact-company" className="sr-only">
                  {contactCopy.fields.company}
                </label>
                <input
                  id="modal-contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder={contactCopy.fields.company}
                  className={fieldClass}
                />
              </div>
            </div>

            <label htmlFor="modal-contact-message" className="sr-only">
              {contactCopy.fields.message}
            </label>
            <textarea
              id="modal-contact-message"
              name="message"
              rows={2}
              placeholder={contactCopy.fields.message}
              className={`${fieldClass} mt-2 resize-none md:mt-3`}
            />
            </div>

            <div className="mt-3 flex shrink-0 flex-col items-stretch gap-1.5 md:mt-4 md:gap-2 sm:items-end">
              <button
                type="button"
                className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-forest px-6 text-xs font-semibold tracking-[0.18em] text-paper uppercase transition-colors hover:bg-charcoal"
              >
                {contactCopy.submit}
                <ArrowIcon className="size-3.5" />
              </button>
              <p id={noteId} className="max-w-sm text-xs leading-relaxed text-ink-soft sm:text-right">
                {contactCopy.demoNote}
              </p>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
