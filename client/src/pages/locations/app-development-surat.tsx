import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentSurat() {
  const city = indiaCities.find(c => c.slug === "surat")!;
  return <IndiaCityPage city={city} />;
}
