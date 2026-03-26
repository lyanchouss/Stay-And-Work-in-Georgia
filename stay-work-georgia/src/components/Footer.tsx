import { useTranslation } from 'react-i18next'
import type { Service } from '../types'
import { delayStyle } from '../types'
import logoImg from '../assets/ChatGPT Image 26 мар. 2026 г., 14_38_31.png'

type FooterProps = {
  services: Service[]
  scrollToId: (id: string) => void
}

export default function Footer({ services, scrollToId }: FooterProps) {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-white/10 px-6 sm:px-10 lg:px-14" aria-label="Footer" style={{ background: '#04081a', marginTop: '54px' }}>
      <div className="mx-auto max-w-6xl py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Logo + description */}
          <div className="reveal" data-reveal style={delayStyle(80)}>
            <div className="flex items-center gap-2">
              <img src={logoImg} alt="Stay & Work Georgia" className="h-14 w-auto -my-2 -mr-3" />
              <div>
                <div className="font-['Playfair_Display'] text-[15px] font-semibold text-white">Stay &amp; Work Georgia</div>
                <div className="text-xs text-white/55">{t('footer.tagline')}</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              {t('footer.description')}
            </p>
            <a
              href="mailto:info@stayworkgeorgia.com"
              className="mt-4 block text-sm text-white/70 transition hover:text-white"
            >
              info@stayworkgeorgia.com
            </a>
          </div>

          {/* Navigation + Services */}
          <div className="reveal flex gap-12 sm:gap-16" data-reveal style={delayStyle(150)}>
            <div>
              <div className="text-sm font-semibold text-white">{t('footer.navigation')}</div>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
                {[
                  { id: 'services', label: t('nav.services') },
                  { id: 'about', label: t('nav.aboutUs') },
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
            <div>
              <div className="text-sm font-semibold text-white">{t('footer.services')}</div>
              <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
                {services.filter((s) => !['documents-renewals', 'business-setup'].includes(s.key)).map((s) => (
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
          </div>

          {/* Location */}
          <div className="reveal flex flex-col items-start" data-reveal style={delayStyle(210)}>
            <div className="text-sm font-semibold text-white">{t('footer.location')}</div>
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
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-200 group-hover:bg-[rgba(201,149,90,0.18)]"
                style={{ background: 'rgba(201,149,90,0.10)', color: '#C8A45C' }}
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                  <path
                    d="M10 2a5.5 5.5 0 0 0-5.5 5.5c0 3.5 5.5 10.5 5.5 10.5s5.5-7 5.5-10.5A5.5 5.5 0 0 0 10 2z"
                    stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"
                    fill="currentColor" fillOpacity="0.12"
                  />
                  <circle cx="10" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.3" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <div>
                <div className="text-sm leading-tight" style={{ color: 'rgba(234,223,208,0.85)' }}>
                  {t('footer.locationName')}
                </div>
              </div>
              <svg
                viewBox="0 0 16 16" fill="none"
                className="ml-auto h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-60"
                style={{ color: '#C8A45C' }} aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/65">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>{t('footer.copyright')}</div>
            <div>{t('footer.disclaimer')}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
