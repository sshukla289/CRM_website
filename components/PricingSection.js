"use client";

import { useState, useEffect, useRef } from "react";
import BookCallModal from "./BookCallModal";
import { pricingPlans } from "@/lib/pricing-data";

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("annual");
  const [isVisible, setIsVisible] = useState(false);
  const [activePlan, setActivePlan] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
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

  const handlePlanAction = (plan) => {
    setActivePlan(plan);
  };

  const handleModalClose = () => {
    setActivePlan(null);
  };

  const plans = pricingPlans;
  const billingLabels = {
    quarterly: "Quarterly",
    semiannual: "Semi-Annual",
    annual: "Annual",
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-8 pb-16 md:pt-10 md:pb-24 bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#eef6f4_100%)] overflow-hidden"
    >
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#00b274]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-10 md:mb-12 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"} transition-opacity duration-700`}
        >
          <span className="text-[#00b274] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
            Invest in Growth
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-950 mb-6">
            ROI-Focused Pricing
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            CRM Solutions pays for itself by helping you close more deals and eliminating manual tasks.
          </p>
        </div>

        <div
          className={`flex justify-center mb-10 md:mb-12 ${isVisible ? "animate-fade-in opacity-100" : "opacity-0"} [animation-delay:200ms]`}
        >
          <div className="bg-white/85 backdrop-blur-md p-1.5 rounded-full flex items-center gap-1 border border-slate-200/80 shadow-[0_18px_50px_rgba(15,23,42,0.10)] relative">
            {["quarterly", "semiannual", "annual"].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-500 ease-out ${
                  billingCycle === cycle ? "text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {billingCycle === cycle && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00b274] to-[#009661] rounded-full -z-10 shadow-lg shadow-[#00b274]/20 animate-fade-in" />
                )}
                {cycle}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`${isVisible ? "animate-slide-up opacity-100" : "opacity-0"} transition-all duration-700`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div
                className={`h-full relative group bg-white/90 backdrop-blur-md border rounded-2xl p-8 transition-all duration-500 hover:scale-[1.05] flex flex-col ${
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
                    <span className="text-slate-500 text-sm">/user / month</span>
                  </div>
                  <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">{plan.users}</span>
                    <span className="text-slate-300">|</span>
                    <span>{billingLabels[billingCycle]}</span>
                    <span className="text-slate-300">|</span>
                    <span>{plan.total[billingCycle]} total</span>
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
            </div>
          ))}
        </div>
      </div>

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
    </section>
  );
}
