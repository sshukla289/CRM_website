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
    <section id="features" className="relative py-24 md:py-36 bg-white overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.4]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      {/* Decorative Light Blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#00b274]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00b274]/5 border border-[#00b274]/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00b274] animate-pulse" />
              <span className="text-[#00b274] text-[10px] font-black uppercase tracking-[0.3em]">
                Enterprise Features
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
              Scale Faster with <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b274] to-[#008a5a]">Smart Modules</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium">
              A comprehensive suite of intelligence tools designed to unify your sales, support, and operations into one powerhouse.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categoryCards.slice(0, 6).map((card, index) => (
            <Reveal key={card.category} delay={index * 80}>
              <Link href={card.href} className="group block h-full">
                <div className="relative h-full rounded-[3rem] border border-slate-200/60 bg-white p-10 transition-all duration-700 hover:-translate-y-3 hover:border-[#00b274]/20 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.04),0_10px_20px_-2px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-15px_rgba(0,178,116,0.12)]">
                  {/* Icon with Glass Effect */}
                  <div className="mb-10 relative">
                    <div className="absolute inset-0 bg-[#00b274]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-75" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-50 text-slate-900 transition-all duration-500 group-hover:bg-[#00b274] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 shadow-sm border border-slate-100">
                      <FeatureIcon type={card.iconType} className="h-9 w-9" />
                    </div>
                  </div>

                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#00b274]">
                      {card.category.includes("CRM") ? "Suite" : "Module"}
                    </span>
                    <div className="h-px flex-1 mx-4 bg-slate-100 group-hover:bg-[#00b274]/10 transition-colors" />
                    <span className="text-[11px] font-bold text-slate-400">
                      {card.count} Tools
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-[#00b274] transition-colors duration-300 tracking-tight">
                    {card.category}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-[15px] font-medium mb-8 group-hover:text-slate-600 transition-colors duration-300">
                    {card.description}
                  </p>

                  <div className="mt-auto pt-6 flex items-center text-slate-900 text-sm font-black uppercase tracking-widest border-t border-slate-50 group-hover:text-[#00b274] transition-all">
                    <span className="relative inline-flex items-center">
                      View Capability
                      <svg
                        className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Reveal delay={600}>
            <Link
              href="/features"
              className="inline-flex items-center gap-4 px-12 py-6 bg-slate-900 text-white font-black text-sm uppercase tracking-[0.2em] rounded-2xl transition-all duration-500 hover:bg-[#00b274] hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,178,116,0.3)] group"
            >
              Explore Full Ecosystem
              <svg
                className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>


  );
}
