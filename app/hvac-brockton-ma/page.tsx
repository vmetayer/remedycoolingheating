import type { Metadata } from "next";
import CityPage, { type CityPageData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "HVAC Repair & Installation in Brockton, MA",
  description:
    "HVAC repair & installation in Brockton, MA — triple-deckers, gas furnaces, AC & heat pumps. Licensed, EPA-certified, 20 minutes from base. Call us today.",
};

const data: CityPageData = {
  slug: "hvac-brockton-ma",
  city: "Brockton",
  state: "MA",
  driveTime: "20 minutes",
  paragraphs: [
    "Brockton is one of my busiest service areas — just 20 minutes up Route 24 from my Taunton base, which means fast response when your heat quits in Campello or your AC dies in Montello in the middle of July.",
    "Brockton's housing stock keeps me on my toes in the best way. The city's classic triple-deckers come with their own puzzle: separate heating systems per floor, aging gas furnaces stacked in tight basements, and ductwork (when it exists) that was never designed for central air. I've worked on dozens of them, so I know the difference between a triple-decker fix and a single-family fix — and I quote accordingly, not with a one-size-fits-all price.",
    "Gas furnaces dominate Brockton, and I handle everything from ignition failures and cracked heat exchangers to full replacements. For owners looking to modernize, ductless mini-splits are often the perfect answer for triple-decker units — one condenser per floor, no ductwork needed, and heating plus cooling from the same system.",
  ],
  reviews: [
    {
      quote:
        "Remy showed up same day when our AC died in July. Fixed it in under an hour, explained exactly what happened, and charged exactly what he quoted. Incredible service.",
      name: "Mike D.",
      service: "AC Repair",
    },
    {
      quote:
        "Own a three-family in Campello and Remy has handled two furnace repairs and a mini-split install for me. Always straight with pricing and shows up when he says.",
      name: "Rosa P.",
      service: "Furnace Repair & Mini-Split",
    },
  ],
  faqs: [
    {
      q: "How fast can you get to Brockton?",
      a: "Brockton is about 20 minutes from my Taunton base via Route 24. Same-day service is often possible — call and I'll give you a real ETA.",
    },
    {
      q: "Do you work on Brockton triple-deckers?",
      a: "All the time. Multi-unit heating systems, stacked gas furnaces, and per-floor mini-split installs are a regular part of my Brockton work.",
    },
    {
      q: "Do you work with Brockton landlords?",
      a: "Yes — I handle multi-unit repairs and turnovers for several Brockton property owners. One tech, one number, honest pricing.",
    },
  ],
};

export default function Page() {
  return <CityPage data={data} />;
}
