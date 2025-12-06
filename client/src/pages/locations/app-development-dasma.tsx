import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentDasma() {
  const city = kuwaitCities.find(c => c.slug === "dasma")!;
  return <KuwaitCityPage city={city} />;
}
