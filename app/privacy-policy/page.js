import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const policySections = [
  {
    id: "01",
    title: "What Information We Collect",
    description:
      "We collect business contact details such as name, work email, phone number, company name, role, and project requirements when you request a demo, consultation, pricing discussion, or support follow-up. In CRM-led engagements, we may also process lead, customer, ticket, billing, and workflow data that your team chooses to manage inside the platform.",
  },
  {
    id: "02",
    title: "Legal Basis for Processing",
    description:
      "We process personal and operational data to respond to your requests, deliver CRM services, maintain contractual commitments, comply with legal obligations, and support legitimate business interests such as security, reliability, product improvement, and fraud prevention.",
  },
  {
    id: "03",
    title: "How We Use Your Information",
    description:
      "Your information is used to schedule consultations, deliver product demonstrations, configure CRM workflows, onboard teams, provide customer support, improve platform performance, send service-related communication, and share relevant updates when you have requested or consented to them.",
  },
  {
    id: "04",
    title: "CRM Data Processed Through the Platform",
    description:
      "When your organization uses CRM Suite, the platform may store records connected to sales pipelines, customer conversations, branch operations, approvals, invoices, support activity, and reporting dashboards. This data is handled only for the purpose of providing the agreed CRM functionality and authorized business workflows.",
  },
  {
    id: "05",
    title: "Automatically Collected Technical Data",
    description:
      "When you visit our website or use connected services, we may collect IP address, device type, browser details, operating system, referral source, page interaction, session timing, and diagnostic logs. We use this information for analytics, performance monitoring, troubleshooting, and security protection.",
  },
  {
    id: "06",
    title: "Cookies and Analytics",
    description:
      "We may use cookies and similar technologies to remember preferences, understand site usage, measure campaign performance, and improve navigation quality. Where required, cookie-based tracking is managed with consent, and you may adjust browser settings to limit or disable non-essential cookies.",
  },
  {
    id: "07",
    title: "Data Sharing and Service Providers",
    description:
      "We do not sell personal data. Information may be shared with carefully selected infrastructure, hosting, communications, analytics, payment, or implementation partners only when needed to operate the website, deliver CRM services, or comply with lawful obligations, and such sharing is limited by confidentiality and security expectations.",
  },
  {
    id: "08",
    title: "Data Retention",
    description:
      "We retain information only for as long as needed to fulfill the purpose for which it was collected, maintain business records, resolve disputes, support active customer relationships, or satisfy legal, tax, audit, and contractual requirements. Retention periods may vary depending on the type of CRM engagement and applicable regulations.",
  },
  {
    id: "09",
    title: "Security Measures",
    description:
      "We apply reasonable administrative, technical, and organizational safeguards to protect data from unauthorized access, misuse, alteration, disclosure, or loss. These measures may include role-based access, process controls, monitoring, restricted administrative access, and secure infrastructure practices appropriate to the nature of the service.",
  },
  {
    id: "10",
    title: "Your Rights",
    description:
      "Subject to applicable law, you may request access to your personal data, correction of inaccurate information, deletion of data where appropriate, restriction of certain processing, or withdrawal of consent for optional communications. We aim to review and respond to privacy requests within a reasonable time.",
  },
  {
    id: "11",
    title: "Children's Privacy",
    description:
      "CRM Suite and this website are intended for business and professional use. Our services are not directed to children under 18 years of age, and we do not knowingly collect personal data from children.",
  },
  {
    id: "12",
    title: "Grievance Redressal and Contact",
    description:
      "If you have questions, complaints, or privacy-related requests regarding website submissions, CRM records, support interactions, or data handling practices, you may contact our team at hello@crmwebsite.com or call +91 92119 41924. We will review concerns and respond in line with applicable law and service commitments.",
  },
  {
    id: "13",
    title: "Policy Updates",
    description:
      "We may update this Privacy Policy from time to time to reflect changes in business practices, product capabilities, legal obligations, or security requirements. Continued use of our website or services after an update means the revised policy will apply from its effective date.",
  },
];

export default function PrivacyPolicyPage() {
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
                alt="CRM Suite office workspace"
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
                  Privacy Policy
                </h1>
                <div className="mt-6 flex items-center justify-center gap-3 text-base text-[#c7fff0] md:text-[1.35rem]">
                  <Link href="/" className="transition hover:text-white">
                    Home
                  </Link>
                  <span className="text-white/50">/</span>
                  <span>Privacy Policy</span>
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
                  [ Privacy Policy ]
                </p>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                  Our Commitment to Your Privacy
                </h2>
                <p className="mt-6 text-lg leading-9 text-slate-300 md:text-[1.42rem]">
                  CRM Suite, operated by Triostack, is committed to protecting the
                  personal, operational, and customer-related information shared through
                  our website and CRM services. This policy explains how we collect,
                  use, secure, and manage data in connection with demos, consultations,
                  sales conversations, onboarding, support, and platform usage.
                </p>
              </div>

              <div className="mt-14 space-y-12">
                {policySections.map((section) => (
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
                    Ready to discuss your CRM rollout?
                  </p>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">
                  Privacy Contacts
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
                    CRM data questions?
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    Reach out for help with demo submissions, onboarding records,
                    support interactions, or customer data handled through CRM Suite.
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
