# Project Structure

This document explains the reorganized project structure with separated frontend (client) and backend code.

## Directory Overview

```
WebPages/
├── api/                    # Backend: Vercel Serverless Functions
│   ├── hello.js           # GET /api/hello - Test endpoint
│   └── data.js            # /api/data - CRUD operations endpoint
│
├── server/                 # Backend: Local Development Server
│   └── index.js           # Express server for local dev (port 3001)
│
├── client/                 # Frontend: React Application
│   ├── src/               # React source code
│   │   ├── assets/        # Images, SVGs, static files
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── const/         # Constants
│   │   ├── utils/         # Utility functions (including API client)
│   │   ├── main.jsx       # React entry point
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets served as-is
│   ├── index.html         # HTML entry point
│   ├── vite.config.js     # Vite configuration
│   └── dist/              # Build output (generated, not in git)
│
├── node_modules/          # Dependencies (not in git)
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Locked dependency versions
├── vercel.json            # Vercel deployment configuration
├── eslint.config.js       # ESLint configuration
├── .gitignore             # Git ignore rules
├── .env.example           # Environment variables template
├── README.md              # Main documentation
├── API_USAGE.md           # API usage guide
└── PROJECT_STRUCTURE.md   # This file
```

## Key Differences from Previous Structure

### Before
```
WebPages/
├── src/           # Frontend source (at root)
├── public/        # Frontend assets (at root)
├── index.html     # HTML entry (at root)
└── vite.config.js # Vite config (at root)
```

### After
```
WebPages/
├── client/        # All frontend code grouped here
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── vite.config.js
├── api/           # Backend serverless functions
└── server/        # Backend dev server
```

## Benefits of New Structure

1. **Clear Separation**: Frontend and backend code are clearly separated
2. **Scalability**: Easier to add more backend services or microservices
3. **Monorepo Ready**: Structure is ready for a monorepo setup if needed
4. **Deployment Clarity**: Clear distinction between client build and API functions
5. **Team Workflow**: Frontend and backend developers can work independently

## Development Workflow

### Frontend Only
```bash
npm run dev
# Starts Vite dev server at http://localhost:5173
# API calls are proxied to http://localhost:3001
```

### Backend Only
```bash
npm run server:dev
# Starts Express server at http://localhost:3001
# API endpoints available at /api/*
```

### Full Stack (Recommended)
```bash
# Terminal 1
npm run server:dev

# Terminal 2 (in a new terminal window)
npm run dev
```

## Build Process

### Local Build
```bash
npm run build
# Output: client/dist/
```

### Vercel Deployment
When deployed to Vercel:
1. Frontend builds to `client/dist/`
2. API functions in `/api` are deployed as serverless functions
3. All routes accessible from same domain

## Configuration Files

### package.json
- Located at root
- Scripts reference `client/vite.config.js`
- Build output: `client/dist/`

### vite.config.js
- Located in `client/` folder
- Sets root to `__dirname` (client folder)
- Proxy configured for `/api` requests

### vercel.json
- Located at root
- `outputDirectory`: `client/dist`
- API routes: `/api/*` → serverless functions

### eslint.config.js
- Located at root
- Ignores: `dist`, `client/dist`, `node_modules`
- Applies to both frontend and backend code

## Important Paths

### Frontend Imports
When importing in React components:
```javascript
// If in src/pages/Home/
import { getData } from '../../utils/api';

// If in src/components/
import { getData } from '../utils/api';
```

### API Endpoints
All API calls use relative paths:
```javascript
// In development: proxied to http://localhost:3001/api/hello
// In production: https://your-app.vercel.app/api/hello
fetch('/api/hello')
```

## Git Ignored Files

- `node_modules/`
- `client/dist/` (and any `dist/` folder)
- `.env` files
- `.vercel/`
- `.DS_Store`

## Next Steps

### Adding New Features

**New Frontend Component:**
```bash
# Create in client/src/components/
client/src/components/MyComponent/
├── MyComponent.jsx
└── MyComponent.css
```

**New API Endpoint:**
```bash
# Create in api/
api/my-endpoint.js
# Accessible at /api/my-endpoint
```

**New Backend Service:**
```bash
# Add to server/ for local development
# Add to api/ for production deployment
```

### Database Integration

When ready to add a database:
1. Choose your database (PostgreSQL, MongoDB, etc.)
2. Install client: `npm install pg` or `npm install mongoose`
3. Add connection string to `.env`
4. Update API handlers in `api/` folder
5. Add same env vars in Vercel dashboard

## Troubleshooting

### Build fails
```bash
# Clean and rebuild
rm -rf client/dist node_modules
npm install
npm run build
```

### Dev server can't find files
- Check that you're running `npm run dev` from the project root
- Verify `client/vite.config.js` exists
- Check that `client/index.html` exists

### API calls fail in development
- Ensure Express server is running: `npm run server:dev`
- Check proxy configuration in `client/vite.config.js`
- Verify backend is running on port 3001

### Import errors in React
- Check relative paths in imports
- Remember: `utils/api.js` is in `client/src/utils/api.js`
- Use correct relative path based on component location

## Summary

The new structure provides a clean separation between frontend (client) and backend (api/server) code, making the project more maintainable and scalable. All npm scripts and configurations have been updated to work with this structure seamlessly.

