import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentPatna() {
  const city = indiaCities.find(c => c.slug === "patna")!;
  return <IndiaCityPage city={city} />;
}
