# GitHub Pages Setup Guide

Follow these steps to complete the GitHub Pages deployment setup:

## 1. Push changes to GitHub

```bash
git add .
git commit -m "Configure project for GitHub Pages deployment"
git push origin main
```

## 2. Enable GitHub Pages in repository settings

1. Go to your GitHub repository: https://github.com/marc-hg/castizorestauraciones
2. Click on "Settings" tab
3. In the left sidebar, click on "Pages"
4. Under "Build and deployment", select:
   - Source: "GitHub Actions"
5. The GitHub Actions workflow will automatically deploy your site

## 3. Verify deployment

1. After pushing changes, go to the "Actions" tab in your repository
2. You should see the workflow "Deploy Gatsby site to GitHub Pages" running
3. Once completed, your site will be available at: https://marc-hg.github.io/castizorestauraciones/

## 4. Configure custom domain (optional)

If you have a custom domain:

1. In repository Settings > Pages
2. Enter your custom domain in the "Custom domain" field
3. Follow the DNS configuration instructions
4. Update the `siteUrl`, `host`, and `sitemap` values in `gatsby-config.ts`
5. Update the `CNAME` file with your custom domain

## Troubleshooting

- If you see a 404 page, make sure your GitHub Pages is enabled and the workflow has completed successfully
- If images or links are broken, verify the `pathPrefix` is correctly set to `/castizorestauraciones`
- Check the Actions tab for any deployment errors
