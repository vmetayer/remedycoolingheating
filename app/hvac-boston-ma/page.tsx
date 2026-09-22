import type { Metadata } from "next";
import CityPage, { type CityPageData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "HVAC Repair & Installation in Boston, MA",
  description:
    "HVAC repair & installation in Boston — Dorchester, Hyde Park, Mattapan, South Boston. Triple-deckers & multi-unit specialists. Licensed & EPA-certified. Call us today.",
};

const data: CityPageData = {
  slug: "hvac-boston-ma",
  city: "Boston",
  state: "MA",
  driveTime: "About 40 minutes",
  paragraphs: [
    "I focus my Boston work on the southern neighborhoods — Dorchester, Hyde Park, Mattapan, and South Boston — where I can get in fast via Route 24 and I-93 from my Taunton base. That focus means I'm not promising the whole city and delivering nothing; I'm delivering real response times to the neighborhoods I actually cover.",
    "Boston's southern neighborhoods run on triple-deckers, and triple-deckers are a specialty of mine. Three units, three heating systems, one tight basement — I've repaired and replaced stacked gas furnaces, steam and hot-water boilers, and water heaters in dozens of them. I know the access quirks, the venting challenges, and the code requirements that come with Boston's older multi-family housing.",
    "Landlords: if you own multi-unit property in Dorchester or Mattapan, save my number. One licensed tech who answers his own phone, handles repairs across all your units, and gives you straight pricing beats rolling the dice with a dispatch company every time. Tenants get heat back faster, and you get one point of contact.",
  ],
  reviews: [
    {
      quote:
        "Our second-floor furnace died on a Friday. Remy came out Saturday morning, had the part on his truck, and heat was back before lunch. Straight shooter, fair price.",
      name: "Terrence W.",
      service: "Furnace Repair",
    },
    {
      quote:
        "I own two triple-deckers in Dorchester and Remy handles all the HVAC. He's the only contractor I don't have to chase. Answers his phone, does what he says.",
      name: "Angela F.",
      service: "Multi-Unit Heating Service",
    },
  ],
  faqs: [
    {
      q: "Which Boston neighborhoods do you cover?",
      a: "I focus on the southern neighborhoods: Dorchester, Hyde Park, Mattapan, and South Boston. That keeps my response times honest. If you're elsewhere in Boston, call — I'll tell you straight if I can make it work.",
    },
    {
      q: "How fast can you get to Boston?",
      a: "About 40 minutes from Taunton via Route 24 and I-93. For the southern neighborhoods, same- or next-day service is usually realistic.",
    },
    {
      q: "Do you work with Boston landlords?",
      a: "Yes — multi-unit and triple-decker work is a core part of my Boston business. One number, one licensed tech, all your units.",
    },
  ],
};

export default function Page() {
  return <CityPage data={data} />;
}
