import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentKanpur() {
  const city = indiaCities.find(c => c.slug === "kanpur")!;
  return <IndiaCityPage city={city} />;
}
