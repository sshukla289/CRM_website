"use client";

import React, { useState } from 'react';
import BookCallModal from "./BookCallModal";

export default function ConsultationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <section className="py-8 md:py-10 px-6 bg-[#0B1220] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00b274]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image */}
          <div className="relative group overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px] shadow-2xl">
            <img 
              src="/img.png" 
              alt="Expert Consultation" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/60 to-transparent" />
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[#00b274] text-xs font-bold uppercase tracking-[0.4em] block">
                NEED EXPERT HELP?
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Still Confused? Let Our <br className="hidden md:block" /> Experts Guide You
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Get personalized consultation to understand how our CRM can fit your business needs and improve operations.
              </p>
            </div>

            <button 
              onClick={toggleModal}
              className="group relative px-10 py-5 bg-gradient-to-r from-[#00b274] to-[#008a5a] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,178,116,0.3)] hover:shadow-[0_15px_40px_rgba(0,178,116,0.5)] cursor-pointer"
            >
              <span className="relative z-10">Book Expert Consultation</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={isModalOpen} onClose={toggleModal} />
    </section>
  );
}
