import { useTranslation } from 'react-i18next'
import { delayStyle } from '../types'

const HIGHLIGHT_KEYS = ['languages', 'confidential', 'process', 'who'] as const

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="scroll-mt-[100px] px-6 pb-12 pt-[40px] sm:px-10 lg:px-14"
      aria-label="About Us"
      style={{ background: '#04081a' }}
    >
      <div className="mx-auto max-w-6xl">

        <div className="reveal mb-8" data-reveal style={delayStyle(0)}>
          <span style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9955A' }}>
            {t('about.label')}
          </span>
        </div>

        <div className="reveal grid gap-10 md:grid-cols-2" data-reveal style={{ ...delayStyle(0), alignItems: 'flex-start' }}>

          <div style={{ paddingTop: 0 }}>
            <h2
              className="font-['Playfair_Display'] font-semibold leading-[1.1]"
              style={{ fontSize: 'clamp(36px, 4.5vw, 58px)', color: '#ffffff', margin: 0 }}
            >
              {t('about.heading1')}<br />{t('about.heading2')}<br />
              <em className="not-italic" style={{ color: '#C9A96E', fontStyle: 'italic' }}>{t('about.heading3')}</em>
            </h2>
          </div>

          <div style={{ paddingTop: 0 }}>
            <div className="space-y-6 text-[17px] leading-[1.75]" style={{ color: 'rgba(210,200,188,0.80)' }}>
              <p style={{ margin: 0 }}>
                {t('about.body1').split('Stay & Work Georgia').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <strong style={{ color: '#EADFD0', fontWeight: 600 }}>Stay &amp; Work Georgia</strong>}
                  </span>
                ))}
              </p>
              <p style={{ margin: 0 }}>{t('about.body2')}</p>
              {t('about.body3', { defaultValue: '' }) && (
                <p style={{ margin: 0 }}>{t('about.body3')}</p>
              )}
            </div>
          </div>
        </div>

        <div className="reveal mt-6 h-px w-full" data-reveal style={{ ...delayStyle(150), background: 'rgba(255,255,255,0.08)' }} />

        <div className="reveal mt-0 grid grid-cols-1 md:grid-cols-4" data-reveal style={delayStyle(200)}>
          {HIGHLIGHT_KEYS.map((key, i) => (
            <div
              key={key}
              className={[
                'px-0 py-4 md:py-5 md:px-6 border-white/[0.08]',
                i < HIGHLIGHT_KEYS.length - 1 ? 'border-b md:border-b-0 md:border-r' : '',
              ].join(' ')}
              style={{ paddingLeft: i === 0 ? 0 : undefined }}
            >
              <div className="text-[17px] font-semibold leading-snug" style={{ color: '#EADFD0' }}>
                {t(`about.highlights.${key}.title`)}
              </div>
              <div className="mt-1.5 text-[13px]" style={{ color: 'rgba(180,168,155,0.65)' }}>
                {t(`about.highlights.${key}.sub`)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
