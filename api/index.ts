import express from "express";
import { registerRoutes } from "../server/routes";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

app.use(
  express.json({
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

let routesReady = false;
let initPromise: Promise<void> | null = null;

async function init() {
  if (!initPromise) {
    initPromise = (async () => {
      await registerRoutes(httpServer, app);
      app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        if (!res.headersSent) {
          res.status(status).json({ message });
        }
      });
      routesReady = true;
    })();
  }
  return initPromise;
}

export default async function handler(req: any, res: any) {
  try {
    if (!routesReady) {
      await init();
    }

    // Ensure req.url retains full path on Vercel rewrites
    if (req.originalUrl && req.url !== req.originalUrl && req.originalUrl.startsWith("/api")) {
      req.url = req.originalUrl;
    }

    return await new Promise<void>((resolve, reject) => {
      res.on("finish", resolve);
      res.on("close", resolve);
      res.on("error", reject);
      app(req, res);
    });
  } catch (err: any) {
    console.error("[Vercel API Handler Error]", err);
    if (!res.headersSent) {
      res.status(500).json({ message: "Internal server error", error: String(err?.message || err) });
    }
  }
}
