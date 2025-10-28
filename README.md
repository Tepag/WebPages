# WebPages - React + Vite Project

A modern React application built with Vite, featuring hot module replacement (HMR) and optimized for deployment to GitHub Pages.

## 🚀 Getting Started

### 1. Fork the Repository

First, fork this repository to your GitHub account:
- Click the "Fork" button at the top right of the repository page
- This creates a copy of the repository under your GitHub account

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/WebPages.git
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

Start the development server with hot reload:

```bash
npm run dev
```

This will start a local server (usually at `http://localhost:5173`). The app will automatically reload when you make changes.

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

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run deploy` | Build and deploy to GitHub Pages |

## 🔧 Technology Stack

- **React** ^19.1.1 - UI library
- **Vite** ^7.1.7 - Build tool and dev server
- **ESLint** - Code linting
- **gh-pages** - Deployment to GitHub Pages

## 📝 Contribution Guidelines

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Test thoroughly with `npm run dev`
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to your branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request to the main repository
7. Once merged, deploy using `npm run deploy` from the main branch

## ⚠️ Troubleshooting

### Deployment Issues

- **404 errors after deployment**: Check that `base` in `vite.config.js` matches your repository name
- **Assets not loading**: Ensure all imports use relative paths or Vite's asset handling
- **Deploy fails**: Make sure you have push permissions and the repository is not private (or GitHub Pages is enabled for private repos)

### Build Issues

- Run `npm run build` to check for any build errors before deploying
- Clear `node_modules` and reinstall: `rm -rf node_modules package-lock.json && npm install`

## 📄 License

This project is open source and available under the MIT License.
