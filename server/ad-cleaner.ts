export const lowCpcReplacements: Record<string, string> = {
  free: "premium",
  cheap: "affordable",
  download: "cloud stream",
  downloader: "cloud player",
  "video app": "media portal",
  "video player": "media player",
  "short video": "clips",
  "viral video": "featured content",
  reels: "media streams",
  "scratch card": "rewards tier",
  "spin wheel": "loyalty portal",
  "daily reward": "exclusive benefit",
  "coin reward": "member benefit",
  "earn coin": "acquire points",
  "free coin": "member credits",
  "earn money online fast": "financial consulting services",
};

export function cleanLowCpcKeywords(text: string): string {
  if (!text) return text;
  let cleaned = text;
  for (const [badWord, replacement] of Object.entries(lowCpcReplacements)) {
    const regex = new RegExp(`\\b${badWord}\\b`, "gi");
    cleaned = cleaned.replace(regex, (match) => {
      if (match === match.toUpperCase()) return replacement.toUpperCase();
      if (match[0] === match[0].toUpperCase()) {
        return replacement[0].toUpperCase() + replacement.slice(1);
      }
      return replacement;
    });
  }
  return cleaned;
}
