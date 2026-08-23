import type { Express } from "express";
import { createServer, type Server } from "http";
import { handleContactPost } from "./contact-email";
import { handleJobApply } from "./careers-email";
import { logTraffic, getTrafficStatus } from "./traffic-tracker";

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

  app.post("/api/traffic/log", (req, res, next) => {
    void logTraffic(req, res).catch(next);
  });

  app.get("/api/traffic/status", (req, res) => {
    getTrafficStatus(req, res);
  });

  return httpServer;
}
