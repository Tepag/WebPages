import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Passion Lab Polimi',
  description: 'A React-based website for Passion Lab Polimi with GitHub Pages deployment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
