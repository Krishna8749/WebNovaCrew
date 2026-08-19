import type { Request, Response } from "express";

export interface Visitor {
  deviceId: string;
  ip: string;
  userAgent: string;
  deviceType: string;
  browser: string;
  os: string;
  country: string;
  countryCode: string;
  region: string;
  city: string;
  isBot: boolean;
  pageUrl: string;
  timestamp: number;
}

// Store visitor logs in memory
const visitors = new Map<string, Visitor>();
let totalHits = 0;

// Simple user agent parser for bot detection, browser, OS, and device type
function parseUserAgent(ua: string) {
  const lowerUA = ua.toLowerCase();
  
  // 1. Bot detection
  const botKeywords = [
    "bot", "crawler", "spider", "googlebot", "bingbot", "yandexbot",
    "baiduspider", "facebookexternalhit", "twitterbot", "rogerbot",
    "linkedinbot", "embedly", "quora link preview", "showyoubot",
    "outbrain", "pinterest/0.", "developers.google.com/+/web/snippet",
    "slackbot", "vkshare", "w3c_validator", "redditbot", "applebot",
    "whatsapp", "telegrambot", "curl", "wget", "python", "node-fetch",
    "headlesschrome", "lighthouse", "semrushbot", "ahrefsbot"
  ];
  
  const isBot = botKeywords.some(keyword => lowerUA.includes(keyword));

  // 2. Device Type detection
  let deviceType = "Desktop";
  if (lowerUA.includes("mobi") || lowerUA.includes("android") || lowerUA.includes("iphone")) {
    deviceType = "Mobile";
  } else if (lowerUA.includes("ipad") || lowerUA.includes("tablet") || lowerUA.includes("playbook")) {
    deviceType = "Tablet";
  }

  // 3. OS detection
  let os = "Unknown OS";
  if (lowerUA.includes("windows")) os = "Windows";
  else if (lowerUA.includes("android")) os = "Android";
  else if (lowerUA.includes("iphone") || lowerUA.includes("ipad") || lowerUA.includes("ipod")) os = "iOS";
  else if (lowerUA.includes("mac os") || lowerUA.includes("macintosh")) os = "macOS";
  else if (lowerUA.includes("linux")) os = "Linux";

  // 4. Browser detection
  let browser = "Unknown Browser";
  if (lowerUA.includes("chrome") && !lowerUA.includes("chromium") && !lowerUA.includes("edg")) browser = "Chrome";
  else if (lowerUA.includes("safari") && !lowerUA.includes("chrome")) browser = "Safari";
  else if (lowerUA.includes("firefox")) browser = "Firefox";
  else if (lowerUA.includes("edg")) browser = "Edge";
  else if (lowerUA.includes("opr") || lowerUA.includes("opera")) browser = "Opera";

  return { isBot, deviceType, os, browser };
}

// Log visitor traffic
export async function logTraffic(req: Request, res: Response) {
  try {
    totalHits++;
    const { deviceId, pageUrl, clientIp, locationData } = req.body;
    
    if (!deviceId) {
      return res.status(400).json({ error: "deviceId is required" });
    }

    const userAgent = req.headers["user-agent"] || "Unknown User Agent";
    const parsedUA = parseUserAgent(userAgent);
    
    // Resolve IP address
    let ip = clientIp || req.headers["x-forwarded-for"] || req.socket.remoteAddress || "127.0.0.1";
    if (typeof ip === "string" && ip.includes(",")) {
      ip = ip.split(",")[0].trim();
    }
    if (ip === "::1" || ip === "::ffff:127.0.0.1") {
      ip = "127.0.0.1";
    }

    // Default location values
    let country = "Unknown Country";
    let countryCode = "UN";
    let region = "Unknown State";
    let city = "Unknown City";

    // If client geo-resolved location, use it. Otherwise, try server fallback
    if (locationData && locationData.country) {
      country = locationData.country;
      countryCode = locationData.countryCode || "UN";
      region = locationData.region || "Unknown State";
      city = locationData.city || "Unknown City";
    }

    const visitor: Visitor = {
      deviceId,
      ip: String(ip),
      userAgent,
      deviceType: parsedUA.deviceType,
      browser: parsedUA.browser,
      os: parsedUA.os,
      country,
      countryCode,
      region,
      city,
      isBot: parsedUA.isBot || Boolean(req.body.isBot),
      pageUrl: pageUrl || "/",
      timestamp: Date.now()
    };

    visitors.set(deviceId, visitor);
    res.json({ success: true, isBot: visitor.isBot });
  } catch (error) {
    console.error("[TrafficTracker] Error logging traffic:", error);
    res.status(500).json({ error: "Failed to log traffic" });
  }
}

// Fetch real-time traffic statistics
export function getTrafficStatus(req: Request, res: Response) {
  try {
    const list = Array.from(visitors.values());
    const now = Date.now();
    const activeThreshold = 5 * 60 * 1000; // active in last 5 minutes
    
    const activeVisitors = list.filter(v => now - v.timestamp < activeThreshold);
    const botCount = list.filter(v => v.isBot).length;
    const realCount = list.filter(v => !v.isBot).length;

    // Compile country stats
    const countryStats: Record<string, { name: string; count: number }> = {};
    list.forEach(v => {
      if (!countryStats[v.countryCode]) {
        countryStats[v.countryCode] = { name: v.country, count: 0 };
      }
      countryStats[v.countryCode].count++;
    });

    // Compile active page stats
    const pageStats: Record<string, number> = {};
    list.forEach(v => {
      pageStats[v.pageUrl] = (pageStats[v.pageUrl] || 0) + 1;
    });

    // Sort list by timestamp descending
    const sortedList = list.sort((a, b) => b.timestamp - a.timestamp).slice(0, 100);

    res.json({
      success: true,
      stats: {
        totalHits,
        uniqueVisitors: list.length,
        activeNow: activeVisitors.length,
        botCount,
        realCount,
        countryStats,
        pageStats
      },
      visitors: sortedList
    });
  } catch (error) {
    console.error("[TrafficTracker] Error getting traffic status:", error);
    res.status(500).json({ error: "Failed to fetch traffic stats" });
  }
}
