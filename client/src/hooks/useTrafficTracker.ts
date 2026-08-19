import { useEffect } from "react";
import { useLocation } from "wouter";

export function useTrafficTracker() {
  const [location] = useLocation();

  useEffect(() => {
    // 1. Get or generate persistent deviceId
    let deviceId = localStorage.getItem("nc_device_id");
    if (!deviceId) {
      deviceId = "dev_" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("nc_device_id", deviceId);
    }

    // 2. Detect basic bot parameters (webdriver or user-agent)
    const isBot = 
      navigator.webdriver || 
      /bot|crawler|spider|lighthouse|semrush|ahrefs|headless/i.test(navigator.userAgent);

    const logPayload = {
      deviceId,
      pageUrl: window.location.pathname,
      isBot,
      locationData: null as any
    };

    // 3. Try client-side Geo-IP resolution for precision, fallback to server geo-ip detection
    fetch("https://ipapi.co/json/")
      .then(res => {
        if (!res.ok) throw new Error("geo api error");
        return res.json();
      })
      .then(data => {
        if (data && data.country_name) {
          logPayload.locationData = {
            country: data.country_name,
            countryCode: data.country_code,
            region: data.region,
            city: data.city
          };
        }
      })
      .catch(() => {
        // Silently catch and let server resolve via request headers
      })
      .finally(() => {
        // Send payload to backend logger
        fetch("/api/traffic/log", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(logPayload)
        }).catch(() => {
          // Silent catch
        });
      });
  }, [location]);
}
