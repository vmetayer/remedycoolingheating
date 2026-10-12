"use client";

import { useState } from "react";
import { SERVICES, PHONE_TEL, PHONE_DISPLAY } from "@/lib/site";

type State = "idle" | "submitting" | "success" | "error";

export default function HeroForm() {
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xkjgbqwn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-remedy-charcoal p-10 shadow-2xl text-center min-h-[420px]">
        <div className="mb-4 text-5xl">✅</div>
        <h2 className="font-barlow text-2xl font-bold uppercase text-white">
          Quote Request Sent!
        </h2>
        <p className="mt-3 text-white/70">
          We&apos;ll be in touch shortly. For urgent issues, call us directly.
        </p>
        <a
          href={PHONE_TEL}
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-remedy-pink px-8 py-4 font-bold text-white transition hover:bg-remedy-pink-dark"
        >
          📞 {PHONE_DISPLAY}
        </a>
        <button
          onClick={() => setState("idle")}
          className="mt-4 text-sm text-white/40 hover:text-white/70 underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div id="quote" className="w-full scroll-mt-24 rounded-2xl bg-remedy-charcoal p-8 shadow-2xl">
      <h2 className="mb-6 font-barlow text-2xl font-bold uppercase text-white">
        GET A FREE QUOTE
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase text-white/60">
              Name *
            </label>
            <input
              name="name"
              required
              className="w-full rounded-lg bg-remedy-input px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-remedy-pink"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase text-white/60">
              Phone *
            </label>
            <input
              name="phone"
              required
              type="tel"
              className="w-full rounded-lg bg-remedy-input px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-remedy-pink"
              placeholder="(617) 000-0000"
            />
          </div>
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase text-white/60">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="w-full rounded-lg bg-remedy-input px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-remedy-pink"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase text-white/60">
            Service Needed
          </label>
          <select
            name="service"
            className="w-full rounded-lg bg-remedy-input px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-remedy-pink"
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase text-white/60">
            Tell us what&apos;s going on
          </label>
          <textarea
            name="message"
            rows={3}
            className="w-full rounded-lg bg-remedy-input px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-remedy-pink"
            placeholder="Describe the issue..."
          />
        </div>

        {state === "error" && (
          <p className="rounded-lg bg-red-900/40 px-4 py-3 text-sm text-red-300">
            Something went wrong. Please try again or call us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={state === "submitting"}
          className="w-full rounded-lg bg-remedy-pink py-4 text-base font-bold uppercase text-white shadow-lg transition hover:bg-remedy-pink-dark disabled:opacity-60"
        >
          {state === "submitting" ? "Sending..." : "REQUEST MY QUOTE"}
        </button>
      </form>
      <p className="mt-3 text-center text-xs text-white/40">
        Or call directly:{" "}
        <a href={PHONE_TEL} className="font-semibold text-remedy-pink hover:underline">
          {PHONE_DISPLAY}
        </a>
      </p>
    </div>
  );
}
