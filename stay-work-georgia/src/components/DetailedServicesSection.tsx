import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { Service } from '../types'
import { delayStyle } from '../types'
import { ArrowRight } from '../icons'

type DetailedServicesSectionProps = {
  services: Service[]
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span
            className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ background: 'rgba(201,149,90,0.80)' }}
            aria-hidden="true"
          />
          <span style={{ fontSize: '14px', lineHeight: '1.65', color: 'rgba(220,210,195,0.82)' }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

const VISIBLE_KEYS = ['employer-support', 'work-permit', 'residence-permit']

export default function DetailedServicesSection({ services }: DetailedServicesSectionProps) {
  const { t, i18n } = useTranslation()
  const [expandedKey, setExpandedKey] = useState<string | null>(null)
  const filtered = services.filter((s) => VISIBLE_KEYS.includes(s.key))

  return (
    <section
      id="detailed-services"
      className="scroll-mt-[100px] px-6 pb-20 pt-[36px] sm:px-10 lg:px-14"
      aria-label="Detailed Services"
      style={{ background: '#04081a' }}
    >
      <div className="mx-auto max-w-6xl">

        {/* Section header */}
        <div className="reveal mb-10" data-reveal style={delayStyle(0)}>
          <span style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9955A' }}>
            {t('detailedServices.label')}
          </span>
          <h2
            className="mt-16 font-['Playfair_Display'] font-semibold leading-tight"
            style={{ fontSize: 'clamp(21px, 2.5vw, 34px)', color: '#ffffff' }}
          >
            {t('detailedServices.heading')}
          </h2>
          <div className="mt-4 h-px w-14 rounded-full" style={{ background: 'linear-gradient(to right, #C9955A, rgba(201,149,90,0.15))' }} />
        </div>

        {/* Service blocks */}
        <div className="space-y-12">
          {filtered.map((s, idx) => {
            const Icon = s.icon
            const category = t(`categories.${s.key}`, { defaultValue: 'Services' })
            const section1 = t(`services.${s.key}.section1`, { returnObjects: true, defaultValue: [] }) as string[]
            const section2 = t(`services.${s.key}.section2`, { returnObjects: true, defaultValue: [] }) as string[]

            return (
              <div
                key={s.key}
                id={s.detailedId}
                className="reveal scroll-mt-[100px]"
                data-reveal
                style={delayStyle(60 + idx * 60)}
              >
                <div>
                    {/* Card: category + icon + title + short + button */}
                    <div
                      className="rounded-xl p-6 sm:p-8"
                      style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
                        {/* Icon + title + description */}
                        <div className="flex flex-1 flex-col gap-4">
                          <div>
                            <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '10px' }}>
                              {category}
                            </div>
                            <div className="flex items-center gap-3">
                              <div
                                className="shrink-0 rounded-lg"
                                style={{ width: '54px', height: '54px', background: 'rgba(201,149,90,0.10)', border: '1.5px solid rgba(201,149,90,0.35)', color: '#C9955A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                              >
                                <Icon className="block h-[28px] w-[28px]" style={{ marginLeft: '3px', marginTop: '3px' }} />
                              </div>
                              <h3
                                className="font-['Playfair_Display'] font-bold leading-tight"
                                style={{ fontSize: 'clamp(19px, 2.2vw, 26px)', color: '#ffffff' }}
                              >
                                {t(`services.${s.key}.internalTitle`, { defaultValue: s.title })}
                              </h3>
                            </div>
                          </div>

                          <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'rgba(220,210,195,0.72)' }}>
                            {s.short}
                          </p>
                        </div>

                        {/* Button */}
                        <button
                          type="button"
                          onClick={() => {
                            const willOpen = expandedKey !== s.key
                            setExpandedKey(willOpen ? s.key : null)
                            if (willOpen) {
                              // Scroll to card top immediately, before animation pushes content down
                              requestAnimationFrame(() => {
                                const el = document.getElementById(s.detailedId)
                                if (el) {
                                  const top = el.getBoundingClientRect().top + window.scrollY - 100
                                  window.scrollTo({ top, behavior: 'instant' as ScrollBehavior })
                                }
                              })
                            }
                          }}
                          className={`inline-flex w-auto shrink-0 items-center justify-center gap-1.5 self-start rounded-md text-[13px] font-medium text-[#d4b88a] transition-all duration-200 hover:text-[#f5dfa8] hover:bg-[rgba(201,149,90,0.18)] hover:border-[rgba(201,149,90,0.90)] hover:shadow-[0_0_12px_rgba(201,149,90,0.30)] hover:-translate-y-px active:translate-y-0 active:shadow-none sm:mt-8${expandedKey === s.key ? '' : ' cta-pulse-btn'}`}
                          style={{ padding: '8px 18px', height: '38px', border: '1.5px solid rgba(201,149,90,0.65)', background: expandedKey === s.key ? 'rgba(201,149,90,0.22)' : 'rgba(201,149,90,0.10)' }}
                        >
                          {t(`services.${s.key}.buttonText`, { defaultValue: t('detailedServices.consultationButton') })}
                          <span
                            className="inline-flex transition-transform duration-300"
                            style={{ transform: expandedKey === s.key ? 'rotate(90deg)' : 'rotate(0deg)' }}
                          >
                            <ArrowRight className="h-3 w-3 shrink-0" />
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Expandable detailed content below */}
                    <div
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                      style={{
                        maxHeight: expandedKey === s.key ? '2000px' : '0px',
                        opacity: expandedKey === s.key ? 1 : 0,
                      }}
                    >
                      <div className="flex flex-col gap-6 pt-8">

                        {/* Description paragraphs */}
                        <div className="space-y-4">
                          <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'rgba(220,210,195,0.80)' }}>
                            {t(`services.${s.key}.description`)}
                          </p>
                        {i18n.exists(`services.${s.key}.description2`) && t(`services.${s.key}.description2`).trim() && (
                            <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'rgba(220,210,195,0.80)' }}>
                              {t(`services.${s.key}.description2`)}
                            </p>
                          )}
                          {i18n.exists(`services.${s.key}.description3`) && (
                            <p style={{ fontSize: '15px', lineHeight: '1.75', color: 'rgba(220,210,195,0.80)' }}>
                              {t(`services.${s.key}.description3`)}
                            </p>
                          )}
                        </div>

                        {/* Divider */}
                        <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.06)' }} />

                        {/* Two-column bullet sections */}
                        <div className="grid gap-6 sm:grid-cols-2">
                          {/* Section 1 */}
                          <div>
                            <div
                              className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em]"
                              style={{ color: '#C9A96E' }}
                            >
                              {t(`services.${s.key}.section1Title`)}
                            </div>
                            <BulletList items={section1} />
                          </div>

                          {/* Section 2 */}
                          <div>
                            <div
                              className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em]"
                              style={{ color: '#C9A96E' }}
                            >
                              {t(`services.${s.key}.section2Title`)}
                            </div>
                            <BulletList items={section2} />
                          </div>
                        </div>

                        {/* Section 3: what problem it solves */}
                        <div
                          className="rounded-xl p-5"
                          style={{ background: 'rgba(201,149,90,0.05)', border: '1px solid rgba(201,149,90,0.14)' }}
                        >
                          <div
                            className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em]"
                            style={{ color: '#C9A96E' }}
                          >
                            {t(`services.${s.key}.section3Title`)}
                          </div>
                          <p style={{ fontSize: '14px', lineHeight: '1.75', color: 'rgba(220,210,195,0.78)', margin: 0 }}>
                            {t(`services.${s.key}.section3`)}
                          </p>
                        </div>

                        {/* Section 4: fees/tariffs (optional) */}
                        {i18n.exists(`services.${s.key}.section4Title`) && (
                          <div
                            className="rounded-xl p-5"
                            style={{ background: 'rgba(201,149,90,0.05)', border: '1px solid rgba(201,149,90,0.14)' }}
                          >
                            <div
                              className="mb-2 text-[12px] font-semibold uppercase tracking-[0.12em]"
                              style={{ color: '#C9A96E' }}
                            >
                              {t(`services.${s.key}.section4Title`)}
                            </div>
                            <p style={{ fontSize: '14px', lineHeight: '1.75', color: 'rgba(220,210,195,0.78)', margin: 0 }}>
                              {t(`services.${s.key}.section4`)}
                            </p>
                            {i18n.exists(`services.${s.key}.section4Items`) && (
                              <ul className="mt-3 space-y-1.5">
                                {(t(`services.${s.key}.section4Items`, { returnObjects: true }) as string[]).map((item, j) => (
                                  <li key={j} className="flex items-start gap-2.5">
                                    <span
                                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                                      style={{ background: 'rgba(201,149,90,0.80)' }}
                                      aria-hidden="true"
                                    />
                                    <span style={{ fontSize: '14px', lineHeight: '1.65', color: 'rgba(220,210,195,0.82)' }}>
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}

                        {/* CTA */}
                        <div
                          className="rounded-xl p-5 text-center"
                          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.07)' }}
                        >
                          <p style={{ fontSize: '14.5px', lineHeight: '1.65', fontWeight: 500, color: 'rgba(220,210,195,0.78)', margin: 0 }}>
                            {t(`services.${s.key}.ctaText`)}
                          </p>
                          <div className="mt-4 flex items-center justify-center">
                            <div
                              className="inline-flex items-center rounded-lg border px-4 py-2 text-[12.67px] font-medium leading-none"
                              style={{ background: 'rgba(4,8,26,0.40)', borderColor: 'rgba(201,149,90,0.18)', color: 'rgba(234,223,208,0.92)' }}
                            >
                              <a href="tel:+995555001017" className="transition hover:text-white" aria-label="Call">
                                {t('hero.cta.call')}
                              </a>
                              <span className="mx-3 text-white/35" aria-hidden="true">|</span>
                              <a href="https://wa.me/995555001017" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="WhatsApp">
                                {t('detailedServices.whatsapp')}
                              </a>
                              <span className="mx-3 text-white/35" aria-hidden="true">|</span>
                              <a href="mailto:info@stayandwork.ge" className="transition hover:text-white" aria-label="Email">
                                {t('detailedServices.email')}
                              </a>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                {/* Divider between services */}
                {idx < filtered.length - 1 && (
                  <div
                    className="mt-12 h-px w-full"
                    style={{ background: 'linear-gradient(to right, transparent, rgba(201,149,90,0.18), transparent)' }}
                  />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
