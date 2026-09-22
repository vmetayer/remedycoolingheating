import type { Metadata } from "next";
import ServicePage, { relatedFromSlugs, type ServicePageData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Heat Pump & Mini-Split Installation in Taunton & SE MA",
  description:
    "Ductless mini-split & heat pump installation in Taunton, Brockton, Boston, Quincy & Providence. Mass Save rebates up to $10K. Oil-to-heat-pump conversions. Call us today.",
};

const data: ServicePageData = {
  slug: "heat-pump-installation",
  name: "Heat Pump & Mini-Split Installation",
  h1: "Heat Pump & Mini-Split Installation in Taunton & SE Massachusetts",
  intro: [
    "Heat pumps and ductless mini-splits are the biggest shift in home comfort in decades — one system that heats in winter, cools in summer, and slashes your bills, especially if you're converting from oil. And with Mass Save rebates up to $10,000, the math has never been better for Massachusetts homeowners.",
    "I install single-zone and multi-zone ductless systems, whole-home heat pumps, and handle oil-to-heat-pump conversions from start to finish. As an EPA Universal Certified tech, every refrigerant connection is done right — the number one thing that separates a 20-year system from a 5-year headache.",
  ],
  problems: [
    "Heating with expensive oil and want out",
    "No ductwork, but you want real AC and efficient heat",
    "One room (bonus room, addition, finished attic) that's never comfortable",
    "Want to take advantage of Mass Save rebates before they change",
    "A previous mini-split install that never worked right",
  ],
  checklist: [
    "Honest assessment of whether a heat pump fits your house and climate needs",
    "Help navigating Mass Save rebates — up to $10K for whole-home conversions",
    "Proper sizing and zone design for multi-zone systems",
    "Clean, professional line-set and condenser installation",
    "Full system walkthrough plus maintenance tips before I leave",
  ],
  related: relatedFromSlugs(["ac-installation", "heating-repair", "water-heater"]),
  ctaHeadline: "Curious About Heat Pumps?",
  ctaSub: "Call for a straight answer on rebates, sizing, and whether your house is a good fit.",
};

export default function Page() {
  return <ServicePage data={data} />;
}
