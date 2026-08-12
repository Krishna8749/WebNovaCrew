import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentBayan() {
  const city = kuwaitCities.find(c => c.slug === "bayan")!;
  return <KuwaitCityPage city={city} />;
}
