"use client";

import React from 'react';

const brands = [
  { name: "Brand 1", logo: "/logo/img1.png" },
  { name: "Brand 2", logo: "/logo/img2.png" },
  { name: "Brand 3", logo: "/logo/img3.png" },
  { name: "Brand 4", logo: "/logo/img4.png" },
];

export default function BrandSection() {
  return (
    <section className="py-12 md:py-16 bg-[#0B1220] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 md:mb-10 text-center">
        <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.4em]">
          Trusted by Industry Leaders
        </p>
      </div>
      
      <div className="pause-on-hover relative space-y-5 md:space-y-6">
        <div className="relative overflow-hidden mask-gradient">
          <div className="flex w-max animate-marquee-left items-center gap-20 whitespace-nowrap px-10">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`top-${i}`}
                className="flex items-center justify-center opacity-90 grayscale-[25%] transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 w-auto object-contain md:h-10"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden mask-gradient">
          <div className="flex w-max animate-marquee-right items-center gap-20 whitespace-nowrap px-10">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={`bottom-${i}`}
                className="flex items-center justify-center opacity-80 grayscale-[35%] transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 w-auto object-contain md:h-10"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
