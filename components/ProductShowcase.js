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
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.12),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#eef6f4_100%)] py-8 md:py-10">
      {/* Premium white section glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#00b274]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Video */}
          <div className="relative group animate-fade-in opacity-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00b274]/20 to-blue-500/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_28px_80px_rgba(15,23,42,0.12)] border border-white bg-white">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              >
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="animate-slide-up opacity-0 [animation-delay:200ms]">
            <div className="mb-8 text-center lg:text-left">
              <span className="text-[#00b274] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
                Our Product
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-950 mb-6 leading-tight">
                Smart CRM Platform for <br className="hidden lg:block" /> Modern Businesses
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Streamline your sales, automate workflows, and manage multi-branch operations 
                with our powerful CRM platform designed for Indian enterprises.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-6 mb-10">
              {productHighlights.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#00b274]/15 bg-white text-[#0b8f66] shadow-[0_16px_35px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:border-[#00b274]/25 group-hover:bg-[#00b274] group-hover:text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-950 font-semibold text-base mb-1 group-hover:text-[#00b274] transition-colors">{feature.title}</h3>
                    <p className="text-slate-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center lg:text-left">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="relative group bg-gradient-to-r from-[#00b274] to-[#00d48a] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg shadow-[#00b274]/20 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">Book a Demo</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
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
