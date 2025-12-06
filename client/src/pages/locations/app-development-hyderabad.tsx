import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentHyderabad() {
  const city = indiaCities.find(c => c.slug === "hyderabad")!;
  return <IndiaCityPage city={city} />;
}
