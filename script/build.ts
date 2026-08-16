import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, cp, mkdir, writeFile, copyFile } from "fs/promises";
import path from "path";

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

/** Recursively copy a directory tree. */
async function copyDir(src: string, dest: string): Promise<void> {
  const { readdir, stat } = await import("fs/promises");
  await mkdir(dest, { recursive: true });
  const entries = await readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await copyFile(srcPath, destPath);
    }
  }
}

async function buildAll() {
  await rm("dist", { recursive: true, force: true });
  await rm("dist-server", { recursive: true, force: true });

  // ── 1. Build Vite frontend ──────────────────────────────────────────────
  console.log("building client...");
  await viteBuild();

  // ── 2. Build local dev server bundle ───────────────────────────────────
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

  // ── 3. Build fully self-contained Vercel API bundle ────────────────────
  // Bundle ALL deps into the function so no node_modules are needed at runtime.
  console.log("building vercel api bundle...");
  await esbuild({
    entryPoints: ["server/vercel-handler.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "api/index.js",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: false,
    // No packages:"external" — bundle everything so the serverless
    // function is fully self-contained (no node_modules required).
    logLevel: "info",
  });

  console.log("build completed successfully.");

  // ── 4. Vercel Build Output API v3 ──────────────────────────────────────
  // When .vercel/output/ exists, Vercel deploys ONLY from that directory.
  // Source files (client/src, server/, etc.) are NEVER scanned for deployment.
  // This permanently eliminates the "conflicting paths" error.
  if (process.env.VERCEL) {
    console.log("Writing Vercel Build Output API v3 structure...");

    const out = ".vercel/output";
    await rm(out, { recursive: true, force: true });

    // 4a. Static files from dist/
    await mkdir(`${out}/static`, { recursive: true });
    await copyDir("dist", `${out}/static`);

    // 4b. Serverless function
    const funcDir = `${out}/functions/api.func`;
    await mkdir(funcDir, { recursive: true });
    await copyFile("api/index.js", `${funcDir}/index.js`);

    // 4c. Function metadata
    await writeFile(
      `${funcDir}/.vc-config.json`,
      JSON.stringify(
        {
          runtime: "nodejs20.x",
          handler: "index.js",
          maxDuration: 30,
          launcherType: "Nodejs",
          supportsMultiPayloads: false,
        },
        null,
        2
      )
    );

    // 4d. Deployment routing — all /api/* → function, everything else → SPA
    await writeFile(
      `${out}/config.json`,
      JSON.stringify(
        {
          version: 3,
          routes: [
            // API requests → serverless function
            { src: "^/api(/.*)?$", dest: "/api" },
            // Static assets served as-is
            { handle: "filesystem" },
            // SPA fallback
            { src: "/.*", dest: "/index.html" },
          ],
        },
        null,
        2
      )
    );

    console.log("Vercel Build Output written to .vercel/output/");
    console.log("  → .vercel/output/static/   (frontend assets)");
    console.log("  → .vercel/output/functions/ (API serverless function)");
    console.log("  → .vercel/output/config.json (routing)");
  }
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
