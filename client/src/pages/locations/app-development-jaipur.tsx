import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentJaipur() {
  const city = indiaCities.find(c => c.slug === "jaipur")!;
  return <IndiaCityPage city={city} />;
}
