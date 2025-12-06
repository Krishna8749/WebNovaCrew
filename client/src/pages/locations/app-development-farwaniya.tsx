import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentFarwaniya() {
  const city = kuwaitCities.find(c => c.slug === "farwaniya")!;
  return <KuwaitCityPage city={city} />;
}
