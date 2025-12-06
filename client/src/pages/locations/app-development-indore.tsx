import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentIndore() {
  const city = indiaCities.find(c => c.slug === "indore")!;
  return <IndiaCityPage city={city} />;
}
