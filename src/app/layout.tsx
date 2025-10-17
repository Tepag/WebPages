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
    icon: "/assets/images/logo.png",
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
        <link rel="icon" href="/assets/images/logo.png" />
        <link rel="stylesheet" href="/css/main-local.css" id="main-css" />
        <link rel="stylesheet" href="/css/vendor/introgridsection.css" />
        <link rel="stylesheet" href="/css/vendor/joinUs.css" />
        <link rel="stylesheet" href="/css/vendor/purecssflipcard.css" />
        <link rel="stylesheet" href="/css/vendor/event.css" />
      </head>
      <body className="lxgw-wenkai-tc-regular" style={{ backgroundColor: 'black' }}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Flip.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js" strategy="beforeInteractive" />
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" strategy="afterInteractive" />
        <Script id="path-fixer" strategy="beforeInteractive">
          {`
            (function() {
              const isGitHubPages = window.location.hostname.includes('github.io');
              if (isGitHubPages) {
                // Fix CSS paths
                const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
                cssLinks.forEach(link => {
                  if (link.href && link.href.startsWith(window.location.origin + '/css/')) {
                    link.href = link.href.replace('/css/', '/WebPagesRefactor/css/');
                  }
                });
                
                // Fix favicon
                const favicons = document.querySelectorAll('link[rel="icon"]');
                favicons.forEach(link => {
                  if (link.href && link.href.startsWith(window.location.origin + '/assets/')) {
                    link.href = link.href.replace('/assets/', '/WebPagesRefactor/assets/');
                  }
                });
                
                // Fix asset paths after page load
                function fixAssetPaths() {
                  // Fix background images
                  const elementsWithBgImage = document.querySelectorAll('[style*="background-image"]');
                  elementsWithBgImage.forEach(element => {
                    const style = element.getAttribute('style');
                    if (style && style.includes('url(/assets/')) {
                      const fixedStyle = style.replace(/url\(\/assets\//g, 'url(/WebPagesRefactor/assets/');
                      element.setAttribute('style', fixedStyle);
                    }
                  });
                  
                  // Fix image src
                  const images = document.querySelectorAll('img[src^="/assets/"]');
                  images.forEach(img => {
                    if (img.src.startsWith(window.location.origin + '/assets/')) {
                      img.src = img.src.replace('/assets/', '/WebPagesRefactor/assets/');
                    }
                  });
                }
                
                // Run immediately and after DOM is ready
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', fixAssetPaths);
                } else {
                  fixAssetPaths();
                }
                
                // Also run after a short delay to catch dynamically loaded content
                setTimeout(fixAssetPaths, 100);
                setTimeout(fixAssetPaths, 500);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  );
}
