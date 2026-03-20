import type { ReactElement } from 'react'

export type AboutHighlight = {
  key: string
  title: string
  body: string
  icon: ReactElement
}

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    key: 'languages',
    title: 'Languages',
    body: 'English, Russian, Georgian.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <path
          d="M4 5h8M8 5v2M6 13l4-8 4 8M7.2 11h5.6M14 18h6M17 6v12M14.5 14.5l5 3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: 'confidential',
    title: 'Confidential',
    body: 'Your data is handled with full confidentiality.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10V8a4 4 0 1 1 8 0v2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="15" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: 'clear-process',
    title: 'Clear Process',
    body: 'Structured steps from first call to final result.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9h6M9 13h6M10 6h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path
          d="M9.5 17l1.5 1.5 3.5-3.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    key: 'who-we-help',
    title: 'Who We Help',
    body: 'Employees, freelancers, founders, employers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <circle cx="9" cy="9" r="2.3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="15.5" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M4.5 18c0-2.8 2-4.5 4.5-4.5s4.5 1.7 4.5 4.5M13 18c.2-1.8 1.5-3 3.2-3 1.8 0 3.1 1.2 3.3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]
