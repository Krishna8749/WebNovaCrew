import { useEffect, useState } from "react";
import { 
  Users, 
  Bot, 
  UserCheck, 
  Globe, 
  Activity, 
  RefreshCw, 
  Search, 
  Copy, 
  MapPin, 
  Laptop, 
  Smartphone, 
  Tablet, 
  HelpCircle,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { SEO } from "@/components/seo/Head";

interface Visitor {
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

interface TrafficData {
  stats: {
    totalHits: number;
    uniqueVisitors: number;
    activeNow: number;
    botCount: number;
    realCount: number;
    countryStats: Record<string, { name: string; count: number }>;
    pageStats: Record<string, number>;
  };
  visitors: Visitor[];
}

export default function LiveStatus() {
  const { toast } = useToast();
  const [data, setData] = useState<TrafficData | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [trafficFilter, setTrafficFilter] = useState<"all" | "real" | "bot">("all");
  const [autoRefresh, setAutoRefresh] = useState(true);

  const fetchStatus = async (isPoll = false) => {
    if (!isPoll) setLoading(true);
    try {
      const res = await fetch("/api/traffic/status");
      const json = await res.json();
      if (json.success) {
        setData(json);
      }
    } catch (err) {
      console.error("Failed to load traffic status", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  useEffect(() => {
    if (!autoRefresh) return;
    const timer = setInterval(() => {
      fetchStatus(true);
    }, 3000);
    return () => clearInterval(timer);
  }, [autoRefresh]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard`,
    });
  };

  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType.toLowerCase()) {
      case "mobile":
        return <Smartphone className="h-4 w-4 text-emerald-400" />;
      case "tablet":
        return <Tablet className="h-4 w-4 text-cyan-400" />;
      default:
        return <Laptop className="h-4 w-4 text-blue-400" />;
    }
  };

  const formatTimeAgo = (timestamp: number) => {
    const diff = Date.now() - timestamp;
    if (diff < 5000) return "just now";
    const seconds = Math.floor(diff / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    return new Date(timestamp).toLocaleTimeString();
  };

  // Filter visitors
  const filteredVisitors = data?.visitors.filter(v => {
    // 1. Category Filter
    if (trafficFilter === "real" && v.isBot) return false;
    if (trafficFilter === "bot" && !v.isBot) return false;

    // 2. Search query filter
    const query = searchQuery.toLowerCase();
    return (
      v.ip.toLowerCase().includes(query) ||
      v.deviceId.toLowerCase().includes(query) ||
      v.city.toLowerCase().includes(query) ||
      v.region.toLowerCase().includes(query) ||
      v.country.toLowerCase().includes(query) ||
      v.browser.toLowerCase().includes(query) ||
      v.os.toLowerCase().includes(query) ||
      v.pageUrl.toLowerCase().includes(query)
    );
  }) || [];

  return (
    <div className="min-h-screen bg-[#060a12] text-slate-100 font-sans">
      <SEO 
        title="Live Traffic Analytics & BOT Status Dashboard | Web Nova Crew" 
        description="Real-time web traffic analytics, IP geolocation mapping, device diagnostics, and automatic search bot / crawler classification dashboard."
      />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 h-[400px] w-[600px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 h-[300px] w-[500px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-300 font-medium mb-2">
              <Activity className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
              Real-time Analytics Node
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Live Status &amp; Traffic Monitor
            </h1>
            <p className="text-slate-400 text-sm mt-1">
              Verify active user sessions, device identifiers, state/city geolocations, and bot vs human routing logs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Button
              onClick={() => setAutoRefresh(!autoRefresh)}
              variant="outline"
              className={`border-slate-800 text-xs gap-1.5 h-9 ${autoRefresh ? "bg-emerald-950/40 text-emerald-400 border-emerald-500/30" : "bg-slate-900/60 text-slate-400"}`}
            >
              <span className={`h-2 w-2 rounded-full bg-emerald-400 ${autoRefresh ? "animate-ping" : ""}`} />
              Auto Refresh: {autoRefresh ? "ON" : "OFF"}
            </Button>
            <Button
              onClick={() => fetchStatus()}
              disabled={loading}
              variant="outline"
              className="bg-slate-950 border-slate-800 hover:bg-slate-900 text-slate-300 text-xs gap-1.5 h-9"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin text-blue-400" : "text-slate-400"}`} />
              Refresh Status
            </Button>
          </div>
        </header>

        {/* Loading Overlay */}
        {loading && !data && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="h-10 w-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-slate-400 text-sm">Compiling real-time statistics...</p>
          </div>
        )}

        {/* Dashboard Grid */}
        {data && (
          <div className="space-y-8">
            
            {/* 1. Stat cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Stat 1: Active Now */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur flex flex-col justify-between shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Active Visitors</span>
                  <Activity className="h-5 w-5 text-emerald-400 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    {data.stats.activeNow}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                    Interactive in last 5 minutes
                  </p>
                </div>
              </div>

              {/* Stat 2: Total Hits */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur flex flex-col justify-between shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Total Route Hits</span>
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    {data.stats.totalHits}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Unique device logs: <span className="text-blue-300 font-semibold">{data.stats.uniqueVisitors}</span>
                  </p>
                </div>
              </div>

              {/* Stat 3: Real Users */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur flex flex-col justify-between shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Verified Humans</span>
                  <UserCheck className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    {data.stats.realCount}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Ratio: <span className="text-cyan-300 font-semibold">{data.stats.uniqueVisitors ? Math.round((data.stats.realCount / data.stats.uniqueVisitors) * 100) : 0}%</span> of total visitors
                  </p>
                </div>
              </div>

              {/* Stat 4: Bots detected */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 p-5 backdrop-blur flex flex-col justify-between shadow-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Bot / Crawlers</span>
                  <Bot className="h-5 w-5 text-rose-400" />
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                    {data.stats.botCount}
                  </h3>
                  <p className="text-[11px] text-rose-400 mt-2 font-semibold">
                    Ratio: {data.stats.uniqueVisitors ? Math.round((data.stats.botCount / data.stats.uniqueVisitors) * 100) : 0}% (Crawler bots)
                  </p>
                </div>
              </div>

            </div>

            {/* 2. Top page views & geo list */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Country Stats Panel */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5 shadow-xl">
                <h3 className="text-sm font-bold text-slate-200 mb-4 uppercase tracking-wider flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-400" />
                  Traffic Origin by Country
                </h3>
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                  {Object.entries(data.stats.countryStats)
                    .sort((a, b) => b[1].count - a[1].count)
                    .map(([code, c]) => (
                      <div key={code} className="flex items-center justify-between text-xs p-2 rounded bg-slate-950/40 border border-slate-800/40">
                        <span className="flex items-center gap-2">
                          <span className="text-base">{code !== "UN" ? String.fromCodePoint(...code.toUpperCase().split("").map(c => 127397 + c.charCodeAt(0))) : "🌐"}</span>
                          <span className="font-medium text-slate-300">{c.name}</span>
                        </span>
                        <span className="font-bold text-slate-200 bg-slate-800 px-2 py-0.5 rounded-full">{c.count} session{c.count > 1 ? "s" : ""}</span>
                      </div>
                    ))}
                  {Object.keys(data.stats.countryStats).length === 0 && (
                    <p className="text-slate-500 text-center py-10 text-xs">No country statistics logged yet.</p>
                  )}
                </div>
              </div>

              {/* Active Pages View */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5 shadow-xl lg:col-span-2">
                <h3 className="text-sm font-bold text-slate-200 mb-4 uppercase tracking-wider flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  Active Page Paths
                </h3>
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1 scrollbar-thin">
                  {Object.entries(data.stats.pageStats)
                    .sort((a, b) => b[1] - a[1])
                    .map(([pathUrl, count]) => (
                      <div key={pathUrl} className="flex items-center justify-between text-xs p-2.5 rounded bg-slate-950/40 border border-slate-800/40">
                        <span className="font-mono text-slate-300 truncate max-w-[80%]">{pathUrl}</span>
                        <span className="font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-900/40 px-2.5 py-0.5 rounded-full">{count} hit{count > 1 ? "s" : ""}</span>
                      </div>
                    ))}
                  {Object.keys(data.stats.pageStats).length === 0 && (
                    <p className="text-slate-500 text-center py-10 text-xs">No active page views tracked.</p>
                  )}
                </div>
              </div>

            </div>

            {/* 3. Detailed Visitor List Section */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-5 sm:p-6 shadow-xl">
              
              {/* Filter controls header */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6 pb-5 border-b border-slate-800/80">
                <h3 className="text-base sm:text-lg font-bold text-slate-100 flex items-center gap-2.5">
                  <Activity className="h-5 w-5 text-blue-400" />
                  Live Visitor Streams
                </h3>
                
                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Category tabs */}
                  <div className="inline-flex rounded-lg bg-slate-950 p-1 border border-slate-800">
                    <button
                      onClick={() => setTrafficFilter("all")}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${trafficFilter === "all" ? "bg-slate-800 text-white shadow" : "text-slate-400 hover:text-white"}`}
                    >
                      All Traffic
                    </button>
                    <button
                      onClick={() => setTrafficFilter("real")}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${trafficFilter === "real" ? "bg-emerald-950 text-emerald-400 shadow border border-emerald-900/50" : "text-slate-400 hover:text-emerald-400"}`}
                    >
                      Humans 👤
                    </button>
                    <button
                      onClick={() => setTrafficFilter("bot")}
                      className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${trafficFilter === "bot" ? "bg-rose-950 text-rose-400 shadow border border-rose-900/50" : "text-slate-400 hover:text-rose-400"}`}
                    >
                      Bots 🤖
                    </button>
                  </div>

                  {/* Search box */}
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                    <Input
                      type="text"
                      placeholder="Search IP, Device, URL..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="bg-slate-950 border-slate-800 text-slate-200 text-xs h-9 pl-9 pr-4 w-full sm:w-[220px]"
                    />
                  </div>
                </div>
              </div>

              {/* Table list */}
              <div className="overflow-x-auto pr-2">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800/80 text-[11px] text-slate-400 uppercase tracking-wider">
                      <th className="py-3 px-4 font-bold">Visitor ID / IP</th>
                      <th className="py-3 px-4 font-bold">Location</th>
                      <th className="py-3 px-4 font-bold">Device &amp; OS</th>
                      <th className="py-3 px-4 font-bold">Type</th>
                      <th className="py-3 px-4 font-bold">Target Page</th>
                      <th className="py-3 px-4 font-bold text-right">Activity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40 text-xs text-slate-300">
                    {filteredVisitors.map((v, i) => (
                      <tr 
                        key={v.deviceId + "_" + i} 
                        className={`hover:bg-slate-900/20 transition-colors ${v.isBot ? "bg-rose-950/5 hover:bg-rose-950/10" : ""}`}
                      >
                        {/* Device ID / IP */}
                        <td className="py-4 px-4 font-mono">
                          <div className="flex flex-col gap-1">
                            <span 
                              className="text-slate-400 hover:text-white cursor-pointer select-all truncate max-w-[140px] flex items-center gap-1"
                              title="Click to copy Device ID"
                              onClick={() => copyToClipboard(v.deviceId, "Device ID")}
                            >
                              <Copy className="h-3 w-3 text-slate-600 shrink-0" />
                              {v.deviceId.substring(0, 10)}...
                            </span>
                            <span className="text-[11px] font-bold text-slate-200 select-all">{v.ip}</span>
                          </div>
                        </td>

                        {/* Location details */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xl shrink-0" title={v.country}>
                              {v.countryCode !== "UN" ? String.fromCodePoint(...v.countryCode.toUpperCase().split("").map(c => 127397 + c.charCodeAt(0))) : "🌐"}
                            </span>
                            <div className="flex flex-col">
                              <span className="font-semibold text-slate-200">{v.city !== "Unknown City" ? v.city : "Unknown City"}</span>
                              <span className="text-[10px] text-slate-400 flex items-center gap-1">
                                <MapPin className="h-2.5 w-2.5 text-blue-500 shrink-0" />
                                {v.region !== "Unknown State" ? v.region : "Unknown region"}, {v.country}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Device & UserAgent */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            {getDeviceIcon(v.deviceType)}
                            <div className="flex flex-col">
                              <span className="font-medium text-slate-200">{v.browser} on {v.os}</span>
                              <span className="text-[10px] text-slate-500 truncate max-w-[180px]" title={v.userAgent}>
                                {v.userAgent}
                              </span>
                            </div>
                          </div>
                        </td>

                        {/* Bot check badge */}
                        <td className="py-4 px-4">
                          {v.isBot ? (
                            <span className="inline-flex items-center gap-1 rounded bg-rose-950/60 border border-rose-900/50 px-2 py-0.5 text-[10px] font-bold text-rose-400">
                              <Bot className="h-3 w-3" />
                              BOT 🤖
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 rounded bg-emerald-950/60 border border-emerald-900/50 px-2 py-0.5 text-[10px] font-bold text-emerald-400">
                              <UserCheck className="h-3 w-3" />
                              REAL 👤
                            </span>
                          )}
                        </td>

                        {/* Target Page URL */}
                        <td className="py-4 px-4 font-mono text-[11px] text-slate-400 max-w-[160px] truncate" title={v.pageUrl}>
                          {v.pageUrl}
                        </td>

                        {/* Activity timestamp */}
                        <td className="py-4 px-4 text-right font-medium text-slate-400">
                          {formatTimeAgo(v.timestamp)}
                        </td>

                      </tr>
                    ))}
                    {filteredVisitors.length === 0 && (
                      <tr>
                        <td colSpan={6} className="text-slate-500 text-center py-16">
                          No matching visitor sessions currently logged.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        )}

      </main>
    </div>
  );
}
