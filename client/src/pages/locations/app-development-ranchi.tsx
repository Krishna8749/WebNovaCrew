import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentRanchi() {
  const city = indiaCities.find(c => c.slug === "ranchi")!;
  return <IndiaCityPage city={city} />;
}
