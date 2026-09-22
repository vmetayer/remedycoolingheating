import Link from "next/link";
import Logo from "./Logo";
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, SERVICES, CITIES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-remedy-dark pb-24 text-white md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="font-barlow text-2xl font-extrabold">REMEDY</div>
          <div className="text-sm font-semibold uppercase tracking-widest text-remedy-teal">
            Cooling &amp; Heating
          </div>
          <p className="mt-3 text-sm text-blue-100">
            One Guy. One Call. Done Right.
          </p>
          <a href={PHONE_TEL} className="mt-4 block font-bold text-remedy-orange">
            {PHONE_DISPLAY}
          </a>
          <a href={`mailto:${EMAIL}`} className="mt-1 block text-sm text-blue-100 hover:text-white">
            {EMAIL}
          </a>
          <p className="mt-2 text-sm text-blue-100">Taunton, MA</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-barlow text-lg font-bold">Services</h3>
          <ul className="mt-3 space-y-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-sm text-blue-100 hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service areas */}
        <div>
          <h3 className="font-barlow text-lg font-bold">Service Areas</h3>
          <ul className="mt-3 space-y-2">
            {CITIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-sm text-blue-100 hover:text-white">
                  {c.city}, {c.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Credentials */}
        <div>
          <h3 className="font-barlow text-lg font-bold">Credentials</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-100">
            <li>MA Journeyman Plumber — Licensed &amp; Insured</li>
            <li>EPA Universal Certified</li>
            <li>Thumbtack Top Pro 2017–2025</li>
            <li>Background Checked</li>
            <li>384 Verified Hires</li>
          </ul>
          <p className="mt-4 text-xs text-blue-200">
            Accepted: Cash · Check · Credit Card · Venmo · Zelle
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-blue-200 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} Remedy Cooling and Heating. All rights
            reserved.
          </p>
          <Link href="/contact" className="hover:text-white">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
