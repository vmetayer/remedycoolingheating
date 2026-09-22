import { CheckCircle2, Award, ShieldCheck, BadgeCheck, UserCheck } from "lucide-react";

const ITEMS = [
  { icon: CheckCircle2, label: "Hundreds of Happy Customers" },
  { icon: Award, label: "Top Pro 2017–2025" },
  { icon: ShieldCheck, label: "MA Licensed & Insured" },
  { icon: BadgeCheck, label: "EPA Universal Certified" },
  { icon: UserCheck, label: "Background Checked" },
];

export default function TrustBar() {
  return (
    <div className="w-full bg-remedy-mist">
      <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-4 py-4 sm:px-6 md:justify-between">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex shrink-0 items-center gap-2">
            <Icon className="h-5 w-5 text-remedy-teal" />
            <span className="whitespace-nowrap text-sm font-semibold text-remedy-dark">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
