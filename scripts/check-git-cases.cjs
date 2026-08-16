const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 1. Get all files directly from git ls-files (which preserves exact casing in Git repo)
const gitFiles = execSync('git ls-files', { encoding: 'utf8' })
  .split('\n')
  .map(s => s.trim().replace(/\\/g, '/'))
  .filter(Boolean);

console.log('Total git-tracked files:', gitFiles.length);

const gitFileMap = new Map(); // lowercase -> exact git path
for (const f of gitFiles) {
  gitFileMap.set(f.toLowerCase(), f);
}

// 2. Check every ts/tsx/js/jsx file in the repository
const sourceFiles = gitFiles.filter(f => /\.(tsx?|jsx?|mjs|cjs)$/.test(f) && !f.startsWith('node_modules'));

const errors = [];
const importRegex = /(?:import\s+(?:[\s\S]*?from\s+)?|export\s+[\s\S]*?from\s+|import\s*\(\s*)['"]([^'"]+)['"]/g;

for (const relFile of sourceFiles) {
  let content = fs.readFileSync(relFile, 'utf8');

  // Strip comments and backtick templates to avoid sample code matching
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  content = content.replace(/\/\/.*/g, '');
  content = content.replace(/`[\s\S]*?`/g, '');

  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const importSpec = match[1];

    if (!importSpec.startsWith('.') && !importSpec.startsWith('@/')) {
      continue;
    }

    let resolvedRel;
    if (importSpec.startsWith('.')) {
      resolvedRel = path.posix.normalize(path.posix.join(path.posix.dirname(relFile), importSpec));
    } else if (importSpec.startsWith('@/')) {
      resolvedRel = path.posix.normalize(path.posix.join('client/src', importSpec.slice(2)));
    }

    const possibleExtensions = ['', '.tsx', '.ts', '.jsx', '.js', '.json', '.css', '/index.tsx', '/index.ts', '/index.jsx', '/index.js'];

    let foundExact = null;
    let foundCaseMismatch = null;

    for (const ext of possibleExtensions) {
      const candidate = resolvedRel + ext;
      const lower = candidate.toLowerCase();
      if (gitFileMap.has(lower)) {
        const gitPath = gitFileMap.get(lower);
        if (gitPath === candidate) {
          foundExact = gitPath;
          break;
        } else {
          foundCaseMismatch = { expected: candidate, actualInGit: gitPath };
        }
      }
    }

    if (!foundExact) {
      if (foundCaseMismatch) {
        errors.push({
          file: relFile,
          import: importSpec,
          type: 'CASE_MISMATCH',
          expected: foundCaseMismatch.expected,
          actualInGit: foundCaseMismatch.actualInGit,
        });
      } else {
        errors.push({
          file: relFile,
          import: importSpec,
          type: 'NOT_FOUND_IN_GIT',
          resolved: resolvedRel,
        });
      }
    }
  }
}

console.log('--- SCAN COMPLETE ---');
console.log('Errors count:', errors.length);
if (errors.length > 0) {
  console.log(JSON.stringify(errors, null, 2));
  process.exit(1);
} else {
  console.log('SUCCESS: All imports match git files with 100% exact case!');
}
