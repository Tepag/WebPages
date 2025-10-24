# Deployment Guide

This project includes automated deployment workflows for multiple platforms.

## Available Deployment Options

### 1. GitHub Pages (Default)
- **Trigger**: Push to `main` branch
- **Setup**: No additional configuration needed
- **URL**: `https://[username].github.io/[repository-name]`

### 2. Vercel (Optional)
- **Setup Required**:
  1. Create a Vercel account
  2. Add these secrets to your GitHub repository:
     - `VERCEL_TOKEN`: Your Vercel API token
     - `ORG_ID`: Your Vercel organization ID
     - `PROJECT_ID`: Your Vercel project ID

### 3. Netlify (Optional)
- **Setup Required**:
  1. Create a Netlify account
  2. Add these secrets to your GitHub repository:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify API token
     - `NETLIFY_SITE_ID`: Your Netlify site ID

### 4. AWS S3 + CloudFront (Optional)
- **Setup Required**:
  1. Create an AWS account
  2. Set up S3 bucket and CloudFront distribution
  3. Add these secrets to your GitHub repository:
     - `AWS_ACCESS_KEY_ID`: Your AWS access key
     - `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
     - `S3_BUCKET_NAME`: Your S3 bucket name
     - `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

## How to Enable Specific Deployments

1. **GitHub Pages**: Already enabled by default
2. **Other platforms**: Uncomment the desired job in `.github/workflows/deploy.yml` and add the required secrets

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

For production builds, you can set environment variables in your deployment platform or add them to your GitHub repository secrets.
