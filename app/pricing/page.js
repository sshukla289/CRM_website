"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";
import BookCallModal from "@/components/BookCallModal";
import { pricingPlans } from "@/lib/pricing-data";

const plans = pricingPlans;

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
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-32 pb-4 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)]">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#00b274]/10 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />
        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter">
              Flexible Pricing Plans
            </h1>
            <nav className="flex text-[11px] uppercase tracking-widest text-slate-500 font-bold">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-[#00b274] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="opacity-30">/</span>
                </li>
                <li className="text-[#00b274]">Pricing</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <div className="pt-4 pb-10 px-6 relative bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#eef6f4_100%)] overflow-hidden">
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#00b274]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container max-w-7xl mx-auto relative z-10">
          <div className="flex justify-center mb-10">
            <div className="bg-white/85 backdrop-blur-md p-1.5 rounded-full flex items-center gap-1 border border-slate-200/80 shadow-[0_18px_50px_rgba(15,23,42,0.10)]">
              {["quarterly", "semiannual", "annual"].map((cycle) => (
                <button
                  key={cycle}
                  onClick={() => setBillingCycle(cycle)}
                  className={`relative px-8 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-500 ease-out ${
                    billingCycle === cycle ? "text-white" : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  {billingCycle === cycle && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00b274] to-[#009661] rounded-full -z-10 shadow-lg shadow-[#00b274]/20" />
                  )}
                  {cycle}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <Reveal key={plan.name} delay={idx * 100}>
                <div
                  className={`h-full relative flex flex-col p-8 rounded-2xl bg-white/90 backdrop-blur-md border transition-all duration-500 hover:scale-[1.03] ${
                    plan.highlighted
                      ? "border-[#00b274] shadow-[0_24px_70px_rgba(0,178,116,0.18)] scale-[1.02]"
                      : "border-slate-200/80 shadow-[0_22px_60px_rgba(15,23,42,0.09)]"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00b274] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-slate-950 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-2xl text-slate-500">{"\u20B9"}</span>
                      <span className="text-5xl font-bold text-slate-950">
                        {plan.price[billingCycle].toLocaleString()}
                      </span>
                      <span className="text-slate-500 text-sm">per user / month</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="mb-10 flex-grow space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-950 mb-4">
                        {plan.featureSectionTitle || "Features Included"}
                      </h4>
                      <div className="space-y-4">
                        {plan.fullFeatures.map((feature, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#00b274] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-slate-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-950 mb-4">Support & SLA</h4>
                      <div className="space-y-4">
                        {plan.support.map((item, i) => (
                          <div key={`support-${i}`} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-[#00b274] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-slate-700 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handlePlanAction(plan)}
                    className={`w-full py-4 rounded-full font-bold transition-all duration-300 active:scale-[0.98] ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-[#00b274] to-[#009661] text-white shadow-lg shadow-[#00b274]/20 hover:shadow-[#00b274]/40"
                        : plan.outline
                          ? "border border-slate-300 text-slate-950 hover:bg-slate-950 hover:text-white hover:border-slate-950"
                          : "bg-slate-950 text-white hover:bg-[#00b274]"
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 p-10 rounded-3xl bg-white/95 border border-slate-200 text-center shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
            <h3 className="text-xl font-bold text-slate-950 mb-3">Need a custom plan?</h3>
            <p className="text-slate-600 mb-6 max-w-xl mx-auto text-sm">
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
        planDetails={activePlan}
        billingCycle={billingCycle}
      />
    </main>
  );
}
