"use client";

import { Star } from "lucide-react";

export default function Marquee() {
  const items = [
    "🎓 100% Placement Support", 
    "💼 Industry Integrated MBA", 
    "💻 Advanced MCA & BCA", 
    "📊 MSC IT Data Science",
    "📚 Specialized B.Com", 
    "🏆 50+ Awards", 
    "🌍 Global University Tie-ups", 
    "🏅 NAAC A Grade",
    "✅ UGC & AICTE Approved", 
    "🤝 500+ Hiring Partners"
  ];

  return (
    <section className="relative py-6 bg-red-900 overflow-hidden border-y border-white/10 shadow-[0_0_50px_rgba(224,49,49,0.2)]">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.05\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      
      {/* Gradients to mask edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-red-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-red-900 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-10 animate-marquee whitespace-nowrap items-center w-max">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-10">
            <span className="text-sm font-bold text-white tracking-wide uppercase">
              {item}
            </span>
            <Star className="w-4 h-4 text-white/30 fill-white/30" />
          </div>
        ))}
      </div>
    </section>
  );
}
