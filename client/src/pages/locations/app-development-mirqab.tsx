import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentMirqab() {
  const city = kuwaitCities.find(c => c.slug === "mirqab")!;
  return <KuwaitCityPage city={city} />;
}
