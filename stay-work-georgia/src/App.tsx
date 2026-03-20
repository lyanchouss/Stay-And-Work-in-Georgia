import { useEffect, useState } from 'react'
import type { NavKey } from './types'
import { SERVICES } from './data/services'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import DetailedServicesSection from './components/DetailedServicesSection'
import Footer from './components/Footer'

export default function App() {
  useRevealOnScroll()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeNav, setActiveNav] = useState<NavKey>('services')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = ['services', 'contact']
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (!visible) return
        const id = (visible.target as HTMLElement).id as NavKey
        if (id === 'services' || id === 'contact') setActiveNav(id)
      },
      { threshold: [0.15, 0.3, 0.5], rootMargin: '-20% 0px -70% 0px' }
    )

    elements.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMobileOpen(false)
  }

  return (
    <div className="min-h-dvh">
      <Header
        isScrolled={isScrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        activeNav={activeNav}
        scrollToId={scrollToId}
      />
      <main id="top">
        <HeroSection services={SERVICES} scrollToId={scrollToId} />
        <AboutSection />
        <DetailedServicesSection services={SERVICES} scrollToId={scrollToId} />
        <Footer services={SERVICES} scrollToId={scrollToId} />
      </main>
    </div>
  )
}
