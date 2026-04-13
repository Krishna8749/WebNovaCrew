import type { Express } from "express";
import { createServer, type Server } from "http";
import { handleContactPost } from "./contact-email";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // prefix all routes with /api

  app.post("/api/contact", (req, res, next) => {
    void handleContactPost(req, res).catch(next);
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
