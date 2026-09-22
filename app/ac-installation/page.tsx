import type { Metadata } from "next";
import ServicePage, { relatedFromSlugs, type ServicePageData } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "AC Installation in Taunton & SE MA",
  description:
    "Central AC installation done right in Taunton, Brockton, Boston, Quincy & Providence. Proper sizing, honest quotes, licensed & EPA-certified. Get a straight answer — call today.",
};

const data: ServicePageData = {
  slug: "ac-installation",
  name: "AC Installation",
  h1: "AC Installation in Taunton & Southeastern Massachusetts",
  intro: [
    "A central AC system is only as good as its installation. An oversized unit short-cycles and dies young; an undersized one runs constantly and never cools. I size every system properly — real load calculations, not guesswork — and install it to manufacturer spec so your warranty actually holds.",
    "Before quoting, I assess your ductwork too. Leaky or undersized ducts can waste 30% of your cooling before it ever reaches a room. You'll get one honest quote covering everything, with modern, efficient equipment that fits your house and your budget.",
  ],
  problems: [
    "Your old AC is 15+ years old and repairs are getting expensive",
    "Some rooms are freezing while others never cool down",
    "Your energy bills spike every summer",
    "You're still using window units and want whole-home cooling",
    "A previous installer oversized or undersized your system",
  ],
  checklist: [
    "Free honest conversation about whether replacement even makes sense",
    "Proper load calculation — the system is sized to your actual house",
    "Ductwork assessment included before you commit",
    "Quality, efficient modern equipment installed to spec",
    "Full walkthrough of your new system before I leave",
  ],
  related: relatedFromSlugs(["heat-pump-installation", "ac-repair", "emergency-hvac"]),
  ctaHeadline: "Thinking About Central AC?",
  ctaSub: "Get a straight answer on sizing, cost, and whether it's worth it — from the guy who'd install it.",
};

export default function Page() {
  return <ServicePage data={data} />;
}
