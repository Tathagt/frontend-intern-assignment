# Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production:
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import from GitHub: `Tathagt/frontend-intern-assignment`
4. Configure:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
5. Click "Deploy"

### Method 3: Using GitHub Integration

1. Connect your GitHub account to Vercel
2. Vercel will automatically deploy on every push to main
3. Preview deployments for pull requests

## Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `Tathagt/frontend-intern-assignment`
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Click "Deploy site"

## Environment Variables

No environment variables required for basic deployment.

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## Performance Optimization

- ✅ Automatic image optimization (Next.js)
- ✅ Code splitting
- ✅ Static generation where possible
- ✅ CDN distribution
- ✅ Automatic HTTPS

## Monitoring

- Use Vercel Analytics for performance monitoring
- Check Core Web Vitals in deployment dashboard
- Monitor build times and deployment logs