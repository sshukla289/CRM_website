import { slugify } from "@/lib/utils";

export const industries = [
  {
    name: "Education",
    tag: "Admissions and engagement",
    description:
      "Unify student inquiries, admission counseling, fee communication, outreach journeys, and parent engagement for institutes and training teams.",
    outcomes: ["Inquiry funnel tracking", "Counselor assignment", "Enrollment communication"],
    metric: "3x",
    metricLabel: "clearer pipeline visibility",
    detail: {
      headline: "CRM structure for admissions, counseling, and student engagement.",
      overview:
        "Education teams need a CRM that keeps every inquiry, counselor action, parent conversation, fee reminder, and enrollment milestone visible without slowing the admissions team down.",
      focusAreas: [
        "Online and offline inquiry capture",
        "Counselor-wise pipeline ownership",
        "Follow-up reminders for students and parents",
        "Fee, document, and enrollment stage tracking",
      ],
      modules: [
        "Admission pipeline",
        "Counselor dashboard",
        "Student communication timeline",
        "Campaign source reporting",
      ],
      workflow: ["Inquiry", "Counselor assignment", "Follow-up", "Application", "Enrollment"],
    },
  },
  {
    name: "Manufacturing",
    tag: "Operations and dealer flow",
    description:
      "Connect procurement, stock movement, dealer requests, service schedules, and dispatch visibility in one operating layer.",
    outcomes: ["Live inventory visibility", "Faster dispatch decisions", "Dealer request tracking"],
    metric: "28%",
    metricLabel: "less order delay",
    detail: {
      headline: "CRM visibility for dealers, stock movement, and operational handoffs.",
      overview:
        "Manufacturing teams work across sales, dealers, inventory, dispatch, service, and finance. A focused CRM brings those handoffs into one workflow so teams can act before delays grow.",
      focusAreas: [
        "Dealer inquiry and request management",
        "Inventory-aware sales follow-up",
        "Dispatch and service schedule visibility",
        "Approval paths for pricing and special requests",
      ],
      modules: ["Dealer portal", "Inventory dashboard", "Dispatch tracker", "Service request desk"],
      workflow: ["Dealer request", "Stock check", "Approval", "Dispatch", "Service follow-up"],
    },
  },
  {
    name: "Healthcare",
    tag: "Patient and care coordination",
    description:
      "Bring appointments, patient communication, field outreach, billing workflows, and follow-up tasks into a secure customer system.",
    outcomes: ["Appointment automation", "Care-team coordination", "Fewer missed follow-ups"],
    metric: "2.4x",
    metricLabel: "more response speed",
    detail: {
      headline: "CRM support for appointment flow, outreach, and care follow-up.",
      overview:
        "Healthcare operations depend on timely communication and clean task ownership. The CRM can connect patient inquiries, appointment teams, field staff, and billing updates in one controlled view.",
      focusAreas: [
        "Appointment scheduling and reminders",
        "Patient inquiry routing",
        "Follow-up tasks for care teams",
        "Secure communication history",
      ],
      modules: ["Appointment desk", "Patient timeline", "Care team queue", "Billing follow-up tracker"],
      workflow: ["Inquiry", "Appointment", "Care coordination", "Billing", "Follow-up"],
    },
  },
  {
    name: "Real Estate",
    tag: "Lead conversion and site visits",
    description:
      "Manage inquiries, broker relationships, visit scheduling, document exchange, and sales progression from one CRM dashboard.",
    outcomes: ["Lead source clarity", "Site visit scheduling", "Broker collaboration"],
    metric: "31%",
    metricLabel: "higher conversion lift",
    detail: {
      headline: "CRM flow for real estate leads, site visits, and sales closure.",
      overview:
        "Real estate teams need fast lead response, clear project interest, visit coordination, broker accountability, and document tracking. A CRM turns scattered conversations into a visible sales path.",
      focusAreas: [
        "Lead source and project interest tracking",
        "Site visit scheduling",
        "Broker and channel partner activity",
        "Document and booking stage visibility",
      ],
      modules: ["Property lead pipeline", "Visit calendar", "Broker workspace", "Booking tracker"],
      workflow: ["Inquiry", "Qualification", "Site visit", "Negotiation", "Booking"],
    },
  },
  {
    name: "Retail",
    tag: "Customer lifecycle and loyalty",
    description:
      "Track customer behavior across stores, campaigns, support channels, and repeat-purchase workflows with cleaner reporting.",
    outcomes: ["Campaign segmentation", "Store-wise reporting", "Retention automation"],
    metric: "18%",
    metricLabel: "better repeat sales",
    detail: {
      headline: "CRM tools for customer retention, campaign clarity, and store reporting.",
      overview:
        "Retail businesses need repeat customer visibility across stores, campaigns, support interactions, and purchase journeys. A CRM helps teams personalize outreach and measure what brings customers back.",
      focusAreas: [
        "Customer segmentation",
        "Store-wise sales and support reporting",
        "Campaign response tracking",
        "Loyalty and repeat purchase automation",
      ],
      modules: ["Customer profile", "Campaign manager", "Store reporting", "Loyalty workflow"],
      workflow: ["Visit", "Purchase", "Feedback", "Campaign", "Repeat sale"],
    },
  },
  {
    name: "Hospitality",
    tag: "Guest journey management",
    description:
      "Organize reservations, guest communication, upsell opportunities, issue logging, and post-stay nurture across properties.",
    outcomes: ["Central reservation visibility", "Guest communication logs", "Service recovery workflows"],
    metric: "42%",
    metricLabel: "faster guest resolution",
    detail: {
      headline: "CRM experience for reservations, guest service, and post-stay nurture.",
      overview:
        "Hospitality teams need every guest interaction to be accessible across reservations, front desk, service teams, and marketing. A CRM keeps the guest journey consistent before, during, and after the stay.",
      focusAreas: [
        "Reservation and guest request visibility",
        "Upsell and package follow-up",
        "Issue logging and service recovery",
        "Post-stay feedback and nurture",
      ],
      modules: ["Guest profile", "Reservation tracker", "Service desk", "Feedback workflow"],
      workflow: ["Reservation", "Pre-arrival", "Stay", "Issue resolution", "Post-stay nurture"],
    },
  },
  {
    name: "Finance and Insurance",
    tag: "Policy, claims, and advisory flow",
    description:
      "Coordinate policy inquiries, renewals, advisory follow-ups, customer documents, claims stages, and compliance-ready communication logs.",
    outcomes: ["Renewal reminders", "Claim stage tracking", "Advisor activity reports"],
    metric: "24%",
    metricLabel: "more renewal control",
    detail: {
      headline: "CRM clarity for policies, renewals, claims, and advisory follow-ups.",
      overview:
        "Finance and insurance teams need controlled communication, renewal discipline, document tracking, and advisor accountability. A CRM keeps sensitive customer workflows organized and auditable.",
      focusAreas: [
        "Policy inquiry and renewal tracking",
        "Claims stage visibility",
        "Advisor activity and customer notes",
        "Document collection reminders",
      ],
      modules: ["Renewal desk", "Claims pipeline", "Advisor dashboard", "Document tracker"],
      workflow: ["Inquiry", "Assessment", "Documentation", "Policy or claim", "Renewal"],
    },
  },
  {
    name: "Logistics",
    tag: "Fleet, dispatch, and customer updates",
    description:
      "Track shipment requests, fleet coordination, delivery updates, account relationships, and exception handling across branches.",
    outcomes: ["Dispatch visibility", "Delivery follow-up", "Branch-wise reporting"],
    metric: "35%",
    metricLabel: "faster issue closure",
    detail: {
      headline: "CRM coordination for shipment requests, dispatch, and exception handling.",
      overview:
        "Logistics teams need reliable updates across sales, operations, dispatch, branches, and customers. A CRM helps account teams see shipment status and resolve exceptions faster.",
      focusAreas: [
        "Shipment request intake",
        "Dispatch coordination",
        "Customer update history",
        "Branch-wise exception reporting",
      ],
      modules: ["Shipment desk", "Dispatch board", "Customer update log", "Exception tracker"],
      workflow: ["Request", "Dispatch", "In transit", "Exception", "Delivery follow-up"],
    },
  },
  {
    name: "Construction",
    tag: "Projects and vendor coordination",
    description:
      "Manage project leads, site updates, vendor communication, material requests, approvals, and client handovers from one workspace.",
    outcomes: ["Project pipeline clarity", "Vendor task tracking", "Approval workflows"],
    metric: "21%",
    metricLabel: "less coordination delay",
    detail: {
      headline: "CRM workflows for project leads, approvals, vendors, and handovers.",
      overview:
        "Construction work involves moving parts across sites, vendors, materials, approvals, and clients. A CRM creates a practical operating view for project and relationship follow-through.",
      focusAreas: [
        "Project lead and opportunity tracking",
        "Vendor and material request coordination",
        "Client update history",
        "Site approval and handover workflows",
      ],
      modules: ["Project pipeline", "Vendor tracker", "Approval workflow", "Client handover desk"],
      workflow: ["Lead", "Estimate", "Approval", "Execution", "Handover"],
    },
  },
  {
    name: "IT and SaaS",
    tag: "Subscriptions and support growth",
    description:
      "Bring demos, onboarding, subscription renewals, account health, support tickets, and expansion opportunities into a single customer view.",
    outcomes: ["Trial-to-paid tracking", "Renewal visibility", "Support handoff logs"],
    metric: "29%",
    metricLabel: "higher account retention",
    detail: {
      headline: "CRM lifecycle for demos, onboarding, renewals, support, and expansion.",
      overview:
        "IT and SaaS teams need one customer record across sales, onboarding, support, renewal, and growth. A CRM helps teams protect account health and prevent handoff gaps.",
      focusAreas: [
        "Demo and trial pipeline",
        "Onboarding task visibility",
        "Renewal and expansion alerts",
        "Support handoff and account health tracking",
      ],
      modules: ["Demo pipeline", "Onboarding board", "Renewal dashboard", "Account health view"],
      workflow: ["Demo", "Trial", "Onboarding", "Adoption", "Renewal"],
    },
  },
  {
    name: "Professional Services",
    tag: "Client work and relationship depth",
    description:
      "Organize client inquiries, proposals, engagements, recurring follow-ups, service delivery notes, and revenue forecasts.",
    outcomes: ["Proposal tracking", "Client history timeline", "Revenue forecasting"],
    metric: "2.1x",
    metricLabel: "better follow-up rhythm",
    detail: {
      headline: "CRM process for proposals, client delivery, and recurring relationship work.",
      overview:
        "Professional service teams win by following up well and keeping client context clear. A CRM connects proposals, delivery notes, account ownership, and revenue forecasts.",
      focusAreas: [
        "Inquiry and proposal tracking",
        "Client relationship timeline",
        "Service delivery notes",
        "Recurring follow-up and revenue forecasting",
      ],
      modules: ["Proposal pipeline", "Client timeline", "Engagement tracker", "Forecast dashboard"],
      workflow: ["Inquiry", "Proposal", "Engagement", "Delivery", "Renewal or upsell"],
    },
  },
  {
    name: "Automotive",
    tag: "Showroom and service lifecycle",
    description:
      "Connect vehicle inquiries, test drives, finance coordination, service reminders, accessory sales, and customer feedback.",
    outcomes: ["Test drive scheduling", "Service reminders", "Lead source reports"],
    metric: "33%",
    metricLabel: "more lead conversion",
    detail: {
      headline: "CRM support for showroom leads, test drives, service, and customer loyalty.",
      overview:
        "Automotive businesses need clean lead handling across showroom, finance, accessories, service, and customer feedback. A CRM keeps every stage visible from inquiry to repeat service.",
      focusAreas: [
        "Vehicle inquiry and lead source tracking",
        "Test drive scheduling",
        "Finance and accessory follow-up",
        "Service reminders and feedback",
      ],
      modules: ["Showroom pipeline", "Test drive calendar", "Finance follow-up", "Service reminder desk"],
      workflow: ["Inquiry", "Test drive", "Finance", "Delivery", "Service reminder"],
    },
  },
];

export function getIndustrySlug(industry) {
  return slugify(industry?.name || "");
}

export function getIndustryBySlug(slug) {
  return industries.find((industry) => getIndustrySlug(industry) === slug) || null;
}

export function getRelatedIndustries(slug, limit = 3) {
  return industries.filter((industry) => getIndustrySlug(industry) !== slug).slice(0, limit);
}
