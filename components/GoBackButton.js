"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function GoBackButton({
  fallbackHref,
  label = "Go Back",
  className = "",
}) {
  const router = useRouter();
  const fallbackTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (fallbackTimerRef.current) {
        window.clearTimeout(fallbackTimerRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    if (typeof window === "undefined") {
      router.push(fallbackHref);
      return;
    }

    const currentPath = window.location.pathname;
    const canGoBack = window.history.length > 1;

    if (!canGoBack) {
      router.push(fallbackHref);
      return;
    }

    router.back();

    fallbackTimerRef.current = window.setTimeout(() => {
      if (window.location.pathname === currentPath) {
        router.push(fallbackHref);
      }
    }, 200);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group inline-flex items-center gap-1.5 p-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-all hover:text-[#7ef7c4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef7c4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220] ${className}`}
      aria-label={label}
    >
      <span aria-hidden="true" className="text-base transition-transform group-hover:-translate-x-1">
        &larr;
      </span>
      {label}
    </button>
  );
}
