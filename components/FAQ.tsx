import { ChevronDown } from "lucide-react";

export type FAQItem = { q: string; a: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-200 rounded-xl bg-white shadow-md">
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-barlow text-lg font-bold text-remedy-dark [&::-webkit-details-marker]:hidden">
            {item.q}
            <ChevronDown className="h-5 w-5 shrink-0 text-remedy-blue transition-transform group-open:rotate-180" />
          </summary>
          <p className="mt-3 leading-relaxed text-gray-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
