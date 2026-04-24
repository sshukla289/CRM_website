"use client";

import Reveal from "./Reveal";

const features = [
  {
    title: "Lead Management",
    description: "Capture, track, and nurture leads from multiple sources with automated scoring and assignment.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3.25" strokeWidth={1.7} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 3.75v3M12 17.25v3M20.25 12h-3M6.75 12h-3M18.19 5.81l-2.12 2.12M7.93 16.07l-2.12 2.12M18.19 18.19l-2.12-2.12M7.93 7.93 5.81 5.81" />
      </svg>
    ),
  },
  {
    title: "Workflow Automation",
    description: "Reduce manual effort with customizable triggers, actions, and conditional logic for repetitive tasks.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="5" width="6" height="4" rx="1.5" strokeWidth={1.7} />
        <rect x="14" y="9" width="6" height="4" rx="1.5" strokeWidth={1.7} />
        <rect x="4" y="15" width="6" height="4" rx="1.5" strokeWidth={1.7} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M10 7h2a2 2 0 0 1 2 2v2M14 13h-2a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    title: "Sales Pipeline Tracking",
    description: "Visualize your sales process from end-to-end and identify bottlenecks with drag-and-drop deal stages.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M5 18V9M12 18V6M19 18v-4" />
        <circle cx="5" cy="7" r="2" strokeWidth={1.7} />
        <circle cx="12" cy="4" r="2" strokeWidth={1.7} />
        <circle cx="19" cy="12" r="2" strokeWidth={1.7} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M7 7h3M14 5h3" />
      </svg>
    ),
  },
  {
    title: "Real-time Analytics",
    description: "Make data-driven decisions with live dashboards, custom reports, and key performance indicators.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M4 19h16M7 16V9M12 16V5M17 16v-3" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="m6.5 8.5 4 2.5 4-5 3 2" />
      </svg>
    ),
  },
  {
    title: "Multi-branch Management",
    description: "Seamlessly manage inventory, sales, and staff across multiple locations from a single dashboard.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3.5" y="8" width="6" height="10" rx="1.5" strokeWidth={1.7} />
        <rect x="14.5" y="5" width="6" height="13" rx="1.5" strokeWidth={1.7} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9.5 12h5M6.5 11.5h0M6.5 14.5h0M17.5 9.5h0M17.5 12.5h0" />
      </svg>
    ),
  },
  {
    title: "GST-ready Invoicing",
    description: "Generate professional tax invoices with built-in GST calculations and automated tax filing exports.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8 3.5h6l4 4v13H8a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M14 3.5v4h4M9 12h6M9 16h4" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-16 md:py-20 bg-gradient-to-b from-[#0B1220] via-[#0E1A2B] to-[#0B1220] overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#00b274]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Reveal>
            <span className="text-[#00b274] text-sm font-bold tracking-[0.4em] uppercase block mb-4">
              Features
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Powerful Features to Grow Your Business
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-slate-400 leading-relaxed">
              Everything you need to manage customers, automate workflows, and scale operations with a platform designed for high-growth enterprises.
            </p>
          </Reveal>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group relative p-6 rounded-2xl glass-dark glass-glow transition-all duration-500 hover:scale-105 hover:bg-white/[0.08]">
                {/* Icon Container */}
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[1.25rem] border border-[#8be9ff]/15 bg-gradient-to-br from-[#112033] via-[#0b1728] to-[#0b1220] shadow-[0_18px_45px_rgba(0,0,0,0.25)] group-hover:scale-110 group-hover:border-[#7ef7c4]/25 transition-transform duration-500">
                  <div className="text-[#8be9ff] group-hover:text-[#7ef7c4] transition-colors duration-500">
                    {feature.icon}
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00b274] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-base group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#00b274]/0 to-[#00b274]/0 group-hover:from-[#00b274]/5 group-hover:to-transparent pointer-events-none transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Show All Button */}
        <div className="mt-14 md:mt-16 text-center">
          <Reveal delay={600}>
            <a 
              href="/features"
              className="inline-block group relative px-10 py-4 bg-gradient-to-r from-[#00b274] to-[#008a5a] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,178,116,0.3)] hover:shadow-[0_15px_40px_rgba(0,178,116,0.5)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Show All Features
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
