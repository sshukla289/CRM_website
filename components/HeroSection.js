"use client";

import HeroForm from "./HeroForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 overflow-hidden">
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/img.png"
          alt="Modern Office"
          className="w-full h-full object-cover filter brightness-[1.1] contrast-[1.05]"
        />
        {/* Main Gradient Overlay - Darker on the left for text readability */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0b1220]/95 via-[#0b1220]/60 to-transparent backdrop-blur-[1px]" />
        {/* Bottom Fade */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0b1220]/90" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div className="hidden lg:block animate-fade-in [animation-delay:200ms] opacity-0">
            <div className="mb-4">
              <span className="text-[#00b274] text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">
                Software Solution
              </span>
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 leading-[0.9] tracking-tighter uppercase">
                CRM<br />Solutions
              </h1>
              <p className="text-base text-slate-300 leading-relaxed mb-6 max-w-lg">
                Transform the way your business manages leads, sales, communication, support, and customer relationships with Trio CRM — an intelligent, scalable, all-in-one business growth platform.
              </p>
            </div>

            {/* Pricing Highlight */}
            <div className="inline-flex items-center gap-3 bg-[#00b274]/10 border border-[#00b274]/30 px-4 py-1.5 rounded-full mb-8 shadow-[0_0_20px_rgba(0,178,116,0.1)]">
              <span className="text-slate-300 text-[11px] uppercase tracking-wider font-bold">Starting at</span>
              <span className="text-[#00e19d] font-black text-lg">INR 29,500</span>
              <span className="text-slate-500 text-[10px] uppercase font-bold">(Incl. GST)</span>
            </div>

            {/* Feature List */}
            <ul className="space-y-3 mb-8">
              {[
                "Lead capture, assignment & pipeline tracking",
                "360-degree customer profiles with interaction history",
                "Automated follow-ups, reminders & task management",
                "Omnichannel communication: calls, email, WhatsApp & tickets",
                "Reports & dashboards for sales and team performance"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00b274] shadow-[0_0_8px_#00b274]" />
                  <span className="text-slate-200 text-xs font-bold uppercase tracking-wide">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#00b274] hover:bg-[#009661] text-white px-8 py-3.5 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#00b274]/20 hover:-translate-y-1">
                Get a Quote
              </button>
              <button className="border border-white/20 hover:bg-white/5 text-white px-8 py-3.5 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-300 hover:border-white/40">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="flex justify-center lg:justify-end">
            <HeroForm />
          </div>

        </div>
      </div>

      {/* Floating Elements / Decorative Blur */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00b274]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
