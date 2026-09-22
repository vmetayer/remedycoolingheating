"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL, SERVICES } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" onClick={close}>
          <img src="/images/remedy-logo.jpg" alt="Remedy Cooling and Heating" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 py-6 text-sm font-semibold text-remedy-dark hover:text-remedy-blue">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full w-64 rounded-b-lg bg-white py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="block px-4 py-2.5 text-sm font-medium text-remedy-dark hover:bg-remedy-mist hover:text-remedy-blue"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/#service-areas" className="text-sm font-semibold text-remedy-dark hover:text-remedy-blue">
            Service Areas
          </Link>
          <Link href="/about" className="text-sm font-semibold text-remedy-dark hover:text-remedy-blue">
            About
          </Link>
          <Link href="/#reviews" className="text-sm font-semibold text-remedy-dark hover:text-remedy-blue">
            Reviews
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-remedy-dark hover:text-remedy-blue">
            Contact
          </Link>
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href={PHONE_TEL} className="text-sm font-bold text-remedy-dark">
            {PHONE_DISPLAY}
          </a>
          <a
            href={PHONE_TEL}
            className="flex items-center gap-2 rounded-lg bg-remedy-orange px-5 py-2.5 text-sm font-bold text-white shadow hover:brightness-110"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-md p-2 text-remedy-dark lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden">
          <div className="flex h-[72px] items-center justify-between px-4">
            <img src="/images/remedy-logo.jpg" alt="Remedy Cooling and Heating" className="h-10 w-auto object-contain" />
            <button
              className="rounded-md p-2 text-remedy-dark"
              onClick={close}
              aria-label="Close menu"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-4">
            <button
              className="flex w-full items-center justify-between py-3 text-lg font-bold text-remedy-dark"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services{" "}
              <ChevronDown
                className={`h-5 w-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            {servicesOpen && (
              <div className="mb-2 border-l-2 border-remedy-mist pl-4">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    onClick={close}
                    className="block py-2.5 font-medium text-remedy-dark"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/#service-areas" onClick={close} className="block py-3 text-lg font-bold text-remedy-dark">
              Service Areas
            </Link>
            <Link href="/about" onClick={close} className="block py-3 text-lg font-bold text-remedy-dark">
              About
            </Link>
            <Link href="/#reviews" onClick={close} className="block py-3 text-lg font-bold text-remedy-dark">
              Reviews
            </Link>
            <Link href="/contact" onClick={close} className="block py-3 text-lg font-bold text-remedy-dark">
              Contact
            </Link>
          </nav>
          <div className="border-t border-gray-100 p-4 pb-6">
            <a
              href={PHONE_TEL}
              className="flex items-center justify-center gap-2 rounded-xl bg-remedy-orange py-4 text-lg font-bold text-white shadow-lg"
            >
              <Phone className="h-5 w-5" /> Call Now — {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
