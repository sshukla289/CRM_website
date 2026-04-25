"use client";

import HeroForm from "./HeroForm";

export default function HeroSection() {
  return (
    <>
      <section data-hero="true" className="relative min-h-[85vh] flex items-center pt-32 overflow-hidden">
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
          <div className="flex flex-col-reverse gap-6 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            {/* Left Content */}
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-[#00b274] text-[10px] font-bold tracking-[0.4em] uppercase block mb-3">
                  Sales & Growth Automation
                </span>
                <h1 className="text-[2.4rem] sm:text-[3.4rem] lg:text-[4.4rem] font-semibold text-white mb-4 leading-[1.03] tracking-[-0.02em] uppercase">
                  Trio-CRM
                </h1>
                <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                  Stop losing deals to manual follow-ups. CRM Solutions helps you automate your sales pipeline, track every interaction, and grow your revenue with India's smartest CRM platform.
                </p>
              </div>



              {/* Feature List */}
              <ul className="space-y-3 mb-8">
                {[
                  "Close deals 30% faster with automated follow-ups",
                  "Never lose a lead with 24/7 automated capture",
                  "Gain real-time visibility into your entire sales team",
                  "Automate lead assignment to the right sales rep instantly",
                  "Track call logs, WhatsApp chats, and pipeline updates in one place",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#00b274]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#00b274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-slate-200 text-sm font-semibold tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>

            </div> {/* End Left Content */}

            {/* Right Form */}
            <div id="hero-form-container" className="relative z-20 hidden justify-center lg:flex lg:justify-end">
              <HeroForm />
            </div>

          </div> {/* End Grid */}
        </div> {/* End Container */}

        {/* Floating Elements / Decorative Blur */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00b274]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      </section>
    </>
  );
}
