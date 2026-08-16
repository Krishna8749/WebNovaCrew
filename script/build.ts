import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile } from "fs/promises";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "@neondatabase/serverless",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function buildAll() {
  await rm("dist", { recursive: true, force: true });
  await rm("dist-server", { recursive: true, force: true });

  // ── 1. Build Vite frontend ──────────────────────────────────────────────
  console.log("building client...");
  await viteBuild();

  // ── 2. Build local dev/prod server bundle ───────────────────────────────
  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist-server/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });

  // ── 3. Build Vercel Serverless API handler ─────────────────────────────
  console.log("building vercel api bundle...");
  await esbuild({
    entryPoints: ["server/vercel-handler.ts"],
    platform: "node",
    bundle: true,
    format: "esm",
    outfile: "api/bundle.mjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    banner: {
      js: [
        `import { createRequire as __createRequire } from 'module';`,
        `import { fileURLToPath as __fileURLToPath } from 'url';`,
        `import { dirname as __dirname2 } from 'path';`,
        `const require = __createRequire(import.meta.url);`,
        `const __filename = __fileURLToPath(import.meta.url);`,
        `const __dirname = __dirname2(__filename);`,
      ].join('\n'),
    },
    minify: false,
    logLevel: "info",
  });

  console.log("build completed successfully.");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
