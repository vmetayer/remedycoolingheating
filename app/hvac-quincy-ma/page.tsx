import type { Metadata } from "next";
import CityPage, { type CityPageData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "HVAC Repair & Installation in Quincy, MA",
  description:
    "HVAC service in Quincy, MA — condos, multi-family, ductless mini-splits. Wollaston to North Quincy. Licensed, EPA-certified, honest pricing. Call us today.",
};

const data: CityPageData = {
  slug: "hvac-quincy-ma",
  city: "Quincy",
  state: "MA",
  driveTime: "About 35 minutes",
  paragraphs: [
    "Quincy is condo country, and that's exactly the kind of work I've built a specialty in. From Wollaston to North Quincy, so much of the city's housing is condos and multi-family buildings — which means tight mechanical closets, shared walls, association rules, and neighbors who don't want a construction zone. I've done enough Quincy condo work to navigate all of it smoothly.",
    "Ductless mini-splits are the star of the show here. For condo owners tired of window units, a properly installed mini-split delivers real air conditioning and efficient heat without tearing open walls for ductwork. I handle the whole thing: sizing, placement that keeps your condo association happy, clean line-set runs, and a professional finish.",
    "I also service the gas furnaces, hydro-air systems, and water heaters common in Quincy's two- and three-family homes. About 35 minutes from my Taunton base, Quincy is a regular stop on my route — usually multiple times a week.",
  ],
  reviews: [
    {
      quote:
        "Best contractor experience I've had in years. Remy was professional, fast, and left my basement cleaner than he found it. The $150 assessment fee came right off my bill.",
      name: "James T.",
      service: "Water Heater Installation",
    },
    {
      quote:
        "Installed a two-zone mini-split in our Wollaston condo. Remy handled the condo association paperwork questions, kept everything clean, and the system is whisper quiet.",
      name: "Karen L.",
      service: "Mini-Split Installation",
    },
  ],
  faqs: [
    {
      q: "How fast can you get to Quincy?",
      a: "Quincy is about 35 minutes from my Taunton base. I'm there multiple times a week, so same- or next-day service is usually realistic. Call for an honest ETA.",
    },
    {
      q: "Do you work in condos with association rules?",
      a: "Yes — a big share of my Quincy work is condos. I know how to plan installs around association requirements, shared walls, and tight mechanical spaces.",
    },
    {
      q: "Are mini-splits a good fit for Quincy condos?",
      a: "Usually, yes. They deliver AC and efficient heat without ductwork, and they qualify for Mass Save rebates. I'll tell you honestly if your unit is a good candidate.",
    },
  ],
};

export default function Page() {
  return <CityPage data={data} />;
}
