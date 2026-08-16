const fs = require('fs');
const path = require('path');

const glob = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? glob(path.join(dir, e.name))
      : /\.(tsx|ts|jsx|js)$/.test(e.name)
      ? [path.join(dir, e.name)]
      : []
  );

// Map of real casing on disk
const realPathMap = new Map();
function indexRealPaths(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    realPathMap.set(full.toLowerCase(), full);
    if (e.isDirectory()) {
      indexRealPaths(full);
    }
  }
}

const clientDir = path.resolve('client/src');
indexRealPaths(clientDir);

const allFiles = glob(clientDir);
console.log('Total source files:', allFiles.length);

const errors = [];
for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf8');
  const regex = /from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const importPath = match[1];
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
        path.join(resolvedBase, 'index.tsx'),
        path.join(resolvedBase, 'index.ts'),
        path.join(resolvedBase, 'index.jsx'),
        path.join(resolvedBase, 'index.js'),
      ];

      let found = false;
      let caseMismatch = false;
      for (const c of candidates) {
        if (realPathMap.has(c.toLowerCase())) {
          const exactReal = realPathMap.get(c.toLowerCase());
          if (exactReal !== c) {
            caseMismatch = true;
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
        errors.push({
          file: path.relative(process.cwd(), file),
          importPath,
          type: 'NOT_FOUND',
        });
      }
    }
  }
}

console.log('Errors count:', errors.length);
if (errors.length > 0) {
  console.log(JSON.stringify(errors, null, 2));
} else {
  console.log('All relative and @/ imports are 100% valid with exact case matching!');
}
