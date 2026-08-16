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

  console.log("building client...");
  await viteBuild();

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

  console.log("building vercel api serverless bundle...");
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
    packages: "external",
    logLevel: "info",
  });

  console.log("build completed successfully.");

  // On Vercel: delete all source directories after build so Vercel's
  // deployment scanner only sees dist/ and api/ — eliminates "conflicting
  // paths" errors caused by source .tsx files being treated as static outputs.
  if (process.env.VERCEL) {
    console.log("Vercel env detected – cleaning up source directories...");
    await Promise.all([
      rm("client/src", { recursive: true, force: true }),
      rm("client/public", { recursive: true, force: true }),
      rm("server", { recursive: true, force: true }),
      rm("shared", { recursive: true, force: true }),
      rm("script", { recursive: true, force: true }),
      rm("scripts", { recursive: true, force: true }),
      rm("dist-server", { recursive: true, force: true }),
    ]);
    console.log("Source cleanup complete.");
  }
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
