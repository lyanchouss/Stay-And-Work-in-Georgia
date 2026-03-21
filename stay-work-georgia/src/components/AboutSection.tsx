import { delayStyle } from '../types'

const HIGHLIGHTS = [
  { key: 'languages',     title: 'English · Georgian', sub: 'Languages' },
  { key: 'confidential',  title: 'Full confidentiality', sub: 'Data & privacy' },
  { key: 'process',       title: 'Step-by-step support', sub: 'Our process' },
  { key: 'who',           title: 'Employees, founders, freelancers', sub: 'Who we help' },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-[100px] px-8 pb-12 pt-[40px] sm:px-14 lg:px-20"
      aria-label="About Us"
      style={{ background: '#04081a' }}
    >
      <div className="mx-auto max-w-6xl">

        {/* Label above columns */}
        <div className="reveal mb-8" data-reveal style={delayStyle(0)}>
          <span style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9955A' }}>
            About Us
          </span>
        </div>

        {/* Top: two columns */}
        <div className="reveal grid gap-10 md:grid-cols-2" data-reveal style={{ ...delayStyle(0), alignItems: 'flex-start' }}>

          {/* Left — heading */}
          <div style={{ paddingTop: 0 }}>
            <h2
              className="font-['Playfair_Display'] font-semibold leading-[1.1]"
              style={{ fontSize: 'clamp(36px, 4.5vw, 58px)', color: '#ffffff', margin: 0 }}
            >
              We help people<br />find their place<br />
              <em className="not-italic" style={{ color: '#C9A96E', fontStyle: 'italic' }}>in Georgia</em>
            </h2>
          </div>

          {/* Right — body text */}
          <div style={{ paddingTop: 0 }}>
            <div className="space-y-6 text-[17px] leading-[1.75]" style={{ color: 'rgba(210,200,188,0.80)' }}>
              <p style={{ margin: 0 }}>
                Stay &amp; Work Georgia is a professional consultancy for foreign nationals
                navigating Georgian law — work permits, residence, business registration.
              </p>
              <p style={{ margin: 0 }}>
                We work with employees, freelancers, entrepreneurs and companies. Every case
                is handled personally, without unnecessary complexity.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="reveal mt-6 h-px w-full" data-reveal style={{ ...delayStyle(150), background: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom: four columns */}
        <div className="reveal mt-0 grid grid-cols-2 md:grid-cols-4" data-reveal style={delayStyle(200)}>
          {HIGHLIGHTS.map((h, i) => (
            <div
              key={h.key}
              className="px-0 py-5 md:px-6"
              style={{
                borderRight: i < HIGHLIGHTS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                paddingLeft: i === 0 ? 0 : undefined,
              }}
            >
              <div
                className="text-[17px] font-semibold leading-snug"
                style={{ color: '#EADFD0' }}
              >
                {h.title}
              </div>
              <div
                className="mt-1.5 text-[13px]"
                style={{ color: 'rgba(180,168,155,0.65)' }}
              >
                {h.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
