import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentJabriya() {
  const city = kuwaitCities.find(c => c.slug === "jabriya")!;
  return <KuwaitCityPage city={city} />;
}
