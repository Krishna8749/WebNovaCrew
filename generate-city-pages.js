import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// India cities
const indiaCities = [
  'mumbai', 'delhi', 'bangalore', 'hyderabad', 'chennai', 'kolkata', 'pune', 'ahmedabad',
  'lucknow', 'jaipur', 'indore', 'bhopal', 'surat', 'vadodara', 'kanpur', 'chandigarh',
  'agra', 'varanasi', 'kochi', 'noida', 'gurgaon', 'ghaziabad',
  'ranchi', 'raipur', 'dehradun', 'patna', 'nagpur'
];

// Kuwait cities
const kuwaitCities = [
  'kuwait-city', 'hawally', 'salmiya', 'al-ahmadi', 'fahaheel', 'farwaniya',
  'jahra', 'mangaf', 'mahboula', 'salwa', 'jabriya', 'mirqab', 'dasma', 'bayan'
];

const locationsDir = path.join(__dirname, 'client', 'src', 'pages', 'locations');

// Ensure directory exists
if (!fs.existsSync(locationsDir)) {
  fs.mkdirSync(locationsDir, { recursive: true });
}

// Generate India city pages
indiaCities.forEach(slug => {
  const fileName = `app-development-${slug}.tsx`;
  const filePath = path.join(locationsDir, fileName);
  
  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`Skipping ${fileName} - already exists`);
    return;
  }

  const content = `import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopment${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}() {
  const city = indiaCities.find(c => c.slug === "${slug}")!;
  return <IndiaCityPage city={city} />;
}
`;

  fs.writeFileSync(filePath, content);
  console.log(`✓ Created ${fileName}`);
});

// Generate Kuwait city pages
kuwaitCities.forEach(slug => {
  const fileName = `app-development-${slug}.tsx`;
  const filePath = path.join(locationsDir, fileName);
  
  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`Skipping ${fileName} - already exists`);
    return;
  }

  const componentName = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  
  const content = `import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopment${componentName}() {
  const city = kuwaitCities.find(c => c.slug === "${slug}")!;
  return <KuwaitCityPage city={city} />;
}
`;

  fs.writeFileSync(filePath, content);
  console.log(`✓ Created ${fileName}`);
});

console.log('\n✅ All city pages generated successfully!');
console.log(`Total India pages: ${indiaCities.length}`);
console.log(`Total Kuwait pages: ${kuwaitCities.length}`);
console.log(`Total pages: ${indiaCities.length + kuwaitCities.length}`);
