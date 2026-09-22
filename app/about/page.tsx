import type { Metadata } from "next";
import Link from "next/link";
import { Award, ShieldCheck, BadgeCheck, Wrench, GraduationCap, Star, Phone } from "lucide-react";
import CTABand from "@/components/CTABand";
import TrustBar from "@/components/TrustBar";
import { PHONE_DISPLAY, PHONE_TEL, THUMBTACK_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Remedy — 12 Years of Honest HVAC Work",
  description:
    "Meet Remy Tondreau, owner of Remedy Cooling and Heating. MA-licensed Journeyman Plumber, EPA Universal Certified, 384 Thumbtack hires, Top Pro 2017–2025.",
};

const TIMELINE = [
  {
    year: "2014",
    icon: GraduationCap,
    title: "The trade, learned right",
    body: "After trade school and years working under senior techs, I went out on my own — one truck, one standard, based in Taunton.",
  },
  {
    year: "2015",
    icon: BadgeCheck,
    title: "EPA Universal Certification",
    body: "Certified to handle every refrigerant class — the credential that separates real HVAC techs from guys with a gauge set.",
  },
  {
    year: "2017",
    icon: Award,
    title: "First Top Pro award",
    body: "Thumbtack named Remedy a Top Pro. It hasn't missed a year since — 2017 through 2025.",
  },
  {
    year: "2020",
    icon: ShieldCheck,
    title: "MA Journeyman Plumber license",
    body: "Licensed plumbing work means water heaters, boilers, and gas piping done to code, permitted, and insurable.",
  },
  {
    year: "Today",
    icon: Star,
    title: "384 hires and counting",
    body: "Nearly four hundred homeowners across SE Mass and Rhode Island have hired me — most more than once.",
  },
];

const VALUES = [
  {
    title: "Honesty over invoices",
    body: "If a $200 repair solves it, that's what I recommend — even when a replacement would pay me five times more.",
  },
  {
    title: "One tech, start to finish",
    body: "The person who diagnoses your system is the person who fixes it. No handoffs, no 'let me check with the office.'",
  },
  {
    title: "Leave it cleaner",
    body: "Drop cloths down, boots covered, workspace swept. You shouldn't be able to tell I was there — except that everything works.",
  },
  {
    title: "Explain everything",
    body: "You'll know what broke, why, what I did, and how to keep it from happening again. In plain English.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-remedy-dark to-remedy-blue text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-remedy-teal">
              About Remedy Cooling &amp; Heating
            </p>
            <h1 className="mt-3 font-barlow text-4xl font-extrabold sm:text-5xl">
              One Guy. One Call. Done Right.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-blue-50">
              I&apos;m Remy Tondreau — the owner, the tech, and the guy who
              answers the phone. For 12 years I&apos;ve been fixing and installing
              HVAC systems across Southeastern Massachusetts and Rhode Island,
              one honest job at a time.
            </p>
            <a
              href={PHONE_TEL}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-remedy-orange px-8 py-4 text-lg font-bold text-white shadow-lg hover:brightness-110"
            >
              <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
            </a>
          </div>
          <div className="flex aspect-[4/5] max-h-[480px] items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200 to-remedy-orange/60 shadow-2xl">
            <img src="/images/about-remy.jpg" alt="Remedy Cooling and Heating van in a Massachusetts snowstorm" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Story */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark">
          Why I Started Remedy
        </h2>
        <p className="mt-4 leading-relaxed text-gray-700">
          I started Remedy Cooling and Heating because I got tired of watching
          homeowners get burned — by call centers that send a different tech
          every time, by quotes that double once the work starts, and by
          companies that push replacements when a repair would do.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          The fix seemed obvious: be the opposite of that. One licensed,
          certified tech. Direct phone access. A flat $150 assessment that gets
          credited to your repair. Honest advice, even when it costs me money.
          Twelve years and 384 hires later, I can tell you it works — homeowners
          notice, and they keep calling back.
        </p>
      </section>

      {/* Timeline */}
      <section className="bg-remedy-mist">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark">
            The Road So Far
          </h2>
          <div className="mt-10 space-y-8">
            {TIMELINE.map(({ year, icon: Icon, title, body }) => (
              <div key={year} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-remedy-teal text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-2 w-px flex-1 bg-remedy-teal/30" />
                </div>
                <div className="pb-2">
                  <div className="font-barlow text-sm font-bold uppercase tracking-wider text-remedy-teal">
                    {year}
                  </div>
                  <h3 className="mt-1 font-barlow text-xl font-bold text-remedy-dark">
                    {title}
                  </h3>
                  <p className="mt-1 text-gray-600">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark">
          What I Stand For
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-md">
              <Wrench className="h-7 w-7 text-remedy-orange" />
              <h3 className="mt-3 font-barlow text-xl font-bold text-remedy-dark">
                {v.title}
              </h3>
              <p className="mt-2 text-gray-600">{v.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-gray-600">
          Want proof?{" "}
          <a
            href={THUMBTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-remedy-blue hover:underline"
          >
            Read my 384 verified Thumbtack reviews →
          </a>{" "}
          or head back to the{" "}
          <Link href="/" className="font-semibold text-remedy-blue hover:underline">
            homepage
          </Link>
          .
        </p>
      </section>

      <CTABand
        headline="Ready to Work With Someone Honest?"
        subtext="Call or text — We respond fast — usually within the hour."
      />
    </>
  );
}
