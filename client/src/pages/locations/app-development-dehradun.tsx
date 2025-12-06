import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentDehradun() {
  const city = indiaCities.find(c => c.slug === "dehradun")!;
  return <IndiaCityPage city={city} />;
}
