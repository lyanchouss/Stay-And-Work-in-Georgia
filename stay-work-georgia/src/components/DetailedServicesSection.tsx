import type { Service } from '../types'
import { delayStyle } from '../types'
import { ArrowRight } from '../icons'

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
  return (
    <section
      id="detailed-services"
      className="scroll-mt-[100px] px-4 pb-20 pt-[48px] sm:px-6 lg:px-8"
      aria-label="Detailed Services"
      style={{ background: '#04081a' }}
    >
      <div className="mx-auto max-w-6xl" style={{ zoom: 0.864, transform: 'translateX(-5%)', transformOrigin: 'left center' }}>

        {/* Section header */}
        <div className="reveal mb-10" data-reveal style={delayStyle(0)}>
          <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9955A' }}>
            Our Services
          </span>
          <h2
            className="mt-3 font-['Playfair_Display'] font-semibold leading-tight"
            style={{ fontSize: 'clamp(28px, 3.5vw, 46px)', color: '#ffffff' }}
          >
            In Detail
          </h2>
          <div className="mt-4 h-px w-14 rounded-full" style={{ background: 'linear-gradient(to right, #C9955A, rgba(201,149,90,0.15))' }} />
        </div>

        {/* Service blocks */}
        <div className="space-y-20">
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
                <div className="grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16 xl:grid-cols-[360px_1fr]">

                  {/* ── Left panel ── */}
                  <div className="flex flex-col gap-6">

                    {/* Icon + Category + Title — единый блок */}
                    <div>
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-xl"
                        style={{
                          background: 'rgba(201,149,90,0.12)',
                          border: '1px solid rgba(201,149,90,0.28)',
                          color: '#C9955A',
                          marginBottom: '14px',
                        }}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <div
                        style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '8px' }}
                      >
                        {category}
                      </div>
                      <h3
                        className="font-['Playfair_Display'] font-bold leading-tight"
                        style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: '#ffffff' }}
                      >
                        {s.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      style={{ fontSize: '15px', lineHeight: '1.65', color: 'rgba(255,255,255,0.60)' }}
                    >
                      {s.description}
                    </p>

                    {/* CTA */}
                    <button
                      type="button"
                      onClick={() => scrollToId('top')}
                      className="mt-auto inline-flex w-auto min-w-fit items-center justify-center gap-1.5 rounded-md text-[14px] font-medium text-[#d4b88a] transition-all duration-200 hover:text-[#f5dfa8] hover:bg-[rgba(201,149,90,0.18)] hover:border-[rgba(201,149,90,0.90)] hover:shadow-[0_0_12px_rgba(201,149,90,0.30)] hover:-translate-y-px active:translate-y-0 active:shadow-none"
                      style={{ padding: '10px 22px', height: '44px', border: '1.5px solid rgba(201,149,90,0.65)', background: 'rgba(201,149,90,0.10)' }}
                    >
                      Get Started
                      <ArrowRight className="h-3 w-3 shrink-0" />
                    </button>
                  </div>

                  {/* ── Right panel: includes ── */}
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {s.whatsIncluded.map((item) => (
                      <div
                        key={item.title}
                        className="group flex flex-col gap-2 rounded-xl p-4 transition-all duration-200"
                        style={{
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.07)',
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,149,90,0.28)' }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)' }}
                      >
                        {/* Checkmark + Title */}
                        <div className="flex items-center gap-2">
                          <svg viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true" style={{ color: '#C9955A' }}>
                            <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <div
                            style={{ fontSize: '15px', fontWeight: 500, lineHeight: '1.4', color: '#ffffff' }}
                          >
                            {item.title}
                          </div>
                        </div>
                        {/* Description */}
                        <div
                          style={{ fontSize: '13px', lineHeight: '1.6', color: 'rgba(255,255,255,0.50)' }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Divider between services */}
                {idx < services.length - 1 && (
                  <div
                    className="mt-20 h-px w-full"
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
