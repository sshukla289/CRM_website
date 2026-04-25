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

      <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] pt-32 pb-6">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#00b274]/10 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter">
              CRM Features
            </h1>
            <nav className="flex text-[11px] uppercase tracking-widest text-slate-500 font-bold">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-[#00b274] transition-colors">Home</Link></li>
                <li><span className="opacity-30">/</span></li>
                <li><span>Service</span></li>
                <li><span className="opacity-30">/</span></li>
                <li className="text-[#00b274]">CRM Features</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="pt-4 pb-10 px-6 relative bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#f6fbf9_100%)]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(0,178,116,0.07),transparent_36%)] pointer-events-none" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00b274]/8 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-40 pointer-events-none" />

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="space-y-16">
            {allFeatures.map((group) => (
              <div
                key={group.category}
                id={getCategoryAnchor(group.category)}
                className="space-y-10 scroll-mt-28"
              >
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-950 whitespace-nowrap">
                    {group.category}
                  </h2>
                  <div className="h-px w-full bg-slate-200" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.items.map((feature, idx) => (
                    <Reveal key={feature.slug} delay={idx * 50}>
                      <Link href={`/features/${feature.slug}`}>
                        <div className="p-8 rounded-2xl bg-white/90 border border-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:bg-white hover:border-[#00b274]/30 hover:shadow-[0_28px_75px_rgba(0,178,116,0.14)] transition-all duration-500 group h-full">
                          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#00b274]/15 bg-white text-[#0b8f66] shadow-[0_16px_35px_rgba(15,23,42,0.08)] transition-transform duration-500 group-hover:scale-110 group-hover:border-[#00b274]/30 group-hover:bg-[#00b274] group-hover:text-white">
                            <FeatureIcon type={feature.icon} />
                          </div>
                          <h3 className="text-xl font-bold text-slate-950 mb-4 group-hover:text-[#00b274] transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-sm">
                            {feature.description}
                          </p>
                          <div className="mt-6 flex items-center text-[#00b274] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Learn More 
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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

          <div className="mt-12 p-12 rounded-3xl bg-white/95 border border-slate-200 text-center relative overflow-hidden shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,178,116,0.09),transparent_48%)] rounded-full" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-slate-950 mb-6">Ready to see these features in action?</h3>
              <p className="text-slate-600 mb-10 max-w-2xl mx-auto text-lg">
                Join hundreds of Indian enterprises that use Triostack to automate their sales and grow 2x faster.
              </p>
              <button
                type="button"
                onClick={handleModalOpen}
                className="inline-block bg-[#00b274] hover:bg-[#009661] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>

        <BookCallModal isOpen={isModalOpen} onClose={handleModalClose} />
      </div>

    </main>
  );
}
