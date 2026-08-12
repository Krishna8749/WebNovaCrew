import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentChandigarh() {
  const city = indiaCities.find(c => c.slug === "chandigarh")!;
  return <IndiaCityPage city={city} />;
}
