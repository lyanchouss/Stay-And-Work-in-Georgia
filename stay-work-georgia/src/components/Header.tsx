import { useState } from 'react'
import type { NavKey } from '../types'
import { IconMark } from '../icons'

const LANGS = ['EN', 'GE'] as const
type Lang = typeof LANGS[number]

type HeaderProps = {
  isScrolled: boolean
  mobileOpen: boolean
  setMobileOpen: (v: boolean | ((prev: boolean) => boolean)) => void
  activeNav: NavKey
  scrollToId: (id: string) => void
}

const navButton =
  'relative px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white'

export default function Header({
  isScrolled,
  mobileOpen,
  setMobileOpen,
  activeNav,
  scrollToId,
}: HeaderProps) {
  const [lang, setLang] = useState<Lang>('EN')
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header
      className={[
        'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-[rgba(4,8,26,0.85)] backdrop-blur-[20px]' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="relative">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5 sm:px-10 lg:px-14">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('top')
            }}
            className="flex items-center gap-2.5"
          >
            <div className="flex h-[33.5px] w-[33.5px] items-center justify-center rounded-lg bg-[#C8A45C]/15 ring-1 ring-[#C8A45C]/25">
              <IconMark className="h-[17px] w-[17px] text-[#C8A45C]" />
            </div>
            <span className="text-sm font-semibold text-white">Stay &amp; Work in Georgia</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('services')
              }}
              className={`${navButton} ${activeNav === 'services' ? 'text-white' : ''}`}
            >
              <span className="relative">
                Services
                <span
                  aria-hidden="true"
                  className={[
                    'absolute left-0 -bottom-[4px] h-[1.5px] w-full origin-left scale-x-0 bg-[#C8A45C] transition-transform duration-300',
                    activeNav === 'services' ? 'scale-x-100' : 'hover:scale-x-100',
                  ].join(' ')}
                />
              </span>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('contact')
              }}
              className={`${navButton} ${activeNav === 'contact' ? 'text-white' : ''}`}
            >
              <span className="relative">
                Contact
                <span
                  aria-hidden="true"
                  className={[
                    'absolute left-0 -bottom-[4px] h-[1.5px] w-full origin-left scale-x-0 bg-[#C8A45C] transition-transform duration-300',
                    activeNav === 'contact' ? 'scale-x-100' : 'hover:scale-x-100',
                  ].join(' ')}
                />
              </span>
            </a>

            {/* Language switcher */}
            <div className="relative ml-2">
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 text-[#C8A45C]" aria-hidden="true">
                  <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
                  <ellipse cx="10" cy="10" rx="3" ry="7.5" stroke="currentColor" strokeWidth="1.4" />
                  <path d="M2.5 7.5h15M2.5 12.5h15" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                <span className="text-[12px] font-medium">{lang}</span>
                <svg viewBox="0 0 10 6" fill="none" className={`h-2 w-2 text-white/40 transition-transform ${langOpen ? 'rotate-180' : ''}`} aria-hidden="true">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-1.5 overflow-hidden rounded-lg py-1"
                  style={{
                    background: 'rgba(4, 8, 26, 0.95)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(200,160,80,0.15)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    minWidth: '72px',
                  }}
                >
                  {LANGS.map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => { setLang(l); setLangOpen(false) }}
                      className={`w-full px-4 py-1.5 text-left text-[12px] font-medium transition hover:bg-white/[0.06] ${lang === l ? 'text-[#C8A45C]' : 'text-white/70'}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:+995XXXXXXXXX"
              className="ml-2 hidden items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-sm text-white/80 transition hover:border-white/30 md:flex"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3.5 w-3.5 text-[#C8A45C]"
              >
                <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.22a1 1 0 0 1 .97.76l.86 3.45a1 1 0 0 1-.5 1.1l-1.4.7a10.1 10.1 0 0 0 5.84 5.84l.7-1.4a1 1 0 0 1 1.1-.5l3.45.86a1 1 0 0 1 .76.97v2.22a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 2 3.5z" />
              </svg>
              <span className="whitespace-nowrap">+995 555 123 456</span>
            </a>
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-white/80 transition hover:text-white"
            >
              <span className="sr-only">Menu</span>
              <div className="relative h-4 w-5">
                <span
                  className={[
                    'absolute left-0 right-0 top-1/2 h-[1.5px] w-full bg-white transition-transform duration-300',
                    mobileOpen ? 'rotate-45' : '-translate-y-[5px]',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 right-0 top-1/2 h-[1.5px] w-full bg-white/90 transition-opacity duration-300',
                    mobileOpen ? 'opacity-0' : '',
                  ].join(' ')}
                />
                <span
                  className={[
                    'absolute left-0 right-0 top-1/2 h-[1.5px] w-full bg-white transition-transform duration-300',
                    mobileOpen ? '-rotate-45' : 'translate-y-[5px]',
                  ].join(' ')}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={[
            'overflow-hidden transition-[max-height] duration-300 md:hidden',
            mobileOpen ? 'max-h-60' : 'max-h-0',
          ].join(' ')}
        >
          <div className="mx-auto max-w-6xl px-6 pb-3 sm:px-10 lg:px-14">
            <div className="flex flex-col gap-1">
              <button
                type="button"
                onClick={() => scrollToId('services')}
                className="rounded-lg px-3 py-2.5 text-left text-sm text-white/80 transition hover:text-white"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => scrollToId('contact')}
                className="rounded-lg px-3 py-2.5 text-left text-sm text-white/80 transition hover:text-white"
              >
                Contact
              </button>
              <a
                href="tel:+995XXXXXXXXX"
                className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-white/80 transition hover:text-white"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5 text-[#C8A45C]"
                >
                  <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.22a1 1 0 0 1 .97.76l.86 3.45a1 1 0 0 1-.5 1.1l-1.4.7a10.1 10.1 0 0 0 5.84 5.84l.7-1.4a1 1 0 0 1 1.1-.5l3.45.86a1 1 0 0 1 .76.97v2.22a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 2 3.5z" />
                </svg>
                +995 555 123 456
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
