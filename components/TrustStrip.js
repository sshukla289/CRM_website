"use client";

import Image from "next/image";

const brands = [
  { name: "IICPA", logo: "/logo/img1.png" },
  { name: "HS Codes", logo: "/logo/img2.png" },
  { name: "Tax Esquire", logo: "/logo/taxesquire.png" },
  { name: "Menorah", logo: "/logo/img4.png" },
  { name: "The Poetry Shop", logo: "/logo/img3.png" },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#0b1220] border-y border-white/5 py-10 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Trust Line */}
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
              Trusted by growing businesses across India
            </h2>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-[#00b274] font-bold">
              <span className="text-2xl">40%+</span>
              <span className="text-xs uppercase tracking-wider text-slate-400">Average increase in sales productivity</span>
            </div>
          </div>

          {/* Right: Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand, i) => (
              <div key={i} className="h-8 md:h-10 w-auto relative">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
