import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentHawally() {
  const city = kuwaitCities.find(c => c.slug === "hawally")!;
  return <KuwaitCityPage city={city} />;
}
