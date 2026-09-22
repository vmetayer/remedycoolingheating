import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";
import { SITE_URL, THUMBTACK_URL, AREA_SERVED } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Remedy Cooling and Heating | Honest HVAC Repair in Taunton & SE Massachusetts",
    template: "%s | Remedy Cooling & Heating",
  },
  description:
    "Licensed, EPA-certified HVAC repair and installation in Taunton, Brockton, Boston, Quincy, Dorchester & Providence. One guy, one call, done right. 384 jobs. Top Pro 2017–2025.",
  openGraph: {
    title: "Remedy Cooling and Heating",
    description:
      "Honest HVAC repair from the guy who actually shows up. Taunton, MA — serving Greater Boston & Providence.",
    url: SITE_URL,
    siteName: "Remedy Cooling and Heating",
    locale: "en_US",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Remedy Cooling and Heating",
  telephone: "+1-508-617-3450",
  email: "remy@remedycoolingheating.com",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Taunton",
    addressRegion: "MA",
    addressCountry: "US",
  },
  areaServed: AREA_SERVED,
  sameAs: [THUMBTACK_URL],
  priceRange: "$",
  openingHours: "Mo-Sa 07:00-19:00",
  founder: { "@type": "Person", name: "Remy Tondreau" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
