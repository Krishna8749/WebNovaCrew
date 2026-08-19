import type { Express } from "express";
import { createServer, type Server } from "http";
import { handleContactPost } from "./contact-email";
import { handleJobApply } from "./careers-email";
import {
  handleTeraboxResolve,
  handleTeraboxPlay,
  handleTeraboxStream,
  handleTeraboxTs,
  handleTeraboxFile,
  handleTeraboxDownload,
} from "./terabox";
import {
  handleTeraboxShareCreate,
  handleTeraboxShareGet,
  handleTeraboxShareConfig,
} from "./terabox-shares";
import { requireTeraboxSameOrigin } from "./terabox-guard";
import { logTraffic, getTrafficStatus } from "./traffic-tracker";

const teraboxGuard = requireTeraboxSameOrigin;

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

  app.post("/api/terabox/resolve", teraboxGuard, (req, res, next) => {
    void handleTeraboxResolve(req, res).catch(next);
  });

  app.get("/api/terabox/play/:playbackId", teraboxGuard, (req, res, next) => {
    void handleTeraboxPlay(req, res).catch(next);
  });

  app.get("/api/terabox/file/:playbackId", teraboxGuard, (req, res, next) => {
    void handleTeraboxFile(req, res).catch(next);
  });

  app.options("/api/terabox/file/:playbackId", (_req, res) => {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "Range, Content-Type, Accept, Origin",
      "Access-Control-Max-Age": "86400",
    });
    res.status(204).end();
  });

  app.get("/api/terabox/stream", teraboxGuard, (req, res, next) => {
    void handleTeraboxStream(req, res).catch(next);
  });

  app.get("/api/terabox/ts", teraboxGuard, (req, res, next) => {
    void handleTeraboxTs(req, res).catch(next);
  });

  app.options("/api/terabox/ts", (_req, res) => {
    res.set({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
      "Access-Control-Allow-Headers": "Range, Content-Type, Accept, Origin",
      "Access-Control-Max-Age": "86400",
    });
    res.status(204).end();
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

  app.post("/api/traffic/log", (req, res, next) => {
    void logTraffic(req, res).catch(next);
  });

  app.get("/api/traffic/status", (req, res) => {
    getTrafficStatus(req, res);
  });

  return httpServer;
}
