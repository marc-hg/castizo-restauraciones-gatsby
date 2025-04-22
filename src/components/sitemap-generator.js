const fs = require("fs");
const path = require("path");

// Update this with your actual domain
const BASE_URL = "https://castizorestauraciones.com";

// Define your site pages
const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/servicios", priority: "0.9", changefreq: "weekly" },
  { url: "/casos-de-exito", priority: "0.8", changefreq: "monthly" },
  { url: "/sobre-nosotros", priority: "0.7", changefreq: "monthly" },
  { url: "/contacto", priority: "0.7", changefreq: "monthly" },
];

// Generate sitemap content
const generateSitemap = () => {
  const timestamp = new Date().toISOString();

  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach((page) => {
    sitemap += "  <url>\n";
    sitemap += `    <loc>${BASE_URL}${page.url}</loc>\n`;
    sitemap += `    <lastmod>${timestamp}</lastmod>\n`;
    sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
    sitemap += `    <priority>${page.priority}</priority>\n`;
    sitemap += "  </url>\n";
  });

  sitemap += "</urlset>";
  return sitemap;
};

// Save sitemap to file
const saveSitemap = () => {
  const sitemap = generateSitemap();
  const publicDir = path.join(__dirname, "../../public");

  // Create public directory if it doesn't exist
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
  console.log("Sitemap generated successfully.");
};

// Execute the sitemap generation
saveSitemap();
