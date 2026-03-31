import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../i18n'
import type { NavKey } from '../types'
import logoImg from '../assets/ChatGPT Image 26 мар. 2026 г., 14_38_31.png'

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'ka', label: 'GE' },
] as const

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
  const { t } = useTranslation()
  const [langOpen, setLangOpen] = useState(false)

  const currentLang = LANGS.find((l) => l.code === i18n.language) ?? LANGS[0]

  const blurSupported =
    typeof CSS !== 'undefined' &&
    (CSS.supports('backdrop-filter: blur(1px)') ||
      CSS.supports('-webkit-backdrop-filter: blur(1px)'))

  const switchLang = (code: string) => {
    i18n.changeLanguage(code)
    localStorage.setItem('lang', code)
    setLangOpen(false)
  }

  return (
    <header
      className={[
        'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
        isScrolled ? 'bg-[rgba(4,8,26,0.85)] backdrop-blur-[20px]' : 'bg-transparent',
      ].join(' ')}
    >
      <div className="relative">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2.5 sm:px-10 lg:px-14">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('top')
            }}
            className="flex items-center gap-2"
          >
            <img src={logoImg} alt="Stay & Work Georgia" className="h-[82px] w-auto -my-4 -mr-10" />
            <span className="font-['Playfair_Display'] text-[15px] font-semibold tracking-wide text-white whitespace-nowrap">Stay &amp; Work in Georgia</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            {([
              { id: 'services', label: t('nav.services') },
              { id: 'about', label: t('nav.aboutUs') },
              { id: 'faq', label: t('nav.faq') },
              { id: 'contact', label: t('nav.contact') },
            ] as const).map((item, idx, arr) => (
              <div key={item.id} className="flex items-center">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId(item.id)
                  }}
                  className={`${navButton} ${activeNav === item.id ? 'text-white' : ''}`}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={[
                        'absolute left-0 -bottom-[4px] h-[1.5px] w-full origin-left scale-x-0 bg-[#C8A45C] transition-transform duration-300',
                        activeNav === item.id ? 'scale-x-100' : 'hover:scale-x-100',
                      ].join(' ')}
                    />
                  </span>
                </a>
                {idx < arr.length - 1 && (
                  <span className="px-1 text-white/25" aria-hidden="true">
                    |
                  </span>
                )}
              </div>
            ))}

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
                <span className="text-[12px] font-medium">{currentLang.label}</span>
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
                      key={l.code}
                      type="button"
                      onClick={() => switchLang(l.code)}
                      className={`w-full px-4 py-1.5 text-left text-[12px] font-medium transition hover:bg-white/[0.06] ${currentLang.code === l.code ? 'text-[#C8A45C]' : 'text-white/70'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="tel:+995555001017"
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
              <span className="whitespace-nowrap">+995 555 001 017</span>
            </a>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            {/* Mobile language switcher (globe) */}
            <div className="relative">
              <button
                type="button"
                aria-label="Language"
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex h-8 min-w-8 items-center justify-center px-2 transition hover:opacity-90"
              >
                <span className="text-[12px] font-semibold tracking-[0.12em]" style={{ color: '#C8A45C' }}>
                  {currentLang.label}
                </span>
              </button>

              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-2 overflow-hidden rounded-lg py-1"
                  style={{
                    background: 'rgba(4, 8, 26, 0.95)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(200,160,80,0.15)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    minWidth: '72px',
                    zIndex: 60,
                  }}
                >
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => switchLang(l.code)}
                      className={`w-full px-4 py-1.5 text-left text-[12px] font-medium transition hover:bg-white/[0.06] ${currentLang.code === l.code ? 'text-[#C8A45C]' : 'text-white/70'}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Burger button */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              onClick={() => {
                setLangOpen(false)
                setMobileOpen((v) => !v)
              }}
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

        {/* Mobile fullscreen menu overlay */}
        <div
          className={[
            'fixed inset-0 z-40 md:hidden',
            mobileOpen ? 'pointer-events-auto' : 'pointer-events-none',
          ].join(' ')}
          aria-hidden={!mobileOpen}
        >
          {/* Close icon in top-right */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className={[
              'absolute right-6 top-[10px] z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl text-white/80 transition-all duration-650 ease-in-out hover:text-white',
              mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1',
            ].join(' ')}
          >
            <svg viewBox="0 0 20 20" fill="none" className="h-6 w-6" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </button>

          {/* Backdrop (visual layer) */}
          <div
            aria-hidden="true"
            className={[
              'absolute inset-0 transition-opacity duration-650 ease-in-out',
              mobileOpen ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
            style={{
              // Lower alpha when blur is supported so the blur is actually visible
              background: blurSupported ? 'rgba(4, 8, 26, 0.46)' : 'rgba(4, 8, 26, 0.82)',
              backdropFilter: blurSupported ? 'blur(22px) saturate(140%)' : undefined,
              WebkitBackdropFilter: blurSupported ? 'blur(22px) saturate(140%)' : undefined,
            }}
          />
          {/* Backdrop click-catcher */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0"
          />

          {/* Panel (below top header bar) */}
          <div
            className={[
              'absolute left-0 right-0 top-[56px] bottom-0 overflow-y-auto transform-gpu will-change-transform transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]',
              mobileOpen ? 'translate-x-0' : 'translate-x-full',
            ].join(' ')}
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              boxShadow: mobileOpen ? '-14px 0 32px rgba(0,0,0,0.38)' : 'none',
            }}
          >
            <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10 lg:px-14">
              <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => scrollToId('services')}
                className="rounded-xl px-4 py-4 text-left text-[18px] font-medium text-white/85 transition hover:text-white"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {t('nav.services')}
              </button>
              <button
                type="button"
                onClick={() => scrollToId('about')}
                className="rounded-xl px-4 py-4 text-left text-[18px] font-medium text-white/85 transition hover:text-white"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {t('nav.aboutUs')}
              </button>
              <button
                type="button"
                onClick={() => scrollToId('faq')}
                className="rounded-xl px-4 py-4 text-left text-[18px] font-medium text-white/85 transition hover:text-white"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {t('nav.faq')}
              </button>
              <button
                type="button"
                onClick={() => scrollToId('contact')}
                className="rounded-xl px-4 py-4 text-left text-[18px] font-medium text-white/85 transition hover:text-white"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {t('nav.contact')}
              </button>
              <a
                href="tel:+995555001017"
                className="flex items-center gap-3 rounded-xl px-4 py-4 text-[18px] font-medium text-white/85 transition hover:text-white"
                style={{ background: 'rgba(201,149,90,0.06)', border: '1px solid rgba(201,149,90,0.18)' }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-[#C8A45C]"
                >
                  <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2.22a1 1 0 0 1 .97.76l.86 3.45a1 1 0 0 1-.5 1.1l-1.4.7a10.1 10.1 0 0 0 5.84 5.84l.7-1.4a1 1 0 0 1 1.1-.5l3.45.86a1 1 0 0 1 .76.97v2.22a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 2 3.5z" />
                </svg>
                +995 555 001 017
              </a>

              {/* Language switcher moved to header (globe) */}
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}
