import { Link } from "wouter";
import { 
  ArrowRight, MapPin, Globe, Building2, Users, 
  TrendingUp, Phone, Star, Flag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/Head";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/seo/SchemaMarkup";

export default function LocationsIndex() {
  const indiaTier1Cities = [
    { name: "Mumbai", slug: "mumbai", state: "Maharashtra", highlight: "Financial Capital" },
    { name: "Delhi", slug: "delhi", state: "Delhi NCR", highlight: "National Capital" },
    { name: "Bangalore", slug: "bangalore", state: "Karnataka", highlight: "Silicon Valley of India" },
    { name: "Hyderabad", slug: "hyderabad", state: "Telangana", highlight: "Cyberabad" },
    { name: "Chennai", slug: "chennai", state: "Tamil Nadu", highlight: "IT Hub" },
    { name: "Kolkata", slug: "kolkata", state: "West Bengal", highlight: "Cultural Capital" },
    { name: "Pune", slug: "pune", state: "Maharashtra", highlight: "Oxford of the East" },
    { name: "Ahmedabad", slug: "ahmedabad", state: "Gujarat", highlight: "Commercial Hub" },
  ];

  const indiaTier2Cities = [
    { name: "Lucknow", slug: "lucknow", state: "Uttar Pradesh" },
    { name: "Jaipur", slug: "jaipur", state: "Rajasthan" },
    { name: "Indore", slug: "indore", state: "Madhya Pradesh" },
    { name: "Bhopal", slug: "bhopal", state: "Madhya Pradesh" },
    { name: "Surat", slug: "surat", state: "Gujarat" },
    { name: "Vadodara", slug: "vadodara", state: "Gujarat" },
    { name: "Kanpur", slug: "kanpur", state: "Uttar Pradesh" },
    { name: "Chandigarh", slug: "chandigarh", state: "Chandigarh" },
    { name: "Agra", slug: "agra", state: "Uttar Pradesh" },
    { name: "Varanasi", slug: "varanasi", state: "Uttar Pradesh" },
    { name: "Kochi", slug: "kochi", state: "Kerala" },
    { name: "Noida", slug: "noida", state: "Uttar Pradesh" },
    { name: "Gurgaon", slug: "gurgaon", state: "Haryana" },
    { name: "Ghaziabad", slug: "ghaziabad", state: "Uttar Pradesh" },
  ];

  const indiaTier3Cities = [
    { name: "Ranchi", slug: "ranchi", state: "Jharkhand" },
    { name: "Raipur", slug: "raipur", state: "Chhattisgarh" },
    { name: "Dehradun", slug: "dehradun", state: "Uttarakhand" },
    { name: "Patna", slug: "patna", state: "Bihar" },
    { name: "Nagpur", slug: "nagpur", state: "Maharashtra" },
  ];

  const kuwaitCities = [
    { name: "Kuwait City", nameArabic: "مدينة الكويت", slug: "kuwait-city", highlight: "Capital" },
    { name: "Hawally", nameArabic: "حولي", slug: "hawally", highlight: "Commercial Hub" },
    { name: "Salmiya", nameArabic: "السالمية", slug: "salmiya", highlight: "Shopping District" },
    { name: "Al Ahmadi", nameArabic: "الأحمدي", slug: "al-ahmadi", highlight: "Oil Industry" },
    { name: "Fahaheel", nameArabic: "الفحيحيل", slug: "fahaheel", highlight: "Coastal City" },
    { name: "Farwaniya", nameArabic: "الفروانية", slug: "farwaniya", highlight: "Largest Governorate" },
    { name: "Jahra", nameArabic: "الجهراء", slug: "jahra", highlight: "Agricultural Hub" },
    { name: "Mangaf", nameArabic: "المنقف", slug: "mangaf", highlight: "Residential" },
    { name: "Mahboula", nameArabic: "المهبولة", slug: "mahboula", highlight: "Coastal Area" },
    { name: "Salwa", nameArabic: "السالمي", slug: "salwa", highlight: "Upscale Area" },
    { name: "Jabriya", nameArabic: "الجابرية", slug: "jabriya", highlight: "Professional Hub" },
    { name: "Mirqab", nameArabic: "المرقاب", slug: "mirqab", highlight: "Business District" },
    { name: "Dasma", nameArabic: "الدسمة", slug: "dasma", highlight: "Residential" },
    { name: "Bayan", nameArabic: "بيان", slug: "bayan", highlight: "Family Area" },
  ];

  const kuwaitIndustryPages = [
    { name: "E-commerce App Development", slug: "kuwait-ecommerce-app-development", desc: "Online shopping & retail apps" },
    { name: "Restaurant App Development", slug: "kuwait-restaurant-app-development", desc: "Food ordering & delivery apps" },
    { name: "Real Estate App Development", slug: "kuwait-real-estate-app-development", desc: "Property listing & broker apps" },
    { name: "Logistics App Development", slug: "kuwait-logistics-app-development", desc: "Fleet & delivery management" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans">
      <SEO 
        title="App Development Locations | India & Kuwait | Web Nova Crew"
        description="Web Nova Crew provides app development services across 28 cities in India and 14 cities in Kuwait. Find local app developers near you with Arabic + English support."
        keywords="app development locations, app developers India, app developers Kuwait, local app development, city app developers"
      />
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://webnovacrew.com" },
        { name: "Locations", url: "https://webnovacrew.com/locations" }
      ]} />
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-slate-950">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-[80px]"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-300">42 Cities • 2 Countries • Local Support</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
              App Development Locations
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Find <span className="text-blue-400 font-semibold">local app developers</span> in your city. We serve <span className="text-emerald-400 font-semibold">28 cities in India</span> and <span className="text-emerald-400 font-semibold">14 cities in Kuwait</span> with dedicated support.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">28</div>
                <div className="text-sm text-slate-400">India Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">14</div>
                <div className="text-sm text-slate-400">Kuwait Cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">250+</div>
                <div className="text-sm text-slate-400">Apps Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">100%</div>
                <div className="text-sm text-slate-400">Local Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* India Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 mb-12">
            <Flag className="w-10 h-10 text-orange-500" />
            <div>
              <h2 className="text-4xl font-bold text-white">India</h2>
              <p className="text-slate-400">28 Cities • ₹25,000 - ₹5,00,000</p>
            </div>
          </div>

          {/* Tier 1 Cities */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Tier 1 Metro Cities
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {indiaTier1Cities.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/locations/app-development-${city.slug}`}>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-blue-500/50 transition-all cursor-pointer group">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{city.name}</h4>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <p className="text-sm text-slate-400 mb-1">{city.state}</p>
                      <p className="text-xs text-blue-400">{city.highlight}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tier 2 Cities */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Tier 2 Progress Cities
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {indiaTier2Cities.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link href={`/locations/app-development-${city.slug}`}>
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 hover:border-green-500/50 transition-all cursor-pointer group">
                      <h4 className="text-base font-medium text-white group-hover:text-green-400 transition-colors">{city.name}</h4>
                      <p className="text-xs text-slate-500">{city.state}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tier 3 Cities */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-purple-400" />
              Tier 3 Fast-Growing Cities
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
              {indiaTier3Cities.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/locations/app-development-${city.slug}`}>
                    <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 hover:border-purple-500/50 transition-all cursor-pointer group">
                      <h4 className="text-base font-medium text-white group-hover:text-purple-400 transition-colors">{city.name}</h4>
                      <p className="text-xs text-slate-500">{city.state}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kuwait Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center gap-4 mb-12">
            <Flag className="w-10 h-10 text-emerald-500" />
            <div>
              <h2 className="text-4xl font-bold text-white">Kuwait 🇰🇼</h2>
              <p className="text-slate-400">14 Cities • 200 - 4,500 KWD • Arabic + English</p>
            </div>
          </div>

          {/* Kuwait Cities */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-white mb-6">All Kuwait Locations</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {kuwaitCities.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/locations/app-development-${city.slug}`}>
                    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-5 hover:border-emerald-500/50 transition-all cursor-pointer group">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">{city.name}</h4>
                          <p className="text-sm text-emerald-400/70">{city.nameArabic}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                      </div>
                      <p className="text-xs text-slate-400">{city.highlight}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Kuwait Industry Pages */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Kuwait Industry Solutions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {kuwaitIndustryPages.map((page, index) => (
                <motion.div
                  key={page.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={`/locations/${page.slug}`}>
                    <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-700/50 rounded-xl p-5 hover:border-emerald-500 transition-all cursor-pointer group">
                      <h4 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors mb-2">{page.name}</h4>
                      <p className="text-sm text-slate-400">{page.desc}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950/50 to-emerald-950/50 border-t border-slate-800">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Can't Find Your City?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            We serve clients worldwide! Contact us for app development services in your location.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8">
              <Link href="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
