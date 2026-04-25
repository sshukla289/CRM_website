"use client";

import { useState, useEffect, useRef } from "react";
import BookCallModal from "./BookCallModal";

export default function TrustSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-8 md:py-10 bg-gradient-to-r from-[#0B1220] via-[#0E1A2B] to-[#0B1220] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#00b274]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Brand Card */}
          <div className={`${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'} transition-all duration-700`}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b274]/10 blur-3xl pointer-events-none" />
              
              <div className="flex flex-col items-center text-center space-y-8">
                {/* Cube Style Logo Placeholder */}
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg shadow-[#00b274]/20 flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
                  <img 
                    src="/triostack-logo.jpeg" 
                    alt="Triostack Logo" 
                    className="w-full h-full object-cover -rotate-12 group-hover:rotate-0 transition-transform duration-500" 
                  />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white tracking-widest mb-2">TRIOSTACK</h3>
                  <p className="text-[#00b274] text-xs font-bold tracking-[0.2em] uppercase">Enterprise CRM Solutions</p>
                </div>

                {/* Status Badges */}
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { label: "LEGAL", value: "Registered" },
                    { label: "BILLING", value: "GST Compliant" },
                    { label: "RECOGNITION", value: "MSME Aligned" }
                  ].map((badge) => (
                    <div key={badge.label} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-center hover:border-[#00b274]/30 transition-colors">
                      <p className="text-[10px] text-slate-500 font-bold mb-1">{badge.label}</p>
                      <p className="text-white text-xs font-medium">{badge.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className={`${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'} [animation-delay:200ms] transition-all duration-700`}>
            <span className="text-[#00b274] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
              ABOUT TRIOSTACK
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              Registered and Trusted <br className="hidden md:block" /> Business Identity
            </h2>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed mb-10">
              <p>
                At Triostack, we pride ourselves on being more than just a software provider. We are a legally registered and compliant entity dedicated to delivering high-performance CRM solutions for modern enterprises.
              </p>
              <p>
                Our structured workflow ensures total transparency, from milestone-based project execution to legally-backed service agreements, providing our clients with absolute peace of mind.
              </p>
            </div>

            {/* Bullet Points */}
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                "Legally documented proposals",
                "Consistent updates & follow-ups",
                "Milestone-based payments",
                "NDA-backed confidentiality"
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00b274] shadow-[0_0_8px_#00b274]" />
                  <span className="text-white text-sm font-medium">{point}</span>
                </div>
              ))}
            </div>

            {/* Business Details Cards */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { label: "CIN", value: "U72900WB2022PTC250000" },
                { label: "GSTIN", value: "19AABCT1234F1Z1" },
                { label: "I/E CODE", value: "0212345678" }
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 flex flex-col gap-1 hover:bg-white/10 transition-all cursor-default">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
                  <span className="text-white text-xs font-mono">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#00b274] to-[#009661] text-white font-bold px-10 py-4 rounded-full shadow-lg shadow-[#00b274]/20 hover:shadow-[#00b274]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
              >
                Get a Callback
              </button>
            </div>
          </div>

        </div>
      </div>

      <BookCallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Request a Callback"
        subtitle="Our team will call you back within 24 hours to discuss your business needs."
      />
    </section>
  );
}
