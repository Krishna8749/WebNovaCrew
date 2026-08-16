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

// Register all Express API routes
registerRoutes(httpServer, app);

// 404 catch-all for unmatched API requests so requests never hang
app.use((_req: express.Request, res: express.Response) => {
  if (!res.headersSent) {
    res.status(404).json({ message: "API route not found" });
  }
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
