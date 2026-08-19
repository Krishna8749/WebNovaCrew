import fs from "fs";
import path from "path";

const logPath = "C:\\Users\\Web Nova Crew\\.gemini\\antigravity-ide\\brain\\9f71862d-77b1-4469-93e9-eaf86507bf20\\.system_generated\\logs\\transcript_full.jsonl";

function parseLog() {
  if (!fs.existsSync(logPath)) {
    console.error("Log file not found at " + logPath);
    process.exit(1);
  }

  const lines = fs.readFileSync(logPath, "utf-8").split("\n");
  let lastUserRequest = "";

  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const obj = JSON.parse(line);
      // We look for type USER_INPUT
      if (obj.type === "USER_INPUT" && obj.content && obj.content.includes("health insurance for parents above 60")) {
        lastUserRequest = obj.content;
      }
    } catch (e) {
      // ignore parse errors
    }
  }

  if (!lastUserRequest) {
    console.error("Could not find user request containing keywords in log.");
    process.exit(1);
  }

  // Parse lines matching number followed by period and text
  const regex = /^\s*(\d+)\.\s*(.+)$/gm;
  let match;
  const keywords = [];

  while ((match = regex.exec(lastUserRequest)) !== null) {
    const kw = match[2].trim();
    keywords.push(kw);
  }

  console.log(`Successfully parsed ${keywords.length} keywords.`);

  if (keywords.length === 0) {
    console.error("Keywords array is empty, regex mismatch.");
    process.exit(1);
  }

  const outputPath = path.resolve("client/src/lib/insurance-keywords.ts");
  const fileContent = `// Auto-generated insurance keywords list for SEO indexing
export const INSURANCE_KEYWORDS_DIRECTORY: string[] = ${JSON.stringify(keywords, null, 2)};
`;

  fs.writeFileSync(outputPath, fileContent, "utf-8");
  console.log(`Saved keywords list to ${outputPath}`);
}

parseLog();
