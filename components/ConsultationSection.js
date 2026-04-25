"use client";

import React, { useState } from "react";
import BookCallModal from "./BookCallModal";

export default function ConsultationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-16 md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00b274]/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="group relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.28)] lg:h-[520px] lg:aspect-auto">
            <img
              src="/consultation-team-humanized.png"
              alt="CRM consultation with a business team"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,18,32,0.08),rgba(11,18,32,0.12)_50%,rgba(11,18,32,0.4))]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0b1220]/45 to-transparent" />
          </div>

          <div className="space-y-8 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.12)] lg:space-y-10 lg:p-10">
            <div className="space-y-5">
              <span className="block text-xs font-bold uppercase tracking-[0.4em] text-[#00b274]">
                READY TO GROW?
              </span>
              <h2 className="text-4xl font-bold leading-tight text-slate-950 lg:text-5xl">
                Ready to Transform <br className="hidden md:block" /> Your Sales Pipeline?
              </h2>
              <p className="max-w-2xl text-[1.1rem] leading-8 text-slate-700 md:text-[1.22rem]">
                Get personalized consultation to understand how our CRM can fit your business needs, improve day-to-day operations, and give your team a clearer sales workflow.
              </p>
              <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                We walk you through real use cases, practical automations, and rollout steps so you can choose the right setup with confidence.
              </p>
              <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                Join hundreds of growing businesses across India that use CRM Solutions to automate their sales, delight their customers, and scale their revenue.
              </p>
            </div>

            <button
              onClick={toggleModal}
              className="group relative cursor-pointer overflow-hidden rounded-full bg-gradient-to-r from-[#00b274] to-[#008a5a] px-10 py-5 font-bold text-white shadow-[0_10px_30px_rgba(0,178,116,0.3)] transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(0,178,116,0.5)] active:scale-95"
            >
              <span className="relative z-10">Book Free Demo</span>
              <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={isModalOpen} onClose={toggleModal} />
    </section>
  );
}
