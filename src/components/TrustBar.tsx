import { Star, Clock, Shield, Award } from "lucide-react";

const stats = [
  { icon: Award, label: "500+ Luxury Installations" },
  { icon: Star, label: "5.0 ★ Google Reviews" },
  { icon: Clock, label: "Same-Day Available" },
  { icon: Shield, label: "Licensed & Insured" },
];

export function TrustBar() {
  return (
    <section className="border-y border-[#27272a] bg-[#111113]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <s.icon className="w-5 h-5 text-[#B91C1C] shrink-0" />
              <span className="text-xs font-medium tracking-wide uppercase text-[#a1a1aa]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
