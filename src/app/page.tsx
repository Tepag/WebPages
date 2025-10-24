'use client'

import { useEffect } from 'react'
import { gsap } from 'gsap'

export default function Home() {
  useEffect(() => {
    // GSAP animation for page load
    gsap.fromTo('.page-container', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    )
    
    gsap.fromTo('nav a', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
    )
  }, [])

  return (
    <main>
      <div className="page-container">
        <h1>Home</h1>
        <nav>
          <a href="/wechatgroups">WeChat Groups</a>
          <a href="/events">Events</a>
          <a href="/join-us">Join Us</a>
          <a href="/work">Work</a>
        </nav>
      </div>
    </main>
  )
}
