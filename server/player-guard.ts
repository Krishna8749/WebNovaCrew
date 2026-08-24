import type { Request, Response, NextFunction } from "express";

/**
 * User-agent fragments that identify bots, crawlers, and ad verification
 * agents that should be blocked from seeing player/share page content.
 *
 * Includes:
 * - Google AdSense / AdsBot / Mediapartners
 * - Googlebot / Bingbot / Yandexbot / Baiduspider
 * - Common scraping libraries: python-requests, scrapy, curl, wget, axios, got
 * - Headless browsers: HeadlessChrome, PhantomJS, Selenium
 * - Monitoring bots: UptimeRobot, Pingdom, etc.
 */
const BOT_UA_PATTERNS: RegExp[] = [
  /Googlebot/i,
  /AdsBot-Google/i,
  /Mediapartners-Google/i,
  /Google-InspectionTool/i,
  /APIs-Google/i,
  /Bingbot/i,
  /Slurp/i,         // Yahoo
  /DuckDuckBot/i,
  /Baiduspider/i,
  /YandexBot/i,
  /Sogou/i,
  /Exabot/i,
  /facebot/i,
  /facebookexternalhit/i,
  /LinkedInBot/i,
  /Twitterbot/i,
  /WhatsApp/i,
  /TelegramBot/i,
  /Discordbot/i,
  /Slackbot/i,
  /python-requests/i,
  /python-urllib/i,
  /Scrapy/i,
  /curl\//i,
  /wget\//i,
  /axios\//i,
  /got\//i,
  /node-fetch/i,
  /node-superagent/i,
  /java\//i,
  /okhttp/i,
  /Postman/i,
  /insomnia/i,
  /HeadlessChrome/i,
  /PhantomJS/i,
  /Selenium/i,
  /WebdriverIO/i,
  /Puppeteer/i,
  /Playwright/i,
  /UptimeRobot/i,
  /Pingdom/i,
  /StatusCake/i,
  /DatadogSynthetics/i,
  /SiteCheck/i,
  /MJ12bot/i,
  /SemrushBot/i,
  /AhrefsBot/i,
  /DotBot/i,
  /Rogerbot/i,
  /CCBot/i,
  /archive\.org_bot/i,
  /ia_archiver/i,
];

/** Block request if no UA or looks like a bot/scraper */
function isBotOrScraper(ua: string | undefined): boolean {
  if (!ua || ua.trim().length < 5) return true; // empty UA = bot
  return BOT_UA_PATTERNS.some((pattern) => pattern.test(ua));
}

const BLOCKED_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>403 Forbidden</title>
  <meta name="robots" content="noindex, nofollow, noarchive, nosnippet" />
  <meta name="googlebot" content="noindex, nofollow" />
  <meta name="Mediapartners-Google" content="noindex" />
</head>
<body>
  <h1>403 - Access Restricted</h1>
  <p>Automated access to this page is not permitted.</p>
</body>
</html>`;

/**
 * Express middleware that blocks bots and scraping agents from accessing
 * the video player and share pages.
 *
 * Usage: app.use(["/r", "/s", "/v", "/terabox"], requireHumanBrowser);
 */
export function requireHumanBrowser(req: Request, res: Response, next: NextFunction) {
  const ua = req.headers["user-agent"];

  if (isBotOrScraper(ua)) {
    res
      .status(403)
      .set({
        "Content-Type": "text/html; charset=utf-8",
        "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
        "Cache-Control": "no-store, no-cache",
      })
      .send(BLOCKED_HTML);
    return;
  }

  // Set response headers that prevent content caching/indexing by proxies
  res.set({
    "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet, noimageindex",
    "Cache-Control": "private, no-store, no-cache, must-revalidate",
    "Pragma": "no-cache",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Content-Security-Policy": [
      "default-src 'self'",
      "media-src 'self' blob: https://*.1024terabox.com https://*.terabox.com",
      "img-src 'self' data: blob: https://*.1024terabox.com https://*.terabox.com",
      "script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline'",
      "connect-src 'self' https://*.1024terabox.com https://*.terabox.com",
      "frame-ancestors 'none'",
    ].join("; "),
    // Prevent embedding in iframes (screenshot via iframe)
    "Permissions-Policy": "clipboard-read=(), clipboard-write=(), camera=(), microphone=(), display-capture=()",
  });

  next();
}
