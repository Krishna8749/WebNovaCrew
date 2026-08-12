import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentAgra() {
  const city = indiaCities.find(c => c.slug === "agra")!;
  return <IndiaCityPage city={city} />;
}
