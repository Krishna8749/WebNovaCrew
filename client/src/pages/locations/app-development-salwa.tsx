import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentSalwa() {
  const city = kuwaitCities.find(c => c.slug === "salwa")!;
  return <KuwaitCityPage city={city} />;
}
