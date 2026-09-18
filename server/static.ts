import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "../dist");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // Serve index.html for all unmatched routes (SPA fallback)
  app.use("*", (_req, res) => {
    const indexHtml = path.join(distPath, "index.html");
    res.status(200).set({ "Content-Type": "text/html" }).sendFile(indexHtml);
  });
}
