"use client";

import { useState } from "react";
import { submitLead } from "@/lib/submitLead";

export default function HeroForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitLead({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        solution: formData.get("solution"),
        formId: "hero-form",
      });

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to submit your request right now."
      );
    }
  };

  return (
    <div className="animate-slide-up [animation-delay:400ms] opacity-0 glass-card rounded-2xl p-8 w-full max-w-md transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Book Your Free Demo</h2>
        <p className="text-slate-500 text-sm">See how CRM Solutions can grow your business</p>
      </div>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <input 
            name="name"
            type="text" 
            placeholder="Full Name *" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b274]/20 focus:border-[#00b274] transition-all"
            required
          />
        </div>
        <div>
          <input 
            name="phone"
            type="tel" 
            placeholder="Phone Number *" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b274]/20 focus:border-[#00b274] transition-all"
            required
          />
        </div>
        <div>
          <input 
            name="email"
            type="email" 
            placeholder="Work Email *" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b274]/20 focus:border-[#00b274] transition-all"
            required
          />
        </div>
        <div>
          <input 
            name="company"
            type="text" 
            placeholder="Company Name (Optional)" 
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b274]/20 focus:border-[#00b274] transition-all"
          />
        </div>
        <div className="relative">
          <select 
            name="solution"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#00b274]/20 focus:border-[#00b274] transition-all appearance-none cursor-pointer"
            defaultValue="TrioCRM"
          >
            <option value="TrioCRM">TrioCRM</option>
            <option value="Enterprise CRM">Enterprise CRM</option>
            <option value="Sales CRM">Sales CRM</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        {errorMessage ? (
          <p className="text-sm text-red-600">{errorMessage}</p>
        ) : null}

        {status === "success" ? (
          <p className="text-sm text-[#008a5a]">Your details were submitted successfully.</p>
        ) : null}
      </form>
    </div>
  );
}
