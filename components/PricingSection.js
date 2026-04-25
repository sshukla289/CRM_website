"use client";

import { useState, useEffect, useRef } from "react";
import BookCallModal from "./BookCallModal";

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

  const plans = [
    {
      name: "Starter",
      price: {
        quarterly: 899,
        semiannual: 849,
        annual: 799
      },
      description: "Perfect for small teams getting started",
      features: ["Lead management", "Contact tracking", "Basic reports"],
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
        "Workflow automation",
        "Sales pipeline tracking",
        "Analytics dashboard"
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
        "Custom integrations",
        "Dedicated support",
        "Advanced security"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-8 md:py-10 bg-gradient-to-b from-[#0B1220] via-[#0E1A2B] to-[#0B1220] overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 -left-20 w-96 h-96 bg-[#00b274]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 md:mb-12 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
          <span className="text-[#00b274] text-xs font-bold tracking-[0.3em] uppercase block mb-4">
            PRICING
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose a plan that fits your business needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className={`flex justify-center mb-10 md:mb-12 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'} [animation-delay:200ms]`}>
          <div className="bg-white/5 backdrop-blur-md p-1.5 rounded-full flex items-center gap-1 border border-white/10 shadow-2xl relative">
            {["quarterly", "semiannual", "annual"].map((cycle) => (
              <button
                key={cycle}
                onClick={() => setBillingCycle(cycle)}
                className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold capitalize transition-all duration-500 ease-out ${
                  billingCycle === cycle
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
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

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'} transition-all duration-700`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className={`h-full relative group bg-white/5 backdrop-blur-md border rounded-2xl p-8 transition-all duration-500 hover:scale-[1.05] flex flex-col ${
                plan.highlighted 
                  ? "border-[#00b274] shadow-[0_20px_50px_rgba(0,178,116,0.15)] scale-[1.02]" 
                  : "border-white/10 shadow-xl"
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
                  <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
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

                <button
                  type="button"
                  onClick={() => handlePlanAction(plan)}
                  className={`w-full py-4 rounded-full font-bold transition-all duration-300 active:scale-[0.98] ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[#00b274] to-[#009661] text-white shadow-lg shadow-[#00b274]/20 hover:shadow-[#00b274]/40"
                    : plan.outline
                      ? "border border-white/20 text-white hover:bg-white/5 hover:border-white/40"
                      : "bg-white/10 text-white hover:bg-white/20"
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
      />
    </section>
  );
}
