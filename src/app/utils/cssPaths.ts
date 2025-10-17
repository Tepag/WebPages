// Utility per applicare percorsi corretti ai CSS
export const applyCorrectPaths = () => {
  if (typeof window === 'undefined') return;
  
  // Rileva se siamo su GitHub Pages
  const isGitHubPages = window.location.hostname.includes('github.io');
  const basePath = isGitHubPages ? '/WebPagesRefactor' : '';
  
  // Applica i percorsi corretti agli stili inline
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
};
