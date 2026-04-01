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
    <footer id="contact" className="border-t border-white/10 px-6 sm:px-10 lg:px-14" aria-label="Footer" style={{ background: '#04081a', marginTop: '54px' }}>
      <div className="mx-auto max-w-6xl py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

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
          </div>

          {/* Navigation */}
          <div className="reveal" data-reveal style={delayStyle(150)}>
            <div className="text-sm font-semibold text-white">{t('footer.navigation')}</div>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
              {[
                { id: 'services', label: t('nav.services') },
                { id: 'about', label: t('nav.aboutUs') },
                { id: 'faq', label: t('nav.faq', { defaultValue: 'FAQ' }) },
                { id: 'contact', label: t('nav.contact') },
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

          {/* Services */}
          <div className="reveal" data-reveal style={delayStyle(180)}>
            <div className="text-sm font-semibold text-white">{t('footer.services')}</div>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/70">
              {services.filter((s) => !['documents-renewals', 'business-setup', 'ie-registration'].includes(s.key)).map((s) => (
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

          {/* Company details */}
          <div className="reveal" data-reveal style={delayStyle(210)}>
            <div className="text-sm font-semibold text-white">{t('footer.companyDetails')}</div>
            <div className="mt-4 space-y-2 text-sm text-white/70">
              <div className="text-white/85">{t('footer.companyName')}</div>
              <div>{t('footer.legalName')}</div>
              <div>{t('footer.idCode')}</div>
              <a
                href="mailto:info@stayandwork.ge"
                className="block transition hover:text-white"
              >
                {t('footer.email')}
              </a>
              <a
                href={t('footer.addressUrl')}
                target="_blank"
                rel="noreferrer"
                className="block transition hover:text-white"
              >
                {t('footer.address')}
              </a>
            </div>
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
