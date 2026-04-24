"use client";

export default function IndustryBackButton({ className = "" }) {
  const goToIndustries = () => {
    window.location.assign("/industries");
  };

  return (
    <form
      action="/industries"
      method="get"
      className={`relative z-[9999] inline-flex pointer-events-auto ${className}`}
    >
      <button
        type="submit"
        onPointerDown={goToIndustries}
        onClick={goToIndustries}
        className="group inline-flex items-center justify-center p-2 transition-all active:scale-95 focus-visible:outline-none"
        aria-label="Go back to industries"
      >
        <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 bg-white/[0.1] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-100 shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all hover:border-[#7ef7c4]/35 hover:bg-[#7ef7c4]/10 hover:text-[#7ef7c4] group-focus-visible:ring-2 group-focus-visible:ring-[#7ef7c4] group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#0b1220]">
          <span aria-hidden="true" className="text-sm transition-transform group-hover:-translate-x-1">
            &larr;
          </span>
          Go Back
        </span>
      </button>
    </form>
  );
}
