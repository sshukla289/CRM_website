"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import FeatureIcon from "./FeatureIcon";
import { allFeatures } from "@/lib/features-data";

const FEATURE_CATEGORY_CARDS = [
  {
    category: "Lead & Pre-Sales",
    description:
      "Capture enquiries, assign leads, track activity, and automate follow-ups from first contact to conversion.",
    iconType: "lead",
  },
  {
    category: "Real Estate CRM",
    description:
      "Manage projects, inventory, site visits, bookings, pricing, partners, and collections inside one real-estate workflow.",
    iconType: "documents",
  },
  {
    category: "Admin, Analytics & Platform",
    description:
      "Control users, security, audit logs, integrations, tenant setup, and executive-level analytics from one admin layer.",
    iconType: "dashboard",
  },
  {
    category: "Support & Service",
    description:
      "Run support tickets, SLA rules, routing, knowledge base, feedback loops, and service analytics with better visibility.",
    iconType: "ticket",
  },
  {
    category: "Sales Workflow",
    description:
      "Handle proposals, quotations, invoices, agreements, scheduling, and complete deal movement through structured workflows.",
    iconType: "automation",
  },
  {
    category: "WhatsApp CRM",
    description:
      "Operate shared inboxes, campaigns, templates, automations, and WhatsApp analytics without leaving your CRM.",
    iconType: "whatsapp",
  },
  {
    category: "Calling & Communication",
    description:
      "Give sales teams faster calling, retries, recordings, PBX integration, and missed-call recovery in one place.",
    iconType: "phone",
  },
  {
    category: "Payment",
    description:
      "Track collections, reminders, receipts, part-payments, and due balances with clear payment visibility.",
    iconType: "payment",
  },
];

function getCategoryAnchor(category) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const categoryCards = FEATURE_CATEGORY_CARDS.map((card) => {
  const group = allFeatures.find((item) => item.category === card.category);
  const items = group?.items ?? [];

  return {
    ...card,
    href: `/features#${getCategoryAnchor(card.category)}`,
    count: items.length,
  };
});

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-8 md:py-10 bg-gradient-to-b from-[#0B1220] via-[#0E1A2B] to-[#0B1220] overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#00b274]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Reveal>
            <span className="text-[#00b274] text-sm font-bold tracking-[0.4em] uppercase block mb-4">
              Features
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Best In class Features
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg text-slate-400 leading-relaxed">
              Jump straight into the CRM modules that matter most to your sales,
              operations, support, finance, and platform teams.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryCards.slice(0, 6).map((card, index) => (
            <Reveal key={card.category} delay={index * 70}>
              <Link href={card.href} className="group block h-full">
                <div className="relative h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 xl:p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#00b274]/30 hover:bg-white/[0.07] hover:shadow-[0_18px_45px_rgba(0,0,0,0.28)]">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[1.15rem] border border-[#8be9ff]/15 bg-gradient-to-br from-[#112033] via-[#0b1728] to-[#0b1220] text-[#8be9ff] shadow-[0_18px_45px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:scale-110 group-hover:border-[#7ef7c4]/25 group-hover:text-[#7ef7c4]">
                    <FeatureIcon type={card.iconType} />
                  </div>

                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full border border-[#00b274]/20 bg-[#00b274]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#7ef7c4]">
                      Category
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {card.count} modules
                    </span>
                  </div>

                  <h3 className="text-[1.7rem] xl:text-[1.5rem] font-bold text-white mb-2.5 leading-[1.08] group-hover:text-[#00b274] transition-colors duration-300">
                    {card.category}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-[14px] xl:text-[13px] group-hover:text-slate-300 transition-colors duration-300">
                    {card.description}
                  </p>

                  <div className="mt-5 flex items-center text-[#00b274] text-sm font-semibold">
                    View Category
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-[#00b274]/0 to-[#00b274]/0 group-hover:from-[#00b274]/5 group-hover:to-transparent pointer-events-none transition-all duration-500" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 md:mt-16 text-center">
          <Reveal delay={600}>
            <a
              href="/features"
              className="inline-block group relative px-10 py-4 bg-gradient-to-r from-[#00b274] to-[#008a5a] text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(0,178,116,0.3)] hover:shadow-[0_15px_40px_rgba(0,178,116,0.5)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Show All Features
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
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
