import Link from "next/link";
import { ArrowLeft, CheckCircle2, Wrench } from "lucide-react";
import CTABand from "@/components/CTABand";
import { PHONE_DISPLAY, PHONE_TEL, SITE_URL, SERVICES, AREA_SERVED } from "@/lib/site";

export type ServicePageData = {
  slug: string;
  name: string;
  h1: string;
  intro: string[];
  problems: string[];
  checklist: string[];
  related: { name: string; slug: string; blurb: string }[];
  ctaHeadline: string;
  ctaSub: string;
};

export function serviceSchema(data: ServicePageData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    serviceType: data.name,
    url: `${SITE_URL}/${data.slug}`,
    areaServed: AREA_SERVED,
    provider: {
      "@type": "HVACBusiness",
      name: "Remedy Cooling and Heating",
      telephone: "+1-508-617-3450",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Taunton",
        addressRegion: "MA",
        addressCountry: "US",
      },
    },
  };
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(data)) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-remedy-dark to-remedy-blue text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h1 className="font-barlow text-4xl font-extrabold sm:text-5xl">{data.h1}</h1>
          {data.intro.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 max-w-3xl text-lg leading-relaxed text-blue-50">
              {p}
            </p>
          ))}
          <a
            href={PHONE_TEL}
            className="mt-8 inline-block rounded-xl bg-remedy-orange px-8 py-4 text-lg font-bold text-white shadow-lg hover:brightness-110"
          >
            📞 Call Now — {PHONE_DISPLAY}
          </a>
        </div>
      </section>

      {/* Common problems */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark">
          Common Problems I Fix
        </h2>
        <ul className="mt-6 space-y-3">
          {data.problems.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <Wrench className="mt-1 h-5 w-5 shrink-0 text-remedy-orange" />
              <span className="text-gray-700">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Checklist */}
      <section className="bg-remedy-mist">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark">
            What Happens When You Hire Me
          </h2>
          <ul className="mt-6 space-y-3">
            {data.checklist.map((c) => (
              <li key={c} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-remedy-teal" />
                <span className="text-gray-700">{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark">
          Simple, Honest Pricing
        </h2>
        <div className="mt-6 rounded-xl border-2 border-remedy-teal bg-white p-6 shadow-sm">
          <p className="font-barlow text-2xl font-extrabold text-remedy-blue">
            $150 Flat Assessment Fee
          </p>
          <p className="mt-3 leading-relaxed text-gray-700">
            I come out, diagnose the real problem, and give you a straight price
            before any work starts. If you hire me for the repair, the $150 comes
            right off your bill. No trip charges stacked on top, no
            &ldquo;diagnostic tiers,&rdquo; no surprises.
          </p>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-remedy-mist">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="font-barlow text-3xl font-extrabold text-remedy-dark">
            Related Services
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {data.related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="rounded-xl bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-barlow text-xl font-bold text-remedy-blue">{r.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{r.blurb}</p>
                <span className="mt-3 inline-block text-sm font-semibold text-remedy-orange">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand headline={data.ctaHeadline} subtext={data.ctaSub} />

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-2 font-semibold text-remedy-blue hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to homepage
        </Link>
      </div>
    </>
  );
}

export function relatedFromSlugs(slugs: string[]) {
  return slugs.map((slug) => {
    const s = SERVICES.find((x) => x.slug === slug);
    return s
      ? { name: s.name, slug: s.slug, blurb: s.short }
      : { name: slug, slug, blurb: "" };
  });
}
