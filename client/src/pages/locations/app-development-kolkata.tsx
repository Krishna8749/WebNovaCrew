import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentKolkata() {
  const city = indiaCities.find(c => c.slug === "kolkata")!;
  return <IndiaCityPage city={city} />;
}
