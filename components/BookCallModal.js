"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { submitLead } from "@/lib/submitLead";

export default function BookCallModal({
  isOpen,
  onClose,
  title = "Book a Call",
  subtitle = "Share your details and our team will contact you shortly.",
  planDetails = null,
  billingCycle = "annual",
}) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const billingLabels = {
    quarterly: "Quarterly",
    semiannual: "Semi-Annual",
    annual: "Annual",
  };
  const userOptions = [
    "1 User",
    "2 Users",
    "3-5 Users",
    "6-10 Users",
    "10+ Users",
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

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
        formId: "book-call-modal",
        notes: `Modal title: ${title}${planDetails ? ` | Plan: ${planDetails.name} | Billing: ${billingCycle}` : ""}`,
        extra: {
          crm_solution: formData.get("crm_solution"),
          modal_subtitle: subtitle,
          plan_name: planDetails?.name || "",
          plan_billing_cycle: billingCycle,
          plan_users: planDetails?.users || "",
          plan_total: planDetails?.total?.[billingCycle] || "",
          user_requirement: formData.get("user_requirement"),
          selected_price: pricePerUserPerMonth,
        },
      });

      form.reset();
      setStatus("success");
      onClose();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Unable to submit your request right now."
      );
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setStatus("idle");
      setErrorMessage("");
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !isMounted) {
    return null;
  }

  const pricePerUserPerMonth = planDetails
    ? `${"\u20B9"}${planDetails.price?.[billingCycle]?.toLocaleString()} /user / month`
    : "";

  const modal = (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center px-4 py-8 sm:px-6"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" />

      <div
        className="relative z-[10001] w-full max-w-xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-call-title"
        id="book-call-modal"
      >
        <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-white shadow-2xl">
          <div className="modal-scrollbar relative max-h-[88vh] overflow-y-auto p-6 pr-4 sm:p-8 sm:pr-5">
            <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#00b274]/15 blur-3xl" />

            <button
              type="button"
              onClick={onClose}
              aria-label="Close book call modal"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6 pr-12">
              <span className="inline-flex rounded-full border border-[#00b274]/20 bg-[#00b274]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#008a5a]">
                Consultation
              </span>
              <h2 id="book-call-title" className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{subtitle}</p>
            </div>

            {planDetails ? (
              <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="rounded-full bg-white px-3 py-1 text-slate-800">{planDetails.name}</span>
                  <span className="text-slate-300">|</span>
                  <span>{billingLabels[billingCycle]}</span>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Price</p>
                    <p className="mt-2 text-base font-semibold text-slate-950">{pricePerUserPerMonth}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Users</p>
                    <p className="mt-2 text-base font-semibold text-slate-950">{planDetails.users}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">Billing</p>
                    <p className="mt-2 text-base font-semibold text-slate-950">{billingLabels[billingCycle]}</p>
                  </div>
                </div>
              </div>
            ) : null}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input name="crm_solution" type="hidden" value={planDetails?.name || "CRM Solutions"} />

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">Full Name</label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">Phone Number</label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">Work Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your work email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                  required
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">Company Name</label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Enter your company name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-900">User Requirement</label>
                  <select
                    name="user_requirement"
                    defaultValue={planDetails?.users || ""}
                    className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                    required
                  >
                    <option value="" disabled>Select user range</option>
                    {userOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="rounded-xl bg-gradient-to-r from-[#00b274] to-[#009661] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_32px_rgba(0,178,116,0.28)] transition-all duration-300 hover:brightness-105 active:scale-[0.98] cursor-pointer"
                >
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </button>
              </div>

              {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
