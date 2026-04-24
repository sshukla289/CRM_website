import React from "react";

export default function FeatureIcon({ type, className = "h-7 w-7" }) {
  const icons = {
    lead: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3v4" strokeLinecap="round" />
        <path d="M4.93 4.93l2.83 2.83" strokeLinecap="round" />
        <path d="M3 12h4" strokeLinecap="round" />
        <path d="M4.93 19.07l2.83-2.83" strokeLinecap="round" />
        <path d="M12 21v-4" strokeLinecap="round" />
        <path d="M19.07 19.07l-2.83-2.83" strokeLinecap="round" />
        <path d="M21 12h-4" strokeLinecap="round" />
        <path d="M19.07 4.93l-2.83 2.83" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
    pipeline: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M5 19V9" strokeLinecap="round" />
        <path d="M12 19V5" strokeLinecap="round" />
        <path d="M19 19v-7" strokeLinecap="round" />
        <circle cx="5" cy="7" r="2" />
        <circle cx="12" cy="3" r="2" />
        <circle cx="19" cy="10" r="2" />
        <path d="M7 7h3" strokeLinecap="round" />
        <path d="M14 4h3" strokeLinecap="round" />
      </svg>
    ),
    contacts: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M4.5 18a4.5 4.5 0 0 1 9 0" strokeLinecap="round" />
        <circle cx="17.5" cy="9" r="2.5" />
        <path d="M15.5 18a4 4 0 0 1 4-3" strokeLinecap="round" />
      </svg>
    ),
    automation: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M13 2L6 14h5l-1 8 8-12h-5l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    reminders: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M8 5V3" strokeLinecap="round" />
        <path d="M16 5V3" strokeLinecap="round" />
        <rect x="4" y="5" width="16" height="15" rx="3" />
        <path d="M8 11h8" strokeLinecap="round" />
        <path d="M8 15h5" strokeLinecap="round" />
      </svg>
    ),
    documents: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M8 3h6l4 4v14H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
        <path d="M14 3v5h5" strokeLinejoin="round" />
        <path d="M9 13h6" strokeLinecap="round" />
        <path d="M9 17h6" strokeLinecap="round" />
      </svg>
    ),
    billing: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M7 4h10a2 2 0 0 1 2 2v12l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5V6a2 2 0 0 1 2-2Z" strokeLinejoin="round" />
        <path d="M9 9h6" strokeLinecap="round" />
        <path d="M9 13h6" strokeLinecap="round" />
      </svg>
    ),
    expenses: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="6" width="16" height="12" rx="3" />
        <path d="M4 10h16" strokeLinecap="round" />
        <circle cx="9" cy="14" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
    tax: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 4l7 4v4c0 4.5-2.8 7.8-7 8-4.2-.2-7-3.5-7-8V8l7-4Z" strokeLinejoin="round" />
        <path d="M9.5 12l1.7 1.7L14.8 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    forecasts: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 19V8" strokeLinecap="round" />
        <path d="M10 19V12" strokeLinecap="round" />
        <path d="M16 19V5" strokeLinecap="round" />
        <path d="M4 19h16" strokeLinecap="round" />
      </svg>
    ),
    team: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M4.5 18a3.5 3.5 0 0 1 7 0" strokeLinecap="round" />
        <path d="M12.5 18a3.5 3.5 0 0 1 7 0" strokeLinecap="round" />
      </svg>
    ),
    dashboard: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 10h8" strokeLinecap="round" />
        <path d="M8 14h5" strokeLinecap="round" />
      </svg>
    ),
    phone: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    whatsapp: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    payment: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M7 15h.01" />
        <path d="M11 15h2" />
      </svg>
    ),
    ticket: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M2 9V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 0 0 6v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 0 0-6Z" />
        <path d="M15 3v18" strokeDasharray="4 4" />
      </svg>
    ),
  };

  return icons[type] ?? icons.dashboard;
}
