import express from "express";
import { createServer } from "http";
import { registerRoutes } from "../server/routes";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Restore full original request URL under Vercel rewrites
app.use((req, _res, next) => {
  const matched =
    (typeof req.headers["x-matched-path"] === "string" && req.headers["x-matched-path"]) ||
    (typeof req.originalUrl === "string" && req.originalUrl);
  if (matched && matched.startsWith("/api")) {
    req.url = matched;
  }
  next();
});

// Register all Express routes
registerRoutes(httpServer, app);

// 404 catch-all
app.use((_req: express.Request, res: express.Response) => {
  if (!res.headersSent) res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const status = err.status || err.statusCode || 500;
  if (!res.headersSent) res.status(status).json({ message: err.message || "Internal Server Error" });
});

export default app;
