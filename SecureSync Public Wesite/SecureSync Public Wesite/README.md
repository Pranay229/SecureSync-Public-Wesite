# SecureSync Pro - Public Website

A modern, secure enterprise collaboration platform website built with React, TypeScript, and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm 8.10.0+ (or npm)

### Installation

```bash
# Install dependencies
pnpm install
# or
npm install

# Start development server
pnpm dev
# or
npm run dev

# Build for production
pnpm build
# or
npm run build
```

## 📦 Deployment

### GitHub Repository
**Repository URL:** https://github.com/Pranay229/SecureSync-Public-Wesite.git

### Option 1: Netlify (Recommended)

1. **Via Netlify Dashboard:**
   - Go to [Netlify](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account and select this repository
   - Netlify will automatically detect the `netlify.toml` configuration
   - Build settings:
     - Build command: `pnpm install && pnpm build` (or `npm install && npm run build`)
     - Publish directory: `dist`
   - Click "Deploy site"

2. **Via Netlify CLI:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy
   netlify deploy --prod
   ```

### Option 2: Vercel

1. Go to [Vercel](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings
5. Build settings:
   - Framework Preset: Vite
   - Build Command: `pnpm build` (or `npm run build`)
   - Output Directory: `dist`
6. Click "Deploy"

### Option 3: GitHub Pages (via GitHub Actions)

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to `main` branch.

1. Go to your repository settings on GitHub
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on push

### Option 4: Manual Deployment

1. Build the project:
   ```bash
   pnpm build
   # or
   npm run build
   ```

2. The `dist` folder contains the production build
3. Upload the contents of `dist` to your hosting provider

## 🔧 Configuration

### Netlify Configuration
The `netlify.toml` file is configured with:
- Build command: `pnpm install && pnpm build`
- Publish directory: `dist`
- SPA redirects for client-side routing

### Environment Variables
If you need environment variables, create a `.env` file:
```env
VITE_API_URL=your_api_url
VITE_APP_NAME=SecureSync Pro
```

## 📝 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 🔗 Links

- **GitHub Repository:** https://github.com/Pranay229/SecureSync-Public-Wesite.git
- **Live Site:** (Add your deployment URL here)

