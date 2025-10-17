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
