import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentBhopal() {
  const city = indiaCities.find(c => c.slug === "bhopal")!;
  return <IndiaCityPage city={city} />;
}
