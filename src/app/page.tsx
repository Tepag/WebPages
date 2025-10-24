'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'
import { usePathname } from 'next/navigation'

import PillNav from '../components/PillNav'
import logo from '../assets/icons/social/telegram.svg'
import SplitText from "../components/SplitText";




export default function Home() {
  const pathname = usePathname();
  
  useEffect(() => {
    // GSAP animation for page load
    gsap.fromTo('.page-container', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
  }, [])

  return (
    <main>
      <SplitText
        text="Hello, GSAP!"
        className="text-2xl font-semibold text-center"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={() => {}}
      />
      <PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Services', href: '/services' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeHref={pathname}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#000000"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        onMobileMenuClick={() => {}}
      />
    </main>
  )
}
