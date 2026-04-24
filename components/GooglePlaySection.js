'use client';

import React, { useEffect, useRef, useState } from 'react';



const featureCards = [
  {
    title: 'Instant lead alerts',
    description: 'New enquiries, follow-ups, and updates without opening the laptop.',
  },
  {
    title: 'Offline-ready access',
    description: 'View customers, notes, and deal context even in patchy network zones.',
  },
  {
    title: 'Fast field updates',
    description: 'Capture notes, scan cards, and log movement in seconds.',
  },
];

export default function GooglePlaySection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 }
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
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0B1220] px-6 py-8 md:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(20,195,142,0.16),transparent_22%),radial-gradient(circle_at_86%_24%,rgba(56,189,248,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(9,17,29,0.96),rgba(7,14,24,0.88))] shadow-[0_32px_120px_rgba(0,0,0,0.28)]">
          <div className="grid items-center gap-10 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:px-14 lg:py-14">
            
            {/* Content - Now on Left */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-[#00b274]/20 bg-[#00b274]/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#7ef7c4]">
                  Mobile App
                </span>

                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl xl:text-6xl">
                  CRM that feels
                  <span className="block bg-gradient-to-r from-[#19d3a2] via-[#7ef7c4] to-[#56b8ff] bg-clip-text text-transparent">
                    fast on the move
                  </span>
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                  A cleaner mobile companion for leads, follow-ups, and quick field updates. Less noise, faster action,
                  and the same core CRM context wherever your team is working.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {featureCards.map((feature) => (
                    <div
                      key={feature.title}
                      className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-[#00b274]/20 hover:bg-white/[0.05]"
                    >
                      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-2xl bg-[#00b274]/12 text-[#7ef7c4]">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-slate-400">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-[#00b274]/25 bg-[linear-gradient(90deg,rgba(20,195,142,0.18),rgba(56,189,248,0.08))] px-6 py-4 text-left transition-all hover:border-[#7ef7c4]/45 hover:shadow-[0_16px_40px_rgba(20,195,142,0.16)]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white overflow-hidden shadow-sm">
                      <img src="/play-store.jpg" alt="Play Store Icon" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">Mobile access</span>
                      <span className="mt-1 block text-base font-semibold text-white group-hover:text-[#7ef7c4]">
                        Request the app demo
                      </span>
                    </div>
                  </a>

                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile UI - Now on Right */}
            <div
              className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-150 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="relative w-full max-w-[420px] rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-[#00b274]/10 blur-3xl" />

                <div className="relative mx-auto w-[220px] rounded-[2.6rem] border-[7px] border-[#273247] bg-[#1a2333] p-2.5 shadow-[0_20px_70px_rgba(0,178,116,0.12)] md:w-[250px]">
                  <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-[18px] bg-[#2b3548]" />

                  <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(180deg,#0c1626_0%,#0a1220_100%)] px-4 pb-5 pt-10">
                    <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2.5">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.24em] text-[#7ef7c4]">Live CRM</p>
                        <p className="mt-1 text-sm font-semibold text-white">Trio CRM Mobile</p>
                      </div>
                      <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-white">
                        <img
                          src="/trio-crm.png"
                          alt="Trio CRM logo"
                          className="w-full h-full object-contain p-1.5"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-2xl border border-[#00b274]/15 bg-[linear-gradient(135deg,rgba(20,195,142,0.14),rgba(56,189,248,0.04))] p-3.5">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-[#8ef9d0]">Today</p>
                        <div className="mt-3 flex items-end justify-between gap-3">
                          <div>
                            <p className="text-2xl font-semibold text-white">24</p>
                            <p className="text-xs text-slate-400">lead actions</p>
                          </div>
                          <span className="rounded-full bg-[#00b274]/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7ef7c4]">
                            +18%
                          </span>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-white">Recent tasks</p>
                          <span className="h-2.5 w-2.5 rounded-full bg-[#00b274]" />
                        </div>
                        <div className="mt-3 space-y-2.5">
                          {['Call back hot lead', 'Share pricing sheet', 'Update site visit note'].map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2.5 rounded-xl border border-white/6 bg-[#0e1828] px-3 py-2.5"
                            >
                              <span className="h-2 w-2 rounded-full bg-[#8be9ff]" />
                              <span className="text-xs text-slate-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-white/15" />
                  </div>
                </div>

                <div className="float-slow absolute -left-3 top-10 hidden rounded-2xl border border-white/10 bg-[#0d1828]/90 px-3 py-2 shadow-xl backdrop-blur-md md:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Sync</p>
                  <p className="mt-1 text-sm font-semibold text-white">Offline ready</p>
                </div>

                <div className="float-slow-delayed absolute -right-3 bottom-12 hidden rounded-2xl border border-[#00b274]/15 bg-[#071821]/90 px-3 py-2 shadow-xl backdrop-blur-md md:block">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#8ef9d0]">Update</p>
                  <p className="mt-1 text-sm font-semibold text-white">Field notes in 1 tap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .float-slow {
          animation: floatSlow 4.6s ease-in-out infinite;
        }

        .float-slow-delayed {
          animation: floatSlow 5.4s ease-in-out infinite;
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
