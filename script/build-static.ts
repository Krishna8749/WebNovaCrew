import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// All routes in the application
const routes = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/contact",
  "/pricing",
  "/careers",
  "/team",
  "/blog",
  // Service Pages - SEO Optimized
  "/services/mobile-app-development",
  "/services/android-app-development",
  "/services/ios-app-development",
  "/services/web-app-development",
  "/services/app-development-india",
  "/services/app-development-kuwait",
  "/services/ai-app-development",
  "/services/real-estate-app-development",
  "/services/ecommerce-app-development",
  "/services/on-demand-app-development",
  "/services/flutter-app-development",
  "/services/react-native-development",
  "/services/erp-crm-development",
  // India Location Pages - Tier 1
  "/locations/app-development-mumbai",
  "/locations/app-development-delhi",
  "/locations/app-development-bangalore",
  "/locations/app-development-hyderabad",
  "/locations/app-development-chennai",
  "/locations/app-development-kolkata",
  "/locations/app-development-pune",
  "/locations/app-development-ahmedabad",
  // India Location Pages - Tier 2
  "/locations/app-development-lucknow",
  "/locations/app-development-jaipur",
  "/locations/app-development-indore",
  "/locations/app-development-bhopal",
  "/locations/app-development-surat",
  "/locations/app-development-vadodara",
  "/locations/app-development-kanpur",
  "/locations/app-development-chandigarh",
  "/locations/app-development-agra",
  "/locations/app-development-varanasi",
  "/locations/app-development-kochi",
  "/locations/app-development-noida",
  "/locations/app-development-gurgaon",
  "/locations/app-development-ghaziabad",
  // India Location Pages - Tier 3
  "/locations/app-development-ranchi",
  "/locations/app-development-raipur",
  "/locations/app-development-dehradun",
  "/locations/app-development-patna",
  "/locations/app-development-nagpur",
  // Kuwait Location Pages
  "/locations/app-development-kuwait-city",
  "/locations/app-development-hawally",
  "/locations/app-development-salmiya",
  "/locations/app-development-ahmadi",
  "/locations/app-development-fahaheel",
  "/locations/app-development-farwaniya",
  "/locations/app-development-jahra",
  "/locations/app-development-mangaf",
  "/locations/app-development-mahboula",
  "/locations/app-development-salwa",
  "/locations/app-development-jabriya",
  "/locations/app-development-mirqab",
  "/locations/app-development-bayan",
  "/locations/app-development-fintas",
  "/locations/app-development-sabah-al-salem",
  "/locations/app-development-mubarak-al-kabeer",
  // Kuwait Industry Pages
  "/locations/kuwait-ecommerce-app-development",
  "/locations/kuwait-restaurant-app-development",
  "/locations/kuwait-real-estate-app-development",
  "/locations/kuwait-logistics-app-development",
];

console.log("Building static site for Hostinger...\n");

// Step 1: Build the client using the existing build script
console.log("Step 1: Building client assets...");
execSync("npm run build", { 
  cwd: process.cwd(),
  stdio: "inherit" 
});

const distDir = path.resolve(process.cwd(), "dist/public");
const indexHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

// Step 2: Create HTML files for each route
console.log("\nStep 2: Creating static HTML files for each route...");

for (const route of routes) {
  if (route === "/") continue; // index.html already exists
  
  const routePath = route.slice(1); // Remove leading slash
  const routeDir = path.join(distDir, routePath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  // Copy index.html to route directory
  fs.writeFileSync(path.join(routeDir, "index.html"), indexHtml);
  console.log(`  ✓ Created ${routePath}/index.html`);
}

// Step 3: Create _redirects file for SPA fallback (optional for some hosts)
console.log("\nStep 3: Creating redirect rules...");
const redirects = `# Redirect all routes to index.html for SPA
/*    /index.html   200
`;
fs.writeFileSync(path.join(distDir, "_redirects"), redirects);

// Step 4: Create .htaccess for Apache servers (Hostinger uses Apache)
console.log("Step 4: Creating .htaccess for Apache...");
const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rewrite everything else to index.html
  RewriteRule ^ index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
`;
fs.writeFileSync(path.join(distDir, ".htaccess"), htaccess);

console.log("\n✅ Static build complete!");
console.log(`\nOutput directory: ${distDir}`);
console.log("\nTo deploy to Hostinger:");
console.log("1. Go to Hostinger File Manager or use FTP");
console.log("2. Navigate to public_html folder");
console.log("3. Upload all contents from dist/public/");
console.log("4. Your site will be live!\n");

// List all generated files
console.log("Generated files:");
const listFiles = (dir: string, prefix = "") => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      console.log(`  ${prefix}📁 ${file}/`);
      listFiles(filePath, prefix + "  ");
    } else {
      const size = (stat.size / 1024).toFixed(2);
      console.log(`  ${prefix}📄 ${file} (${size} KB)`);
    }
  }
};
listFiles(distDir);
