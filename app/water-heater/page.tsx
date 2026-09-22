import type { Metadata } from "next";
import ServicePage, { relatedFromSlugs, type ServicePageData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Water Heater Repair & Installation in Taunton & SE MA",
  description:
    "Gas, electric & tankless water heater repair and replacement in Taunton, Brockton, Boston, Quincy & Providence. Honest repair-vs-replace advice, permitted installs. Call us today.",
};

const data: ServicePageData = {
  slug: "water-heater",
  name: "Water Heater Repair & Installation",
  h1: "Water Heater Repair & Installation in Taunton & SE Massachusetts",
  intro: [
    "Cold showers get old fast. I repair and replace gas, electric, and tankless water heaters across Southeastern Mass and Rhode Island — and as a Massachusetts-licensed Journeyman Plumber, every install is permitted and done to code. That matters when you sell your house or file an insurance claim.",
    "Here's my honest promise: if your water heater can be fixed for $200, I won't sell you a $2,000 replacement. And if it's 14 years old and rusting from the inside, I'll tell you that too, before it floods your basement.",
  ],
  problems: [
    "No hot water, or it runs out way too fast",
    "Water heater leaking from the tank or fittings",
    "Pilot light won't stay lit, or electric elements keep failing",
    "Rusty or smelly hot water",
    "Old tank near end-of-life and you want ahead-of-failure replacement",
  ],
  checklist: [
    "Straight repair-vs-replace advice based on age, condition, and cost",
    "Gas, electric, and tankless — repair or full replacement",
    "Permitted installation by a licensed MA Journeyman Plumber",
    "Old unit hauled away, workspace left clean",
    "$150 assessment fee credited toward the work",
  ],
  related: relatedFromSlugs(["heating-repair", "heat-pump-installation", "emergency-hvac"]),
  ctaHeadline: "Water Heater Trouble?",
  ctaSub: "Get an honest answer — repair or replace — from a licensed plumber, not a salesman.",
};

export default function Page() {
  return <ServicePage data={data} />;
}
