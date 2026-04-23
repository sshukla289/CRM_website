import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const termsSections = [
  {
    id: "01",
    title: "Acceptance of Terms",
    description:
      "By accessing this website, requesting a demo, downloading CRM materials, or engaging Triostack for CRM Suite discussions, implementation, onboarding, support, or advisory services, you agree to these Terms & Conditions and to all applicable laws, regulations, and contractual obligations connected with that engagement.",
  },
  {
    id: "02",
    title: "Scope of Website Information",
    description:
      "The website is intended to provide general information about CRM Suite capabilities, implementation approach, pricing direction, support options, and related business services. Website content is informational only and does not by itself create a binding project commitment, warranty, or guaranteed delivery scope.",
  },
  {
    id: "03",
    title: "CRM Proposals, Contracts, and Project Scope",
    description:
      "Any CRM rollout, configuration, migration, customization, training, managed support, or integration work is governed by approved proposals, statements of work, service orders, master service agreements, or other written commercial terms. If there is any difference between this website and a signed customer agreement, the signed agreement will control.",
  },
  {
    id: "04",
    title: "Account, Access, and Authorized Use",
    description:
      "If access is provided to CRM Suite, sandbox environments, documentation, or support portals, your organization is responsible for maintaining the confidentiality of login credentials, limiting access to authorized personnel, and ensuring use of the platform only for lawful business purposes. You must not attempt unauthorized access, reverse engineering, disruption, or misuse of any Triostack system.",
  },
  {
    id: "05",
    title: "Customer Responsibilities",
    description:
      "Customers are responsible for providing accurate business requirements, timely feedback, lawful source data, authorized user lists, and internal approvals required for implementation. Delays in dependencies, incomplete information, or changes in scope may affect timelines, deliverables, training plans, reporting outputs, and support commitments.",
  },
  {
    id: "06",
    title: "Pricing, Billing, and Commercial Terms",
    description:
      "Pricing shown on the website or shared during initial discussions is indicative unless expressly confirmed in a written commercial document. Subscription fees, implementation charges, customization costs, taxes, payment milestones, renewal terms, and change-request charges are governed by the final approved quote, order form, invoice, or contract applicable to the CRM engagement.",
  },
  {
    id: "07",
    title: "Data, Compliance, and Lawful Use",
    description:
      "You may use CRM Suite only for lawful business operations and in compliance with applicable privacy, labour, tax, communications, security, and industry-specific regulations. You are responsible for ensuring that data uploaded to the platform, including lead records, customer information, call notes, invoices, and workflow documents, is collected and processed with appropriate legal authority.",
  },
  {
    id: "08",
    title: "Intellectual Property",
    description:
      "All website branding, visual assets, written material, software logic, workflows, dashboards, and platform documentation remain the property of Triostack or its licensors unless otherwise agreed in writing. No part of the website or CRM Suite may be copied, distributed, modified, republished, or used to create competing products without prior written permission.",
  },
  {
    id: "09",
    title: "Third-Party Services and Integrations",
    description:
      "CRM projects may involve integration with third-party tools such as telephony, messaging, payment services, analytics platforms, GST systems, cloud hosting, email providers, or mapping services. Triostack is not responsible for outages, policy changes, access restrictions, pricing revisions, or performance issues originating from third-party systems outside our direct control.",
  },
  {
    id: "10",
    title: "Service Availability and Support",
    description:
      "We aim to maintain reliable website and service availability, but uninterrupted access cannot be guaranteed at all times. Maintenance windows, upgrades, security interventions, infrastructure incidents, internet failures, third-party outages, or force majeure events may affect availability, response times, or access to CRM functionality, and support commitments are subject to the service terms agreed with the customer.",
  },
  {
    id: "11",
    title: "Limitation of Liability",
    description:
      "To the maximum extent permitted by law, Triostack will not be liable for indirect, incidental, special, consequential, reputational, or loss-of-profit damages arising from website use, business interruption, data issues, integration failures, or reliance on general informational content. Liability for paid CRM services, where applicable, will be governed by the specific limitation terms contained in the executed customer agreement.",
  },
  {
    id: "12",
    title: "Suspension, Termination, and Changes",
    description:
      "We may suspend or restrict access where necessary to address security concerns, legal obligations, non-payment, misuse, policy violations, or threats to platform integrity. We may also update these Terms & Conditions to reflect changes in services, business practices, legal requirements, or product capabilities, and continued use after an update constitutes acceptance of the revised terms from the effective date.",
  },
  {
    id: "13",
    title: "Contact for Legal and CRM Queries",
    description:
      "For questions about these terms, CRM proposals, onboarding obligations, subscriptions, support scope, or legal usage of CRM Suite, you may contact Triostack at hello@crmwebsite.com or call +91 92119 41924. We will review business and legal queries through the appropriate team based on the nature of your request.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#0b1220]">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-10 pt-28 md:pb-14 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,195,142,0.16),transparent_25%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.16),transparent_28%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 shadow-[0_32px_100px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0">
              <Image
                src="/img.png"
                alt="CRM Suite terms and conditions banner"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,15,27,0.72),rgba(8,24,38,0.5)),linear-gradient(135deg,rgba(20,195,142,0.32),rgba(9,16,30,0.35)_55%,rgba(56,189,248,0.28))]" />

            <div className="relative flex min-h-[320px] items-center justify-center px-8 py-16 text-center md:min-h-[390px] md:px-16">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#8ef9d0]">
                  Legal
                </p>
                <h1 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
                  Terms &amp; Conditions
                </h1>
                <div className="mt-6 flex items-center justify-center gap-3 text-base text-[#c7fff0] md:text-[1.35rem]">
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                  <span className="text-white/50">/</span>
                  <span>Terms &amp; Conditions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div>
              <div className="max-w-4xl">
                <p className="text-sm font-semibold uppercase tracking-[0.42em] text-[#15d1a3]">
                  [ Terms &amp; Conditions ]
                </p>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                  Clear Terms for a Trusted CRM Partnership
                </h2>
                <p className="mt-6 text-lg leading-9 text-slate-300 md:text-[1.42rem]">
                  These terms outline the rules for using the CRM Suite website,
                  reviewing product information, requesting demos, and engaging
                  Triostack for CRM implementation, onboarding, support, and related
                  business services. By accessing the site or using our services, you
                  agree to the terms below.
                </p>
              </div>

              <div className="mt-14 space-y-12">
                {termsSections.map((section) => (
                  <article key={section.id} className="max-w-6xl">
                    <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-[2.25rem]">
                      {section.id}. {section.title}
                    </h3>
                    <p className="mt-5 text-lg leading-9 text-slate-300 md:text-[1.28rem]">
                      {section.description}
                    </p>
                    {section.id === "13" ? (
                      <p className="mt-5 text-base text-slate-500 md:text-lg">
                        Last updated on April 23, 2026.
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>

              <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(245,248,255,0.92))] px-6 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.26)] md:px-9">
                <div className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left">
                  <a
                    href="/crm-brochure"
                    className="inline-flex items-center justify-center rounded-full bg-[#09c38c] px-8 py-4 text-base font-semibold text-[#06131d] transition hover:brightness-105"
                  >
                    Download CRM Brochure
                  </a>

                  <p className="text-xl font-medium tracking-[-0.03em] text-[#071321] md:text-[1.75rem]">
                    Need clarity before your CRM rollout starts?
                  </p>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">
                  Terms Contacts
                </p>
                <div className="mt-6 space-y-5 text-sm text-slate-300">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                      Business Email
                    </p>
                    <a
                      href="mailto:hello@crmwebsite.com"
                      className="mt-2 block text-base transition hover:text-white"
                    >
                      hello@crmwebsite.com
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                      Sales Desk
                    </p>
                    <a
                      href="tel:+919211941924"
                      className="mt-2 block text-base transition hover:text-white"
                    >
                      +91 92119 41924
                    </a>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                      Office
                    </p>
                    <p className="mt-2 text-base leading-7">
                      Sector 63, Noida
                      <br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[#0e1727] p-5">
                  <p className="text-sm font-semibold text-white">
                    CRM terms questions?
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Reach out for help with proposals, onboarding scope, subscription
                    terms, service responsibilities, or platform usage conditions.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

    </main>
  );
}
