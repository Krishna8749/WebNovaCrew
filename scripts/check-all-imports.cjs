const fs = require('fs');
const path = require('path');

const allFiles = [];
function collectFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'node_modules' && e.name !== 'dist' && e.name !== 'dist-server' && !e.name.startsWith('.')) {
        collectFiles(full);
      }
    } else if (/\.(tsx|ts|jsx|js|cjs|mjs)$/.test(e.name)) {
      allFiles.push(full);
    }
  }
}

const realPathMap = new Map();
function indexRealPaths(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    realPathMap.set(full.toLowerCase(), full);
    if (e.isDirectory()) {
      if (e.name !== 'node_modules' && e.name !== 'dist' && e.name !== 'dist-server' && !e.name.startsWith('.')) {
        indexRealPaths(full);
      }
    }
  }
}

collectFiles(process.cwd());
indexRealPaths(process.cwd());

console.log('Total tracked files indexed:', allFiles.length);

const errors = [];
for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Match standard ES imports and dynamic imports
  const regex = /(?:import|export)\s*(?:[\s\S]*?from\s+)?['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
    
    // Ignore external packages
    if (!importPath.startsWith('.') && !importPath.startsWith('@/')) {
      continue;
    }

    let resolvedBase = null;
    if (importPath.startsWith('.')) {
      resolvedBase = path.resolve(path.dirname(file), importPath);
    } else if (importPath.startsWith('@/')) {
      resolvedBase = path.resolve('client/src', importPath.slice(2));
    }

    if (resolvedBase) {
      const candidates = [
        resolvedBase,
        resolvedBase + '.tsx',
        resolvedBase + '.ts',
        resolvedBase + '.jsx',
        resolvedBase + '.js',
        resolvedBase + '.cjs',
        resolvedBase + '.mjs',
        path.join(resolvedBase, 'index.tsx'),
        path.join(resolvedBase, 'index.ts'),
        path.join(resolvedBase, 'index.jsx'),
        path.join(resolvedBase, 'index.js'),
      ];

      let found = false;
      for (const c of candidates) {
        if (realPathMap.has(c.toLowerCase())) {
          const exactReal = realPathMap.get(c.toLowerCase());
          if (exactReal !== c) {
            errors.push({
              file: path.relative(process.cwd(), file),
              importPath,
              expected: path.relative(process.cwd(), exactReal),
              type: 'CASE_MISMATCH',
            });
          }
          found = true;
          break;
        }
      }

      if (!found) {
        // Exclude template string matches or dynamic variables if possible
        if (!importPath.includes('${') && !importPath.includes('*')) {
          errors.push({
            file: path.relative(process.cwd(), file),
            importPath,
            type: 'NOT_FOUND',
          });
        }
      }
    }
  }
}

console.log('Errors count:', errors.length);
if (errors.length > 0) {
  console.log(JSON.stringify(errors, null, 2));
} else {
  console.log('All imports are 100% valid with exact case matching!');
}
