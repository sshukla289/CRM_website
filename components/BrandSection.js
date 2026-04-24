"use client";

import React from "react";
import Image from "next/image";

const topBrands = [
  { name: "Codemap", logo: "/logo/img1.png" },
  { name: "Sigma", logo: "/logo/img2.png" },
  { name: "Tax Esquire", logo: "/logo/img3.png" },
  { name: "Menorah", logo: "/logo/img4.png" },
];

const bottomBrands = [
  { name: "HS Codes", logo: "/logo/img2.png" },
  { name: "Khatone", logo: "/logo/img3.png" },
  { name: "Robo Books", logo: "/logo/img4.png" },
  { name: "IICPA", logo: "/logo/img1.png" },
];

export default function BrandSection() {
  const makeMarqueeTrack = (brands) => {
    const doubled = [...brands, ...brands];
    return [...doubled, ...doubled];
  };

  const topTrack = makeMarqueeTrack(topBrands);
  const bottomTrack = makeMarqueeTrack(bottomBrands);

  return (
    <section className="relative py-14 md:py-20 bg-gradient-to-r from-[#0B1220] via-[#0E1A2B] to-[#0B1220] overflow-hidden border-y border-white/5">
      <div className="absolute top-1/4 -left-24 h-80 w-80 rounded-full bg-[#00b274]/10 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Trusted By</h2>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/0 via-white/15 to-white/0" />
        </div>

        <div className="mt-10 pause-on-hover space-y-5 md:space-y-6">
          <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md px-3 py-4 md:px-4 md:py-5">
            <div className="relative overflow-hidden mask-gradient">
              <div className="flex min-w-[200%] w-max animate-marquee-left items-center gap-6 whitespace-nowrap px-2">
                {topTrack.map((brand, i) => (
                  <div
                    key={`top-${i}`}
                    className="shrink-0 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 opacity-90 transition-all duration-300 hover:bg-white/10 hover:opacity-100"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={180}
                      height={56}
                      className="h-9 w-auto object-contain md:h-10"
                      priority={i < 2}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md px-3 py-4 md:px-4 md:py-5">
            <div className="relative overflow-hidden mask-gradient">
              <div className="flex min-w-[200%] w-max animate-marquee-right items-center gap-6 whitespace-nowrap px-2">
                {bottomTrack.map((brand, i) => (
                  <div
                    key={`bottom-${i}`}
                    className="shrink-0 flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 opacity-85 transition-all duration-300 hover:bg-white/10 hover:opacity-100"
                  >
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={180}
                      height={56}
                      className="h-9 w-auto object-contain md:h-10"
                      priority={i < 2}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-slate-500 text-sm font-bold uppercase tracking-[0.35em]">
          Trusted by industry leaders
        </p>
      </div>
    </section>
  );
}
