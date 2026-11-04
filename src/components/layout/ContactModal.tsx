"use client";

import { useEffect, useId, useRef } from "react";
import { ArrowIcon, CloseIcon } from "@/components/icons/Icons";
import { contactCopy } from "@/content/shared";

type ContactModalProps = {
  open: boolean;
  onClose: () => void;
};

const fieldClass =
  "w-full rounded-md border border-line bg-paper px-3 py-2.5 font-sans text-sm text-charcoal outline-none transition-colors placeholder:text-mist focus:border-forest";

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
      className="m-auto w-[min(34rem,calc(100%-1.5rem))] max-h-[min(36rem,calc(100vh-2rem))] overflow-y-auto border-0 bg-transparent p-0 shadow-[0_24px_80px_rgba(14,23,38,0.28)] backdrop:bg-navy/55 open:flex"
    >
      <div className="flex w-full flex-col overflow-hidden rounded-sm bg-paper text-ink-soft">
        <div className="relative px-5 pt-8 pb-6 md:px-10 md:pt-9 md:pb-7">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-2.5 right-2.5 inline-flex size-11 cursor-pointer items-center justify-center text-mist transition-colors hover:text-charcoal"
          >
            <CloseIcon className="size-4" />
            <span className="sr-only">Close</span>
          </button>

          <h2
            id={titleId}
            className="font-serif text-[2rem] font-light leading-[1.1] tracking-[-0.02em] text-charcoal uppercase md:text-[2.35rem]"
          >
            {contactCopy.title}
          </h2>
          <p className="mt-2 max-w-md font-sans text-sm leading-relaxed md:text-base">{contactCopy.body}</p>

          <svg
            aria-hidden="true"
            viewBox="0 0 220 16"
            className="mt-4 h-4 w-36 text-gold md:w-44"
          >
            <path
              d="M2 10c28-6 54 4 82-2 22-5 44 6 70 1 22-4 44-8 64-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>

          <form aria-label={contactCopy.title} aria-describedby={noteId} className="mt-5">
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

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
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
              rows={3}
              placeholder={contactCopy.fields.message}
              className={`${fieldClass} mt-3 resize-none`}
            />

            <div className="mt-4 flex flex-col items-stretch gap-2 sm:items-end">
              <button
                type="button"
                className="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-forest px-6 text-xs font-semibold tracking-[0.18em] text-paper uppercase transition-colors hover:bg-charcoal"
              >
                {contactCopy.submit}
                <ArrowIcon className="size-3.5" />
              </button>
              <p id={noteId} className="max-w-sm text-xs leading-relaxed text-mist sm:text-right">
                {contactCopy.demoNote}
              </p>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
