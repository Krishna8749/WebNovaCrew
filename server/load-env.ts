/**
 * Loads project root `.env` into process.env (no dotenv package).
 * Skips keys already set in the environment.
 */
import fs from "fs";
import path from "path";

function loadEnv(): void {
  // Use process.cwd() which works in both ESM and CJS
  const envPath = path.resolve(process.cwd(), ".env");
  if (!fs.existsSync(envPath)) return;
  let content = fs.readFileSync(envPath, "utf-8");
  if (content.charCodeAt(0) === 0xfeff) content = content.slice(1);
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    val = val.trim();
    if (process.env[key] === undefined) process.env[key] = val;
  }
}

loadEnv();
