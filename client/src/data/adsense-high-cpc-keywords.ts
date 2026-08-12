/** AdSense contextual keywords — premium high-CPC niches for auto ad matching. */

const premiumKeywords: Record<string, string[]> = {
  legal: [
    "property lawyer advocate delhi",
    "supreme court senior advocate consultation",
    "corporate litigation attorney",
    "nclt bankruptcy advocate",
    "trademark patent attorney cost",
    "tax dispute advocate",
    "high court writ petition lawyer",
    "criminal defense attorney consultation",
    "commercial contract lawyer",
    "arbitration lawyer fee india",
  ],
  insurance: [
    "commercial liability insurance quotes",
    "term life insurance policy renewal",
    "star health cashless policy quote",
    "lic jeevan umang calculator online",
    "business interruption insurance",
    "director officer insurance policy",
    "health insurance tax saving section 80d",
    "hdfc ergo cashless policy renewal",
    "marine cargo insurance quote",
    "cyber risk insurance policy",
  ],
  finance: [
    "commercial real estate loan approval",
    "home loan balance transfer interest rate",
    "business loan instant approval without collateral",
    "private wealth management advisor",
    "high yield corporate fixed deposit",
    "sovereign gold bond purchase online",
    "portfolio management services pms india",
    "mutual fund sip high return calculator",
    "msme startup business loan",
    "tax planning wealth advisor",
  ],
  hosting_saas: [
    "aws cloud migration enterprise consulting",
    "sap hana erp implementation price",
    "enterprise cybersecurity threat protection",
    "salesforce crm integration agency",
    "dedicated server hosting infrastructure",
    "oracle cloud database migration",
    "devops enterprise automation consulting",
    "cyber risk compliance audit",
    "saas billing software enterprise",
  ],
  trading_crypto: [
    "institutional crypto custody security",
    "futures options algorithmic trading broker",
    "zerodha algo trading python api",
    "portfolio risk management software",
    "high net worth wealth advisor mumbai",
    "crypto exchange institutional liquidity",
  ],
  healthcare: [
    "private cancer hospital treatment mumbai",
    "robotic surgery consultation cost",
    "stem cell therapy clinic india",
    "executive health checkup package max",
    "cardiac specialty hospital delhi",
    "cashless medical claim settlement",
  ],
  tier1_global_highest: [
    "mesothelioma attorney lawsuit texas",
    "commercial truck accident lawyer california",
    "business liability insurance quote new york",
    "enterprise cloud migration aws consulting london",
    "luxury penthouse manhattan real estate purchase",
    "private wealth management advisory wall street",
    "commercial real estate refinancing chicago",
    "corporate restructuring bankruptcy lawyer new york",
    "structured settlement cash payment quotes",
    "offshore asset protection trust attorney",
  ],
  india_highest_cpc: [
    "lic policy premium online renewal",
    "lic jeevan umang plan calculator",
    "lic term insurance cover 1 crore",
    "hdfc life click 2 protect term plan",
    "max life term insurance policy renewal",
    "star health insurance cashless claim renewal",
    "hdfc ergo optima secure cashless cover",
    "niva bupa health companion policy",
    "sbi home loan balance transfer interest rate",
    "hdfc bank home loan top up online",
    "icici bank commercial real estate loan",
    "axis bank business loan instant approval",
    "bajaj finserv doctor loan zero collateral",
    "zerodha coin direct mutual fund sip",
    "groww stock trading demat account opening",
    "motilal oswal portfolio management pms",
    "tax free bonds 80C high return fixed deposit",
    "sovereign gold bond sgb buy online",
    "supreme court senior advocate delhi consultation",
    "nclt corporate bankruptcy lawyer fee",
    "lock-tail trademark registration process",
    "income tax return itr filing chartered accountant",
    "luxury apartments bandra worli sea link mumbai",
    "dlf penthouse cyber city gurgaon buy",
    "prestige gated villa whitefield bangalore",
  ],
  luxury_real_estate: [
    "luxury penthouses bandra mumbai for sale",
    "commercial office space plot gurgaon",
    "gated luxury villa goa purchase",
    "sea facing apartment marine drive mumbai",
    "private yacht charter booking goa",
    "luxury watch store mumbai rolex",
  ],
};

const highCpcModifiers = [
  "online renewal",
  "cashless cover benefits",
  "premium calculator inr",
  "compare quotes online",
  "direct purchase discount",
  "tax saving section 80C",
  "low premium high return",
  "authorized agency consultation",
];

const lowValueBlacklist = [
  "free", "download", "mp4", "video", "cheap", "discount", "deals", 
  "coupon", "promo", "sample", "test", "casual", "game", "play", 
  "watch", "movie", "film", "hd", "full", "mobile", "app", "music", 
  "song", "viral", "clip", "fun", "trending", "latest", "new", "short",
  "wallpaper", "status", "joke", "memes", "funny", "ringtone", "chutkule", 
  "shayari", "whatsapp", "reels", "tiktok", "youtube", "facebook", "instagram", 
  "mod", "apk", "hack", "cheat", "crack", "torrent", "unlimited", "pirate", 
  "serial", "episode", "audio", "mp3", "caller tune", "bhojpuri", "punjabi",
  "hindi status", "free recharge", "earn money online fast"
];

const appContentBlacklist = [
  "estato", "estatoapp", "flat for rent", "rent flat", "rent room", "room for rent",
  "pg accommodation", "hostel for boys", "hostel for girls", "1bhk rent", "2bhk rent",
  "cheap flat", "roommate", "brokerage free", "tenant verification", "rent agreement",
  "deposit refund", "maintenance charge", "flatmate", "owner listing", "tolet",
  "video player", "short video", "reels video", "funny clip", "viral video",
  "status video", "video app", "feed post", "mini app", "video mini app", "short clip",
  "like share comment", "watch video", "stream video", "media player",
  "scratch card", "spin wheel", "daily reward", "coin reward", "earn coin", "free coin"
];

function isHighValueKeyword(keyword: string): boolean {
  const lower = keyword.toLowerCase().trim();
  if (lower.length < 3) return false;
  for (const badWord of lowValueBlacklist) {
    if (lower.includes(badWord)) return false;
  }
  for (const appWord of appContentBlacklist) {
    if (lower.includes(appWord)) return false;
  }
  return true;
}

// Generate the high CPC keywords list
const rawKeywords: string[] = [];

// Mix premium keywords with modifiers
Object.values(premiumKeywords).forEach((pool) => {
  pool.forEach((baseKeyword) => {
    if (!isHighValueKeyword(baseKeyword)) return;
    
    // Add raw keyword
    rawKeywords.push(baseKeyword);

    // Blended modifiers
    highCpcModifiers.forEach((modifier) => {
      const blended = `${baseKeyword} ${modifier}`;
      if (isHighValueKeyword(blended)) {
        rawKeywords.push(blended);
      }
    });
  });
});

// Filter & de-duplicate
export const HIGH_CPC_ADSENSE_KEYWORDS = Array.from(new Set(rawKeywords))
  .filter(isHighValueKeyword)
  .slice(0, 150); // Keep top 150 keywords for the page context size limit

export const HIGH_CPC_KEYWORD_TEXT = HIGH_CPC_ADSENSE_KEYWORDS.join(", ");
