import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentVaranasi() {
  const city = indiaCities.find(c => c.slug === "varanasi")!;
  return <IndiaCityPage city={city} />;
}
