import type { Metadata } from "next";
import ServicePage, { relatedFromSlugs, type ServicePageData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "AC Repair in Taunton & SE MA",
  description:
    "Fast, honest AC repair in Taunton, Brockton, Boston, Quincy & Providence. $150 flat assessment applied toward your repair. EPA-certified, 384 jobs done. Call us today.",
};

const data: ServicePageData = {
  slug: "ac-repair",
  name: "AC Repair",
  h1: "AC Repair in Taunton & Southeastern Massachusetts",
  intro: [
    "When your air conditioning quits in the middle of a New England heat wave, you don't want a call center — you want a licensed tech who picks up the phone and shows up. That's me. I've repaired hundreds of central AC systems, condensers, and air handlers across Taunton, Brockton, Quincy, Boston, and Providence.",
    "I'm EPA Universal Certified for refrigerant handling, which means I can legally and safely diagnose and fix refrigerant issues most handymen can't touch.",
  ],
  problems: [
    "AC blowing warm air — even though it's running full blast",
    "Short cycling — the system turns on and off every few minutes",
    "Ice buildup on the refrigerant lines or evaporator coil",
    "Weird noises — grinding, squealing, or banging from the condenser",
    "System won't turn on at all, or the thermostat is unresponsive",
    "Water leaking around the indoor unit or air handler",
  ],
  checklist: [
    "You call or text me directly — no dispatcher, no hold music",
    "I arrive when I say I will and diagnose the actual problem",
    "You get a straight, flat price before any work begins",
    "The $150 assessment fee comes off your repair bill",
    "I fix it right, clean up, and explain exactly what I did",
  ],
  related: relatedFromSlugs(["ac-installation", "heat-pump-installation", "emergency-hvac"]),
  ctaHeadline: "AC Not Cooling? Let's Fix It.",
  ctaSub: "One call, one licensed tech, one honest price.",
};

export default function Page() {
  return <ServicePage data={data} />;
}
