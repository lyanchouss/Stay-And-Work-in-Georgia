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

/* Work Permit Support — паспорт со штампом одобрения */
export function IconWork(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      {/* Passport booklet body */}
      <rect x="6" y="5" width="26" height="36" rx="3" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <line x1="19" y1="5" x2="19" y2="41" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.35" />
      {/* Photo area */}
      <circle cx="13" cy="18" r="5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.14" />
      <path d="M8 27c0-3 2.2-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Text lines */}
      <path d="M22 15h7M22 19.5h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeOpacity="0.75" />
      {/* Approval stamp */}
      <circle cx="37" cy="13" r="8" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="37" cy="13" r="5.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="2 2" />
      <path d="M33.5 13l2.5 2.5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* Residence Permit Support — дом с ключом */
export function IconHome(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      {/* House roof */}
      <path d="M6 22L24 7l18 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* House walls */}
      <path d="M10 19.5V41h28V19.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* House fill */}
      <path d="M10 19.5V41h28V19.5L24 7z" fill="currentColor" fillOpacity="0.07" />
      {/* Door */}
      <rect x="19" y="28" width="10" height="13" rx="1.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
      {/* Key */}
      <circle cx="38" cy="14" r="5.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="38" cy="14" r="2" fill="currentColor" fillOpacity="0.4" />
      <path d="M42 18l4 4M44 20l-1.5 1.5M45.5 21.5l-1.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/* IE Registration — человек + регистрационный документ */
export function IconUser(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      {/* Person */}
      <circle cx="15" cy="15" r="6.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      <path d="M5 35c0-5.5 4.5-9 10-9s10 3.5 10 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Registration document */}
      <rect x="27" y="11" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.08" />
      <path d="M30.5 17h9M30.5 21.5h9M30.5 26h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      {/* Pen signing */}
      <path d="M34 33l5-5 2.5 2.5-5 5H34v-2.5z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

/* Business Setup — здание с флагом */
export function IconBriefcase(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      {/* Building body */}
      <rect x="8" y="16" width="26" height="26" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      {/* Windows */}
      <rect x="12" y="21" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.2" />
      <rect x="21" y="21" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.2" />
      <rect x="12" y="31" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.2" />
      <rect x="21" y="31" width="5" height="5" rx="1" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.2" />
      {/* Flag pole */}
      <path d="M34 42V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {/* Flag */}
      <path d="M34 8l8 4-8 4z" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  )
}

/* Employer Support — рукопожатие */
export function IconBuilding(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      {/* Left arm */}
      <path d="M4 30l7-7 5 2 6-3h4c1.5 0 2.5 1 2.5 2.5S27.5 27 26 27h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Handshake clasp */}
      <path d="M21 27l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Right arm */}
      <path d="M44 30l-7-7-5 2-3-1-4 3c-1.2.8-1.2 2.5 0 3l5 3 8-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Left person */}
      <circle cx="9" cy="16" r="5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.1" />
      {/* Right person */}
      <circle cx="39" cy="16" r="5" stroke="currentColor" strokeWidth="1.6" fill="currentColor" fillOpacity="0.1" />
    </svg>
  )
}

/* Documents & Renewals — документ + обновление */
export function IconFile(props: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={props.className}>
      {/* Document */}
      <rect x="6" y="6" width="22" height="30" rx="2.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <path d="M11 14h12M11 19.5h12M11 25h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Renewal badge circle */}
      <circle cx="35" cy="33" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.6" />
      {/* Circular arrows (refresh) */}
      <path d="M29.5 30a6 6 0 0 1 9.5-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M40.5 36a6 6 0 0 1-9.5 1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M38.5 26.5l1 2.5-2.5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31.5 39.5l-1-2.5 2.5-.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
