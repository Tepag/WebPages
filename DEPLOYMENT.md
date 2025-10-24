# Deployment Guide

This project includes automated deployment to GitHub Pages.

## GitHub Pages Deployment

- **Trigger**: Push to `main` branch
- **Setup**: No additional configuration needed
- **URL**: `https://[username].github.io/[repository-name]`

## How It Works

The deployment workflow automatically:
1. Installs dependencies
2. Runs linting
3. Builds your React + Vite application
4. Deploys to GitHub Pages

## Manual Deployment

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview the build locally
npm run preview
```

## Environment Variables

For production builds, you can set environment variables in your GitHub repository secrets if needed.
