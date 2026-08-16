import express from "express";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let initPromise: Promise<void> | null = null;
let initError: string | null = null;

async function lazyInit() {
  if (!initPromise) {
    initPromise = (async () => {
      try {
        const { registerRoutes } = await import("../server/routes");
        await registerRoutes(httpServer, app);
        
        // 404 handler for API routes
        app.use((_req, res) => {
          if (!res.headersSent) {
            res.status(404).json({ error: "Route not found" });
          }
        });
      } catch (err: any) {
        initError = err?.stack || String(err);
        console.error("[API Init Failure]", err);
        throw err;
      }
    })();
  }
  return initPromise;
}

// Simple ping endpoint that is always safe
app.get("/api/ping", (_req, res) => {
  res.json({ pong: true, time: new Date().toISOString() });
});

// All other API requests trigger lazy routing initialization
app.all("/api/*", async (req, res, next) => {
  try {
    await lazyInit();
    next();
  } catch (err: any) {
    res.status(500).json({
      error: "Failed to initialize API routes",
      details: initError || String(err),
    });
  }
});

export default app;
