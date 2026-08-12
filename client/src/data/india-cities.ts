export interface CityData {
  name: string;
  slug: string;
  state: string;
  tier: 1 | 2 | 3;
  population: string;
  description: string;
  industries: string[];
  landmarks: string[];
  keywords: string[];
}

export const indiaCities: CityData[] = [
  // Tier 1 Metro Cities
  {
    name: "Mumbai",
    slug: "mumbai",
    state: "Maharashtra",
    tier: 1,
    population: "20+ million",
    description: "India's financial capital and largest metropolitan area, home to Bollywood, major corporations, and thriving startup ecosystem.",
    industries: ["Finance & Banking", "E-commerce", "Entertainment & Media", "Real Estate", "Healthcare", "Logistics"],
    landmarks: ["Gateway of India", "Marine Drive", "Bandra-Kurla Complex", "Nariman Point"],
    keywords: ["app development company Mumbai", "mobile app developers Mumbai", "Android iOS app development Mumbai", "Mumbai app development services"]
  },
  {
    name: "Delhi",
    slug: "delhi",
    state: "Delhi NCR",
    tier: 1,
    population: "30+ million (NCR)",
    description: "India's capital and political center, with massive IT sector, government projects, and enterprise software demand.",
    industries: ["Government & Public Sector", "IT Services", "E-commerce", "Education", "Healthcare", "Real Estate"],
    landmarks: ["Connaught Place", "Cyber City Gurgaon", "Noida Sector 62", "India Gate"],
    keywords: ["app development company Delhi", "mobile app developers Delhi NCR", "Delhi app development services", "NCR app developers"]
  },
  {
    name: "Bangalore",
    slug: "bangalore",
    state: "Karnataka",
    tier: 1,
    population: "12+ million",
    description: "India's Silicon Valley, the startup capital with highest concentration of tech talent and innovation hubs.",
    industries: ["IT & Software", "Startups & SaaS", "E-commerce", "Fintech", "Healthcare Tech", "Education Tech"],
    landmarks: ["Electronic City", "Whitefield", "Koramangala", "Indiranagar"],
    keywords: ["app development company Bangalore", "Bangalore mobile app developers", "startup app development Bangalore", "Bengaluru app development"]
  },
  {
    name: "Hyderabad",
    slug: "hyderabad",
    state: "Telangana",
    tier: 1,
    population: "10+ million",
    description: "Major IT hub known as 'Cyberabad', home to Microsoft, Google, Amazon, and thriving pharma industry.",
    industries: ["IT & Software", "Pharmaceuticals", "Biotech", "E-commerce", "Real Estate", "Education"],
    landmarks: ["HITEC City", "Gachibowli", "Madhapur", "Charminar"],
    keywords: ["app development company Hyderabad", "Hyderabad mobile app developers", "HITEC City app development", "Cyberabad app developers"]
  },
  {
    name: "Chennai",
    slug: "chennai",
    state: "Tamil Nadu",
    tier: 1,
    population: "10+ million",
    description: "Major automotive and manufacturing hub, growing IT sector, and strong healthcare industry presence.",
    industries: ["Automotive", "Manufacturing", "IT Services", "Healthcare", "Education", "Real Estate"],
    landmarks: ["Tidel Park", "OMR IT Corridor", "Guindy", "Marina Beach"],
    keywords: ["app development company Chennai", "Chennai mobile app developers", "Tamil Nadu app development", "Chennai app development services"]
  },
  {
    name: "Kolkata",
    slug: "kolkata",
    state: "West Bengal",
    tier: 1,
    population: "14+ million",
    description: "Cultural capital of India, growing IT sector in Salt Lake, strong education and healthcare industries.",
    industries: ["IT Services", "Education", "Healthcare", "Retail", "Manufacturing", "Real Estate"],
    landmarks: ["Salt Lake Sector V", "Park Street", "Howrah", "Victoria Memorial"],
    keywords: ["app development company Kolkata", "Kolkata mobile app developers", "West Bengal app development", "Kolkata app development services"]
  },
  {
    name: "Pune",
    slug: "pune",
    state: "Maharashtra",
    tier: 1,
    population: "7+ million",
    description: "Oxford of the East, major IT and automotive hub, strong startup ecosystem and education sector.",
    industries: ["IT & Software", "Automotive", "Education", "Manufacturing", "Real Estate", "Startups"],
    landmarks: ["Hinjewadi IT Park", "Magarpatta City", "Kharadi", "Shivajinagar"],
    keywords: ["app development company Pune", "Pune mobile app developers", "Hinjewadi app development", "Pune app development services"]
  },
  {
    name: "Ahmedabad",
    slug: "ahmedabad",
    state: "Gujarat",
    tier: 1,
    population: "8+ million",
    description: "Commercial capital of Gujarat, growing IT sector, strong textile and pharmaceutical industries.",
    industries: ["Textiles", "Pharmaceuticals", "IT Services", "Real Estate", "Education", "Manufacturing"],
    landmarks: ["GIFT City", "SG Highway", "Sabarmati", "Maninagar"],
    keywords: ["app development company Ahmedabad", "Ahmedabad mobile app developers", "Gujarat app development", "Ahmedabad app development services"]
  },

  // Tier 2 Progress Cities
  {
    name: "Lucknow",
    slug: "lucknow",
    state: "Uttar Pradesh",
    tier: 2,
    population: "3+ million",
    description: "Capital of Uttar Pradesh, growing IT sector, government projects, and emerging startup ecosystem.",
    industries: ["Government & Public Sector", "IT Services", "Education", "Healthcare", "Real Estate", "Retail"],
    landmarks: ["Gomti Nagar", "Hazratganj", "Indira Nagar", "Bara Imambara"],
    keywords: ["app development company Lucknow", "Lucknow mobile app developers", "UP app development", "Lucknow app development services"]
  },
  {
    name: "Jaipur",
    slug: "jaipur",
    state: "Rajasthan",
    tier: 2,
    population: "3+ million",
    description: "Pink City, growing IT and tourism hub, strong handicraft and jewelry industries.",
    industries: ["Tourism & Hospitality", "IT Services", "Handicrafts", "Jewelry", "Education", "Real Estate"],
    landmarks: ["Malviya Nagar", "Vaishali Nagar", "Hawa Mahal", "Amber Fort"],
    keywords: ["app development company Jaipur", "Jaipur mobile app developers", "Rajasthan app development", "Jaipur app development services"]
  },
  {
    name: "Indore",
    slug: "indore",
    state: "Madhya Pradesh",
    tier: 2,
    population: "2+ million",
    description: "Commercial capital of Madhya Pradesh, cleanest city in India, growing IT and education sector.",
    industries: ["IT Services", "Education", "Pharmaceuticals", "Textiles", "Real Estate", "Food Processing"],
    landmarks: ["Vijay Nagar", "Sapna Sangeeta", "Rajwada", "Sarafa Bazaar"],
    keywords: ["app development company Indore", "Indore mobile app developers", "MP app development", "Indore app development services"]
  },
  {
    name: "Bhopal",
    slug: "bhopal",
    state: "Madhya Pradesh",
    tier: 2,
    population: "2+ million",
    description: "City of Lakes, capital of Madhya Pradesh, growing IT sector and government projects.",
    industries: ["Government & Public Sector", "IT Services", "Education", "Healthcare", "Tourism", "Manufacturing"],
    landmarks: ["Arera Hills", "MP Nagar", "Upper Lake", "Van Vihar"],
    keywords: ["app development company Bhopal", "Bhopal mobile app developers", "Madhya Pradesh app development", "Bhopal app development services"]
  },
  {
    name: "Surat",
    slug: "surat",
    state: "Gujarat",
    tier: 2,
    population: "6+ million",
    description: "Diamond city of India, major textile and diamond trading hub, growing IT sector.",
    industries: ["Textiles", "Diamond Trading", "IT Services", "Real Estate", "Manufacturing", "Retail"],
    landmarks: ["Adajan", "Vesu", "Dumas Beach", "Surat Castle"],
    keywords: ["app development company Surat", "Surat mobile app developers", "Gujarat app development Surat", "Surat app development services"]
  },
  {
    name: "Vadodara",
    slug: "vadodara",
    state: "Gujarat",
    tier: 2,
    population: "2+ million",
    description: "Cultural capital of Gujarat, strong pharmaceutical and chemical industries, growing IT sector.",
    industries: ["Pharmaceuticals", "Chemicals", "IT Services", "Education", "Manufacturing", "Real Estate"],
    landmarks: ["Alkapuri", "Sayajigunj", "Laxmi Vilas Palace", "Kirti Mandir"],
    keywords: ["app development company Vadodara", "Vadodara mobile app developers", "Baroda app development", "Vadodara app development services"]
  },
  {
    name: "Kanpur",
    slug: "kanpur",
    state: "Uttar Pradesh",
    tier: 2,
    population: "3+ million",
    description: "Industrial hub of Uttar Pradesh, leather and textile industries, emerging IT sector.",
    industries: ["Manufacturing", "Leather", "Textiles", "IT Services", "Education", "Real Estate"],
    landmarks: ["Civil Lines", "Swaroop Nagar", "Allen Forest Zoo", "Phool Bagh"],
    keywords: ["app development company Kanpur", "Kanpur mobile app developers", "UP app development Kanpur", "Kanpur app development services"]
  },
  {
    name: "Chandigarh",
    slug: "chandigarh",
    state: "Chandigarh",
    tier: 2,
    population: "1+ million",
    description: "Planned city, capital of Punjab and Haryana, growing IT sector and high quality of life.",
    industries: ["IT Services", "Government & Public Sector", "Education", "Healthcare", "Real Estate", "Tourism"],
    landmarks: ["Sector 17", "IT Park", "Rock Garden", "Sukhna Lake"],
    keywords: ["app development company Chandigarh", "Chandigarh mobile app developers", "Tricity app development", "Chandigarh app development services"]
  },
  {
    name: "Agra",
    slug: "agra",
    state: "Uttar Pradesh",
    tier: 2,
    population: "2+ million",
    description: "Home to Taj Mahal, major tourism hub, growing IT and handicraft industries.",
    industries: ["Tourism & Hospitality", "Handicrafts", "IT Services", "Leather", "Education", "Real Estate"],
    landmarks: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Sikandra"],
    keywords: ["app development company Agra", "Agra mobile app developers", "UP app development Agra", "Agra app development services"]
  },
  {
    name: "Varanasi",
    slug: "varanasi",
    state: "Uttar Pradesh",
    tier: 2,
    population: "1+ million",
    description: "Spiritual capital of India, major tourism and education hub, growing IT sector.",
    industries: ["Tourism & Hospitality", "Education", "IT Services", "Handicrafts", "Textiles", "Real Estate"],
    landmarks: ["Dashashwamedh Ghat", "BHU", "Kashi Vishwanath", "Assi Ghat"],
    keywords: ["app development company Varanasi", "Varanasi mobile app developers", "Banaras app development", "Varanasi app development services"]
  },
  {
    name: "Kochi",
    slug: "kochi",
    state: "Kerala",
    tier: 2,
    population: "2+ million",
    description: "Queen of Arabian Sea, major port city, growing IT and tourism industries.",
    industries: ["IT Services", "Tourism & Hospitality", "Shipping & Logistics", "Healthcare", "Education", "Spices"],
    landmarks: ["Infopark", "Marine Drive", "Fort Kochi", "Lulu Mall"],
    keywords: ["app development company Kochi", "Kochi mobile app developers", "Kerala app development", "Cochin app development services"]
  },
  {
    name: "Noida",
    slug: "noida",
    state: "Uttar Pradesh",
    tier: 2,
    population: "1+ million",
    description: "Part of Delhi NCR, major IT and BPO hub, strong real estate and startup ecosystem.",
    industries: ["IT & Software", "BPO", "Real Estate", "E-commerce", "Media & Entertainment", "Manufacturing"],
    landmarks: ["Sector 62", "Sector 18", "Film City", "Botanical Garden"],
    keywords: ["app development company Noida", "Noida mobile app developers", "NCR app development Noida", "Noida app development services"]
  },
  {
    name: "Gurgaon",
    slug: "gurgaon",
    state: "Haryana",
    tier: 2,
    population: "1+ million",
    description: "Millennium City, major corporate hub, home to Fortune 500 companies and startups.",
    industries: ["IT & Software", "Corporate Services", "Real Estate", "Automotive", "E-commerce", "Fintech"],
    landmarks: ["Cyber Hub", "Golf Course Road", "MG Road", "Udyog Vihar"],
    keywords: ["app development company Gurgaon", "Gurgaon mobile app developers", "Gurugram app development", "Gurgaon app development services"]
  },
  {
    name: "Ghaziabad",
    slug: "ghaziabad",
    state: "Uttar Pradesh",
    tier: 2,
    population: "2+ million",
    description: "Part of Delhi NCR, industrial city with growing IT sector and real estate development.",
    industries: ["Manufacturing", "IT Services", "Real Estate", "Education", "Healthcare", "Retail"],
    landmarks: ["Indirapuram", "Vaishali", "Raj Nagar", "Shipra Mall"],
    keywords: ["app development company Ghaziabad", "Ghaziabad mobile app developers", "NCR app development Ghaziabad", "Ghaziabad app development services"]
  },

  // Tier 3 Fast-Growing Cities
  {
    name: "Ranchi",
    slug: "ranchi",
    state: "Jharkhand",
    tier: 3,
    population: "1+ million",
    description: "Capital of Jharkhand, growing IT sector, strong education and healthcare industries.",
    industries: ["IT Services", "Education", "Healthcare", "Mining", "Manufacturing", "Real Estate"],
    landmarks: ["Ranchi Lake", "Tagore Hill", "Birsa Munda Airport", "Kanke"],
    keywords: ["app development company Ranchi", "Ranchi mobile app developers", "Jharkhand app development", "Ranchi app development services"]
  },
  {
    name: "Raipur",
    slug: "raipur",
    state: "Chhattisgarh",
    tier: 3,
    population: "1+ million",
    description: "Capital of Chhattisgarh, emerging IT hub, strong steel and power industries.",
    industries: ["IT Services", "Steel & Mining", "Power", "Education", "Healthcare", "Real Estate"],
    landmarks: ["Naya Raipur", "Marine Drive", "Telibandha Lake", "Magneto Mall"],
    keywords: ["app development company Raipur", "Raipur mobile app developers", "Chhattisgarh app development", "Raipur app development services"]
  },
  {
    name: "Dehradun",
    slug: "dehradun",
    state: "Uttarakhand",
    tier: 3,
    population: "700,000+",
    description: "Capital of Uttarakhand, education hub, growing tourism and IT sectors.",
    industries: ["Education", "Tourism & Hospitality", "IT Services", "Healthcare", "Real Estate", "Agriculture"],
    landmarks: ["Rajpur Road", "Clock Tower", "Mussoorie Road", "Forest Research Institute"],
    keywords: ["app development company Dehradun", "Dehradun mobile app developers", "Uttarakhand app development", "Dehradun app development services"]
  },
  {
    name: "Patna",
    slug: "patna",
    state: "Bihar",
    tier: 3,
    population: "2+ million",
    description: "Capital of Bihar, ancient city with growing IT sector and government projects.",
    industries: ["Government & Public Sector", "IT Services", "Education", "Healthcare", "Agriculture", "Real Estate"],
    landmarks: ["Boring Road", "Patna Junction", "Gandhi Maidan", "Patna Sahib"],
    keywords: ["app development company Patna", "Patna mobile app developers", "Bihar app development", "Patna app development services"]
  },
  {
    name: "Nagpur",
    slug: "nagpur",
    state: "Maharashtra",
    tier: 3,
    population: "2+ million",
    description: "Orange city, geographical center of India, growing IT and logistics hub.",
    industries: ["IT Services", "Logistics", "Manufacturing", "Mining", "Education", "Real Estate"],
    landmarks: ["MIHAN", "Sitabuldi", "Deekshabhoomi", "Ambazari Lake"],
    keywords: ["app development company Nagpur", "Nagpur mobile app developers", "Maharashtra app development Nagpur", "Nagpur app development services"]
  }
];
