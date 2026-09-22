import type { Metadata } from "next";
import ServicePage, { relatedFromSlugs, type ServicePageData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Emergency HVAC Service in Taunton & SE MA",
  description:
    "No heat or no AC emergency? Same-day HVAC service when possible in Taunton, Brockton, Boston, Quincy & Providence. Talk directly to a licensed tech. Call Remy now.",
};

const data: ServicePageData = {
  slug: "emergency-hvac",
  name: "Emergency HVAC Service",
  h1: "Emergency HVAC Service in Taunton & SE Massachusetts",
  intro: [
    "No heat in January. No AC during a July heat wave. A water heater dumping onto your basement floor. These can't wait for 'the next available appointment' — and with me, you don't have to hope a call center squeezes you in. You call, I answer, and I tell you honestly when I can be there.",
    "I can't promise 24/7 availability — I'm one guy, and I won't pretend otherwise. What I can promise: same-day service whenever humanly possible, honest ETAs instead of vague windows, and a fix done right the first time so you're not calling me back next week. I cover the full corridor from Boston down to Providence.",
  ],
  problems: [
    "Complete heating failure in freezing weather",
    "AC dead during a heat wave — especially with kids, elderly, or pets at home",
    "Water heater leaking or burst",
    "Gas furnace making alarming smells or noises (leave the house and call your gas company first — then call me)",
    "System failure right before guests, a home sale, or a rental turnover",
  ],
  checklist: [
    "You reach me directly — a licensed tech, not an answering service",
    "Honest availability: I'll tell you exactly when I can get there",
    "Same-day service whenever possible across all my service areas",
    "Real repair, not a band-aid that fails again in a week",
    "$150 assessment applied toward the repair, even on emergency calls",
  ],
  related: relatedFromSlugs(["ac-repair", "heating-repair", "water-heater"]),
  ctaHeadline: "HVAC Emergency? Call Right Now.",
  ctaSub: "I'll pick up or call back fast — and give you an honest ETA, not a runaround.",
};

export default function Page() {
  return <ServicePage data={data} />;
}
