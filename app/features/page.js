"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import BookCallModal from "@/components/BookCallModal";
import FeatureIcon from "@/components/FeatureIcon";
import { allFeatures } from "@/lib/features-data";

function getCategoryAnchor(category) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function FeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="relative overflow-hidden pt-40 pb-12 bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-transparent opacity-50" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-3">
            <Reveal>
              <nav className="flex text-[11px] uppercase tracking-[0.3em] text-slate-400 font-black mb-2">
                <ol className="flex items-center gap-2">
                  <li><Link href="/" className="hover:text-[#00b274] transition-colors">Home</Link></li>
                  <li><span className="opacity-30">/</span></li>
                  <li className="text-[#00b274]">CRM Features</li>
                </ol>
              </nav>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                Powerful CRM <span className="text-[#00b274]">Modules</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mt-2">
                Explore our deep ecosystem of features designed to scale your business operations.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="pt-16 pb-24 px-6 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,178,116,0.02),transparent_40%)] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00b274]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="space-y-24">
            {allFeatures.map((group) => (
              <div
                key={group.category}
                id={getCategoryAnchor(group.category)}
                className="space-y-12 scroll-mt-32"
              >
                <Reveal>
                  <div className="flex items-center gap-6">
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 whitespace-nowrap tracking-tight">
                      {group.category}
                    </h2>
                    <div className="h-[2px] w-full bg-slate-100" />
                  </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.items.map((feature, idx) => (
                    <Reveal key={feature.slug} delay={idx * 50}>
                      <Link href={`/features/${feature.slug}`}>
                        <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#00b274]/30 hover:shadow-[0_30px_60px_-15px_rgba(0,178,116,0.12)] transition-all duration-500 group h-full">
                          <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-[#00b274] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#00b274] group-hover:text-white group-hover:rotate-3 shadow-sm group-hover:shadow-[#00b274]/30">
                            <FeatureIcon type={feature.icon} />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#00b274] transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-sm mb-6">
                            {feature.description}
                          </p>
                          <div className="mt-auto pt-4 flex items-center text-[#00b274] text-xs font-black uppercase tracking-widest border-t border-slate-50 opacity-60 group-hover:opacity-100 transition-all duration-300">
                            Learn More 
                            <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 p-16 rounded-[3rem] bg-slate-900 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b274]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Ready to see these features in action?</h3>
              <p className="text-slate-400 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
                Join hundreds of Indian enterprises that use Triostack to automate their sales and grow 2x faster.
              </p>
              <button
                type="button"
                onClick={handleModalOpen}
                className="inline-flex items-center gap-3 bg-[#00b274] hover:bg-[#00d48a] text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-xl shadow-[#00b274]/20 cursor-pointer"
              >
                Start Your Free Trial
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <BookCallModal isOpen={isModalOpen} onClose={handleModalClose} />
      </div>


    </main>
  );
}
