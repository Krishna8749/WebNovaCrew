import express from "express";
import { registerRoutes } from "./routes";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

app.use(
  express.json({
    verify: (req: any, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

let initPromise: Promise<void> | null = null;

async function ensureRoutes() {
  if (!initPromise) {
    initPromise = registerRoutes(httpServer, app).then(() => {
      app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        res.status(status).json({ message });
      });
    });
  }
  return initPromise;
}

export async function handler(req: express.Request, res: express.Response) {
  try {
    await ensureRoutes();
    return app(req, res);
  } catch (err: any) {
    console.error("[Vercel API Handler Error]", err);
    res.status(500).json({ message: "Internal server error", error: String(err?.message || err) });
  }
}

// Also export as default for Vercel compatibility
export default handler;
