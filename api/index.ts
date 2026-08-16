import express from "express";
import { createServer } from "http";

// Statically import all backend modules to force Vercel to bundle them
import * as guard from "../server/terabox-guard";
import * as contact from "../server/contact-email";
import * as careers from "../server/careers-email";
import * as shares from "../server/terabox-shares";
import * as terabox from "../server/terabox";
import { registerRoutes } from "../server/routes";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Restore full original request URL on Vercel
app.use((req, _res, next) => {
  const matched =
    (typeof req.headers["x-matched-path"] === "string" && req.headers["x-matched-path"]) ||
    (typeof req.headers["x-now-route-matches"] === "string" && req.headers["x-now-route-matches"]) ||
    (typeof req.originalUrl === "string" && req.originalUrl);

  if (matched && matched.startsWith("/api")) {
    req.url = matched;
  }
  next();
});

let routesReady = false;
let initError: string | null = null;

function initRoutes() {
  if (routesReady) return;
  try {
    // Register all routes
    registerRoutes(httpServer, app);
    
    // 404 handler
    app.use((_req, res) => {
      if (!res.headersSent) {
        res.status(404).json({ error: "Route not found" });
      }
    });
    
    routesReady = true;
  } catch (err: any) {
    initError = err?.stack || String(err);
    console.error("[API Init Failure]", err);
  }
}

// Diagnostics route
app.get("/api/ping", (_req, res) => {
  res.json({ pong: true, time: new Date().toISOString() });
});

// Main API request handler
app.all("/api/*", (req, res, next) => {
  initRoutes();
  if (initError) {
    res.status(500).json({
      error: "Failed to initialize API routes",
      details: initError,
    });
    return;
  }
  app(req, res, next);
});

// Error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  if (!res.headersSent) {
    res.status(status).json({ message });
  }
});

export default app;
