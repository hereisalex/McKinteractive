# Deployment Guide for McK-Interactive

## GitHub Pages Setup

Your site is now configured for deployment to GitHub Pages with a custom domain. Here's what you need to do:

### 1. GitHub Repository Setup
1. Push your code to a GitHub repository
2. Go to your repository settings
3. Navigate to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"

### 2. Domain Configuration
The site is configured to use your custom domain `mck-interactive.com`:
- A `CNAME` file has been created in the `public` folder
- The GitHub Actions workflow includes the CNAME configuration
- The `package.json` has the correct homepage URL

### 3. SquareSpace Domain Setup
Since you registered the domain on SquareSpace Domains, you'll need to:
1. Log into your SquareSpace account
2. Go to your domain settings
3. Add a CNAME record pointing to your GitHub Pages URL:
   - **Type**: CNAME
   - **Name**: www (or @ for root domain)
   - **Value**: `yourusername.github.io` (replace with your actual GitHub username)
4. Add an A record for the root domain pointing to GitHub Pages IPs:
   - **Type**: A
   - **Name**: @
   - **Value**: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

### 4. Automatic Deployment
The GitHub Actions workflow will automatically:
- Build your site when you push to the `main` branch
- Deploy to GitHub Pages
- Configure the custom domain

### 5. Manual Deployment (Alternative)
If you prefer manual deployment:
```bash
cd mck-interactive
npm install
npm run deploy
```

## What's Been Added

### Content Updates
- ✅ Tagline: "Design for good. Design for fun. Design for future." below the wordmark
- ✅ Footer blurb: "Founded and created by Alex McKenzie" with link to AlexTheDeveloper.com
- ✅ Updated favicon to use your existing logo.png

### Technical Configuration
- ✅ GitHub Actions workflow for automatic deployment
- ✅ Vite configuration for GitHub Pages
- ✅ CNAME file for custom domain
- ✅ Package.json updates with deployment scripts
- ✅ Responsive CSS for new elements

## Next Steps
1. Push your code to GitHub
2. Configure your domain DNS settings in SquareSpace
3. Enable GitHub Pages in your repository settings
4. Your site will be live at mck-interactive.com!

The deployment will happen automatically whenever you push changes to the main branch.
