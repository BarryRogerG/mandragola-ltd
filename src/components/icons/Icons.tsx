type IconProps = { className?: string };

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M3.5 10h12m-4.5-4.5L15.5 10 11 14.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M5 5l10 10M15 5 5 15" strokeLinecap="round" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M6.54 8.64h-3.9V21h3.9V8.64zM4.59 3C3.26 3 2.4 3.87 2.4 5.02c0 1.12.84 2.02 2.14 2.02h.02c1.36 0 2.2-.9 2.2-2.02C6.74 3.87 5.93 3 4.59 3zM21.6 13.43c0-4.1-2.19-6.01-5.11-6.01-2.35 0-3.4 1.3-3.99 2.21V8.64H8.64c.05 1.07 0 12.36 0 12.36h3.86v-6.9c0-.37.03-.74.14-1 .3-.74.98-1.51 2.12-1.51 1.5 0 2.1 1.14 2.1 2.81V21h3.86c-.01-7.42-.12-8.57-.12-7.57z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M14.5 8.25V6.4c0-.86.18-1.32 1.5-1.32h1.75V2.1C17.15 2.04 15.86 2 14.43 2 11.5 2 9.5 3.78 9.5 6.7v1.55H6.75V12h2.75v10h4V12h3.2l.5-3.75H14.5z" />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.24 2H21.5l-7.5 8.57L22.5 22h-6.56l-5.14-6.72L4.86 22H1.58l8.02-9.16L1.5 2h6.72l4.64 6.15L18.24 2zm-1.15 18h1.8L7.02 3.89H5.08L17.09 20z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d="M7 13 14 6m-6 0h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
