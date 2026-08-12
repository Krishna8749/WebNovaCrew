import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentJahra() {
  const city = kuwaitCities.find(c => c.slug === "jahra")!;
  return <KuwaitCityPage city={city} />;
}
