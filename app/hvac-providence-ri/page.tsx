import type { Metadata } from "next";
import CityPage, { type CityPageData } from "@/components/CityPage";

export const metadata: Metadata = {
  title: "HVAC Repair & Installation in Providence, RI",
  description:
    "HVAC repair & installation in Providence, RI — Federal Hill, Elmhurst, Mount Pleasant. Older-home specialist, RI Energy rebate help. EPA-certified. Call us today.",
};

const data: CityPageData = {
  slug: "hvac-providence-ri",
  city: "Providence",
  state: "RI",
  driveTime: "About 30 minutes",
  paragraphs: [
    "Providence is an easy 30-minute run down Route 44 or I-95 from my Taunton base, and it's been part of my service area for years. From Federal Hill to Elmhurst to Mount Pleasant, I bring the same one-tech, one-call approach across the state line.",
    "Providence's housing stock is old — gloriously old. Victorian two-families, early-1900s colonials, and multi-families that have seen four or five heating systems come and go. That age brings character and challenges: undersized electrical for modern equipment, boilers well past their prime, knob-and-tube surprises, and zero ductwork for cooling. I've worked in enough older Providence homes to plan around all of it instead of discovering it mid-job.",
    "One thing Rhode Islanders should know: your rebates come from RI Energy, not Mass Save — different program, different rules, still real money for heat pump conversions and efficiency upgrades. I'll help you understand what your project qualifies for on the Rhode Island side so you're not leaving rebate dollars on the table.",
  ],
  reviews: [
    {
      quote:
        "Our 1920s house on Federal Hill had a boiler older than my dad. Remy gave us honest options — repair now vs. replace — with real numbers for both. Zero pressure. We replaced, and it was flawless.",
      name: "Tony G.",
      service: "Boiler Replacement",
    },
    {
      quote:
        "Hard to find HVAC guys who'll come to Providence from Mass, but Remy treats it like it's around the corner. Fixed our mini-split fast and explained the RI Energy rebate for adding a second zone.",
      name: "Lisa V.",
      service: "Mini-Split Repair",
    },
  ],
  faqs: [
    {
      q: "How fast can you get to Providence?",
      a: "About 30 minutes from Taunton via Route 44 or I-95. Providence is a regular part of my route — same- or next-day service is usually realistic.",
    },
    {
      q: "Do Rhode Island rebates differ from Mass Save?",
      a: "Yes — Providence homeowners use RI Energy rebate programs, not Mass Save. Different program, different amounts, but still significant money for heat pumps and efficiency work. I'll help you sort out what applies.",
    },
    {
      q: "Can you work on older Providence homes?",
      a: "That's most of my Providence work — Victorians and early-1900s multi-families around Federal Hill, Elmhurst, and Mount Pleasant. I plan for old-house surprises up front.",
    },
  ],
};

export default function Page() {
  return <CityPage data={data} />;
}
