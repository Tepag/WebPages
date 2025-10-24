# Assets Directory

This directory contains all static assets for the application, organized by type for easy access and maintenance.

## Structure

```
src/assets/
├── images/           # Image assets
│   ├── logos/        # Logo files
│   ├── backgrounds/  # Background images
│   ├── gallery/      # Gallery/content images
│   └── events/       # Event-related images
├── icons/            # Icon assets
│   ├── social/       # Social media icons
│   ├── navigation/   # Navigation icons
│   └── ui/           # UI element icons
├── fonts/            # Font files
└── media/            # Media assets
    ├── videos/       # Video files
    └── audio/        # Audio files
```

## Usage

Import assets in your React components:

```jsx
// Images
import logo from '../assets/images/logos/logo.png';
import background from '../assets/images/backgrounds/hero-bg.jpg';

// Icons
import instagramIcon from '../assets/icons/social/instagram.svg';
import menuIcon from '../assets/icons/navigation/menu.svg';

// Fonts
import customFont from '../assets/fonts/custom-font.woff2';
```

## File Naming Convention

- Use lowercase with hyphens: `hero-background.jpg`
- Be descriptive: `logo-passion-lab.png`
- Use appropriate extensions: `.png`, `.jpg`, `.svg`, `.webp`
