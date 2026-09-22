import Link from "next/link";
import { ArrowLeft, MapPin, Snowflake, Sun, Flame, Wind, Droplets, Siren } from "lucide-react";
import CTABand from "@/components/CTABand";
import ReviewCard from "@/components/ReviewCard";
import FAQ, { faqSchema, type FAQItem } from "@/components/FAQ";
import { SERVICES, SITE_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const SERVICE_ICONS = [Snowflake, Sun, Flame, Wind, Droplets, Siren];

export type CityPageData = {
  slug: string;
  city: string;
  state: string;
  driveTime: string;
  paragraphs: string[];
  reviews: { quote: string; name: string; service: string }[];
  faqs: FAQItem[];
};

export function citySchema(data: CityPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Remedy Cooling and Heating",
    telephone: "+1-508-617-3450",
    url: `${SITE_URL}/${data.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Taunton",
      addressRegion: "MA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: `${data.city}, ${data.state}`,
    },
    priceRange: "$",
  };
}

export default function CityPage({ data }: { data: CityPageData }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema(data)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(data.faqs)) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-remedy-dark to-remedy-blue text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-remedy-teal">
            <MapPin className="h-4 w-4" /> Service Area
          </div>
          <h1 className="mt-3 font-barlow text-4xl font-extrabold sm:text-5xl">
            HVAC Repair &amp; Installation in {data.city}, {data.state}
          </h1>
          <p className="mt-4 text-lg text-blue-50">
            {data.driveTime} away — I&apos;m in {data.city} constantly.
          </p>
          <a
            href={PHONE_TEL}
            className="mt-8 inline-block rounded-xl bg-remedy-orange px-8 py-4 text-lg font-bold text-white shadow-lg hover:brightness-110"
          >
            📞 Call Now — {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Local content */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {data.paragraphs.map((p) => (
          <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-gray-700 first:mt-0">
            {p}
          </p>
        ))}
      </section>

      {/* Services grid */}
      <section className="bg-remedy-mist">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark">
            HVAC Services in {data.city}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[i % SERVICE_ICONS.length];
              return (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="h-8 w-8 text-remedy-blue" />
                  <h3 className="mt-3 font-barlow text-xl font-bold text-remedy-dark">{s.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{s.short}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-remedy-orange">
                    Learn more →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark">
          What {data.city} Homeowners Say
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {data.reviews.map((r) => (
            <ReviewCard
              key={r.name}
              quote={r.quote}
              name={r.name}
              city={data.city}
              service={r.service}
            />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-remedy-mist">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <h2 className="mb-8 text-center font-barlow text-3xl font-extrabold text-remedy-dark">
            {data.city} HVAC Questions
          </h2>
          <FAQ items={data.faqs} />
        </div>
      </section>

      <CTABand
        headline={`Need HVAC Help in ${data.city}?`}
        subtext="One call gets you a licensed, EPA-certified tech — me. No call centers, no runaround."
      />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold text-remedy-blue hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to homepage
        </Link>
      </div>
    </>
  );
}
