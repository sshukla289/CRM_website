"use client";

import Link from "next/link";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import ContactLink from "@/components/ContactLink";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";
import BookCallModal from "@/components/BookCallModal";

const plans = [
  {
    name: "Starter",
    price: {
      quarterly: 899,
      semiannual: 849,
      annual: 799
    },
    description: "Perfect for small teams getting started",
    features: [
      "Lead Management",
      "Contact Tracking",
      "Basic Reporting",
      "Mobile App Access",
      "Email Support",
      "5GB Storage"
    ],
    buttonText: "Start Free Trial",
    highlighted: false,
    outline: true
  },
  {
    name: "Professional",
    price: {
      quarterly: 1699,
      semiannual: 1599,
      annual: 1499
    },
    description: "Advanced tools for growing businesses",
    features: [
      "Everything in Starter",
      "Workflow Automation",
      "Sales Pipeline Tracking",
      "Analytics Dashboard",
      "WhatsApp Integration",
      "25GB Storage"
    ],
    buttonText: "Start Free Trial",
    highlighted: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: {
      quarterly: 2799,
      semiannual: 2649,
      annual: 2499
    },
    description: "Full customization and enterprise support",
    features: [
      "Everything in Professional",
      "Custom Integrations",
      "Dedicated Support",
      "Advanced Security",
      "Multi-branch Centralization",
      "Unlimited Storage"
    ],
    buttonText: "Contact Sales",
    highlighted: false
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("annual");
  const [activePlan, setActivePlan] = useState(null);

  const handlePlanAction = (plan) => {
    setActivePlan(plan);
  };

  const handleModalClose = () => {
    setActivePlan(null);
  };

  return (
    <main className="min-h-screen bg-[#0B1220]">
      <Navbar />

      {/* Page Hero Section - Transparent */}
      <section className="relative pt-32 pb-4 overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              Flexible Pricing Plans
            </h1>
            <nav className="flex text-[11px] uppercase tracking-widest text-white/50 font-bold">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:text-[#00b274] transition-colors">Home</Link></li>
                <li><span className="opacity-30">/</span></li>
                <li className="text-[#00b274]">Pricing</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="pt-4 pb-10 px-6 relative">
        <div className="container max-w-7xl mx-auto relative z-10">
          
          {/* Billing Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-white/5 backdrop-blur-md p-1 rounded-full flex items-center gap-1 border border-white/10 shadow-2xl">
              {["quarterly", "semiannual", "annual"].map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`relative px-6 py-2.5 rounded-full text-xs font-bold capitalize transition-all duration-300 ${
                    billingCycle === cycle ? "text-white" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {billingCycle === cycle && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00b274] to-[#008a5a] rounded-full -z-10 shadow-lg shadow-[#00b274]/20" />
                  )}
                  {cycle}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <Reveal key={plan.name} delay={idx * 100}>
                <div className={`h-full flex flex-col p-8 rounded-3xl glass-dark glass-glow border transition-all duration-500 hover:scale-[1.02] ${
                  plan.highlighted ? "border-[#00b274] shadow-[0_20px_50px_rgba(0,178,116,0.1)] scale-105" : "border-white/10"
                }`}>
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#00b274] text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-1.5">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-3">
                      <span className="text-xl text-slate-400">₹</span>
                      <span className="text-4xl font-bold text-white">{plan.price[billingCycle].toLocaleString()}</span>
                      <span className="text-slate-400 text-[11px]">/month</span>
                    </div>
                    <p className="text-slate-500 text-xs">{plan.description}</p>
                  </div>

                  <div className="space-y-3.5 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-[#00b274] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300 text-[13px]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePlanAction(plan)}
                    className={`w-full py-3.5 rounded-full text-sm font-bold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#00b274] to-[#008a5a] text-white shadow-lg shadow-[#00b274]/20 hover:scale-105"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom FAQ CTA */}
          <div className="mt-10 p-10 rounded-3xl bg-gradient-to-br from-[#00b274]/5 to-blue-500/5 border border-white/10 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Need a custom plan?</h3>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto text-sm">
              We offer tailored solutions for large-scale enterprises with specific security and integration requirements.
            </p>
            <button 
              onClick={() => handlePlanAction({ name: "Custom Enterprise", buttonText: "Contact Sales" })}
              className="text-[#00b274] text-sm font-bold hover:underline cursor-pointer"
            >
              Contact our sales team &rarr;
            </button>
          </div>
        </div>
      </div>

      <ContactSection />
      <BookCallModal
        isOpen={Boolean(activePlan)}
        onClose={handleModalClose}
        title={activePlan?.buttonText ?? "Book a Call"}
        subtitle={
          activePlan
            ? `Share your details and our team will help you get started with the ${activePlan.name} plan.`
            : "Share your details and our team will contact you shortly."
        }
      />
    </main>
  );
}
