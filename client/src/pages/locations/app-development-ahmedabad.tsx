import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentAhmedabad() {
  const city = indiaCities.find(c => c.slug === "ahmedabad")!;
  return <IndiaCityPage city={city} />;
}
