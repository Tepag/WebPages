# WebPages - React + Vite + Express.js Project

A modern full-stack React application built with Vite frontend and Express.js backend, featuring hot module replacement (HMR) and optimized for deployment to Vercel with serverless functions.

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Quick reference for common commands and tasks
- **[API_USAGE.md](API_USAGE.md)** - Complete API documentation with examples
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Detailed explanation of the project structure
- **[README.md](README.md)** - This file: comprehensive project documentation

## 🚀 Getting Started

### 1. Fork the Repository

First, fork this repository to your GitHub account:
- Click the "Fork" button at the top right of the repository page
- This creates a copy of the repository under your GitHub account

### 2. Clone Your Fork

```bash
git clone https://github.com/PassionLabPolimi/WebPages.git
cd WebPages
```

### 3. Install Dependencies

Before running the project, you need to install all required npm packages:

```bash
npm install
```

**What this does:**
- Installs all dependencies listed in `package.json`
- Creates a `node_modules` folder with all required packages
- Generates/updates `package-lock.json` to lock dependency versions

**Requirements:**
- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

**Check your Node.js version:**
```bash
node --version
npm --version
```

**If you encounter installation issues:**
- Clear cache and reinstall:
  ```bash
  npm cache clean --force
  rm -rf node_modules package-lock.json
  npm install
  ```
- Make sure you have the latest npm version:
  ```bash
  npm install -g npm@latest
  ```

**First time setup complete!** Once installation finishes successfully, you're ready to start development.

## 💻 Development Workflow

### Working on Features

Always create a new branch for your work:

```bash
# For new features
git checkout -b feature/your-feature-name

# For bug fixes
git checkout -b hotfix/bug-description

```

### Local Development

#### Option 1: Frontend Only
Start the Vite development server with hot reload:

```bash
npm run dev
```

This will start the frontend at `http://localhost:5173`. API calls will be proxied to the backend server.

#### Option 2: Backend Only
Start the Express backend server:

```bash
npm run server:dev
```

This will start the Express server at `http://localhost:3001` with API endpoints available at `/api/*`.

#### Option 3: Full Stack Development (Recommended)
Run both frontend and backend simultaneously:

```bash
# Terminal 1: Start backend server
npm run server:dev

# Terminal 2: Start frontend dev server (in a new terminal)
npm run dev
```

**Note:** The Vite dev server automatically proxies API requests from `/api/*` to `http://localhost:3001`, so both servers work together seamlessly.

### Code Quality

Before committing, check your code with ESLint:

```bash
npm run lint
```

### Preview Production Build

Test the production build locally before deploying:

```bash
npm run build
npm run preview
```

This creates a production build in the `dist` folder and serves it locally so you can test how it will behave in production.

## 🌐 Deployment to GitHub Pages

### Prerequisites

1. Ensure your `vite.config.js` has the correct `base` path:
   ```js
   base: '/WebPages/',  // Should match your repository name
   ```

2. Make sure GitHub Pages is enabled in your repository settings:
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Source", select `Deploy from a branch`
   - Select the `gh-pages` branch and `/ (root)` folder
   - Click "Save"

### Deploy Command

Once you've tested everything locally and are ready to deploy:

```bash
npm run deploy
```

**What this does:**
1. Runs `npm run build` automatically (via `predeploy` script)
2. Creates an optimized production build in the `dist` folder
3. Pushes the contents of `dist` to the `gh-pages` branch
4. GitHub automatically deploys the `gh-pages` branch to GitHub Pages

### Post-Deployment

After running `npm run deploy`:
1. Go to your repository on GitHub
2. Navigate to `Settings` → `Pages`
3. You should see a message: "Your site is live at `https://YOUR_USERNAME.github.io/WebPages/`"
4. Visit the URL to see your deployed site (may take 1-2 minutes)

## 🔌 API Endpoints

The backend provides the following API endpoints:

### GET `/api/hello`
Simple hello world endpoint for testing.

**Response:**
```json
{
  "message": "Hello from Vercel Serverless API!",
  "timestamp": "2025-11-21T12:00:00.000Z",
  "endpoint": "/api/hello"
}
```

### GET `/api/data`
Retrieve sample data (can be filtered by type).

**Query Parameters:**
- `type` (optional): Filter by event type (e.g., `sport`, `social`, `outdoor`)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Basketball Event",
      "date": "2025-11-25",
      "type": "sport"
    }
  ],
  "count": 1
}
```

### POST `/api/data`
Create new data (ready for database integration).

**Request Body:**
```json
{
  "name": "New Event",
  "date": "2025-12-01",
  "type": "sport"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Data received",
  "data": {
    "id": 1732192800000,
    "name": "New Event",
    "date": "2025-12-01",
    "type": "sport",
    "createdAt": "2025-11-21T12:00:00.000Z"
  }
}
```

### PUT/PATCH `/api/data`
Update existing data (ready for database integration).

### DELETE `/api/data?id=1`
Delete data by ID (ready for database integration).

### GET `/api/health` (Local Development Only)
Health check endpoint to verify server status.

## 🚀 Deployment to Vercel

### Prerequisites

1. **Install Vercel CLI** (optional, for command-line deployment):
   ```bash
   npm install -g vercel
   ```

2. **Create a Vercel Account**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

### Deploy via Vercel Dashboard (Recommended)

1. **Import Project**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - Vercel will auto-detect the Vite configuration

2. **Configure Project**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

3. **Environment Variables** (if needed):
   - Go to Project Settings → Environment Variables
   - Add any required environment variables from `.env.example`
   - Example: `NODE_ENV=production`

4. **Deploy**:
   - Click "Deploy"
   - Vercel will build and deploy your application
   - You'll get a live URL like `https://your-project.vercel.app`

### Deploy via CLI

```bash
# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys to production
- Every pull request gets a unique preview URL
- All deployments include both frontend and API routes

### Vercel Project Structure

```
WebPages/
├── api/                    # Serverless functions (auto-deployed as API routes)
│   ├── hello.js           # /api/hello endpoint
│   └── data.js            # /api/data endpoint
├── server/                 # Local development Express server
│   └── index.js           # Used only for local development
├── client/                 # Frontend application
│   ├── src/               # React source code
│   ├── public/            # Static assets
│   ├── index.html         # HTML entry point
│   ├── vite.config.js     # Vite configuration with API proxy
│   └── dist/              # Build output (auto-generated)
├── vercel.json            # Vercel deployment configuration
├── package.json           # Dependencies and scripts
└── eslint.config.js       # ESLint configuration
```

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server with HMR |
| `npm run server:dev` | Start Express backend server (port 3001) |
| `npm run dev:full` | Start both frontend and backend together |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run vercel-build` | Build command for Vercel deployment |
| `npm run deploy` | Build and deploy to GitHub Pages (legacy) |

## 🔧 Technology Stack

### Frontend
- **React** ^19.1.1 - UI library
- **Vite** ^7.1.7 - Build tool and dev server
- **GSAP** ^3.13.0 - Animation library
- **React Icons** ^5.5.0 - Icon library

### Backend
- **Express.js** ^5.1.0 - Web framework for Node.js
- **CORS** ^2.8.5 - Cross-origin resource sharing middleware
- **Dotenv** ^17.2.3 - Environment variable management

### Deployment
- **Vercel** - Serverless deployment platform (primary)
- **gh-pages** - GitHub Pages deployment (legacy)

### Development Tools
- **ESLint** - Code linting
- **Vercel CLI** - Local testing and deployment

## 📝 Contribution Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Test thoroughly with `npm run dev`
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request to the main repository
7. Once merged, deploy using `npm run deploy` from the main branch

## 🌍 Environment Variables

Create a `.env` file in the root directory for local development:

```bash
# Copy the example file
cp .env.example .env
```

Edit `.env` with your configuration:
```env
PORT=3001
NODE_ENV=development
```

For Vercel deployment, set environment variables in the Vercel dashboard:
1. Go to your project on Vercel
2. Navigate to Settings → Environment Variables
3. Add required variables for Production, Preview, and Development

## 🗄️ Database Integration (Future)

The API endpoints are structured to easily integrate with a database. To add database support:

1. **Choose a database** (PostgreSQL, MongoDB, MySQL, etc.)
2. **Install database client**:
   ```bash
   # For PostgreSQL
   npm install pg
   
   # For MongoDB
   npm install mongodb mongoose
   ```
3. **Add connection string** to `.env`:
   ```env
   DATABASE_URL=your_connection_string
   ```
4. **Update API handlers** in `api/` folder to use database queries
5. **Add environment variables** in Vercel dashboard

Vercel supports several database options:
- Vercel Postgres
- MongoDB Atlas
- PlanetScale (MySQL)
- Supabase
- Any external database with connection string

## ⚠️ Troubleshooting

### API Issues

- **API calls fail in production**: Check Vercel Function Logs in the dashboard
- **CORS errors**: Verify CORS headers are set correctly in API functions
- **API timeout**: Vercel functions have a 10-second timeout on hobby plan
- **Local API not working**: Ensure Express server is running on port 3001

### Deployment Issues (Vercel)

- **Build fails**: Check build logs in Vercel dashboard
- **API routes not working**: Verify `vercel.json` configuration is correct
- **Environment variables**: Make sure all required env vars are set in Vercel dashboard
- **Serverless function errors**: Check Function Logs in Vercel dashboard

### Deployment Issues (GitHub Pages - Legacy)

- **404 errors after deployment**: Check that `base` in `vite.config.js` matches your repository name
- **Assets not loading**: Ensure all imports use relative paths or Vite's asset handling
- **Deploy fails**: Make sure you have push permissions and the repository is not private

### Build Issues

- Run `npm run build` to check for any build errors before deploying
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`
- Check Node.js version compatibility (v18+ recommended)

## 📄 License

This project is open source and available under the MIT License.
