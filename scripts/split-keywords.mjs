import fs from "fs";
import path from "path";

const inputPath = path.resolve("client/src/lib/insurance-keywords.ts");
const fileContent = fs.readFileSync(inputPath, "utf-8");

// Parse the array from the ts file
const match = fileContent.match(/export const INSURANCE_KEYWORDS_DIRECTORY: string\[\] = (\[[\s\S]*?\]);/);
if (!match) {
  console.error("Could not find array in file.");
  process.exit(1);
}

const keywords = JSON.parse(match[1].replace(/'/g, '"').replace(/,\s*\]/, ']'));
console.log(`Read ${keywords.length} keywords from TS file.`);

const health = [];
const life = [];
const car = [];
const bike = [];
const travel = [];
const home = [];
const business = [];
const general = [];

for (const kw of keywords) {
  const lower = kw.toLowerCase();
  
  if (lower.includes("car") || lower.includes("vehicle") || lower.includes("bumper") || lower.includes("roadside") || lower.includes("depreciation") || lower.includes("zero dep") || lower.includes("ncb") || lower.includes("idv") || lower.includes("taxi") || lower.includes("chassis")) {
    car.push(kw);
  } else if (lower.includes("bike") || lower.includes("two wheeler") || lower.includes("scooter")) {
    bike.push(kw);
  } else if (lower.includes("travel") || lower.includes("schengen") || lower.includes("visa") || lower.includes("baggage") || lower.includes("trip") || lower.includes("flight")) {
    travel.push(kw);
  } else if (lower.includes("home") || lower.includes("house") || lower.includes("apartment") || lower.includes("tenant") || lower.includes("earthquake") || lower.includes("flood") || lower.includes("fire")) {
    home.push(kw);
  } else if (lower.includes("business") || lower.includes("corporate") || lower.includes("shop") || lower.includes("office") || lower.includes("factory") || lower.includes("liability") || lower.includes("cyber") || lower.includes("indemnity") || lower.includes("errors") || lower.includes("directors") || lower.includes("omissions") || lower.includes("cargo") || lower.includes("marine") || lower.includes("agricultural") || lower.includes("crop") || lower.includes("farmer") || lower.includes("livestock") || lower.includes("rural") || lower.includes("advisor") || lower.includes("agent") || lower.includes("broker")) {
    business.push(kw);
  } else if (lower.includes("life") || lower.includes("term") || lower.includes("crore") || lower.includes("lakh") || lower.includes("endowment") || lower.includes("annuity") || lower.includes("pension") || lower.includes("retirement") || lower.includes("ulip")) {
    life.push(kw);
  } else if (lower.includes("health") || lower.includes("mediclaim") || lower.includes("medical") || lower.includes("hospitalization") || lower.includes("diabetes") || lower.includes("hypertension") || lower.includes("heart") || lower.includes("cancer") || lower.includes("asthma") || lower.includes("thyroid") || lower.includes("kidney") || lower.includes("opd") || lower.includes("dental") || lower.includes("pregnancy") || lower.includes("maternity") || lower.includes("newborn") || lower.includes("illness") || lower.includes("disease")) {
    health.push(kw);
  } else {
    general.push(kw);
  }
}

console.log(`Categorized stats:
- Health: ${health.length}
- Life: ${life.length}
- Car: ${car.length}
- Bike: ${bike.length}
- Travel: ${travel.length}
- Home: ${home.length}
- Business: ${business.length}
- General: ${general.length}
`);

// Let's write the updated TS file with distinct exports
const newContent = `// Auto-generated insurance keywords lists categorized for SEO context
export const INSURANCE_KEYWORDS_DIRECTORY: string[] = ${JSON.stringify(keywords, null, 2)};

export const HEALTH_KEYWORDS: string[] = ${JSON.stringify(health.concat(general), null, 2)};
export const LIFE_KEYWORDS: string[] = ${JSON.stringify(life, null, 2)};
export const CAR_KEYWORDS: string[] = ${JSON.stringify(car, null, 2)};
export const BIKE_KEYWORDS: string[] = ${JSON.stringify(bike, null, 2)};
export const TRAVEL_KEYWORDS: string[] = ${JSON.stringify(travel, null, 2)};
export const HOME_KEYWORDS: string[] = ${JSON.stringify(home, null, 2)};
export const BUSINESS_KEYWORDS: string[] = ${JSON.stringify(business, null, 2)};
`;

fs.writeFileSync(inputPath, newContent, "utf-8");
console.log("Saved categorized keywords to client/src/lib/insurance-keywords.ts");
