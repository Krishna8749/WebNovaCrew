import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentNagpur() {
  const city = indiaCities.find(c => c.slug === "nagpur")!;
  return <IndiaCityPage city={city} />;
}
