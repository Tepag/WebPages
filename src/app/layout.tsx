import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PLP | Home",
  description: "PLP - Professional Learning Platform",
  icons: {
    icon: "./assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+TC&display=swap" rel="stylesheet" />
        <link rel="icon" href="./assets/images/logo.png" />
        <link rel="stylesheet" href="./css/main-local.css" id="main-css" />
        <link rel="stylesheet" href="./css/vendor/introgridsection.css" />
        <link rel="stylesheet" href="./css/vendor/joinUs.css" />
        <link rel="stylesheet" href="./css/vendor/purecssflipcard.css" />
        <link rel="stylesheet" href="./css/vendor/event.css" />
      </head>
      <body className="lxgw-wenkai-tc-regular" style={{ backgroundColor: 'black' }}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Flip.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js" strategy="beforeInteractive" />
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" strategy="afterInteractive" />
        <Script id="css-switcher" strategy="beforeInteractive">
          {`
            (function() {
              const isGitHubPages = window.location.hostname.includes('github.io');
              const cssLink = document.getElementById('main-css');
              if (isGitHubPages && cssLink) {
                cssLink.href = './css/main-github.css';
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
