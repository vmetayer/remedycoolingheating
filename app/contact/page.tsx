import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import CTABand from "@/components/CTABand";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, CITIES } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us — Call, Text, or Send a Message",
  description:
    "Reach Remedy Cooling and Heating in Taunton, MA. Call or text (617) 388-3271, email, or send a message — We respond fast — usually within the hour.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-remedy-dark to-remedy-blue text-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h1 className="font-barlow text-4xl font-extrabold sm:text-5xl">
            Get a Fast Answer
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-50">
            Call, text, or send a message below. We respond to every message —
            usually within the hour.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5">
        {/* Contact info */}
        <div className="space-y-6 lg:col-span-2">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-remedy-mist">
              <Phone className="h-6 w-6 text-remedy-blue" />
            </div>
            <div>
              <h2 className="font-barlow text-lg font-bold text-remedy-dark">Call or Text</h2>
              <a href={PHONE_TEL} className="text-lg font-bold text-remedy-orange">
                {PHONE_DISPLAY}
              </a>
              <p className="text-sm text-gray-500">Fastest way to reach me</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-remedy-mist">
              <Mail className="h-6 w-6 text-remedy-blue" />
            </div>
            <div>
              <h2 className="font-barlow text-lg font-bold text-remedy-dark">Email</h2>
              <a href={`mailto:${EMAIL}`} className="font-semibold text-remedy-blue hover:underline">
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-remedy-mist">
              <MapPin className="h-6 w-6 text-remedy-blue" />
            </div>
            <div>
              <h2 className="font-barlow text-lg font-bold text-remedy-dark">Based In</h2>
              <p className="text-gray-700">Taunton, MA</p>
              <p className="mt-1 text-sm text-gray-500">
                Serving{" "}
                {CITIES.map((c, i) => (
                  <span key={c.slug}>
                    <Link href={`/${c.slug}`} className="text-remedy-blue hover:underline">
                      {c.city}
                    </Link>
                    {i < CITIES.length - 1 ? ", " : ""}
                  </span>
                ))}{" "}
                and surrounding towns.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-remedy-mist">
              <Clock className="h-6 w-6 text-remedy-blue" />
            </div>
            <div>
              <h2 className="font-barlow text-lg font-bold text-remedy-dark">Hours</h2>
              <p className="text-gray-700">Mon–Sat, 7 AM – 7 PM</p>
              <p className="text-sm text-gray-500">
                Emergencies: call anytime — I&apos;ll tell you honestly if I can help.
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="flex h-56 items-center justify-center rounded-xl bg-gradient-to-br from-remedy-mist to-blue-100 shadow-inner">
            <span className="flex items-center gap-2 font-semibold text-remedy-blue">
              <MapPin className="h-5 w-5" /> Google Maps embed — Taunton, MA
            </span>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
      </section>

      <CTABand
        variant="emergency"
        headline="Urgent? Skip the Form."
        subtext="No heat or no AC can't wait for email. Call me right now."
      />
    </>
  );
}
