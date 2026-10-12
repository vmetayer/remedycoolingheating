"use client";

import { useState } from "react";
import { PHONE_DISPLAY, PHONE_TEL, CITIES } from "@/lib/site";
import { submitLead } from "@/lib/submitLead";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const form = e.currentTarget;
    if (await submitLead(form, "contact_page")) {
      setState("success");
      form.reset();
    } else {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-md">
        <p className="text-lg font-semibold text-remedy-dark">
          Got it — I&apos;ll call or text you shortly.
        </p>
        <p className="mt-2 text-gray-600">
          Urgent? Call me now:{" "}
          <a href={PHONE_TEL} className="font-bold text-remedy-orange">
            {PHONE_DISPLAY}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 rounded-xl bg-white p-6 shadow-md sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-semibold text-remedy-dark">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-remedy-blue"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-remedy-dark">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-remedy-blue"
            placeholder="(508) 555-0123"
          />
        </div>
      </div>
      <div>
        <label htmlFor="town" className="mb-1 block text-sm font-semibold text-remedy-dark">
          Town
        </label>
        <select
          id="town"
          name="town"
          required
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-remedy-blue"
          defaultValue=""
        >
          <option value="" disabled>
            Select your town
          </option>
          {CITIES.map((c) => (
            <option key={c.slug} value={c.city}>
              {c.city}, {c.state}
            </option>
          ))}
          <option value="other">Other / nearby town</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-semibold text-remedy-dark">
          Message <span className="font-normal text-gray-400">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-remedy-blue"
          placeholder="What's going on with your system?"
        />
      </div>
      {state === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          Something went wrong. Please try again or call{" "}
          <a href={PHONE_TEL} className="font-bold underline">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="rounded-lg bg-remedy-orange px-6 py-4 text-lg font-bold text-white shadow hover:brightness-110 disabled:opacity-60"
      >
        {state === "submitting" ? "Sending..." : "Send Message →"}
      </button>
    </form>
  );
}
