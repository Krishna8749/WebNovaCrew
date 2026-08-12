import { KuwaitCityPage } from "@/components/templates/KuwaitCityPage";
import { kuwaitCities } from "@/data/kuwait-cities";

export default function AppDevelopmentMahboula() {
  const city = kuwaitCities.find(c => c.slug === "mahboula")!;
  return <KuwaitCityPage city={city} />;
}
