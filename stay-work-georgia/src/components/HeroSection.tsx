import { useTranslation } from 'react-i18next'
import heroImage from '../assets/hero-bg.jpg'
import workPermitSupportIcon from '../assets/Work_Permit_Support_removebg.png'
import residencePermitSupportIcon from '../assets/Residence_Permit_Support_removebg.png'
import ieRegistrationSupportIcon from '../assets/icon 3.png'
import businessSetupSupportIcon from '../assets/Business_Setup_Support_removebg.png'
import employerSupportIcon from '../assets/Employer_Support_removebg.png'
import documentsRenewalsSupportIcon from '../assets/Documents_Renewals_Support_removebg.png'
import type { Service } from '../types'
import { delayStyle } from '../types'
import { ArrowRight } from '../icons'
import { HoverBorderGradient } from './ui/HoverBorderGradient'
import { useCardStyle } from '../hooks/useCardStyle'

function vc(hue: number, sat: number, opacity: number) {
  return `hsla(${hue}, ${sat}%, 6%, ${(opacity / 100).toFixed(2)})`
}

const SERVICE_ICONS: Record<string, string> = {
  'work-permit': workPermitSupportIcon,
  'residence-permit': residencePermitSupportIcon,
  'ie-registration': ieRegistrationSupportIcon,
  'business-setup': businessSetupSupportIcon,
  'employer-support': employerSupportIcon,
  'documents-renewals': documentsRenewalsSupportIcon,
}

type HeroSectionProps = {
  services: Service[]
  scrollToId: (id: string) => void
}

export default function HeroSection({ services, scrollToId }: HeroSectionProps) {
  const { t } = useTranslation()
  const { style: cs } = useCardStyle()

  const edgeShadow = [
    `inset 0 0 ${cs.edgeSpread}px ${Math.round(cs.edgeSpread * 0.44)}px ${vc(cs.hue, cs.saturation, cs.edgeOpacity)}`,
    'inset 0 0 0 0.5px rgba(200,160,80,0.20)',
  ].join(', ')

  const vignetteBg = `radial-gradient(ellipse 90% 85% at 50% 50%, transparent 30%, ${vc(cs.hue, cs.saturation, cs.bottomOpacity * 0.6)} 72%, ${vc(cs.hue, cs.saturation, cs.bottomOpacity)} 100%)`

  const bottomFadeGradient = `linear-gradient(
    to bottom,
    rgba(4, 8, 26, 0)    0%,
    rgba(4, 8, 26, 0.15) 20%,
    rgba(4, 8, 26, 0.38) 38%,
    rgba(4, 8, 26, 0.62) 56%,
    rgba(4, 8, 26, 0.82) 74%,
    rgba(4, 8, 26, 0.95) 88%,
    rgba(4, 8, 26, 1)    100%
  )`

  const renderMobileCard = (s: Service) => {
    const iconSrc = SERVICE_ICONS[s.key]
    return (
      <HoverBorderGradient
        key={s.key}
        as="button"
        containerClassName="w-full rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.32)] transition duration-200 active:scale-[0.98] text-left"
        className="overflow-hidden px-4 py-3"
        style={{ background: `rgba(10, 8, 16, ${(cs.bgOpacity / 100).toFixed(2)})` }}
        edgeShadow={edgeShadow}
        onClick={() => scrollToId(s.detailedId)}
      >
        <div className="relative z-[1] flex items-center gap-4">
          {iconSrc && (
            <div style={{ width: '56px', height: '56px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={iconSrc}
                alt=""
                draggable={false}
                style={{
                  objectFit: 'contain',
                  width: s.key === 'ie-registration' ? '28px' : '56px',
                  height: s.key === 'ie-registration' ? '28px' : '56px',
                  filter: 'brightness(0) saturate(100%) invert(72%) sepia(38%) saturate(520%) hue-rotate(345deg) brightness(0.93)',
                }}
              />
            </div>
          )}
          <div className="min-w-0 flex-1">
            <div className="text-[15px] font-bold leading-tight" style={{ color: 'rgba(255,255,255,0.97)' }}>
              {s.title}
              {s.key === 'employer-support' && (
                <span className="ml-1 align-[0.04em] text-[12px] font-semibold tracking-[0.08em]" style={{ color: 'rgba(255,255,255,0.97)' }}>
                  (B2B)
                </span>
              )}
            </div>
            <div className="mt-0.5 line-clamp-2 text-[12px] leading-[1.5]" style={{ color: 'rgba(235,230,222,0.65)' }}>
              {t(`services.${s.key}.heroShort`, { defaultValue: s.short })}
            </div>
          </div>
          <span className="shrink-0 text-[#C9955A]"><ArrowRight className="h-4 w-4" /></span>
        </div>
      </HoverBorderGradient>
    )
  }

  const renderServiceCard = (s: Service) => {
    const iconSrc = SERVICE_ICONS[s.key]
    return (
      <HoverBorderGradient
        key={s.key}
        as="article"
        containerClassName="rounded-[18px] shadow-[0_10px_28px_rgba(0,0,0,0.38)] transition duration-300 hover:-translate-y-0.5 group"
        className="overflow-hidden p-3"
        style={{ background: `rgba(10, 8, 16, ${(cs.bgOpacity / 100).toFixed(2)})` }}
        edgeShadow={edgeShadow}
      >
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 rounded-[inherit]" style={{ background: vignetteBg }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-10 z-0" style={{ background: `linear-gradient(to bottom, rgba(255,255,255,${(cs.topOpacity / 100).toFixed(3)}), transparent)` }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-0 rounded-b-[inherit]" style={{ height: '55%', background: `linear-gradient(to top, ${vc(cs.hue, cs.saturation, cs.bottomEdge)}, transparent)` }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0 rounded-t-[inherit]" style={{ height: '55%', background: `linear-gradient(to bottom, ${vc(cs.hue, cs.saturation, cs.topEdge)}, transparent)` }} />

        <div className="relative z-[1] flex h-full flex-col items-center text-center">
          {iconSrc && (
            <img
              src={iconSrc}
              alt=""
              draggable={false}
              className="mx-auto w-auto max-w-[95%]"
              style={{
                height: '152px',
                filter: 'brightness(0) saturate(100%) invert(72%) sepia(38%) saturate(520%) hue-rotate(345deg) brightness(0.93)',
              }}
            />
          )}
          <h3
            className="mt-4 relative -top-0.5 text-[21px] font-extrabold leading-tight lg:text-[22px]"
            style={{ color: 'rgba(255, 255, 255, 0.97)' }}
          >
            {s.title}
            {s.key === 'employer-support' && (
              <span className="ml-1 align-[0.08em] text-[14px] font-semibold tracking-[0.08em]" style={{ color: 'rgba(255, 255, 255, 0.97)' }}>
                (B2B)
              </span>
            )}
          </h3>
          <p
            className="mt-2 line-clamp-2 px-1 text-[14.5px] font-medium leading-[1.65] tracking-[0.01em] lg:text-[15.5px]"
            style={{ color: 'rgba(235, 230, 222, 0.92)', height: '48px' }}
          >
            {t(`services.${s.key}.heroShort`, { defaultValue: s.short })}
          </p>
          <button
            type="button"
            onClick={() => scrollToId(s.detailedId)}
            className="mt-auto inline-flex w-auto min-w-fit items-center justify-center gap-1.5 rounded-md text-[14px] font-medium text-[#d4b88a] transition-all duration-200 hover:text-[#f5dfa8] hover:bg-[rgba(201,149,90,0.18)] hover:border-[rgba(201,149,90,0.90)] hover:shadow-[0_0_12px_rgba(201,149,90,0.30)] hover:-translate-y-px active:translate-y-0 active:shadow-none"
            style={{ padding: '10px 22px', height: '44px', border: '1.5px solid rgba(201,149,90,0.65)', background: 'rgba(201,149,90,0.10)' }}
          >
            {t('hero.learnMore')}
            <ArrowRight className="h-3 w-3 shrink-0" />
          </button>
        </div>
      </HoverBorderGradient>
    )
  }

  const ctaContent = (
    <>
      <h3 className="text-center font-['Montserrat'] text-[37px] font-medium tracking-tight text-[#EADFD0] sm:text-[46px]" style={{ lineHeight: '1.35' }}>
        {t('hero.cta.title')}
      </h3>
      <div className="mt-5 flex items-center justify-center gap-3">
        <div className="h-px w-10 rounded-full" style={{ background: 'linear-gradient(to right, transparent, rgba(201,149,90,0.25))' }} />
        <div className="h-px w-16 rounded-full" style={{ background: 'linear-gradient(to right, rgba(201,149,90,0.25), rgba(201,149,90,0.70), rgba(201,149,90,0.25))' }} />
        <div className="h-1.5 w-1.5 rotate-45 rounded-[2px]" style={{ background: 'rgba(201,149,90,0.75)' }} />
        <div className="h-px w-16 rounded-full" style={{ background: 'linear-gradient(to right, rgba(201,149,90,0.25), rgba(201,149,90,0.70), rgba(201,149,90,0.25))' }} />
        <div className="h-px w-10 rounded-full" style={{ background: 'linear-gradient(to left, transparent, rgba(201,149,90,0.25))' }} />
      </div>
      <div className="mt-6 flex items-center justify-center">
        <div
          className="inline-flex items-center rounded-xl border px-6 py-4 text-[20px] font-medium"
          style={{ borderColor: 'rgba(201, 149, 90, 0.22)', background: 'rgba(15, 25, 35, 0.45)', color: '#EADFD0' }}
        >
          <a href="tel:+995555001017" className="transition hover:text-white" aria-label="Call">
            {t('hero.cta.call')}
          </a>
          <span className="mx-4 text-white/40" aria-hidden="true">|</span>
          <a href="https://wa.me/995555001017" target="_blank" rel="noreferrer" className="transition hover:text-white" aria-label="WhatsApp">
            {t('hero.cta.whatsapp')}
          </a>
          <span className="mx-4 text-white/40" aria-hidden="true">|</span>
          <a href="mailto:info@stayandwork.ge" className="transition hover:text-white" aria-label="Email">
            {t('hero.cta.email')}
          </a>
        </div>
      </div>
    </>
  )

  return (
    <section className="relative overflow-hidden bg-[#04081a]" aria-label="Hero">

      {/* ═══════════════════════════════════════════════
          MOBILE LAYOUT  (visible below md breakpoint)
          ─ photo zone: title + subtitle only
          ─ dark zone: cards 1-column
          ─ dark zone: CTA buttons
          ═══════════════════════════════════════════════ */}
      <div className="md:hidden">

        {/* Photo zone */}
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-[length:100%_auto] bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-[#0a1628]/40" />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0"
            style={{ height: '65%', background: bottomFadeGradient }}
          />
          <div className="relative px-6 pb-[17.02px] pt-[120px] text-center">
            <span className="relative -top-4 inline-block font-['Inter'] text-[13px] font-medium uppercase tracking-[3px] text-[#C9955A]">
              {t('hero.eyebrow')}
            </span>
            <h1
              className="mx-auto -mt-6 text-center font-['Playfair_Display'] font-semibold leading-[1.15] text-[#EADFD0]"
              style={{ fontSize: 'clamp(34px, 9vw, 48px)' }}
            >
              <span className="text-[#EADFD0]">{t('hero.titleLine1')}</span>
              <br />
              <em className="not-italic font-bold text-[#D4A76B]">{t('hero.titleLine2')}</em>
            </h1>
          </div>
        </div>

        {/* Dark cards zone — 1 column */}
        <div
          id="services"
          className="scroll-mt-[100px] px-5 pb-6 pt-[20.52px] md:pt-8"
        >
          <div className="grid grid-cols-1 gap-3">
            {services.filter((_, i) => [0, 1, 4].includes(i)).map(renderMobileCard)}
          </div>
        </div>

        {/* CTA zone */}
        <div className="px-5 pb-14 pt-10">
          {ctaContent}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════
          DESKTOP LAYOUT  (visible from md breakpoint)
          ─ full-section photo background
          ─ all content on top of photo (zoom 0.77)
          ═══════════════════════════════════════════════ */}
      <div className="hidden md:block">
        <div
          className="absolute inset-0 bg-[length:100%_auto] bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[#0a1628]/40" />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0"
          style={{ height: '65%', background: bottomFadeGradient }}
        />

        <div
          className="relative mx-auto max-w-6xl px-6 pb-[52px] pt-[120px] sm:px-10 sm:pt-[130px] lg:px-14 lg:pb-[52px]"
          style={{ zoom: 0.77 }}
        >
          <div className="text-center">
            <div className="reveal" data-reveal style={delayStyle(0)}>
              <span className="relative -top-4 inline-block font-['Inter'] text-[13px] font-medium uppercase tracking-[3px] text-[#C9955A]">
                {t('hero.eyebrow')}
              </span>
            </div>

            <h1
              className="reveal mx-auto -mt-10 text-center font-['Playfair_Display'] font-semibold leading-[1.15] text-[#EADFD0] [font-size:clamp(36px,5vw,52px)]"
              data-reveal
              style={delayStyle(80)}
            >
              <span className="text-[#EADFD0]">{t('hero.titleLine1')}</span>
              <br />
              <em className="not-italic font-bold text-[#D4A76B]">{t('hero.titleLine2')}</em>
            </h1>

            <p
              className="reveal mx-auto mt-[2px] whitespace-nowrap text-center font-['Montserrat'] text-[20px] font-light leading-[1.55] tracking-[0.18em] uppercase"
              data-reveal
              style={{ color: 'rgba(212, 195, 165, 0.82)', ...delayStyle(100) }}
            >
              {t('hero.slogan')}
            </p>

            <div
              id="services"
              className="reveal mx-auto mt-[22px] max-w-[1040px] scroll-mt-[100px]"
              data-reveal
              style={delayStyle(120)}
            >
              <div className="grid gap-5 md:grid-cols-3">
                {services.filter((_, i) => [0, 1, 4].includes(i)).map(renderServiceCard)}
              </div>
            </div>

            <div className="reveal mx-auto mt-16 max-w-3xl" data-reveal style={delayStyle(200)}>
              {ctaContent}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
