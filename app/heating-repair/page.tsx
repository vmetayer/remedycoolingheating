import type { Metadata } from "next";
import ServicePage, { relatedFromSlugs, type ServicePageData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Heating Repair in Taunton & SE MA",
  description:
    "Furnace, boiler & heat pump repair in Taunton, Brockton, Boston, Quincy & Providence. No heat? $150 flat assessment applied toward repair. Licensed & insured. Call us today.",
};

const data: ServicePageData = {
  slug: "heating-repair",
  name: "Heating Repair",
  h1: "Heating Repair in Taunton & Southeastern Massachusetts",
  intro: [
    "No heat in a Massachusetts winter isn't an inconvenience — it's an emergency. I repair gas furnaces, boilers, and heat pumps across the Taunton–Boston–Providence corridor, and I answer my own phone, so you're not waiting on a dispatcher while your house gets colder.",
    "Twelve years of heating work means I've seen it all: ignition failures, dead blower motors, cracked heat exchangers, airlocked boilers, frozen condensate lines. I diagnose the real problem and quote it straight — and if a repair is the smarter call than a replacement, I'll tell you.",
  ],
  problems: [
    "Furnace won't ignite, or it fires up and shuts right back down",
    "No heat at all — system dead, thermostat blank",
    "Boiler making banging, gurgling, or whistling sounds",
    "Some radiators or rooms heat up, others stay ice cold",
    "Heat pump blowing cold air or stuck in defrost mode",
  ],
  checklist: [
    "Direct line to me — describe it and I'll often narrow it down on the phone",
    "Honest diagnosis of the actual failure, not a sales pitch",
    "Flat, upfront price with the $150 assessment credited to the repair",
    "Repair done to code by a licensed MA Journeyman Plumber",
    "Clear explanation of what failed and how to avoid a repeat",
  ],
  related: relatedFromSlugs(["heat-pump-installation", "water-heater", "emergency-hvac"]),
  ctaHeadline: "No Heat? Don't Wait.",
  ctaSub: "Call now and I'll tell you honestly how fast I can be there.",
};

export default function Page() {
  return <ServicePage data={data} />;
}
