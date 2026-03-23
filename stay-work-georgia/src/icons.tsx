import type React from 'react'

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
export function IconWork(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="2 0.5 20 20" fill="none" aria-hidden="true" className={props.className} style={props.style}>
      {/* Passport body */}
      <rect x="2.5" y="2" width="11" height="15" rx="1.25" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <line x1="8" y1="2" x2="8" y2="17" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.35" />
      {/* Photo */}
      <circle cx="5.5" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.14" />
      <path d="M3.5 11.5c0-1.25 0.9-2 2-2s2 0.8 2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Text lines */}
      <path d="M9 6.5h3.5M9 8.5h2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.75" />
      {/* Approval stamp */}
      <circle cx="15.5" cy="5.5" r="3.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="15.5" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" strokeDasharray="1 1" />
      <path d="M14 5.5l1 1 2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/* Residence Permit Support — дом с ключом */
export function IconHome(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="2 2 20 20" fill="none" aria-hidden="true" className={props.className} style={props.style}>
      {/* House roof */}
      <path d="M2.5 9L10 3l7.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* House walls */}
      <path d="M4 8V17h12V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* House fill */}
      <path d="M4 8V17h12V8L10 3z" fill="currentColor" fillOpacity="0.07" />
      {/* Door */}
      <rect x="8" y="11.5" width="4" height="5.5" rx="0.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" />
      {/* Key */}
      <circle cx="16" cy="5.5" r="2.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="5.5" r="1" fill="currentColor" fillOpacity="0.4" />
      <path d="M17.7 7.3l1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

/* IE Registration — человек + регистрационный документ */
export function IconUser(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={props.className} style={props.style}>
      {/* Person */}
      <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.1" />
      <path d="M1.5 15c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Registration document */}
      <rect x="11" y="4.5" width="7" height="9" rx="1" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.08" />
      <path d="M12.5 7h4M12.5 9h4M12.5 11h2.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      {/* Pen signing */}
      <path d="M14 14l2-2 1 1-2 2H14v-1z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  )
}

/* Business Setup — здание с флагом */
export function IconBriefcase(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="2 2 20 20" fill="none" aria-hidden="true" className={props.className} style={props.style}>
      {/* Building body */}
      <rect x="3.5" y="6.5" width="11" height="11" rx="1" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      {/* Windows */}
      <rect x="5" y="8.5" width="2" height="2" rx="0.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.9" />
      <rect x="8.5" y="8.5" width="2" height="2" rx="0.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.9" />
      <rect x="5" y="13" width="2" height="2" rx="0.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.9" />
      <rect x="8.5" y="13" width="2" height="2" rx="0.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="0.9" />
      {/* Flag pole */}
      <path d="M14 17.5V3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      {/* Flag */}
      <path d="M14 3.5l3.5 1.75-3.5 1.75z" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  )
}

/* Employer Support — рукопожатие */
export function IconBuilding(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="1 2 20 20" fill="none" aria-hidden="true" className={props.className} style={props.style}>
      {/* Left arm */}
      <path d="M1.5 12.5l3-3 2 0.8 2.5-1.25H11a1 1 0 0 1 0 2H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Handshake clasp */}
      <path d="M8.75 11.25l1.25 1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Right arm */}
      <path d="M18.5 12.5l-3-3-2 0.8-1.25-0.4-1.67 1.25c-0.5.33-0.5 1 0 1.25l2 1.25 3.5-1.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Left person */}
      <circle cx="4" cy="6.5" r="2.1" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.1" />
      {/* Right person */}
      <circle cx="16" cy="6.5" r="2.1" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.1" />
    </svg>
  )
}

/* Documents & Renewals — документ + обновление */
export function IconFile(props: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="2 2 20 20" fill="none" aria-hidden="true" className={props.className} style={props.style}>
      {/* Document */}
      <rect x="2.5" y="2.5" width="9" height="12.5" rx="1.25" stroke="currentColor" strokeWidth="1.5" fill="currentColor" fillOpacity="0.08" />
      <path d="M4.5 6h5M4.5 8.5h5M4.5 11h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Renewal badge */}
      <circle cx="14.5" cy="14" r="4.5" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.3" />
      {/* Refresh arrows */}
      <path d="M12.2 12.5a2.8 2.8 0 0 1 4.6-0.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16.8 15.5a2.8 2.8 0 0 1-4.6 0.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16.2 10.8l0.6 1.9-1.9.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.8 17.2l-0.6-1.9 1.9-.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
