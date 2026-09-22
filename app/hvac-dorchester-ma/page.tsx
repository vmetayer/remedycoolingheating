import type { Metadata } from "next";
import CityPage, { type CityPageData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "HVAC Repair & Installation in Dorchester, MA",
  description:
    "HVAC repair in Dorchester — Fields Corner, Savin Hill, Neponset. Triple-decker heating specialist, fast response via Route 24/93. Licensed & EPA-certified. Call us today.",
};

const data: CityPageData = {
  slug: "hvac-dorchester-ma",
  city: "Dorchester",
  state: "MA",
  driveTime: "About 35 minutes",
  paragraphs: [
    "Dorchester might be Boston's biggest neighborhood, but it gets treated like an afterthought by a lot of HVAC companies based north or west of the city. Not by me. Coming up Route 24 to I-93 from Taunton, I can be in Fields Corner, Savin Hill, or Neponset in about 35 minutes — often faster than companies technically based 'in Boston.'",
    "Triple-decker heating is my bread and butter in Dorchester. These hundred-year-old workhorses come with stacked heating systems, tight basement mechanicals, aging steam and hot-water boilers, and venting that was designed for a different era. I've repaired, replaced, and modernized systems in Dorchester triple-deckers from Savin Hill to Codman Square, and I know exactly what I'm walking into.",
    "Whether you're an owner-occupant in a two-family off Dot Ave, a landlord with units in Fields Corner, or a homeowner near Neponset with a furnace on its last legs, you get the same deal: a licensed, EPA-certified tech who answers his own phone, a $150 assessment that comes off your repair, and work done right the first time.",
  ],
  reviews: [
    {
      quote:
        "No heat on the coldest night of the year. Remy talked me through checking the thermostat and pilot on the phone, then came out first thing and fixed the igniter. Lifesaver.",
      name: "Marcus B.",
      service: "Heating Repair",
    },
    {
      quote:
        "He replaced the boiler in our Savin Hill two-family. Clean install, permit handled, and he explained the whole system to us. Worth every penny.",
      name: "Colleen H.",
      service: "Boiler Replacement",
    },
  ],
  faqs: [
    {
      q: "How fast can you get to Dorchester?",
      a: "About 35 minutes from Taunton via Route 24 and I-93. For no-heat emergencies I prioritize hard — call and I'll give you a real ETA.",
    },
    {
      q: "Do you know Dorchester triple-deckers?",
      a: "Inside and out. Stacked furnaces, old boilers, tight basements — triple-decker heating work is one of my core specialties.",
    },
    {
      q: "Do you cover all of Dorchester?",
      a: "Yes — Fields Corner, Savin Hill, Neponset, Codman Square, Ashmont, and everywhere in between.",
    },
  ],
};

export default function Page() {
  return <CityPage data={data} />;
}
