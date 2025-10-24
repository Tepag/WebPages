<<<<<<< Updated upstream
# PLP - Passion Lab Polimi Website

A modern Next.js application for PLP (Passion Lab Polimi) featuring interactive recruitment process, event management, and WeChat groups integration.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# The application will be available at http://localhost:3000
```

### Production Build & Deployment

```bash
# Build for production
npm run build

# Start production server
npm start

# The production server will run on http://localhost:3000
```

## 📁 Project Structure

```
WebPagesRefactor/
├── src/
│   └── app/
│       ├── components/           # Reusable React components
│       │   ├── Navbar.tsx        # Navigation component
│       │   ├── I18nProvider.tsx  # Internationalization provider
│       │   ├── RecruitmentProcess.tsx      # Join Us page logic
│       │   ├── RecruitmentVisualization.tsx # Interactive circle component
│       │   └── RecruitmentText.tsx        # Text content component
│       ├── events/               # Events page
│       │   └── page.tsx
│       ├── join-us/              # Join Us page
│       │   ├── page.tsx          # Main Join Us component
│       │   └── join-us-fixes.css # Page-specific styles
│       ├── wechatgroups/          # WeChat Clubs page
│       │   └── page.tsx
│       ├── work/                  # Work in Progress page
│       │   └── page.tsx
│       ├── globals.css            # Global styles and overrides
│       ├── layout.tsx             # Root layout with metadata
│       └── page.tsx               # Home page
├── public/                        # Static assets
│   ├── assets/                    # Images, SVGs, QR codes
│   ├── content/                  # i18n JSON files
│   ├── css/                      # Original CSS files
│   └── js/                       # Original JavaScript files
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## 🎨 Features

### Pages
- **Home**: Interactive intro grid with mouse animations
- **Events**: Event listings with filtering
- **WeChat Clubs**: Interactive flip cards for club categories
- **Join Us**: Interactive recruitment process with animated circle
- **Work**: Placeholder for work in progress

### Key Features
- 🌍 **Internationalization**: Chinese/English language switching
- 📱 **Responsive Design**: Mobile-first approach with Bulma CSS
- 🎭 **Animations**: GSAP animations and custom CSS transitions
- 🎯 **Interactive Elements**: Clickable recruitment process, flip cards
- 🎨 **Visual Parity**: Maintains original design aesthetics

## 🛠️ How to Modify

### Adding New Pages

1. Create a new directory in `src/app/`:
```bash
mkdir src/app/new-page
```

2. Create `page.tsx`:
```tsx
"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { I18nProvider, useI18n } from "../components/I18nProvider";

function NewPageInner() {
  const { strings } = useI18n();

  useEffect(() => {
    document.title = "PLP | New Page";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <h1>{strings?.newPage?.title || 'New Page'}</h1>
        {/* Your content here */}
      </main>
    </>
  );
}

export default function NewPage() {
  return (
    <I18nProvider>
      <NewPageInner />
    </I18nProvider>
  );
}
```

3. Add translations to `public/content/en.json` and `public/content/zh.json`

### Modifying Components

#### Navbar
- **File**: `src/app/components/Navbar.tsx`
- **Purpose**: Site navigation with language switching
- **Modify**: Add new menu items, change styling

#### I18n Provider
- **File**: `src/app/components/I18nProvider.tsx`
- **Purpose**: Language management and content loading
- **Modify**: Add new language support, change content structure

### Styling

#### Global Styles
- **File**: `src/app/globals.css`
- **Purpose**: Global overrides and fixes
- **Modify**: Add global styles, fix visual issues

#### Page-Specific Styles
- **File**: `src/app/[page]/[page]-fixes.css`
- **Purpose**: Page-specific styling fixes
- **Modify**: Customize individual page appearance

### Content Management

#### Adding Content
1. Edit `public/content/en.json` for English content
2. Edit `public/content/zh.json` for Chinese content
3. Use the `useI18n()` hook in components to access content

#### Adding Links
1. Edit `public/content/links.json`
2. Access via `links` object from `useI18n()` hook

### Animation Customization

#### GSAP Animations
- Original animations are preserved in `public/js/vendor/`
- Modify timing, easing, or effects in the respective JS files

#### CSS Animations
- Custom animations in `public/css/vendor/`
- Override in page-specific CSS files

## 🔧 Configuration

### Next.js Config (`next.config.ts`)
```typescript
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Disable ESLint during builds
  },
  typescript: {
    ignoreBuildErrors: true,   // Ignore TypeScript errors
  },
  poweredByHeader: false,      // Remove "Powered by Next.js" header
};
```

### Environment Variables
Create `.env.local` for environment-specific settings:
```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 📦 Dependencies

### Core
- **Next.js 15.5.5**: React framework
- **React 18**: UI library
- **TypeScript**: Type safety

### Styling
- **Bulma CSS**: CSS framework
- **Custom CSS**: Original styles preserved

### Animations
- **GSAP**: Animation library
- **Lenis**: Smooth scrolling

### Utilities
- **jQuery**: Legacy script compatibility

## 🚀 Deployment

### GitHub Pages (Automated)
The project includes a GitHub Actions workflow for automatic deployment:

1. **Enable GitHub Pages**: Go to your repository Settings → Pages
2. **Set Source**: Select "GitHub Actions" as the source
3. **Push to main**: The workflow will automatically build and deploy

The workflow file is located at `.github/workflows/deploy.yml` and will:
- Build the static site using `npm run build`
- Deploy to GitHub Pages automatically
- Work on every push to the `main` branch

### Production Build Process

For production deployment, you only need these two commands:

```bash
# 1. Build the application (creates static files in ./out)
npm run build

# 2. Start production server (for local testing)
npm start
```

### Static Export
The project is configured for static export with `output: 'export'` in `next.config.ts`:
- Generates static HTML files in the `./out` directory
- All pages are pre-rendered as static files
- Perfect for GitHub Pages, Netlify, or any static hosting

### Manual Deployment Options

#### GitHub Pages
```bash
npm run build
# Upload the ./out directory contents to your GitHub Pages repository
```

#### Netlify
```bash
npm run build
# Drag and drop the ./out directory to Netlify
# Or connect your GitHub repository and set build command: npm run build
# And publish directory: out
```

#### Vercel
```bash
npm run build
# Connect your GitHub repository to Vercel
# Vercel will automatically detect Next.js and deploy
```

### Docker Deployment
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm start -- -p 3001
```

#### Build Errors
- ESLint errors are ignored in config
- TypeScript errors are ignored in config
- Check console for runtime errors

#### Animation Issues
- Ensure jQuery is loaded before animation scripts
- Check browser console for JavaScript errors
- Verify CSS files are properly linked

### Performance Optimization

#### Image Optimization
- Use Next.js `Image` component for better performance
- Optimize images before adding to `public/assets/`

#### Bundle Size
- Monitor bundle size with `npm run build`
- Consider code splitting for large components

## 📝 Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Keep components small and focused

### File Naming
- Use PascalCase for component files
- Use kebab-case for page directories
- Use descriptive names for CSS files

### Git Workflow
- Create feature branches for new features
- Use descriptive commit messages
- Test thoroughly before merging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For issues and questions:
1. Check this README
2. Search existing issues
3. Create a new issue with detailed description

---

**Built with ❤️ for PLP - Passion Lab Polimi**
=======
# WebPages Refactor

A modern React-based website with GitHub Pages deployment.

## Features

- ⚛️ React 18 with modern hooks
- 🛣️ React Router for client-side routing
- 📱 Responsive design
- 🚀 Automated GitHub Pages deployment
- 🎨 Clean, modern UI with CSS Grid and Flexbox

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components
│   ├── Home.js         # Main landing page
│   ├── Home.css        # Home page styles
│   ├── SecondaryPage.js # Test page with green background
│   └── SecondaryPage.css
├── styles/             # Global styles
│   └── App.css         # Main application styles
├── App.js              # Main App component with routing
└── index.js            # React entry point

public/
└── index.html          # HTML template

.github/
└── workflows/
    └── deploy.yml      # GitHub Actions deployment workflow
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/WebPagesRefactor.git
cd WebPagesRefactor
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Deployment

The project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy when you push to the main branch

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

## Pages

- **Home Page** (`/`): Main landing page with features showcase
- **Secondary Page** (`/secondary`): Test page with green background to verify routing

## Technologies Used

- React 18
- React Router DOM
- CSS3 with modern features
- GitHub Actions
- GitHub Pages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.
>>>>>>> Stashed changes
