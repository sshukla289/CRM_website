"use client";

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import ContactLink from "@/components/ContactLink";
import Reveal from "@/components/Reveal";

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

  return (
    <main className="min-h-screen bg-[#0B1220]">
      <Navbar />

      {/* Page Hero Section - Transparent */}
      <div className="relative overflow-hidden pt-32 pb-12">

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Flexible Pricing Plans
            </h1>
            <nav className="flex text-sm text-white/70 font-medium">
              <ol className="flex items-center gap-2">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><span>&gt;</span></li>
                <li className="text-white">Pricing</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="py-24 px-6 relative">
        <div className="container max-w-7xl mx-auto relative z-10">
          
          {/* Billing Toggle */}
          <div className="flex justify-center mb-24">
            <div className="bg-white/5 backdrop-blur-md p-1.5 rounded-full flex items-center gap-1 border border-white/10 shadow-2xl">
              {["quarterly", "semiannual", "annual"].map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`relative px-8 py-3 rounded-full text-sm font-bold capitalize transition-all duration-300 ${
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
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00b274] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl text-slate-400">₹</span>
                      <span className="text-5xl font-bold text-white">{plan.price[billingCycle].toLocaleString()}</span>
                      <span className="text-slate-400 text-sm">/month</span>
                    </div>
                    <p className="text-slate-500 text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-[#00b274] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#00b274] to-[#008a5a] text-white shadow-lg shadow-[#00b274]/20 hover:scale-105"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
                  }`}>
                    {plan.buttonText}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom FAQ CTA */}
          <div className="mt-32 p-12 rounded-3xl bg-gradient-to-br from-[#00b274]/5 to-blue-500/5 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need a custom plan?</h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              We offer tailored solutions for large-scale enterprises with specific security and integration requirements.
            </p>
            <ContactLink className="text-[#00b274] font-bold hover:underline">Contact our sales team &rarr;</ContactLink>
          </div>
        </div>
      </div>

    </main>
  );
}
