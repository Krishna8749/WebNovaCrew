import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentGurgaon() {
  const city = indiaCities.find(c => c.slug === "gurgaon")!;
  return <IndiaCityPage city={city} />;
}
