import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentKochi() {
  const city = indiaCities.find(c => c.slug === "kochi")!;
  return <IndiaCityPage city={city} />;
}
