import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { cleanLowCpcKeywords } from "./ad-cleaner";

function setServerPremiumCookies(res: express.Response) {
  const now = Date.now();
  const rand = () => Math.floor(Math.random() * 999999999);
  const oneMonth = 30 * 24 * 60 * 60 * 1000;
  const cookieOptions: express.CookieOptions = {
    maxAge: oneMonth,
    httpOnly: false,
    path: "/",
    sameSite: "lax",
  };

  res.cookie("_ga", `GA1.2.${rand()}.${Math.floor(now / 1000)}`, cookieOptions);
  res.cookie("_gid", `GA1.2.${rand()}.${Math.floor(now / 1000)}`, cookieOptions);
  res.cookie("_gat", "1", cookieOptions);
  res.cookie("_gcl_au", `1.1.${rand()}.${Math.floor(now / 1000)}`, cookieOptions);
  res.cookie(
    "_gcl_aw",
    `GCL.${Math.floor(now / 1000)}.${Math.random().toString(36).substring(2, 10)}`,
    cookieOptions,
  );
  res.cookie("_fbp", `fb.1.${now}.${rand()}`, cookieOptions);
  res.cookie("_uetsid", Math.random().toString(36).substring(2, 18), cookieOptions);
  res.cookie("_uetvid", Math.random().toString(36).substring(2, 18), cookieOptions);

  res.cookie("user_value", "ultra_high_tier_buyer", cookieOptions);
  res.cookie("value_segment", "top_1_percent", cookieOptions);
  res.cookie("income_bracket", "top_1_percent", cookieOptions);
  res.cookie("net_worth_tier", "ultra_high_net_worth", cookieOptions);
  res.cookie("purchase_intent", "immediate_purchase", cookieOptions);
  res.cookie("engagement", "active_investor", cookieOptions);
  res.cookie("premium_member", "true", cookieOptions);
  res.cookie(
    "cart_items",
    JSON.stringify([
      { item: "premium_product", value: 299.99 },
      { item: "luxury_item", value: 599.99 },
    ]),
    cookieOptions,
  );
  res.cookie(
    "preferences",
    JSON.stringify({
      language: "en-US",
      currency: "USD",
      timezone: "America/New_York",
      premium_member: true,
    }),
    cookieOptions,
  );
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "../dist");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  const indexHtml = fs.readFileSync(path.join(distPath, "index.html"), "utf8");

  app.use(express.static(distPath));

  // Explicitly return 410 Gone / 404 for removed video share & player routes for AdSense / search bots
  app.all(["/r/*", "/s/*", "/v/*", "/terabox*", "/terabox-online-player*"], (_req, res) => {
    res.status(410).send("<!DOCTYPE html><html><head><title>410 Gone</title><meta name=\"robots\" content=\"noindex, nofollow\" /></head><body><h1>410 - Page Permanently Removed</h1><p>This content has been permanently removed.</p></body></html>");
  });

  app.use("*", (req, res) => {
    setServerPremiumCookies(res);
    const cleanedHtml = cleanLowCpcKeywords(indexHtml);
    res.status(200).set({ "Content-Type": "text/html" }).send(cleanedHtml);
  });
}


