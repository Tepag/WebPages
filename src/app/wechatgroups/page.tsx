'use client'

import { usePathname } from 'next/navigation'
import PillNav from '../../components/PillNav'
import { logo } from '../../assets'

export default function WeChatGroups() {
  const pathname = usePathname();

  return (
    <main>
      <PillNav
        logo={logo}
        logoAlt="Passion Lab Polimi Logo"
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
      <div className="page-container">
        <h1>WeChat Groups</h1>
      </div>
    </main>
  )
}
