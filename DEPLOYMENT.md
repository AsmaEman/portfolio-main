# Deployment Guide

## Vercel Deployment

### Prerequisites
- Remove or comment out `base: '/portfolio'` from `vite.config.ts` (already done)
- Ensure `vercel.json` exists for proper routing (already created)

### Steps to Deploy on Vercel:

1. **Connect Repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Select the repository containing this portfolio

2. **Build Settings**
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Environment Variables**
   - No special environment variables needed for this portfolio

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your portfolio

### For GitHub Pages Deployment:
If you want to deploy to GitHub Pages instead:

1. Uncomment `base: '/portfolio'` in `vite.config.ts`
2. Use the deploy script: `npm run deploy`

### Troubleshooting:
- If you see 404 errors for assets, ensure `base` is not set in `vite.config.ts` for Vercel
- If favicon doesn't load, check that it exists in `public/img/favicon196x196.png`
- For blank screen, check browser console for JavaScript errors

### Current Configuration:
- ✅ Vite config optimized for Vercel
- ✅ Vercel.json created for SPA routing
- ✅ Favicon path fixed
- ✅ Meta tags updated for SEO