"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function GoBackButton({
  fallbackHref,
  label = "Go Back",
  className = "",
}) {
  const router = useRouter();

  const handleClick = (event) => {
    let hasSameSitePreviousPage = false;

    try {
      const referrer = document.referrer ? new URL(document.referrer) : null;
      hasSameSitePreviousPage =
        Boolean(referrer) &&
        referrer.origin === window.location.origin &&
        referrer.pathname !== window.location.pathname &&
        window.history.length > 1;
    } catch {
      hasSameSitePreviousPage = false;
    }

    if (hasSameSitePreviousPage) {
      event.preventDefault();
      router.back();
    }
  };

  return (
    <Link
      href={fallbackHref}
      onClick={handleClick}
      className={`group inline-flex items-center gap-1.5 p-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 transition-all hover:text-[#7ef7c4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef7c4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220] ${className}`}
      aria-label={label}
    >
      <span aria-hidden="true" className="text-base transition-transform group-hover:-translate-x-1">
        &larr;
      </span>
      {label}
    </Link>
  );
}
