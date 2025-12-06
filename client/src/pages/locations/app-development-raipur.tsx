import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentRaipur() {
  const city = indiaCities.find(c => c.slug === "raipur")!;
  return <IndiaCityPage city={city} />;
}
