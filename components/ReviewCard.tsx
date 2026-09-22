import { Star } from "lucide-react";

type Props = {
  quote: string;
  name: string;
  city: string;
  service: string;
};

export default function ReviewCard({ quote, name, city, service }: Props) {
  return (
    <div className="flex h-full flex-col rounded-xl bg-white p-6 shadow-md">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-gray-700">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-5 flex items-end justify-between gap-2">
        <div>
          <div className="font-bold text-remedy-dark">{name}</div>
          <div className="text-sm text-gray-500">
            {city} · {service}
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-remedy-mist px-3 py-1 text-xs font-semibold text-remedy-blue">
          via Thumbtack
        </span>
      </div>
    </div>
  );
}
