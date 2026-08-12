import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentNoida() {
  const city = indiaCities.find(c => c.slug === "noida")!;
  return <IndiaCityPage city={city} />;
}
