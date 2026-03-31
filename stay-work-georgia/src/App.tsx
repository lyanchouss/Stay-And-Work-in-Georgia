import { useEffect, useState } from 'react'
import type { NavKey } from './types'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import { useTranslatedServices } from './hooks/useTranslatedServices'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FaqSection from './components/FaqSection'
import DetailedServicesSection from './components/DetailedServicesSection'
import Footer from './components/Footer'
import FloatingContacts from './components/FloatingContacts'

export default function App() {
  useRevealOnScroll()
  const services = useTranslatedServices()

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
    const NAV_IDS: NavKey[] = ['services', 'about', 'faq', 'contact']
    const OFFSET = 120 // pixels from top to consider a section "active"

    const onScroll = () => {
      let current: NavKey = NAV_IDS[0]
      for (const id of NAV_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= OFFSET) {
          current = id
        }
      }
      setActiveNav(current)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    if (id === 'services' || id === 'about' || id === 'faq' || id === 'contact') {
      setActiveNav(id as NavKey)
    }
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
        <HeroSection services={services} scrollToId={scrollToId} />
        <AboutSection />
        <DetailedServicesSection services={services} />
        <FaqSection />
        <Footer services={services} scrollToId={scrollToId} />
      </main>
      <FloatingContacts />
    </div>
  )
}
