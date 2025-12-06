import { IndiaCityPage } from "@/components/templates/IndiaCityPage";
import { indiaCities } from "@/data/india-cities";

export default function AppDevelopmentChennai() {
  const city = indiaCities.find(c => c.slug === "chennai")!;
  return <IndiaCityPage city={city} />;
}
