import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { LiveChat } from "@/components/widgets/LiveChat";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Portfolio from "@/pages/portfolio";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import CaseStudy from "@/pages/case-study";
import Team from "@/pages/team";
import Careers from "@/pages/careers";
import JobDetail from "@/pages/job-detail";
import Pricing from "@/pages/pricing";

// Service Pages
import AppDevelopmentIndia from "@/pages/services/app-development-india";
import AppDevelopmentKuwait from "@/pages/services/app-development-kuwait";
import MobileAppDevelopment from "@/pages/services/mobile-app-development";
import AndroidAppDevelopment from "@/pages/services/android-app-development";
import iOSAppDevelopment from "@/pages/services/ios-app-development";
import WebAppDevelopment from "@/pages/services/web-app-development";
import AIAppDevelopment from "@/pages/services/ai-app-development";
import RealEstateAppDevelopment from "@/pages/services/real-estate-app-development";
import EcommerceAppDevelopment from "@/pages/services/ecommerce-app-development";
import OnDemandAppDevelopment from "@/pages/services/on-demand-app-development";
import FlutterAppDevelopment from "@/pages/services/flutter-app-development";
import ReactNativeDevelopment from "@/pages/services/react-native-development";
import ERPCRMDevelopment from "@/pages/services/erp-crm-development";

// India Location Pages - Tier 1 (Dedicated Pages)
import AppDevelopmentMumbai from "@/pages/locations/india/app-development-mumbai";
import AppDevelopmentDelhi from "@/pages/locations/app-development-delhi";
import AppDevelopmentBangalore from "@/pages/locations/india/app-development-bangalore";
import AppDevelopmentHyderabad from "@/pages/locations/india/app-development-hyderabad";
import AppDevelopmentChennai from "@/pages/locations/india/app-development-chennai";
import AppDevelopmentKolkata from "@/pages/locations/india/app-development-kolkata";
import AppDevelopmentPune from "@/pages/locations/india/app-development-pune";
import AppDevelopmentAhmedabad from "@/pages/locations/india/app-development-ahmedabad";

// India Location Pages - Tier 2 (Dedicated Pages)
import AppDevelopmentLucknow from "@/pages/locations/india/app-development-lucknow";
import AppDevelopmentJaipur from "@/pages/locations/india/app-development-jaipur";
import AppDevelopmentIndore from "@/pages/locations/india/app-development-indore";
import AppDevelopmentBhopal from "@/pages/locations/india/app-development-bhopal";
import AppDevelopmentSurat from "@/pages/locations/india/app-development-surat";
import AppDevelopmentVadodara from "@/pages/locations/india/app-development-vadodara";
import AppDevelopmentKanpur from "@/pages/locations/india/app-development-kanpur";
import AppDevelopmentChandigarh from "@/pages/locations/india/app-development-chandigarh";
import AppDevelopmentAgra from "@/pages/locations/india/app-development-agra";
import AppDevelopmentVaranasi from "@/pages/locations/india/app-development-varanasi";
import AppDevelopmentKochi from "@/pages/locations/india/app-development-kochi";
import AppDevelopmentNoida from "@/pages/locations/india/app-development-noida";
import AppDevelopmentGurgaon from "@/pages/locations/india/app-development-gurgaon";
import AppDevelopmentGhaziabad from "@/pages/locations/india/app-development-ghaziabad";

// India Location Pages - Tier 3 (Dedicated Pages)
import AppDevelopmentRanchi from "@/pages/locations/india/app-development-ranchi";
import AppDevelopmentRaipur from "@/pages/locations/india/app-development-raipur";
import AppDevelopmentDehradun from "@/pages/locations/india/app-development-dehradun";
import AppDevelopmentPatna from "@/pages/locations/india/app-development-patna";
import AppDevelopmentNagpur from "@/pages/locations/india/app-development-nagpur";

// Kuwait Location Pages (Dedicated Pages)
import AppDevelopmentKuwaitCity from "@/pages/locations/kuwait/app-development-kuwait-city";
import AppDevelopmentHawally from "@/pages/locations/kuwait/app-development-hawally";
import AppDevelopmentSalmiya from "@/pages/locations/kuwait/app-development-salmiya";
import AppDevelopmentAhmadi from "@/pages/locations/kuwait/app-development-ahmadi";
import AppDevelopmentFahaheel from "@/pages/locations/kuwait/app-development-fahaheel";
import AppDevelopmentFarwaniya from "@/pages/locations/kuwait/app-development-farwaniya";
import AppDevelopmentJahra from "@/pages/locations/kuwait/app-development-jahra";
import AppDevelopmentMangaf from "@/pages/locations/kuwait/app-development-mangaf";
import AppDevelopmentMahboula from "@/pages/locations/kuwait/app-development-mahboula";
import AppDevelopmentSalwa from "@/pages/locations/kuwait/app-development-salwa";
import AppDevelopmentJabriya from "@/pages/locations/kuwait/app-development-jabriya";
import AppDevelopmentMirqab from "@/pages/locations/kuwait/app-development-mirqab";
import AppDevelopmentBayan from "@/pages/locations/kuwait/app-development-bayan";
import AppDevelopmentFintas from "@/pages/locations/kuwait/app-development-fintas";
import AppDevelopmentSabahAlSalem from "@/pages/locations/kuwait/app-development-sabah-al-salem";
import AppDevelopmentMubarakAlKabeer from "@/pages/locations/kuwait/app-development-mubarak-al-kabeer";

// Kuwait Industry-Specific Pages
import LocationsIndex from "@/pages/locations/index";
import KuwaitEcommerceAppDevelopment from "@/pages/locations/kuwait-ecommerce-app-development";
import KuwaitRestaurantAppDevelopment from "@/pages/locations/kuwait-restaurant-app-development";
import KuwaitRealEstateAppDevelopment from "@/pages/locations/kuwait-real-estate-app-development";
import KuwaitLogisticsAppDevelopment from "@/pages/locations/kuwait-logistics-app-development";

function Router() {
  return (
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
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
      <LiveChat />
    </QueryClientProvider>
  );
}

export default App;
