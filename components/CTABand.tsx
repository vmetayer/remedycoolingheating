import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

type Props = {
  variant?: "emergency" | "standard";
  headline: string;
  subtext?: string;
};

export default function CTABand({ variant = "standard", headline, subtext }: Props) {
  const bg =
    variant === "emergency"
      ? "bg-gradient-to-r from-remedy-emergency to-remedy-orange"
      : "bg-remedy-dark";

  return (
    <section className={`${bg} w-full`}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 py-14 text-center sm:px-6">
        <h2 className="font-barlow text-3xl font-extrabold text-white sm:text-4xl">
          {headline}
        </h2>
        {subtext && <p className="max-w-2xl text-blue-50">{subtext}</p>}
        <a
          href={PHONE_TEL}
          className={`mt-2 flex items-center gap-3 rounded-xl px-8 py-4 text-xl font-extrabold shadow-lg hover:brightness-110 ${
            variant === "emergency"
              ? "bg-white text-remedy-emergency"
              : "bg-remedy-orange text-white"
          }`}
        >
          <Phone className="h-6 w-6" /> {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}
