"use client";

import React, { useState } from "react";
import BookCallModal from "./BookCallModal";

export default function ConsultationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event) => {
    if (event) event.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="consultation" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#eef6f4_100%)] px-6 py-20 md:py-32">
      {/* Decorative Glows */}
      <div className="pointer-events-none absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b274]/12 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-sky-500/12 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-stretch gap-12 lg:grid-cols-[1fr_1.1fr]">
          
          {/* Left: Premium Image with Floating Element */}
          <div className="relative group">
            <div className="relative h-full min-h-[400px] lg:min-h-[600px] overflow-hidden rounded-[2.5rem] border border-slate-200/80 shadow-[0_30px_100px_rgba(15,23,42,0.16)]">
              <img
                src="/consultation-team-premium.png"
                alt="Premium CRM consultation"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-70" />
              
              {/* Floating Success Badge */}
              <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200/80 p-6 transform transition-transform duration-500 group-hover:-translate-y-2 shadow-[0_18px_50px_rgba(15,23,42,0.15)]">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00b274] shadow-[0_0_20px_rgba(0,178,116,0.4)]">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Implementation Success Rate</p>
                    <p className="text-2xl font-bold text-slate-900">99.4% Across Enterprises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Card */}
          <div className="flex flex-col justify-center rounded-[2.5rem] border border-slate-200 bg-white/95 backdrop-blur-sm p-8 md:p-12 lg:p-16 shadow-[0_32px_90px_rgba(15,23,42,0.12)]">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00b274]/10 border border-[#00b274]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00b274] animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00b274]">
                    Scale Your Operations
                  </span>
                </div>
                <h2 className="text-4xl font-bold leading-tight text-slate-950 lg:text-6xl tracking-tight">
                  Ready to Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b274] to-[#009661]">Your Sales Pipeline?</span>
                </h2>
                <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
                  Stop guessing and start growing. Our consultants help you map your existing workflow to a high-performance automated system tailored for the Indian market.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="group rounded-2xl border border-slate-200 bg-slate-50/85 p-5 transition-all hover:bg-white hover:border-[#00b274]/30 hover:shadow-[0_18px_40px_rgba(0,178,116,0.14)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00b274]/10 text-[#00b274] transition-transform group-hover:scale-110">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">Smart Intelligence</h3>
                  <p className="text-sm leading-relaxed text-slate-600">Advanced lead scoring and predictive analytics to focus on high-value deals.</p>
                </div>

                <div className="group rounded-2xl border border-slate-200 bg-slate-50/85 p-5 transition-all hover:bg-white hover:border-[#00b274]/30 hover:shadow-[0_18px_40px_rgba(0,178,116,0.14)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#00b274]/10 text-[#00b274] transition-transform group-hover:scale-110">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-bold text-slate-900">Automated Workflows</h3>
                  <p className="text-sm leading-relaxed text-slate-600">Eliminate manual tasks with GST-ready invoicing and WhatsApp auto-responders.</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center gap-3 rounded-full bg-[#00b274] px-10 py-5 font-bold text-white shadow-[0_10px_30px_rgba(0,178,116,0.3)] transition-all hover:scale-105 hover:bg-[#009661] hover:shadow-[0_15px_40px_rgba(0,178,116,0.5)] active:scale-95 cursor-pointer"
                >
                  <span>Schedule Your Walkthrough</span>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
}
