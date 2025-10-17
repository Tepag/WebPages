// Utility per gestire i percorsi correttamente su GitHub Pages
export const getAssetPath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};

export const getRoutePath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
};

// Per uso in componenti client-side
export const getClientAssetPath = (path: string): string => {
  if (typeof window !== 'undefined') {
    // In produzione su GitHub Pages, aggiungi il base path
    if (window.location.hostname.includes('github.io')) {
      // Assicurati che il path inizi con /
      const normalizedPath = path.startsWith('/') ? path : `/${path}`;
      return `/WebPagesRefactor${normalizedPath}`;
    }
  }
  return path;
};

// Funzione per correggere tutti i percorsi asset dopo il caricamento della pagina
export const fixAssetPaths = () => {
  if (typeof window !== 'undefined' && window.location.hostname.includes('github.io')) {
    // Correggi le immagini con background-image inline
    const elementsWithBgImage = document.querySelectorAll('[style*="background-image"]');
    elementsWithBgImage.forEach(element => {
      const style = element.getAttribute('style');
      if (style && style.includes('url(/assets/')) {
        const fixedStyle = style.replace(/url\(\/assets\//g, 'url(/WebPagesRefactor/assets/');
        element.setAttribute('style', fixedStyle);
      }
    });
    
    // Correggi le immagini src
    const images = document.querySelectorAll('img[src^="/assets/"]');
    images.forEach(img => {
      if (img.src.startsWith(window.location.origin + '/assets/')) {
        img.src = img.src.replace('/assets/', '/WebPagesRefactor/assets/');
      }
    });
  }
};

export const getClientRoutePath = (path: string): string => {
  if (typeof window !== 'undefined') {
    // In produzione su GitHub Pages, aggiungi il base path
    if (window.location.hostname.includes('github.io')) {
      // Assicurati che il path inizi con /
      const normalizedPath = path.startsWith('/') ? path : `/${path}`;
      return `/WebPagesRefactor${normalizedPath}`;
    }
  }
  return path;
};
