import { useState } from 'react'

const CONTACTS = [
  {
    href: 'mailto:info@stayworkgeorgia.com',
    label: 'Email',
    color: '#C8A45C',
    target: undefined,
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
        <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3.5 6l5.45 4.37a1.7 1.7 0 0 0 2.1 0L16.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: 'tel:+995555123456',
    label: 'Phone',
    color: '#C8A45C',
    target: undefined,
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="M3 4.2A1.2 1.2 0 0 1 4.2 3h1.6a1 1 0 0 1 .95.72l.65 2.34a1 1 0 0 1-.43 1.1l-1.2.74a9.4 9.4 0 0 0 4.32 4.32l.74-1.2a1 1 0 0 1 1.1-.43l2.34.65a1 1 0 0 1 .72.95v1.6A1.2 1.2 0 0 1 14.8 17 11.8 11.8 0 0 1 3 5.2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    href: 'https://t.me/stayworkgeorgia',
    label: 'Telegram',
    color: '#26A5E4',
    target: '_blank',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
        <circle cx="10" cy="10" r="6.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6.3 9.8l6.9-2.9-1.6 6.8-2.1-1.8-1.6 1.5.3-2.3 2.6-2.5-3.2 2.1-1.3-.9z" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: 'https://wa.me/995555123456',
    label: 'WhatsApp',
    color: '#25D366',
    target: '_blank',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
        <path d="M10 3.2a6.8 6.8 0 0 0-5.93 10.1L3 17l3.86-1.03A6.8 6.8 0 1 0 10 3.2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.7 8.2c.2-.3.4-.3.6-.3.1 0 .2 0 .3.2l.7 1.1c.1.1.1.3 0 .4l-.3.5c.4.8 1 1.3 1.8 1.8l.5-.3c.1-.1.3-.1.4 0l1.1.7c.2.1.2.2.2.3 0 .2 0 .4-.3.6-.3.2-.8.4-1.2.3-1-.2-2-.9-2.9-1.8-.9-.9-1.6-1.9-1.8-2.9-.1-.4.1-.9.3-1.2z" fill="currentColor" />
      </svg>
    ),
  },
]

export default function FloatingContacts() {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Contact buttons — expand upward */}
      {CONTACTS.map((c, i) => (
        <a
          key={c.label}
          href={c.href}
          target={c.target}
          rel={c.target === '_blank' ? 'noreferrer' : undefined}
          aria-label={c.label}
          className="flex h-9 w-9 items-center justify-center rounded-full shadow-lg transition-all duration-300"
          style={{
            border: `1.5px solid ${c.color}55`,
            background: `rgba(4,8,26,0.92)`,
            color: c.color,
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0) scale(1)' : `translateY(${(CONTACTS.length - i) * 16}px) scale(0.5)`,
            pointerEvents: open ? 'auto' : 'none',
            transitionDelay: open ? `${i * 50}ms` : '0ms',
            boxShadow: `0 4px 20px rgba(0,0,0,0.4), 0 0 8px ${c.color}22`,
          }}
          title={c.label}
        >
          {c.icon}
        </a>
      ))}

      {/* Main trigger button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact us"
        className="flex h-12 w-12 items-center justify-center rounded-full shadow-xl transition-all duration-300 cta-pulse-btn"
        style={{
          background: open ? 'rgba(201,149,90,0.25)' : 'rgba(201,149,90,0.15)',
          border: `2px solid ${open ? 'rgba(201,149,90,0.8)' : 'rgba(201,149,90,0.5)'}`,
          color: '#C8A45C',
          boxShadow: '0 6px 24px rgba(0,0,0,0.5), 0 0 12px rgba(201,149,90,0.2)',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}
      >
        {open ? (
          <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
            <path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" fill="none" className="h-[18px] w-[18px]" aria-hidden="true">
            <path d="M3 4.2A1.2 1.2 0 0 1 4.2 3h1.6a1 1 0 0 1 .95.72l.65 2.34a1 1 0 0 1-.43 1.1l-1.2.74a9.4 9.4 0 0 0 4.32 4.32l.74-1.2a1 1 0 0 1 1.1-.43l2.34.65a1 1 0 0 1 .72.95v1.6A1.2 1.2 0 0 1 14.8 17 11.8 11.8 0 0 1 3 5.2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  )
}
