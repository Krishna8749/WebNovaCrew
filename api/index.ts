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

// Normalizer middleware to ensure full path on Vercel rewrites
app.use((req, _res, next) => {
  if (req.originalUrl && req.url !== req.originalUrl && req.originalUrl.startsWith("/api")) {
    req.url = req.originalUrl;
  }
  next();
});

// Synchronously register all Express API routes immediately on cold start
registerRoutes(httpServer, app);

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  if (!res.headersSent) {
    res.status(status).json({ message });
  }
});

// Directly export Express app for native @vercel/node handling
export default app;
