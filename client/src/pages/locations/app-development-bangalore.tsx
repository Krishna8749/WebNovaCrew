import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentBangalore() {
  const city = indiaCities.find(c => c.slug === "bangalore")!;
  return <IndiaCityPage city={city} />;
}
