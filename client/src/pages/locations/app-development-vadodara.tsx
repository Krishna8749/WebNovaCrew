import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentVadodara() {
  const city = indiaCities.find(c => c.slug === "vadodara")!;
  return <IndiaCityPage city={city} />;
}
