# Quick Start Guide

Quick reference for getting started with the reorganized project structure.

## First Time Setup

```bash
# Clone the repository
git clone https://github.com/PassionLabPolimi/WebPages.git
cd WebPages

# Install dependencies
npm install
```

## Development

### Start Both Frontend and Backend

**Recommended: Use two terminal windows**

```bash
# Terminal 1: Start backend server
npm run server:dev
# → Express server at http://localhost:3001

# Terminal 2: Start frontend dev server
npm run dev
# → Vite dev server at http://localhost:5173
```

**Alternative: Start both with one command**
```bash
npm run dev:full
# Runs both servers in the background
```

### Start Frontend Only

```bash
npm run dev
# → http://localhost:5173
# API calls will fail until backend is started
```

### Start Backend Only

```bash
npm run server:dev
# → http://localhost:3001
# API endpoints: /api/hello, /api/data, etc.
```

## Building

```bash
# Build for production
npm run build
# → Output: client/dist/

# Preview production build locally
npm run preview
# → http://localhost:4173
```

## Testing API Endpoints

### Using Browser
```
http://localhost:3001/api/hello
http://localhost:3001/api/data
http://localhost:3001/api/health
```

### Using curl
```bash
# Test connection
curl http://localhost:3001/api/hello

# Get all data
curl http://localhost:3001/api/data

# Filter by type
curl http://localhost:3001/api/data?type=sport

# Create data
curl -X POST http://localhost:3001/api/data \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Event","date":"2025-12-01","type":"sport"}'
```

### Using React Component
```javascript
import { getData } from '../utils/api';

// In your component
const fetchData = async () => {
  const response = await getData();
  console.log(response.data);
};
```

## Deployment

### Deploy to Vercel

**Option 1: Dashboard (Easiest)**
1. Go to https://vercel.com
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel auto-detects configuration
5. Click "Deploy"

**Option 2: CLI**
```bash
# Install Vercel CLI (if not already installed)
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Auto-deployment:**
- Push to `main` branch → Deploys to production
- Open pull request → Gets preview URL

## Project Structure

```
WebPages/
├── client/          # Frontend (React + Vite)
│   ├── src/        # React source code
│   ├── public/     # Static assets
│   └── dist/       # Build output
├── api/            # Backend (Vercel Serverless Functions)
├── server/         # Backend (Local Express Server)
└── package.json    # Scripts and dependencies
```

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start frontend dev server |
| `npm run server:dev` | Start backend dev server |
| `npm run dev:full` | Start both servers |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run linter |

## Environment Variables

```bash
# Copy example file
cp .env.example .env

# Edit with your values
nano .env
```

For Vercel deployment, add environment variables in the Vercel dashboard:
- Project Settings → Environment Variables

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3001 (backend)
lsof -ti:3001 | xargs kill -9

# Kill process on port 5173 (frontend)
lsof -ti:5173 | xargs kill -9
```

### Build fails
```bash
# Clean install
rm -rf node_modules package-lock.json client/dist
npm install
npm run build
```

### API calls return 404
- Make sure backend server is running: `npm run server:dev`
- Check that Express server started on port 3001
- Verify proxy settings in `client/vite.config.js`

### Hot reload not working
- Restart the dev server
- Check that you're editing files in `client/src/`
- Clear browser cache

## File Locations

- **React Components**: `client/src/components/`
- **React Pages**: `client/src/pages/`
- **API Utilities**: `client/src/utils/api.js`
- **API Endpoints**: `api/` (serverless) or `server/` (local dev)
- **Configuration**: Root folder (package.json, vercel.json, etc.)

## Need Help?

- **Main Documentation**: See `README.md`
- **API Usage**: See `API_USAGE.md`
- **Project Structure**: See `PROJECT_STRUCTURE.md`

## Next Steps

1. ✅ Set up development environment
2. ✅ Run both frontend and backend
3. ✅ Test API endpoints
4. 🔲 Build your features
5. 🔲 Deploy to Vercel
6. 🔲 Add database integration (when needed)

Happy coding! 🚀

