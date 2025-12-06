import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentGhaziabad() {
  const city = indiaCities.find(c => c.slug === "ghaziabad")!;
  return <IndiaCityPage city={city} />;
}
