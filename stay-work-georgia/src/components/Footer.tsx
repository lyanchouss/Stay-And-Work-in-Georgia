import { useState } from 'react'
import type { Service } from '../types'
import { delayStyle } from '../types'
import { IconMark, ArrowRight } from '../icons'

type FooterProps = {
  services: Service[]
  scrollToId: (id: string) => void
}

const CONTACTS = [
  { href: 'https://wa.me/995555123456', label: 'WhatsApp', color: '#25D366', target: '_blank', icon: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M10 3.2a6.8 6.8 0 0 0-5.93 10.1L3 17l3.86-1.03A6.8 6.8 0 1 0 10 3.2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.7 8.2c.2-.3.4-.3.6-.3.1 0 .2 0 .3.2l.7 1.1c.1.1.1.3 0 .4l-.3.5c.4.8 1 1.3 1.8 1.8l.5-.3c.1-.1.3-.1.4 0l1.1.7c.2.1.2.2.2.3 0 .2 0 .4-.3.6-.3.2-.8.4-1.2.3-1-.2-2-.9-2.9-1.8-.9-.9-1.6-1.9-1.8-2.9-.1-.4.1-.9.3-1.2z" fill="currentColor" />
    </svg>
  )},
  { href: 'https://t.me/stayworkgeorgia', label: 'Telegram', color: '#26A5E4', target: '_blank', icon: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="10" cy="10" r="6.6" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.3 9.8l6.9-2.9-1.6 6.8-2.1-1.8-1.6 1.5.3-2.3 2.6-2.5-3.2 2.1-1.3-.9z" fill="currentColor" />
    </svg>
  )},
  { href: 'tel:+995555123456', label: 'Phone', color: '#C8A45C', target: undefined, icon: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <path d="M3 4.2A1.2 1.2 0 0 1 4.2 3h1.6a1 1 0 0 1 .95.72l.65 2.34a1 1 0 0 1-.43 1.1l-1.2.74a9.4 9.4 0 0 0 4.32 4.32l.74-1.2a1 1 0 0 1 1.1-.43l2.34.65a1 1 0 0 1 .72.95v1.6A1.2 1.2 0 0 1 14.8 17 11.8 11.8 0 0 1 3 5.2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )},
  { href: 'mailto:info@stayworkgeorgia.com', label: 'Email', color: '#C8A45C', target: undefined, icon: (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 6l5.45 4.37a1.7 1.7 0 0 0 2.1 0L16.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )},
]

export default function Footer({ services, scrollToId }: FooterProps) {
  const [contactPinned, setContactPinned] = useState(false)
  const [contactHover, setContactHover] = useState(false)
  const contactOpen = contactPinned || contactHover
  return (
    <footer className="border-t border-white/10 px-6 sm:px-10 lg:px-14" aria-label="Footer" style={{ background: '#04081a', marginTop: '54px' }}>
      <div className="mx-auto max-w-6xl py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="reveal" data-reveal style={delayStyle(80)}>
            <div className="flex items-center gap-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                <IconMark className="h-5 w-5 text-[#C8A45C]" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Stay &amp; Work Georgia</div>
                <div className="text-xs text-white/65">Professional consultancy services</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/70" style={{ marginTop: '25px' }}>
              We help foreign nationals navigate work permits, residence permits and business setup in Georgia.
            </p>
            <div className="mt-5 space-y-2 text-sm text-white/75">
              <a
                href="mailto:info@stayworkgeorgia.com"
                className="block transition hover:text-white"
              >
                info@stayworkgeorgia.com
              </a>
              <div className="text-white/60">Tbilisi, Georgia</div>
            </div>
          </div>

          <div className="reveal" data-reveal style={delayStyle(150)}>
            <div className="text-sm font-semibold text-white">Navigation</div>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/75">
              {[
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' },
                { id: 'about', label: 'About Us' },
                { id: 'detailed-services', label: 'Detailed Services' },
              ].map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => scrollToId(l.id)}
                  className="text-left transition hover:text-white"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="reveal" data-reveal style={delayStyle(210)}>
            <div className="text-sm font-semibold text-white">Services</div>
            <div className="mt-4 flex flex-col gap-2 text-sm text-white/75">
              {services.map((s) => (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => scrollToId(s.detailedId)}
                  className="text-left transition hover:text-white"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          <div className="reveal flex flex-col items-start" data-reveal style={delayStyle(260)}>
            <div className="text-sm font-semibold text-white">Contact</div>

            {/* Round button + contacts opening to the right */}
            <div
              className="mt-4 flex items-center gap-3"
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >

              {/* Round trigger button */}
              <button
                type="button"
                onClick={() => setContactPinned((v) => !v)}
                aria-label="Toggle contacts"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-200"
                style={{
                  border: `1px solid ${contactOpen ? 'rgba(201,149,90,0.65)' : 'rgba(201,149,90,0.35)'}`,
                  background: contactOpen ? 'rgba(201,149,90,0.22)' : 'rgba(201,149,90,0.10)',
                  color: '#C8A45C',
                  boxShadow: contactOpen ? '0 0 12px rgba(201,149,90,0.25)' : 'none',
                  transform: contactOpen ? 'scale(1.06)' : 'scale(1)',
                }}
              >
                {contactOpen ? (
                  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                    <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path d="M3 4.2A1.2 1.2 0 0 1 4.2 3h1.6a1 1 0 0 1 .95.72l.65 2.34a1 1 0 0 1-.43 1.1l-1.2.74a9.4 9.4 0 0 0 4.32 4.32l.74-1.2a1 1 0 0 1 1.1-.43l2.34.65a1 1 0 0 1 .72.95v1.6A1.2 1.2 0 0 1 14.8 17 11.8 11.8 0 0 1 3 5.2z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>

              {/* Contacts — slide in to the right */}
              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{
                  maxWidth: contactOpen ? '360px' : '0px',
                  opacity: contactOpen ? 1 : 0,
                }}
              >
              <div className="flex items-center gap-2 py-1 px-1">
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.target}
                    rel={c.target === '_blank' ? 'noreferrer' : undefined}
                    aria-label={c.label}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
                    style={{
                      border: `1px solid ${c.color}44`,
                      background: `${c.color}14`,
                      color: c.color,
                    }}
                    title={c.label}
                  >
                    {c.icon}
                  </a>
                ))}
              </div>
              </div>
            </div>

            {/* Location */}
            <a
              href="https://maps.google.com/?q=Tbilisi,Georgia"
              target="_blank"
              rel="noreferrer"
              aria-label="Open in Google Maps"
              className="group mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:-translate-y-px"
              style={{
                border: '1px solid rgba(201,149,90,0.22)',
                background: 'rgba(201,149,90,0.06)',
              }}
            >
              {/* Pin icon */}
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 group-hover:bg-[rgba(201,149,90,0.18)]"
                style={{
                  background: 'rgba(201,149,90,0.10)',
                  color: '#C8A45C',
                }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M10 2a5.5 5.5 0 0 0-5.5 5.5c0 3.5 5.5 10.5 5.5 10.5s5.5-7 5.5-10.5A5.5 5.5 0 0 0 10 2z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                    fill="currentColor"
                    fillOpacity="0.12"
                  />
                  <circle cx="10" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              {/* Address text */}
              <div>
                <div className="text-xs font-medium" style={{ color: '#C8A45C', letterSpacing: '0.06em' }}>
                  LOCATION
                </div>
                <div className="text-sm leading-tight" style={{ color: 'rgba(234,223,208,0.85)' }}>
                  Tbilisi, Georgia
                </div>
              </div>
              {/* Arrow hint */}
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="ml-auto h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-60"
                style={{ color: '#C8A45C' }}
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/65">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>© 2026 Stay &amp; Work Georgia. All rights reserved.</div>
            <div>Professional consultancy services. We are not a law firm.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
