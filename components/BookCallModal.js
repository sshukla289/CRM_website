"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { submitLead } from "@/lib/submitLead";

export default function BookCallModal({
  isOpen,
  onClose,
  title = "Book a Call",
  subtitle = "Share your details and our team will contact you shortly.",
}) {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMounted, setIsMounted] = useState(false);

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
        notes: `Modal title: ${title}`,
        extra: {
          crm_solution: formData.get("crm_solution"),
          modal_subtitle: subtitle,
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

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8 sm:px-6"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,195,142,0.18),transparent_38%),rgba(2,8,20,0.78)] backdrop-blur-md animate-fade-in" />

      <div
        className="relative z-10 w-full max-w-xl animate-slide-up"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="book-call-title"
        id="book-call-modal"
      >
        <div className="relative overflow-hidden rounded-[30px] border border-white/70 bg-[linear-gradient(180deg,#ffffff_0%,#f7fbff_100%)] p-6 shadow-[0_36px_110px_rgba(2,8,23,0.35)] sm:p-8">
          <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#00b274]/15 blur-3xl" />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close book call modal"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
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

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name *"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                  required
                />
              </div>
              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number *"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                  required
                />
              </div>
            </div>

            <div>
              <input
                name="email"
                type="email"
                placeholder="Work Email *"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
                required
              />
            </div>
            <div>
              <input
                name="company"
                type="text"
                placeholder="Company Name (Optional)"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
              />
            </div>
            <div>
              <select
                name="crm_solution"
                className="w-full cursor-pointer appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm transition-all focus:border-[#00b274] focus:outline-none focus:ring-2 focus:ring-[#00b274]/20"
              >
                <option value="">CRM Solutions</option>
                <option value="enterprise">Enterprise CRM</option>
                <option value="sales">Sales Automation</option>
                <option value="custom">Custom Implementation</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#00b274] to-[#009661] py-4 font-bold text-white shadow-[0_12px_32px_rgba(0,178,116,0.28)] transition-all duration-300 hover:brightness-105 active:scale-[0.98]"
            >
              {status === "submitting" ? "Submitting..." : "Submit Request"}
            </button>

            {errorMessage ? <p className="text-sm text-red-600">{errorMessage}</p> : null}
          </form>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
