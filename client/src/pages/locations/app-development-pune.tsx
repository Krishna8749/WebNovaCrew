import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentPune() {
  const city = indiaCities.find(c => c.slug === "pune")!;
  return <IndiaCityPage city={city} />;
}
