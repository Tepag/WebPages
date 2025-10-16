import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { getAssetPath } from "./utils/paths";

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
    icon: getAssetPath("/assets/images/logo.png"),
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
        <link rel="icon" href={getAssetPath("/assets/images/logo.png")} />
        <link rel="stylesheet" href={getAssetPath("/css/main.css")} />
        <link rel="stylesheet" href={getAssetPath("/css/vendor/introgridsection.css")} />
        <link rel="stylesheet" href={getAssetPath("/css/vendor/joinUs.css")} />
        <link rel="stylesheet" href={getAssetPath("/css/vendor/purecssflipcard.css")} />
        <link rel="stylesheet" href={getAssetPath("/css/vendor/event.css")} />
      </head>
      <body className="lxgw-wenkai-tc-regular" style={{ backgroundColor: 'black' }}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Flip.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/gh/studio-freight/lenis@1.0.29/bundled/lenis.min.js" strategy="beforeInteractive" />
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
