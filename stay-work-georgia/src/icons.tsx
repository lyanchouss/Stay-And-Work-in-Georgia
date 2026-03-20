export function IconMark(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Stay & Work Georgia logo"
      className={props.className}
    >
      <path
        d="M16 2C10.5 2 6 6.3 6 11.5c0 3.2 1.6 6 4 8L16 28l6-8.5c2.4-2 4-4.8 4-8C26 6.3 21.5 2 16 2z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M16 2C10.5 2 6 6.3 6 11.5c0 3.2 1.6 6 4 8L16 28l6-8.5c2.4-2 4-4.8 4-8C26 6.3 21.5 2 16 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M16 7v9M11.5 11.5h9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 8.5l-1-1.5M19 8.5l1-1.5M13 14.5l-1 1.5M19 14.5l1 1.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="16" cy="11.5" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  )
}

export function IconCheck(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={props.className}
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export function ArrowRight(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={props.className}
    >
      <path d="M5 12h12" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconWork(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      <rect x="8" y="7" width="22" height="32" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="8" y="7" width="22" height="8" rx="3" fill="currentColor" opacity="0.12" />
      <circle cx="19" cy="24" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 24h6M19 21v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="30" y="18" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1" />
      <path d="M33 22l2 2 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 33h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M30 37h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}

export function IconHome(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      <path d="M7 23L24 10l17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11 21v18h16V27h10v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="27" width="7" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.08" />
      <path d="M34 17c-3.8 0-6.5 2.7-6.5 6v3.5c0 1 1.4 2.8 6.5 4.8 5.1-2 6.5-3.8 6.5-4.8V23c0-3.3-2.7-6-6.5-6z" fill="currentColor" opacity="0.12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M31.5 24l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconUser(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      <circle cx="14.5" cy="16" r="5.5" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.08" />
      <path d="M6 34c0-5 3.8-8.5 8.5-8.5S23 29 23 34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="24" y="10" width="18" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.08" />
      <path d="M28 17h10M28 22h10M28 27h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="28" y="30" width="10" height="4" rx="1.5" fill="currentColor" opacity="0.14" />
      <path d="M34.5 7v6M31.5 10h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconBriefcase(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      <rect x="7" y="13" width="34" height="23" rx="3" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.06" />
      <path d="M17 13v-2.5A3.5 3.5 0 0 1 20.5 7h7A3.5 3.5 0 0 1 31 10.5V13" stroke="currentColor" strokeWidth="2" />
      <path d="M7 23h34" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 24h4v4h-4z" fill="currentColor" opacity="0.2" />
      <path d="M30 28l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconBuilding(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      <rect x="6" y="11" width="20" height="29" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.06" />
      <rect x="22" y="16" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.04" />
      <path d="M10 17h3M10 22h3M10 27h3M16 17h3M16 22h3M16 27h3M26 22h3M26 27h3M26 32h3M32 22h3M32 27h3M32 32h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
      <circle cx="38" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M34 12h8M38 8v8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function IconFile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      <rect x="8" y="9" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.06" />
      <rect x="14" y="5" width="20" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.04" />
      <path d="M20 14h8M20 19h8M20 24h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="37" cy="33" r="7" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.08" />
      <path d="M33.8 31.2a3.5 3.5 0 0 1 5.6.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M40.2 34.8a3.5 3.5 0 0 1-5.6-.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M39.8 29.6v2.1h-2.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34.2 36.4v-2.1h2.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
