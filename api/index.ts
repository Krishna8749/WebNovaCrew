// Re-export the pre-compiled ESM bundle built by script/build.ts
// This file is the Vercel function entry point; api/bundle.mjs is the full compiled handler
export { default, handler } from "./bundle.mjs";
