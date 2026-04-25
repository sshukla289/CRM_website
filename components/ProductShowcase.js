"use client";

import { useState } from "react";
import BookCallModal from "./BookCallModal";

const productHighlights = [
  {
    title: "Real-time analytics dashboard",
    desc: "Gain instant insights into your sales performance and customer trends.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 19h16M7 16V9M12 16V5M17 16v-3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="m6.5 8.5 4 2.5 4-5 3 2" />
      </svg>
    ),
  },
  {
    title: "Automated lead management",
    desc: "Never lose a lead again with our intelligent automated tracking system.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3.25" strokeWidth={1.7} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 3.75v3M12 17.25v3M20.25 12h-3M6.75 12h-3M18.19 5.81l-2.12 2.12M7.93 16.07l-2.12 2.12M18.19 18.19l-2.12-2.12M7.93 7.93 5.81 5.81" />
      </svg>
    ),
  },
  {
    title: "GST-ready invoicing",
    desc: "Generate compliant invoices and manage tax filings with ease.",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8 3.5h6l4 4v13H8a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M14 3.5v4h4M9 12h6M9 16h4" />
      </svg>
    ),
  },
];

export default function ProductShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#00b274]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Video/Visual */}
          <div className="relative group animate-fade-in opacity-0">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00b274]/10 to-blue-500/10 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.1)] border border-slate-100 bg-white p-2">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full rounded-[1.75rem] object-cover transform group-hover:scale-[1.02] transition-transform duration-1000"
              >
                <source src="https://cdn.pixabay.com/video/2021/04/12/70851-537446545_large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-slate-900/5 pointer-events-none rounded-[1.75rem]" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="animate-slide-up opacity-0 [animation-delay:200ms]">
            <div className="mb-10 text-center lg:text-left">
              <span className="text-[#00b274] text-xs font-black uppercase tracking-[0.4em] block mb-4">
                Experience Intelligence
              </span>
              <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Smart CRM Platform <br className="hidden lg:block" /> for <span className="text-[#00b274]">Modern Teams</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Streamline your sales, automate workflows, and manage multi-branch operations 
                with our powerful CRM platform designed for Indian enterprises.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-8 mb-12">
              {productHighlights.map((feature, index) => (
                <div key={index} className="flex items-start gap-5 group">
                  <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-[#00b274] shadow-sm border border-slate-100 transition-all duration-300 group-hover:bg-[#00b274] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[#00b274]/20">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg mb-1.5 group-hover:text-[#00b274] transition-colors">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-md">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center lg:text-left">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="relative group bg-slate-900 text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-500 hover:bg-[#00b274] hover:scale-105 hover:shadow-2xl hover:shadow-[#00b274]/30 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Request Live Demo
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>

        </div>
      </div>

      <BookCallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Book a Live Demo"
        subtitle="See our platform in action. Share your details and we'll schedule a personalized walkthrough."
      />
    </section>
  );
}
