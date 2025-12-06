import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentAlAhmadi() {
  const city = kuwaitCities.find(c => c.slug === "al-ahmadi")!;
  return <KuwaitCityPage city={city} />;
}
