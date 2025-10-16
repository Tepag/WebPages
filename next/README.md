# PLP Next.js Application

Modern React application built with Next.js 15 for PLP (Passion Lab Polimi).

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or later
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3001 in your browser
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server on port 3001
npm run dev -- -p 3000  # Start on port 3000

# Production
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint (currently disabled in config)
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/              # Reusable components
│   │   ├── Navbar.tsx           # Site navigation
│   │   ├── I18nProvider.tsx     # Internationalization
│   │   ├── RecruitmentProcess.tsx    # Join Us page logic
│   │   ├── RecruitmentVisualization.tsx # Interactive circle
│   │   └── RecruitmentText.tsx        # Text content
│   ├── events/                  # Events page
│   │   └── page.tsx
│   ├── join-us/                 # Join Us page
│   │   ├── page.tsx
│   │   └── join-us-fixes.css
│   ├── wechatgroups/            # WeChat Groups page
│   │   └── page.tsx
│   ├── work/                    # Work in Progress page
│   │   └── page.tsx
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
```

## 🎨 Features

- **Multi-language Support**: Chinese/English switching
- **Responsive Design**: Mobile-first with Bulma CSS
- **Interactive Animations**: GSAP and custom CSS animations
- **Component Architecture**: Modular, reusable components
- **TypeScript**: Type-safe development

## 🛠️ Development

### Adding New Pages

1. Create directory: `src/app/new-page/`
2. Add `page.tsx` with proper structure
3. Update navigation in `Navbar.tsx`
4. Add translations to `public/content/`

### Component Development

- Use functional components with hooks
- Follow TypeScript best practices
- Keep components focused and reusable
- Use proper prop typing

### Styling

- Global styles: `src/app/globals.css`
- Page-specific: `src/app/[page]/[page]-fixes.css`
- Original CSS preserved in `public/css/`

## 🔧 Configuration

### Next.js Config
- ESLint disabled during builds
- TypeScript errors ignored
- Dev indicators hidden
- Powered by header removed

### Build Optimization
- Static generation for all pages
- Optimized bundle sizes
- Image optimization ready

## 📦 Dependencies

- **Next.js 15.5.5**: React framework
- **React 18**: UI library
- **TypeScript**: Type safety
- **Bulma CSS**: Styling framework
- **GSAP**: Animations
- **jQuery**: Legacy compatibility

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Auto-deploy on push to main

### Manual Deployment
```bash
npm run build
# Deploy .next directory to your hosting provider
```

## 🐛 Troubleshooting

### Common Issues
- **Port conflicts**: Use `npm run dev -- -p 3001`
- **Build errors**: Check console output
- **Animation issues**: Verify jQuery loading

### Performance
- Monitor bundle size
- Optimize images
- Use Next.js Image component

---

For detailed documentation, see the main README.md file.