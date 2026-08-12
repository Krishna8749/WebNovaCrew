import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentFahaheel() {
  const city = kuwaitCities.find(c => c.slug === "fahaheel")!;
  return <KuwaitCityPage city={city} />;
}
