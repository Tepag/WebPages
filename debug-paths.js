// Debug script to test path fixing
console.log('Testing path fixing for GitHub Pages...');

function testPathFixing() {
  const isGitHubPages = window.location.hostname.includes('github.io');
  console.log('Is GitHub Pages:', isGitHubPages);
  
  if (isGitHubPages) {
    // Test CSS paths
    const cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    console.log('CSS Links found:', cssLinks.length);
    cssLinks.forEach((link, index) => {
      console.log(`CSS ${index + 1}:`, link.href);
    });
    
    // Test background images
    const elementsWithBgImage = document.querySelectorAll('[style*="background-image"]');
    console.log('Elements with background-image:', elementsWithBgImage.length);
    elementsWithBgImage.forEach((element, index) => {
      const style = element.getAttribute('style');
      if (style && style.includes('url(/assets/')) {
        console.log(`Background Image ${index + 1}:`, style);
      }
    });
    
    // Test regular images
    const images = document.querySelectorAll('img[src^="/assets/"]');
    console.log('Images with /assets/ src:', images.length);
    images.forEach((img, index) => {
      console.log(`Image ${index + 1}:`, img.src);
    });
  }
}

// Run test after page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', testPathFixing);
} else {
  testPathFixing();
}
