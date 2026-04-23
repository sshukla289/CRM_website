"use client";

export const dynamic = "force-dynamic";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import BookCallModal from "@/components/BookCallModal";

function FeatureIcon({ type }) {
  const iconClassName = "h-7 w-7";

  const icons = {
    lead: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3v4" strokeLinecap="round" />
        <path d="M4.93 4.93l2.83 2.83" strokeLinecap="round" />
        <path d="M3 12h4" strokeLinecap="round" />
        <path d="M4.93 19.07l2.83-2.83" strokeLinecap="round" />
        <path d="M12 21v-4" strokeLinecap="round" />
        <path d="M19.07 19.07l-2.83-2.83" strokeLinecap="round" />
        <path d="M21 12h-4" strokeLinecap="round" />
        <path d="M19.07 4.93l-2.83 2.83" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
    pipeline: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 19V9" strokeLinecap="round" />
        <path d="M12 19V5" strokeLinecap="round" />
        <path d="M19 19v-7" strokeLinecap="round" />
        <circle cx="5" cy="7" r="2" />
        <circle cx="12" cy="3" r="2" />
        <circle cx="19" cy="10" r="2" />
        <path d="M7 7h3" strokeLinecap="round" />
        <path d="M14 4h3" strokeLinecap="round" />
      </svg>
    ),
    contacts: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M4.5 18a4.5 4.5 0 0 1 9 0" strokeLinecap="round" />
        <circle cx="17.5" cy="9" r="2.5" />
        <path d="M15.5 18a4 4 0 0 1 4-3" strokeLinecap="round" />
      </svg>
    ),
    automation: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M13 2L6 14h5l-1 8 8-12h-5l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    reminders: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M8 5V3" strokeLinecap="round" />
        <path d="M16 5V3" strokeLinecap="round" />
        <rect x="4" y="5" width="16" height="15" rx="3" />
        <path d="M8 11h8" strokeLinecap="round" />
        <path d="M8 15h5" strokeLinecap="round" />
      </svg>
    ),
    documents: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M8 3h6l4 4v14H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
        <path d="M14 3v5h5" strokeLinejoin="round" />
        <path d="M9 13h6" strokeLinecap="round" />
        <path d="M9 17h6" strokeLinecap="round" />
      </svg>
    ),
    billing: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M7 4h10a2 2 0 0 1 2 2v12l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5V6a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
        <path d="M9 9h6" strokeLinecap="round" />
        <path d="M9 13h6" strokeLinecap="round" />
      </svg>
    ),
    expenses: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="6" width="16" height="12" rx="3" />
        <path d="M4 10h16" strokeLinecap="round" />
        <circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
    tax: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 4l7 4v4c0 4.5-2.8 7.8-7 8-4.2-.2-7-3.5-7-8V8l7-4Z" strokeLinejoin="round" />
        <path d="M9.5 12l1.7 1.7L14.8 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    forecasts: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 19V8" strokeLinecap="round" />
        <path d="M10 19V12" strokeLinecap="round" />
        <path d="M16 19V5" strokeLinecap="round" />
        <path d="M4 19h16" strokeLinecap="round" />
      </svg>
    ),
    team: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M4.5 18a3.5 3.5 0 0 1 7 0" strokeLinecap="round" />
        <path d="M12.5 18a3.5 3.5 0 0 1 7 0" strokeLinecap="round" />
      </svg>
    ),
    dashboard: (
      <svg className={iconClassName} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 10h8" strokeLinecap="round" />
        <path d="M8 14h5" strokeLinecap="round" />
      </svg>
    ),
  };

  return icons[type] ?? icons.dashboard;
}

const allFeatures = [
  {
    category: "Sales & CRM",
    items: [
      {
        title: "Lead Management",
        description:
          "Capture leads from websites, social media, and offline events automatically. Assign them to sales reps based on region or product interest.",
        icon: "lead",
      },
      {
        title: "Pipeline Visualization",
        description:
          "A drag-and-drop Kanban board to track deals from initial contact to closure. Custom stages to match your unique sales cycle.",
        icon: "pipeline",
      },
      {
        title: "Contact Management",
        description:
          "360-degree view of your customers, including interaction history, purchase records, and communication logs in one place.",
        icon: "contacts",
      },
    ],
  },
  {
    category: "Automation & Workflow",
    items: [
      {
        title: "Automated Follow-ups",
        description:
          "Set up automated email and WhatsApp follow-ups for new leads or stagnant deals to ensure no opportunity is missed.",
        icon: "automation",
      },
      {
        title: "Task Reminders",
        description:
          "Smart notifications for your team regarding meetings, calls, and pending tasks. Sync with Google and Outlook calendars.",
        icon: "reminders",
      },
      {
        title: "Document Automation",
        description:
          "Generate quotes, invoices, and proposals in seconds using pre-built templates and auto-filling customer data.",
        icon: "documents",
      },
    ],
  },
  {
    category: "Finance & Compliance",
    items: [
      {
        title: "GST-Ready Billing",
        description:
          "Generate GST-compliant invoices with automated tax calculations. Support for CGST, SGST, and IGST based on location.",
        icon: "billing",
      },
      {
        title: "Expense Tracking",
        description:
          "Track business expenses and employee reimbursements. Upload receipts and categorize spending for easier accounting.",
        icon: "expenses",
      },
      {
        title: "Tax Filing Support",
        description:
          "Export data directly for GST returns. Maintain audit logs and financial history to stay 100% compliant with local laws.",
        icon: "tax",
      },
    ],
  },
  {
    category: "Analytics & Reporting",
    items: [
      {
        title: "Sales Forecasts",
        description:
          "Predict future revenue based on current pipeline data and historical performance. Plan your inventory and resources effectively.",
        icon: "forecasts",
      },
      {
        title: "Team Performance",
        description:
          "Track conversion rates, call logs, and response times for every team member. Reward top performers and identify training needs.",
        icon: "team",
      },
      {
        title: "Custom Dashboards",
        description:
          "Create your own views with the metrics that matter most to you. Real-time updates ensure you always have the pulse of your business.",
        icon: "dashboard",
      },
    ],
  },
];

export default function FeaturesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#0B1220]">
      <Navbar />

      <div className="relative overflow-hidden pt-32 pb-12">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              CRM Features
            </h1>
            <nav className="flex text-sm text-white/70 font-medium">
              <ol className="flex items-center gap-2">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><span>&gt;</span></li>
                <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
                <li><span>&gt;</span></li>
                <li className="text-white">CRM Features</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div className="py-24 px-6 relative">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00b274]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="space-y-24">
            {allFeatures.map((group) => (
              <div key={group.category} className="space-y-12">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white whitespace-nowrap">
                    {group.category}
                  </h2>
                  <div className="h-px w-full bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {group.items.map((feature, idx) => (
                    <Reveal key={feature.title} delay={idx * 100}>
                      <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00b274]/30 transition-all duration-500 group">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-[#67e8f9]/15 bg-gradient-to-br from-[#102235] via-[#0b1728] to-[#0b1220] text-[#8be9ff] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-transform duration-500 group-hover:scale-110 group-hover:border-[#7ef7c4]/30 group-hover:text-[#7ef7c4]">
                          <FeatureIcon type={feature.icon} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00b274] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-[#00b274]/10 to-blue-500/10 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#00b274]/5 blur-3xl rounded-full" />
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-6">Ready to see these features in action?</h3>
              <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
                Join hundreds of Indian enterprises that use Triostack to automate their sales and grow 2x faster.
              </p>
              <button
                type="button"
                onClick={handleModalOpen}
                className="inline-block bg-[#00b274] hover:bg-[#009661] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>

        <BookCallModal isOpen={isModalOpen} onClose={handleModalClose} />
      </div>

    </main>
  );
}
