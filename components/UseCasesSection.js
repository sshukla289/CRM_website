"use client";

import Reveal from "./Reveal";

const useCases = [
  {
    title: "Real Estate",
    description: "Manage property listings, automate site visit follow-ups, and track bookings with integrated payment milestones.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: "Sales Teams",
    description: "Equip your sales force with lead scoring, call tracking, and automated reminders to ensure no deal falls through the cracks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Agencies",
    description: "Manage client projects, track communication history across teams, and automate professional reporting and billing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-7h1m-1 4h1m-5 10l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Service Businesses",
    description: "Handle support tickets, schedule service appointments, and manage recurring billing for long-term customer retention.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function UseCasesSection() {
  return (
    <section className="py-20 bg-[#0b1220] relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Reveal>
            <span className="text-[#00b274] text-sm font-bold tracking-[0.4em] uppercase block mb-4">
              Solutions
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Tailored for Your Industry
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Whatever your business model, CRM Solutions provides the flexibility and power to manage your unique workflows.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#00b274]/10 flex items-center justify-center text-[#00b274] mb-6 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
