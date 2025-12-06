import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentSalmiya() {
  const city = kuwaitCities.find(c => c.slug === "salmiya")!;
  return <KuwaitCityPage city={city} />;
}
