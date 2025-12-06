import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentMangaf() {
  const city = kuwaitCities.find(c => c.slug === "mangaf")!;
  return <KuwaitCityPage city={city} />;
}
