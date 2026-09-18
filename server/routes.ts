import type { Express } from "express";
import { createServer, type Server } from "http";
import { handleContactPost } from "./contact-email.js";
import { handleJobApply } from "./careers-email.js";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post("/api/contact", (req, res, next) => {
    void handleContactPost(req, res).catch(next);
  });

  app.post("/api/careers/apply", (req, res, next) => {
    void handleJobApply(req, res).catch(next);
  });

  return httpServer;
}
