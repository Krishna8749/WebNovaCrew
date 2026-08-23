import { Switch, Route } from "wouter";
import { CookieConsent } from "@/components/ads/CookieConsent";
import { AdSenseKeywordContext } from "@/components/ads/AdSenseKeywordContext";
import { AdSenseRouteGuard } from "@/components/ads/AdSenseRouteGuard";
import { lazy, Suspense } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppFloat } from "@/components/widgets/WhatsAppFloat";
import { useTrafficTracker } from "@/hooks/useTrafficTracker";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-950">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white text-lg">Loading...</p>
    </div>
  </div>
);

// Eager load critical pages (Home, About, Services, Contact)
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Lazy load secondary pages
const Portfolio = lazy(() => import("@/pages/portfolio"));
const Blog = lazy(() => import("@/pages/blog"));
const BlogPost = lazy(() => import("@/pages/blog-post"));
const CaseStudy = lazy(() => import("@/pages/case-study"));
const Team = lazy(() => import("@/pages/team"));
const Careers = lazy(() => import("@/pages/careers"));
const JobDetail = lazy(() => import("@/pages/job-detail"));
const Pricing = lazy(() => import("@/pages/pricing"));
const PrivacyPolicy = lazy(() => import("@/pages/privacy-policy"));
const TermsOfService = lazy(() => import("@/pages/terms-of-service"));
const Founder = lazy(() => import("@/pages/founder"));

// Lazy load Service Pages
const AppDevelopmentIndia = lazy(() => import("@/pages/services/app-development-india"));
const AppDevelopmentKuwait = lazy(() => import("@/pages/services/app-development-kuwait"));
const MobileAppDevelopment = lazy(() => import("@/pages/services/mobile-app-development"));
const AndroidAppDevelopment = lazy(() => import("@/pages/services/android-app-development"));
const iOSAppDevelopment = lazy(() => import("@/pages/services/ios-app-development"));
const WebAppDevelopment = lazy(() => import("@/pages/services/web-app-development"));
const AIAppDevelopment = lazy(() => import("@/pages/services/ai-app-development"));
const RealEstateAppDevelopment = lazy(() => import("@/pages/services/real-estate-app-development"));
const EcommerceAppDevelopment = lazy(() => import("@/pages/services/ecommerce-app-development"));
const OnDemandAppDevelopment = lazy(() => import("@/pages/services/on-demand-app-development"));
const FlutterAppDevelopment = lazy(() => import("@/pages/services/flutter-app-development"));
const ReactNativeDevelopment = lazy(() => import("@/pages/services/react-native-development"));
const ERPCRMDevelopment = lazy(() => import("@/pages/services/erp-crm-development"));
const AIChatbotDevelopment = lazy(() => import("@/pages/services/ai-chatbot-development"));

// Lazy load India Location Pages - Tier 1
const AppDevelopmentMumbai = lazy(() => import("@/pages/locations/india/app-development-mumbai"));
const AppDevelopmentDelhi = lazy(() => import("@/pages/locations/india/app-development-delhi"));
const AppDevelopmentBangalore = lazy(() => import("@/pages/locations/india/app-development-bangalore"));
const AppDevelopmentHyderabad = lazy(() => import("@/pages/locations/india/app-development-hyderabad"));
const AppDevelopmentChennai = lazy(() => import("@/pages/locations/india/app-development-chennai"));
const AppDevelopmentKolkata = lazy(() => import("@/pages/locations/india/app-development-kolkata"));
const AppDevelopmentPune = lazy(() => import("@/pages/locations/india/app-development-pune"));
const AppDevelopmentAhmedabad = lazy(() => import("@/pages/locations/india/app-development-ahmedabad"));

// Lazy load India Location Pages - Tier 2
const AppDevelopmentLucknow = lazy(() => import("@/pages/locations/india/app-development-lucknow"));

// Lazy load Lucknow Area Pages
const WebDevelopmentGomtiNagar = lazy(() => import("@/pages/locations/lucknow/web-development-gomti-nagar"));
const WebDevelopmentGomtiNagarExtension = lazy(() => import("@/pages/locations/lucknow/web-development-gomti-nagar-extension"));
const WebDevelopmentHazratganj = lazy(() => import("@/pages/locations/lucknow/web-development-hazratganj"));
const WebDevelopmentIndiraNagar = lazy(() => import("@/pages/locations/lucknow/web-development-indira-nagar"));
const WebDevelopmentAliganj = lazy(() => import("@/pages/locations/lucknow/web-development-aliganj"));
const WebDevelopmentAlambagh = lazy(() => import("@/pages/locations/lucknow/web-development-alambagh"));
const WebDevelopmentJankipuram = lazy(() => import("@/pages/locations/lucknow/web-development-jankipuram"));
const WebDevelopmentRajajipuram = lazy(() => import("@/pages/locations/lucknow/web-development-rajajipuram"));
const WebDevelopmentMahanagar = lazy(() => import("@/pages/locations/lucknow/web-development-mahanagar"));
const WebDevelopmentAshiyana = lazy(() => import("@/pages/locations/lucknow/web-development-ashiyana"));
const WebDevelopmentVrindavanYojna = lazy(() => import("@/pages/locations/lucknow/web-development-vrindavan-yojna"));
const WebDevelopmentAminabad = lazy(() => import("@/pages/locations/lucknow/web-development-aminabad"));
const WebDevelopmentChowk = lazy(() => import("@/pages/locations/lucknow/web-development-chowk"));
const WebDevelopmentCharbagh = lazy(() => import("@/pages/locations/lucknow/web-development-charbagh"));
const WebDevelopmentLalbagh = lazy(() => import("@/pages/locations/lucknow/web-development-lalbagh"));
const WebDevelopmentFaizabadRoad = lazy(() => import("@/pages/locations/lucknow/web-development-faizabad-road"));
const WebDevelopmentSultanpurRoad = lazy(() => import("@/pages/locations/lucknow/web-development-sultanpur-road"));
const WebDevelopmentShaheedPath = lazy(() => import("@/pages/locations/lucknow/web-development-shaheed-path"));
const WebDevelopmentSushantGolfCity = lazy(() => import("@/pages/locations/lucknow/web-development-sushant-golf-city"));

const AppDevelopmentJaipur = lazy(() => import("@/pages/locations/india/app-development-jaipur"));
const AppDevelopmentIndore = lazy(() => import("@/pages/locations/india/app-development-indore"));
const AppDevelopmentBhopal = lazy(() => import("@/pages/locations/india/app-development-bhopal"));
const AppDevelopmentSurat = lazy(() => import("@/pages/locations/india/app-development-surat"));
const AppDevelopmentVadodara = lazy(() => import("@/pages/locations/india/app-development-vadodara"));
const AppDevelopmentKanpur = lazy(() => import("@/pages/locations/india/app-development-kanpur"));
const AppDevelopmentChandigarh = lazy(() => import("@/pages/locations/india/app-development-chandigarh"));
const AppDevelopmentAgra = lazy(() => import("@/pages/locations/india/app-development-agra"));
const AppDevelopmentVaranasi = lazy(() => import("@/pages/locations/india/app-development-varanasi"));
const AppDevelopmentKochi = lazy(() => import("@/pages/locations/india/app-development-kochi"));
const AppDevelopmentNoida = lazy(() => import("@/pages/locations/india/app-development-noida"));
const AppDevelopmentGurgaon = lazy(() => import("@/pages/locations/india/app-development-gurgaon"));
const AppDevelopmentGhaziabad = lazy(() => import("@/pages/locations/india/app-development-ghaziabad"));

// Lazy load India Location Pages - Tier 3
const AppDevelopmentRanchi = lazy(() => import("@/pages/locations/india/app-development-ranchi"));
const AppDevelopmentRaipur = lazy(() => import("@/pages/locations/india/app-development-raipur"));
const AppDevelopmentDehradun = lazy(() => import("@/pages/locations/india/app-development-dehradun"));
const AppDevelopmentPatna = lazy(() => import("@/pages/locations/india/app-development-patna"));
const AppDevelopmentNagpur = lazy(() => import("@/pages/locations/india/app-development-nagpur"));

// Lazy load Kuwait Location Pages
const AppDevelopmentKuwaitCity = lazy(() => import("@/pages/locations/kuwait/app-development-kuwait-city"));
const AppDevelopmentHawally = lazy(() => import("@/pages/locations/kuwait/app-development-hawally"));
const AppDevelopmentSalmiya = lazy(() => import("@/pages/locations/kuwait/app-development-salmiya"));
const AppDevelopmentAhmadi = lazy(() => import("@/pages/locations/kuwait/app-development-ahmadi"));
const AppDevelopmentFahaheel = lazy(() => import("@/pages/locations/kuwait/app-development-fahaheel"));
const AppDevelopmentFarwaniya = lazy(() => import("@/pages/locations/kuwait/app-development-farwaniya"));
const AppDevelopmentJahra = lazy(() => import("@/pages/locations/kuwait/app-development-jahra"));
const AppDevelopmentMangaf = lazy(() => import("@/pages/locations/kuwait/app-development-mangaf"));
const AppDevelopmentMahboula = lazy(() => import("@/pages/locations/kuwait/app-development-mahboula"));
const AppDevelopmentSalwa = lazy(() => import("@/pages/locations/kuwait/app-development-salwa"));
const AppDevelopmentJabriya = lazy(() => import("@/pages/locations/kuwait/app-development-jabriya"));
const AppDevelopmentMirqab = lazy(() => import("@/pages/locations/kuwait/app-development-mirqab"));
const AppDevelopmentBayan = lazy(() => import("@/pages/locations/kuwait/app-development-bayan"));
const AppDevelopmentFintas = lazy(() => import("@/pages/locations/kuwait/app-development-fintas"));
const AppDevelopmentSabahAlSalem = lazy(() => import("@/pages/locations/kuwait/app-development-sabah-al-salem"));
const AppDevelopmentMubarakAlKabeer = lazy(() => import("@/pages/locations/kuwait/app-development-mubarak-al-kabeer"));

// Lazy load Kuwait Industry-Specific Pages
const LocationsIndex = lazy(() => import("@/pages/locations/index"));
const KuwaitEcommerceAppDevelopment = lazy(() => import("@/pages/locations/kuwait-ecommerce-app-development"));
const KuwaitRestaurantAppDevelopment = lazy(() => import("@/pages/locations/kuwait-restaurant-app-development"));
const KuwaitRealEstateAppDevelopment = lazy(() => import("@/pages/locations/kuwait-real-estate-app-development"));
const KuwaitLogisticsAppDevelopment = lazy(() => import("@/pages/locations/kuwait-logistics-app-development"));
const LiveStatus = lazy(() => import("@/pages/live-status"));

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/case-study/:slug" component={CaseStudy} />
      <Route path="/team" component={Team} />
      <Route path="/careers" component={Careers} />
      <Route path="/careers/:slug" component={JobDetail} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/founder" component={Founder} />
      <Route path="/live-status" component={LiveStatus} />
      
      {/* Service Pages - SEO Optimized */}
      <Route path="/services/mobile-app-development" component={MobileAppDevelopment} />
      <Route path="/services/android-app-development" component={AndroidAppDevelopment} />
      <Route path="/services/ios-app-development" component={iOSAppDevelopment} />
      <Route path="/services/web-app-development" component={WebAppDevelopment} />
      <Route path="/services/app-development-india" component={AppDevelopmentIndia} />
      <Route path="/services/app-development-kuwait" component={AppDevelopmentKuwait} />
      <Route path="/services/ai-app-development" component={AIAppDevelopment} />
      <Route path="/services/real-estate-app-development" component={RealEstateAppDevelopment} />
      <Route path="/services/ecommerce-app-development" component={EcommerceAppDevelopment} />
      <Route path="/services/on-demand-app-development" component={OnDemandAppDevelopment} />
      <Route path="/services/flutter-app-development" component={FlutterAppDevelopment} />
      <Route path="/services/react-native-development" component={ReactNativeDevelopment} />
      <Route path="/services/erp-crm-development" component={ERPCRMDevelopment} />
      <Route path="/services/ai-chatbot-development" component={AIChatbotDevelopment} />
      
      {/* India Location Pages - Tier 1 Metro Cities */}
      <Route path="/locations/app-development-mumbai" component={AppDevelopmentMumbai} />
      <Route path="/locations/app-development-delhi" component={AppDevelopmentDelhi} />
      <Route path="/locations/app-development-bangalore" component={AppDevelopmentBangalore} />
      <Route path="/locations/app-development-hyderabad" component={AppDevelopmentHyderabad} />
      <Route path="/locations/app-development-chennai" component={AppDevelopmentChennai} />
      <Route path="/locations/app-development-kolkata" component={AppDevelopmentKolkata} />
      <Route path="/locations/app-development-pune" component={AppDevelopmentPune} />
      <Route path="/locations/app-development-ahmedabad" component={AppDevelopmentAhmedabad} />
      
      {/* India Location Pages - Tier 2 Progress Cities */}
      <Route path="/locations/app-development-lucknow" component={AppDevelopmentLucknow} />
      
      {/* Lucknow Area Pages */}
      <Route path="/locations/web-development-gomti-nagar" component={WebDevelopmentGomtiNagar} />
      <Route path="/locations/web-development-gomti-nagar-extension" component={WebDevelopmentGomtiNagarExtension} />
      <Route path="/locations/web-development-hazratganj" component={WebDevelopmentHazratganj} />
      <Route path="/locations/web-development-indira-nagar" component={WebDevelopmentIndiraNagar} />
      <Route path="/locations/web-development-aliganj" component={WebDevelopmentAliganj} />
      <Route path="/locations/web-development-alambagh" component={WebDevelopmentAlambagh} />
      <Route path="/locations/web-development-jankipuram" component={WebDevelopmentJankipuram} />
      <Route path="/locations/web-development-rajajipuram" component={WebDevelopmentRajajipuram} />
      <Route path="/locations/web-development-mahanagar" component={WebDevelopmentMahanagar} />
      <Route path="/locations/web-development-ashiyana" component={WebDevelopmentAshiyana} />
      <Route path="/locations/web-development-vrindavan-yojna" component={WebDevelopmentVrindavanYojna} />
      <Route path="/locations/web-development-aminabad" component={WebDevelopmentAminabad} />
      <Route path="/locations/web-development-chowk" component={WebDevelopmentChowk} />
      <Route path="/locations/web-development-charbagh" component={WebDevelopmentCharbagh} />
      <Route path="/locations/web-development-lalbagh" component={WebDevelopmentLalbagh} />
      <Route path="/locations/web-development-faizabad-road" component={WebDevelopmentFaizabadRoad} />
      <Route path="/locations/web-development-sultanpur-road" component={WebDevelopmentSultanpurRoad} />
      <Route path="/locations/web-development-shaheed-path" component={WebDevelopmentShaheedPath} />
      <Route path="/locations/web-development-sushant-golf-city" component={WebDevelopmentSushantGolfCity} />
      
      <Route path="/locations/app-development-jaipur" component={AppDevelopmentJaipur} />
      <Route path="/locations/app-development-indore" component={AppDevelopmentIndore} />
      <Route path="/locations/app-development-bhopal" component={AppDevelopmentBhopal} />
      <Route path="/locations/app-development-surat" component={AppDevelopmentSurat} />
      <Route path="/locations/app-development-vadodara" component={AppDevelopmentVadodara} />
      <Route path="/locations/app-development-kanpur" component={AppDevelopmentKanpur} />
      <Route path="/locations/app-development-chandigarh" component={AppDevelopmentChandigarh} />
      <Route path="/locations/app-development-agra" component={AppDevelopmentAgra} />
      <Route path="/locations/app-development-varanasi" component={AppDevelopmentVaranasi} />
      <Route path="/locations/app-development-kochi" component={AppDevelopmentKochi} />
      <Route path="/locations/app-development-noida" component={AppDevelopmentNoida} />
      <Route path="/locations/app-development-gurgaon" component={AppDevelopmentGurgaon} />
      <Route path="/locations/app-development-ghaziabad" component={AppDevelopmentGhaziabad} />
      
      {/* India Location Pages - Tier 3 Fast-Growing Cities */}
      <Route path="/locations/app-development-ranchi" component={AppDevelopmentRanchi} />
      <Route path="/locations/app-development-raipur" component={AppDevelopmentRaipur} />
      <Route path="/locations/app-development-dehradun" component={AppDevelopmentDehradun} />
      <Route path="/locations/app-development-patna" component={AppDevelopmentPatna} />
      <Route path="/locations/app-development-nagpur" component={AppDevelopmentNagpur} />
      
      {/* Kuwait Location Pages */}
      <Route path="/locations/app-development-kuwait-city" component={AppDevelopmentKuwaitCity} />
      <Route path="/locations/app-development-hawally" component={AppDevelopmentHawally} />
      <Route path="/locations/app-development-salmiya" component={AppDevelopmentSalmiya} />
      <Route path="/locations/app-development-ahmadi" component={AppDevelopmentAhmadi} />
      <Route path="/locations/app-development-fahaheel" component={AppDevelopmentFahaheel} />
      <Route path="/locations/app-development-farwaniya" component={AppDevelopmentFarwaniya} />
      <Route path="/locations/app-development-jahra" component={AppDevelopmentJahra} />
      <Route path="/locations/app-development-mangaf" component={AppDevelopmentMangaf} />
      <Route path="/locations/app-development-mahboula" component={AppDevelopmentMahboula} />
      <Route path="/locations/app-development-salwa" component={AppDevelopmentSalwa} />
      <Route path="/locations/app-development-jabriya" component={AppDevelopmentJabriya} />
      <Route path="/locations/app-development-mirqab" component={AppDevelopmentMirqab} />
      <Route path="/locations/app-development-bayan" component={AppDevelopmentBayan} />
      <Route path="/locations/app-development-fintas" component={AppDevelopmentFintas} />
      <Route path="/locations/app-development-sabah-al-salem" component={AppDevelopmentSabahAlSalem} />
      <Route path="/locations/app-development-mubarak-al-kabeer" component={AppDevelopmentMubarakAlKabeer} />
      
      {/* Locations Index & Kuwait Industry Pages */}
      <Route path="/locations" component={LocationsIndex} />
      <Route path="/locations/kuwait-ecommerce-app-development" component={KuwaitEcommerceAppDevelopment} />
      <Route path="/locations/kuwait-restaurant-app-development" component={KuwaitRestaurantAppDevelopment} />
      <Route path="/locations/kuwait-real-estate-app-development" component={KuwaitRealEstateAppDevelopment} />
      <Route path="/locations/kuwait-logistics-app-development" component={KuwaitLogisticsAppDevelopment} />
      
      <Route component={NotFound} />
    </Switch>
    </Suspense>
  );
}

function AppShell() {
  useTrafficTracker();

  return (
    <>
      <AdSenseRouteGuard />
      <AdSenseKeywordContext />
      <Router />
      <CookieConsent />
      <WhatsAppFloat />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        <Toaster />
        <AppShell />
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}

export default App;
