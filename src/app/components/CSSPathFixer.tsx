"use client";
import { useEffect } from "react";

export default function CSSPathFixer() {
  useEffect(() => {
    // Rileva se siamo su GitHub Pages
    const isGitHubPages = window.location.hostname.includes('github.io');
    const basePath = isGitHubPages ? '/WebPagesRefactor' : '';
    
    // Applica i percorsi corretti agli stili
    const style = document.createElement('style');
    style.textContent = `
      body {
        background-image: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("${basePath}/assets/images/testBackground2.jpg") !important;
      }
      .joinUsBackground {
        background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${basePath}/assets/images/JoinUsBackground.JPG") !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      // Cleanup
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null; // Questo componente non renderizza nulla
}
