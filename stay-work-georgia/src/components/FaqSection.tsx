import { useTranslation } from 'react-i18next'
import { delayStyle } from '../types'

export default function FaqSection() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true, defaultValue: [] }) as Array<{ q: string; a: string }>

  return (
    <section
      id="faq"
      className="scroll-mt-[100px] px-6 pb-16 pt-[36px] sm:px-10 lg:px-14"
      aria-label="FAQ"
      style={{ background: '#04081a' }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-10" data-reveal style={delayStyle(0)}>
          <span style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9955A' }}>
            {t('faq.label')}
          </span>
          <h2
            className="mt-10 font-['Playfair_Display'] font-semibold leading-tight"
            style={{ fontSize: 'clamp(21px, 2.5vw, 34px)', color: '#ffffff' }}
          >
            {t('faq.heading')}
          </h2>
          <div className="mt-4 h-px w-14 rounded-full" style={{ background: 'linear-gradient(to right, #C9955A, rgba(201,149,90,0.15))' }} />
        </div>

        <div className="reveal" data-reveal style={delayStyle(80)}>
          <div className="space-y-3">
            {items.map((it, idx) => (
              <details
                key={idx}
                className="group rounded-2xl p-5 sm:p-6"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <div className="font-['Playfair_Display'] text-[18px] font-semibold" style={{ color: '#EADFD0' }}>
                    {it.q}
                  </div>
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-open:rotate-180"
                    style={{ border: '1px solid rgba(201,149,90,0.25)', background: 'rgba(201,149,90,0.08)', color: '#C9955A' }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                      <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-[15px] leading-[1.8]" style={{ color: 'rgba(220,210,195,0.78)' }}>
                  {it.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

