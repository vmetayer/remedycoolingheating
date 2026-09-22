import Link from "next/link";
import {
  Snowflake,
  Sun,
  Flame,
  Wind,
  Droplets,
  Siren,
  Shield,
  DollarSign,
  Award,
  Star,
  Phone,
} from "lucide-react";
import TrustBar from "@/components/TrustBar";
import ReviewCard from "@/components/ReviewCard";
import CTABand from "@/components/CTABand";
import ContactForm from "@/components/ContactForm";
import FAQ, { faqSchema, type FAQItem } from "@/components/FAQ";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  SERVICES,
  CITIES,
  THUMBTACK_URL,
} from "@/lib/site";

const SERVICE_ICONS = [Snowflake, Sun, Flame, Wind, Droplets, Siren];

const FAQS: FAQItem[] = [
  {
    q: "How much does a service call cost?",
    a: "$150 flat diagnostic fee, applied toward your repair if you hire me.",
  },
  {
    q: "Do you work weekends and emergencies?",
    a: "I do my best to help with urgent situations. Call me directly and I'll tell you honestly if I can get to you.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — Massachusetts Journeyman Plumber licensed and fully insured. EPA Universal Certified for refrigerant handling.",
  },
  {
    q: "Do you service my town?",
    a: "We serve Taunton, Brockton, Boston, Quincy, Dorchester, Providence, and dozens of surrounding towns across southeastern MA and Rhode Island RI — plus Raynham, Norton, Easton, Bridgewater, Mansfield, Stoughton, Attleboro, Milton, Canton, Dedham, Weymouth, Braintree, Randolph, Abington, Rockland, Hyde Park, West Roxbury, Roslindale, Cranston RI, and many more surrounding towns. Not sure? Call — we likely cover you.",
  },
  {
    q: "How do I know if I should repair or replace?",
    a: "I'll give you an honest assessment — not one driven by what earns me more. Sometimes a $200 repair is the right call. I'll tell you which.",
  },
  {
    q: "What brands do you service?",
    a: "All major brands — Carrier, Trane, Lennox, Rheem, Mitsubishi, Fujitsu, and more.",
  },
];

const REVIEWS = [
  {
    quote:
      "Remy showed up same day when our AC died in July. Fixed it in under an hour, explained exactly what happened, and charged exactly what he quoted. Incredible service.",
    name: "Mike D.",
    city: "Brockton",
    service: "AC Repair",
  },
  {
    quote:
      "I've used Remy three times now. Every time: on time, honest, fair price. He told me my furnace didn't need a full replacement when another company said it did. Saved me $4,000.",
    name: "Sarah M.",
    city: "Taunton",
    service: "Heating Repair",
  },
  {
    quote:
      "Best contractor experience I've had in years. Remy was professional, fast, and left my basement cleaner than he found it. The $150 assessment fee came right off my bill.",
    name: "James T.",
    city: "Quincy",
    service: "Water Heater Installation",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Shield,
    claim: "Expert service, every time.",
    detail: "Reliable, consistent, and accountable. The licensed tech who answers the phone is the one who shows up at your door.",
  },
  {
    icon: DollarSign,
    claim: "Transparent pricing.",
    detail: "$150 assessment, credited toward repair. No surprises, no upsells, no mystery line items.",
  },
  {
    icon: Award,
    claim: "12 years, one standard.",
    detail: "EPA Universal certified, MA licensed. Every job done to the same standard — mine.",
  },
  {
    icon: Star,
    claim: "Proof, not promises.",
    detail: "Hundreds of happy customers. Top Pro nine years straight. The track record speaks for itself.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />

      {/* 1 — Hero */}
      <section className="bg-gradient-to-br from-remedy-dark to-remedy-blue text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-remedy-teal">
              Taunton, MA — Serving SE Massachusetts &amp; Rhode Island
            </p>
            <h1 className="mt-4 font-barlow text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Fast, Trusted HVAC Service — Done Right the First Time.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-50">
              Remedy Cooling and Heating has served Massachusetts and Rhode Island homeowners for 12 years — with fast response times, honest flat-rate pricing, and work that holds up. Thumbtack Top Pro rated every year since 2017.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={PHONE_TEL}
                className="flex items-center justify-center gap-2 rounded-xl bg-remedy-orange px-8 py-4 text-lg font-bold text-white shadow-lg hover:brightness-110"
              >
                <Phone className="h-5 w-5" /> Call Now — Fast Response
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white hover:bg-white/10"
              >
                Get a Free Quote
              </a>
            </div>
            <p className="mt-6 text-sm font-semibold text-amber-300">
              ★★★★★ Thumbtack Top Pro · Hundreds of Happy Customers
            </p>
          </div>
          <div className="hidden aspect-[4/5] max-h-[520px] overflow-hidden rounded-2xl shadow-2xl lg:flex">
            <img src="/images/hero-van-colonial.jpg" alt="Remedy Cooling and Heating van at a customer's home in Taunton MA" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* 2 — Trust bar */}
      <TrustBar />

      {/* 3 — Services grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark sm:text-4xl">
          Everything You Need to Stay Comfortable Year-Round
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Expert installation, repair, and maintenance — done right the first time.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
            return (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="h-9 w-9 text-remedy-blue" />
                <h3 className="mt-4 font-barlow text-xl font-bold text-remedy-dark group-hover:text-remedy-blue">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{s.short}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-remedy-orange">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 4 — How it works */}
      <section className="bg-remedy-mist">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-barlow text-3xl font-extrabold text-remedy-dark sm:text-4xl">
            Getting Your System Fixed Is Simple
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                n: "1",
                title: "Call or text me directly.",
                body: "Describe the problem — I'll often diagnose half of it on the phone.",
              },
              {
                n: "2",
                title: "$150 Flat Assessment",
                body: "A licensed tech arrives, assesses the issue, and gives you a clear upfront price. The $150 diagnostic applies toward your repair.",
              },
              {
                n: "3",
                title: "Fixed Right, Explained Fully",
                body: "Quality work, clean workspace, and I walk you through what I did. No upsells.",
              },
            ].map((step) => (
              <div key={step.n} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-remedy-teal font-barlow text-2xl font-extrabold text-white">
                  {step.n}
                </div>
                <h3 className="mt-5 font-barlow text-xl font-bold text-remedy-dark">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-600">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Service areas */}
      <section id="service-areas" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6">
        <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark sm:text-4xl">
          Serving Southeastern Massachusetts &amp; Rhode Island
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Based in Taunton — covering the full corridor from Greater Boston down to Providence and everywhere in between.
        </p>

        {/* Primary cities — linked pages */}
        <div className="mt-8 flex flex-wrap gap-3">
          {CITIES.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}`}
              className="rounded-full border-2 border-remedy-blue px-5 py-2.5 font-semibold text-remedy-blue transition hover:bg-remedy-blue hover:text-white"
            >
              {c.city}{c.state === "RI" ? ", RI" : ", MA"}
            </Link>
          ))}
        </div>

        {/* Surrounding towns — SEO coverage */}
        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-gray-400">Also serving</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            // SE Mass / Taunton corridor
            "Raynham", "Norton", "Mansfield", "Easton", "Bridgewater",
            "West Bridgewater", "East Bridgewater", "Middleborough", "Lakeville",
            "Attleboro", "North Attleboro", "Foxborough", "Stoughton", "Sharon",
            "Wareham", "Rochester",
            // Brockton area
            "Abington", "Whitman", "Holbrook", "Avon", "Rockland",
            "Hanover", "Norwell", "Pembroke",
            // Metro South / Boston
            "Milton", "Canton", "Dedham", "Norwood", "Westwood",
            "Hyde Park", "West Roxbury", "Roslindale", "Jamaica Plain",
            "Mattapan", "South Boston", "Roxbury",
            // Quincy / South Shore
            "Weymouth", "Braintree", "Randolph",
            // Providence RI area
            "Cranston, RI", "Pawtucket, RI", "North Providence, RI",
            "Johnston, RI", "Woonsocket, RI", "Cumberland, RI",
          ].map((town) => (
            <span
              key={town}
              className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600"
            >
              {town}
            </span>
          ))}
        </div>

        <p className="mt-6 text-gray-500">
          Don&apos;t see your town?{" "}
          <a href={PHONE_TEL} className="font-semibold text-remedy-orange">
            Call us
          </a>{" "}
          — we likely cover you.
        </p>
      </section>

      {/* 6 — Why choose */}
      <section className="bg-remedy-dark text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="font-barlow text-3xl font-extrabold sm:text-4xl">
            Why Homeowners Keep Hiring Me Back
          </h2>
          <div className="mt-10 space-y-8">
            {DIFFERENTIATORS.map(({ icon: Icon, claim, detail }) => (
              <div key={claim} className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-remedy-teal/20">
                  <Icon className="h-6 w-6 text-remedy-teal" />
                </div>
                <div>
                  <h3 className="font-barlow text-xl font-bold">{claim}</h3>
                  <p className="mt-1 text-blue-100">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Reviews */}
      <section id="reviews" className="bg-remedy-mist scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark sm:text-4xl">
            Here&apos;s What Customers Say.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
          <p className="mt-8">
            <a
              href={THUMBTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-remedy-blue hover:underline"
            >
              Read all our reviews on Thumbtack →
            </a>
          </p>
        </div>
      </section>

      {/* 8 — About Remy */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="flex aspect-[4/5] max-h-[480px] overflow-hidden rounded-2xl shadow-lg">
          <img src="/images/about-remy.jpg" alt="Remedy Cooling and Heating van in a Massachusetts winter snowstorm" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark sm:text-4xl">
            Why Homeowners Choose Remedy.
          </h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            When your AC fails in July or your heat goes out in January, you need a company that picks up the phone, shows up fast, and gets it done right. That&apos;s what Remedy has delivered to homeowners across Massachusetts and Rhode Island for over 12 years.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Massachusetts-licensed, EPA Universal Certified, and background checked. Every job comes with an upfront flat-rate quote — no surprise line items, no upsells. Hundreds of homeowners across Taunton, Brockton, Boston, Quincy, Dorchester, Providence, and dozens of surrounding towns across southeastern MA and Rhode Island have trusted Remedy, and we&apos;ve earned Thumbtack Top Pro every year since 2017.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Fast response. Honest pricing. Work that lasts. That&apos;s the Remedy standard.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["EPA Universal Certified", "MA Licensed", "12 Years", "Top Pro 2017–2025"].map(
              (b) => (
                <span
                  key={b}
                  className="rounded-full bg-remedy-mist px-4 py-2 text-sm font-semibold text-remedy-dark"
                >
                  {b}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* 9 — Emergency CTA */}
      <CTABand
        variant="emergency"
        headline="No Heat? No AC? Call Now."
        subtext="I'll tell you honestly how fast I can get to you — often same day."
      />

      {/* 10 — FAQ */}
      <section className="bg-remedy-mist">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="mb-10 text-center font-barlow text-3xl font-extrabold text-remedy-dark sm:text-4xl">
            Straight Answers to Common Questions
          </h2>
          <FAQ items={FAQS} />
        </div>
      </section>

      {/* 11 — Contact */}
      <section id="contact" className="mx-auto max-w-3xl scroll-mt-24 px-4 py-16 sm:px-6">
        <h2 className="text-center font-barlow text-3xl font-extrabold text-remedy-dark sm:text-4xl">
          Get a Fast Answer
        </h2>
        <p className="mt-2 text-center text-lg text-gray-600">
          We respond fast — usually within the hour.
        </p>
        <div className="mt-8">
          <ContactForm />
        </div>
        <p className="mt-6 text-center text-gray-500">
          Prefer to talk?{" "}
          <a href={PHONE_TEL} className="font-bold text-remedy-orange">
            {PHONE_DISPLAY}
          </a>
        </p>
      </section>
    </>
  );
}
