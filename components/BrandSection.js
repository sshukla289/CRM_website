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
      
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee-right gap-20 items-center whitespace-nowrap px-10">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center justify-center opacity-100 hover:opacity-60 hover:brightness-50 transition-all duration-300 cursor-pointer">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
