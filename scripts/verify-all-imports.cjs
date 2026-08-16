const fs = require('fs');
const path = require('path');

const projectRoot = process.cwd();
const files = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['node_modules', 'dist', 'dist-server', '.git', '.vercel', '.vite-cache', '.tempmediaStorage', '.agents'].includes(entry.name)) continue;
      walk(fullPath);
    } else if (/\.(tsx?|jsx?|mjs|cjs)$/.test(entry.name)) {
      if (['blogPosts.ts', 'caseStudies.ts', 'blog-posts.ts', 'case-studies.ts'].includes(entry.name)) continue;
      files.push(fullPath);
    }
  }
}

walk(projectRoot);

const errors = [];
const importRegex = /(?:import\s+(?:[\s\S]*?from\s+)?|export\s+[\s\S]*?from\s+|import\s*\(\s*)['"]([^'"]+)['"]/g;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Strip code blocks and block comments to avoid false matches in markdown or documentation
  content = content.replace(/```[\s\S]*?```/g, '');
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  content = content.replace(/\/\/.*/g, '');
  content = content.replace(/`[\s\S]*?`/g, ''); // Strip template literals
  
  
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const specifier = match[1];
    
    // Skip npm package names
    if (!specifier.startsWith('.') && !specifier.startsWith('@/') && !specifier.startsWith('@shared') && !specifier.startsWith('@assets')) {
      continue;
    }

    let targetPath;
    if (specifier.startsWith('.')) {
      targetPath = path.resolve(path.dirname(file), specifier);
    } else if (specifier.startsWith('@/')) {
      targetPath = path.resolve(projectRoot, 'client/src', specifier.slice(2));
    } else if (specifier.startsWith('@shared/')) {
      targetPath = path.resolve(projectRoot, 'shared', specifier.slice(8));
    } else if (specifier === '@shared') {
      targetPath = path.resolve(projectRoot, 'shared/index');
    } else if (specifier.startsWith('@assets/')) {
      targetPath = path.resolve(projectRoot, 'attached_assets', specifier.slice(8));
    }

    const exts = ['', '.tsx', '.ts', '.jsx', '.js', '.json', '.css', '/index.tsx', '/index.ts', '/index.jsx', '/index.js'];
    const exists = exts.some(ext => fs.existsSync(targetPath + ext));

    if (!exists) {
      errors.push({
        file: path.relative(projectRoot, file),
        specifier,
        resolved: path.relative(projectRoot, targetPath)
      });
    }
  }
}

if (errors.length > 0) {
  console.error('FAILED: Found broken imports:');
  console.error(JSON.stringify(errors, null, 2));
  process.exit(1);
} else {
  console.log('SUCCESS: All ' + files.length + ' files have 100% valid imports!');
}
