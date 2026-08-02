import type { Express } from "express";
import { createServer, type Server } from "http";
import { handleContactPost } from "./contact-email";
import {
  handleTeraboxResolve,
  handleTeraboxPlay,
  handleTeraboxStream,
  handleTeraboxTs,
  handleTeraboxDownload,
} from "./terabox";
import {
  handleTeraboxShareCreate,
  handleTeraboxShareGet,
  handleTeraboxShareConfig,
} from "./terabox-shares";
import { requireTeraboxSameOrigin } from "./terabox-guard";

const teraboxGuard = requireTeraboxSameOrigin;

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post("/api/contact", (req, res, next) => {
    void handleContactPost(req, res).catch(next);
  });

  app.post("/api/terabox/resolve", teraboxGuard, (req, res, next) => {
    void handleTeraboxResolve(req, res).catch(next);
  });

  app.get("/api/terabox/play/:playbackId", teraboxGuard, (req, res, next) => {
    void handleTeraboxPlay(req, res).catch(next);
  });

  app.get("/api/terabox/stream", teraboxGuard, (req, res, next) => {
    void handleTeraboxStream(req, res).catch(next);
  });

  app.get("/api/terabox/ts", teraboxGuard, (req, res, next) => {
    void handleTeraboxTs(req, res).catch(next);
  });

  app.post("/api/terabox/download", teraboxGuard, (req, res, next) => {
    void handleTeraboxDownload(req, res).catch(next);
  });

  app.post("/api/terabox/share", teraboxGuard, (req, res, next) => {
    void handleTeraboxShareCreate(req, res).catch(next);
  });

  // Public read — share pages must load from any referrer (WhatsApp, Telegram, etc.)
  app.get("/api/terabox/share/:id", (req, res, next) => {
    void handleTeraboxShareGet(req, res).catch(next);
  });

  app.get("/api/terabox/share-config", (req, res, next) => {
    void handleTeraboxShareConfig(req, res).catch(next);
  });

  return httpServer;
}
