import { useState } from 'react'
import type { Service } from '../types'
import { delayStyle } from '../types'
import { ArrowRight } from '../icons'
import { useServiceCardStyle } from '../hooks/useServiceCardStyle'
import ServiceCardControls from './ServiceCardControls'

type DetailedServicesSectionProps = {
  services: Service[]
  scrollToId: (id: string) => void
}

const CATEGORY_LABELS: Record<string, string> = {
  'work-permit': 'Employment',
  'residence-permit': 'Immigration',
  'ie-registration': 'Business',
  'business-setup': 'Business',
  'employer-support': 'Hiring',
  'documents-renewals': 'Documents',
}

export default function DetailedServicesSection({ services, scrollToId }: DetailedServicesSectionProps) {
  const { style: cs, setStyle: setCs } = useServiceCardStyle()
  const [showControls, setShowControls] = useState(false)

  return (
    <section
      id="detailed-services"
      className="scroll-mt-[100px] px-8 pb-20 pt-[36px] sm:px-14 lg:px-20"
      aria-label="Detailed Services"
      style={{ background: '#04081a' }}
    >
      <div className="mx-auto max-w-6xl">

        {/* Section header */}
        <div className="reveal mb-10" data-reveal style={delayStyle(0)}>
          <span style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9955A' }}>
            Our Services
          </span>
          <h2
            className="mt-16 font-['Playfair_Display'] font-semibold leading-tight"
            style={{ fontSize: 'clamp(21px, 2.5vw, 34px)', color: '#ffffff' }}
          >
            In Detail
          </h2>
          <div className="mt-4 h-px w-14 rounded-full" style={{ background: 'linear-gradient(to right, #C9955A, rgba(201,149,90,0.15))' }} />
        </div>

        {/* Service blocks */}
        <div className="space-y-12">
          {services.map((s, idx) => {
            const Icon = s.icon
            const category = CATEGORY_LABELS[s.key] ?? 'Services'
            return (
              <div
                key={s.key}
                id={s.detailedId}
                className="reveal scroll-mt-[100px]"
                data-reveal
                style={delayStyle(60 + idx * 60)}
              >
                <div className="grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-16 xl:grid-cols-[260px_1fr]">

                  {/* ── Left panel ── */}
                  <div className="flex flex-col gap-4">

                    {/* Category + Icon + Title */}
                    <div>
                      <div
                        style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '10px' }}
                      >
                        {category}
                      </div>
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-lg"
                          style={{
                            background: 'rgba(201,149,90,0.10)',
                            border: '1.5px solid rgba(201,149,90,0.35)',
                            color: '#C9955A',
                          }}
                        >
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3
                          className="font-['Playfair_Display'] font-bold leading-tight"
                          style={{ fontSize: 'clamp(19px, 2.2vw, 26px)', color: '#ffffff' }}
                        >
                          {s.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p style={{ fontSize: '13px', lineHeight: '1.65', color: 'rgba(255,255,255,0.60)' }}>
                      {s.description}
                    </p>

                    {/* CTA */}
                    <button
                      type="button"
                      onClick={() => scrollToId('top')}
                      className="mt-auto inline-flex w-auto min-w-fit items-center justify-center gap-1.5 rounded-md text-[13px] font-medium text-[#d4b88a] transition-all duration-200 hover:text-[#f5dfa8] hover:bg-[rgba(201,149,90,0.18)] hover:border-[rgba(201,149,90,0.90)] hover:shadow-[0_0_12px_rgba(201,149,90,0.30)] hover:-translate-y-px active:translate-y-0 active:shadow-none"
                      style={{ padding: '8px 18px', height: '38px', border: '1.5px solid rgba(201,149,90,0.65)', background: 'rgba(201,149,90,0.10)' }}
                    >
                      Get Started
                      <ArrowRight className="h-3 w-3 shrink-0" />
                    </button>
                  </div>

                  {/* ── Right panel: includes ── */}
                  <div
                    className="grid"
                    style={{
                      gridTemplateColumns: '1fr 1fr',
                      columnGap: '2px',
                      rowGap: '10px',
                      alignItems: 'stretch',
                    }}
                  >
                    {s.whatsIncluded.map((item) => (
                      <div
                        key={item.title}
                        className="group flex flex-col gap-1 transition-all duration-200"
                        style={{
                          padding: `${cs.paddingY}px ${cs.paddingX}px`,
                          borderRadius: `${cs.radius}px`,
                          width: `${cs.cardWidth}%`,
                          minHeight: cs.cardHeight > 0 ? `${cs.cardHeight}px` : undefined,
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.07)',
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,149,90,0.28)' }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)' }}
                      >
                        {/* Checkmark + Title */}
                        <div className="flex items-center gap-2">
                          <svg viewBox="0 0 14 14" fill="none" className="h-3 w-3 shrink-0" aria-hidden="true" style={{ color: '#C9955A' }}>
                            <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div style={{ fontSize: `${cs.titleSize}px`, fontWeight: 500, lineHeight: '1.4', color: '#ffffff' }}>
                            {item.title}
                          </div>
                        </div>
                        {/* Description */}
                        <div style={{ fontSize: `${cs.descSize}px`, lineHeight: '1.55', color: 'rgba(255,255,255,0.50)' }}>
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Divider between services */}
                {idx < services.length - 1 && (
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

      {/* Floating controls */}
      <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-2">
        {showControls && (
          <ServiceCardControls style={cs} onChange={setCs} />
        )}
        <button
          type="button"
          onClick={() => setShowControls((v) => !v)}
          title="Настройки карточек услуг"
          className="flex h-9 w-9 items-center justify-center rounded-full transition hover:brightness-110"
          style={{
            background: showControls ? 'rgba(201,149,90,0.18)' : 'rgba(5, 4, 12, 0.92)',
            border: '1px solid rgba(200,160,80,0.28)',
            backdropFilter: 'blur(10px)',
            color: '#C9955A',
          }}
        >
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
            <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
            <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
