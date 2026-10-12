import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import TrustBar from "@/components/TrustBar";
import ReviewCard from "@/components/ReviewCard";
import CTABand from "@/components/CTABand";
import FAQ, { faqSchema, type FAQItem } from "@/components/FAQ";
import HeroForm from "@/components/HeroForm";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  SERVICES,
  CITIES,
  THUMBTACK_URL,
} from "@/lib/site";

/* ── service photo mapping ─────────────────────────────── */
const SERVICE_PHOTOS: Record<string, string> = {
  "ac-repair": "/images/ac-repair-condenser-gauges.jpg",
  "ac-installation": "/images/ac-installation-bryant.jpg",
  "heating-repair": "/images/van-snow-winter.jpg",
  "heat-pump-installation": "/images/minisplit-indoor-unit.jpg",
  "water-heater": "/images/water-heater-dual-rheem.jpg",
  "emergency-hvac": "/images/rooftop-condenser-service.jpg",
};

/* ── static data ───────────────────────────────────────── */
const FAQS: FAQItem[] = [
  {
    q: "How much does a service call cost?",
    a: "$150 flat diagnostic fee, applied toward your repair if you hire us.",
  },
  {
    q: "Do you work weekends and emergencies?",
    a: "We do our best to help with urgent situations. Call directly and we'll tell you honestly if we can get to you.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes — Massachusetts Journeyman Plumber licensed and fully insured. EPA Universal Certified for refrigerant handling.",
  },
  {
    q: "Do you service my town?",
    a: "We serve Taunton, Brockton, Boston, Quincy, Dorchester, Providence, and dozens of surrounding towns across southeastern MA and Rhode Island — plus Raynham, Norton, Easton, Bridgewater, Mansfield, Stoughton, Attleboro, Milton, Canton, Dedham, Weymouth, Braintree, Randolph, Abington, Rockland, Hyde Park, West Roxbury, Roslindale, Cranston RI, and many more. Not sure? Call — we likely cover you.",
  },
  {
    q: "How do I know if I should repair or replace?",
    a: "We give you an honest assessment — not one driven by what earns us more. Sometimes a $200 repair is the right call. We'll tell you which.",
  },
  {
    q: "What brands do you service?",
    a: "All major brands — Carrier, Trane, Lennox, Rheem, Mitsubishi, Fujitsu, Daikin, and more.",
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
      "Best contractor experience I've had in years. Professional, fast, and left my basement cleaner than he found it. The $150 assessment fee came right off my bill.",
    name: "James T.",
    city: "Quincy",
    service: "Water Heater Installation",
  },
];

/* ── wave divider ──────────────────────────────────────── */
function WaveDivider({ fill, bg }: { fill: string; bg: string }) {
  return (
    <div className={`${bg} -mb-px`}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="block w-full">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* SEO schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQS)) }}
      />

      {/* ── 1 · HERO ─────────────────────────────────────── */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-remedy-dark">
        {/* Background photo + overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-van-colonial.jpg"
            alt="Remedy Cooling and Heating service van"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-remedy-dark/80" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16">
          {/* Left — headline + CTAs */}
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-widest text-remedy-pink">
              / HVAC CONTRACTOR · Taunton, MA
            </p>
            <h1 className="font-barlow text-5xl font-black uppercase leading-none text-white sm:text-6xl lg:text-7xl">
              HEAT AND AC{" "}
              <span className="block text-outline">REPAIRED</span>
              FAST
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
              From dead air conditioners to broken boilers, we answer the phone
              and get your system running again. Serving SE Massachusetts &amp;
              Rhode Island for 12 years.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#quote"
                className="rounded-lg bg-remedy-pink px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-remedy-pink-dark"
              >
                GET FREE QUOTE
              </a>
              <a
                href={PHONE_TEL}
                className="flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" /> CALL NOW
              </a>
            </div>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5">
              <span className="text-amber-400">★★★★★</span>
              <span className="text-sm font-semibold text-white">
                4.6 · Thumbtack Top Pro 2017–2025
              </span>
            </div>
          </div>

          {/* Right — lead capture form */}
          <HeroForm />
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="block w-full"
          >
            <path
              d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
              fill="#5c0f2a"
            />
          </svg>
        </div>
      </section>

      {/* ── 2 · SERVICES ─────────────────────────────────── */}
      <section className="bg-remedy-wine py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-barlow text-4xl font-black uppercase text-white sm:text-5xl">
            Our Services
          </h2>
          <p className="mt-2 text-lg text-white/60">
            Expert installation, repair, and maintenance — done right the first time.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={SERVICE_PHOTOS[s.slug] ?? "/images/hero-van-colonial.jpg"}
                  alt={s.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="service-card-overlay absolute inset-0" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-barlow text-xl font-bold uppercase text-white">
                    {s.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/65">{s.short}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-remedy-pink">
                    LEARN MORE <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* wave wine → dark */}
      <WaveDivider fill="#0d0d1a" bg="bg-remedy-wine" />

      {/* ── 3 · TRUST BAR ────────────────────────────────── */}
      <section className="bg-remedy-dark py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-5">
            {[
              { stat: "12+", label: "Years in Business" },
              { stat: "400+", label: "Jobs Completed" },
              { stat: "Top Pro", label: "Thumbtack 2017–2025" },
              { stat: "EPA", label: "Universal Certified" },
              { stat: "MA Lic.", label: "Journeyman Plumber" },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col items-center">
                <span className="font-barlow text-3xl font-black text-remedy-pink">
                  {stat}
                </span>
                <span className="mt-1 text-sm font-semibold text-white/60">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* wave dark → charcoal */}
      <WaveDivider fill="#1a1a2e" bg="bg-remedy-dark" />

      {/* ── 4 · HOW IT WORKS ─────────────────────────────── */}
      <section className="bg-remedy-charcoal py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-barlow text-4xl font-black uppercase text-white">
            Getting Fixed Is Simple
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Call or Text",
                body: "Describe the problem — we'll often diagnose half of it on the phone.",
              },
              {
                n: "02",
                title: "$150 Flat Assessment",
                body: "A licensed tech arrives, diagnoses the issue, gives you a clear upfront price. The $150 applies toward your repair.",
              },
              {
                n: "03",
                title: "Fixed. Explained. Done.",
                body: "Quality work, clean workspace. We walk you through exactly what was done. No upsells.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="rounded-xl bg-remedy-dark p-8">
                <span className="font-barlow text-5xl font-black text-remedy-pink/30">
                  {n}
                </span>
                <h3 className="mt-2 font-barlow text-xl font-bold uppercase text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* wave charcoal → wine */}
      <WaveDivider fill="#5c0f2a" bg="bg-remedy-charcoal" />

      {/* ── 5 · REVIEWS ──────────────────────────────────── */}
      <section id="reviews" className="bg-remedy-wine py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-barlow text-4xl font-black uppercase text-white sm:text-5xl">
            What Customers Say
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <div key={r.name} className="rounded-xl bg-remedy-dark/60 p-7">
                <div className="mb-4 text-amber-400">★★★★★</div>
                <p className="text-sm leading-relaxed text-white/80">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="font-bold text-white">{r.name}</p>
                  <p className="text-xs text-remedy-pink">
                    {r.city} · {r.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8">
            <a
              href={THUMBTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-remedy-pink hover:underline"
            >
              Read all reviews on Thumbtack →
            </a>
          </p>
        </div>
      </section>

      {/* wave wine → dark */}
      <WaveDivider fill="#0d0d1a" bg="bg-remedy-wine" />

      {/* ── 6 · ABOUT ────────────────────────────────────── */}
      <section className="bg-remedy-dark py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/about-remy.jpg"
              alt="Remedy Cooling and Heating service van in Massachusetts"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-remedy-pink">
              / About Us
            </p>
            <h2 className="font-barlow text-4xl font-black uppercase leading-tight text-white sm:text-5xl">
              Why Homeowners Choose Remedy
            </h2>
            <p className="mt-5 leading-relaxed text-white/70">
              When your AC fails in July or your heat goes out in January, you
              need a company that picks up the phone, shows up fast, and gets it
              done right. That&apos;s what Remedy has delivered to homeowners across
              Massachusetts and Rhode Island for over 12 years.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Massachusetts-licensed, EPA Universal Certified, and background
              checked. Every job comes with an upfront flat-rate quote — no
              surprise line items, no upsells. Hundreds of homeowners across
              Taunton, Brockton, Boston, Quincy, Dorchester, Providence, and
              dozens of surrounding towns have trusted Remedy, and we&apos;ve earned
              Thumbtack Top Pro every year since 2017.
            </p>
            <p className="mt-4 leading-relaxed text-white/70">
              Fast response. Honest pricing. Work that lasts. That&apos;s the Remedy standard.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "EPA Universal Certified",
                "MA Licensed",
                "12 Years",
                "Top Pro 2017–2025",
                "Background Checked",
              ].map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-remedy-pink/40 bg-remedy-pink/10 px-4 py-2 text-sm font-semibold text-remedy-pink"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* wave dark → charcoal */}
      <WaveDivider fill="#1a1a2e" bg="bg-remedy-dark" />

      {/* ── 7 · SERVICE AREAS ────────────────────────────── */}
      <section id="service-areas" className="scroll-mt-24 bg-remedy-charcoal py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-remedy-pink">
            / Coverage
          </p>
          <h2 className="font-barlow text-4xl font-black uppercase text-white sm:text-5xl">
            Serving SE Massachusetts &amp; Rhode Island
          </h2>
          <p className="mt-3 text-lg text-white/60">
            Based in Taunton — covering the full corridor from Greater Boston
            down to Providence and everywhere in between.
          </p>

          {/* Primary cities */}
          <div className="mt-8 flex flex-wrap gap-3">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="rounded-full border-2 border-remedy-pink px-5 py-2.5 font-semibold text-remedy-pink transition hover:bg-remedy-pink hover:text-white"
              >
                {c.city}
                {c.state === "RI" ? ", RI" : ", MA"}
              </Link>
            ))}
          </div>

          {/* Surrounding towns */}
          <p className="mt-10 text-sm font-semibold uppercase tracking-widest text-white/40">
            Also serving
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Raynham","Norton","Mansfield","Easton","Bridgewater",
              "West Bridgewater","East Bridgewater","Middleborough","Lakeville",
              "Attleboro","North Attleboro","Foxborough","Stoughton","Sharon",
              "Wareham","Rochester","Abington","Whitman","Holbrook","Avon",
              "Rockland","Hanover","Norwell","Pembroke","Milton","Canton",
              "Dedham","Norwood","Westwood","Hyde Park","West Roxbury",
              "Roslindale","Jamaica Plain","Mattapan","South Boston","Roxbury",
              "Weymouth","Braintree","Randolph","Cranston, RI","Pawtucket, RI",
              "North Providence, RI","Johnston, RI","Woonsocket, RI","Cumberland, RI",
            ].map((town) => (
              <span
                key={town}
                className="rounded-full bg-remedy-dark px-3 py-1.5 text-sm font-medium text-white/50"
              >
                {town}
              </span>
            ))}
          </div>

          <p className="mt-8 text-white/50">
            Don&apos;t see your town?{" "}
            <a href={PHONE_TEL} className="font-semibold text-remedy-pink hover:underline">
              Call us
            </a>{" "}
            — we likely cover you.
          </p>
        </div>
      </section>

      {/* wave charcoal → dark */}
      <WaveDivider fill="#0d0d1a" bg="bg-remedy-charcoal" />

      {/* ── 8 · FAQ ───────────────────────────────────────── */}
      <section className="bg-remedy-dark py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-barlow text-4xl font-black uppercase text-white">
            Common Questions
          </h2>
          <div className="mt-8 space-y-4">
            {FAQS.map(({ q, a }) => (
              <div key={q} className="rounded-xl bg-remedy-charcoal p-6">
                <h3 className="font-bold text-white">{q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* wave dark → pink CTA */}
      <WaveDivider fill="#d4205e" bg="bg-remedy-dark" />

      {/* ── 9 · CTA BAND ─────────────────────────────────── */}
      <section className="bg-remedy-pink py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="font-barlow text-4xl font-black uppercase text-white sm:text-5xl">
            No Heat? No AC? Call Now.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            We respond fast — usually within the hour.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2 rounded-lg bg-white px-10 py-4 text-lg font-bold text-remedy-pink shadow-lg transition hover:bg-white/90"
            >
              <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
            </a>
            <a
              href="#quote"
              className="rounded-lg border-2 border-white px-10 py-4 text-lg font-bold text-white transition hover:bg-white/10"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
