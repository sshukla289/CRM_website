import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";
import { getIndustrySlug, industries } from "@/lib/industries";

const deliveryModel = [
  {
    title: "Discovery by workflow",
    text: "We map how leads, approvals, invoices, teams, and customer interactions really move before recommending the system shape.",
  },
  {
    title: "Industry-fit modules",
    text: "Dashboards, automations, forms, permissions, and reports are configured around the specific language and pressure points of your business.",
  },
  {
    title: "Adoption with clarity",
    text: "Teams get role-based screens and practical operations training so the CRM becomes useful in the day-to-day, not just in demos.",
  },
];

const capabilityPillars = [
  "Custom pipelines for each business unit",
  "Role-based dashboards and approvals",
  "GST-aware invoicing and reporting flows",
  "Automated reminders across teams and customers",
  "Branch and territory-level visibility",
  "Executive analytics for growth decisions",
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#0b1220]">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-8 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,195,142,0.1),transparent_24%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Industries
            </h1>
            <nav className="flex text-[11px] font-medium text-white/70 uppercase tracking-widest">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li className="text-white">Industries</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#00b274]/6 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-500/6 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8be9ff]">Where we fit best</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-4xl">
                Sector-specific operating layers
              </h2>
            </div>
            <p className="max-w-xl text-xs leading-6 text-slate-400 md:text-sm">
              Each implementation balances commercial speed, compliance needs, team structure, and reporting expectations.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.name} delay={index * 90}>
                <article className="flex h-full flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:border-[#7ef7c4]/25 hover:bg-white/[0.06]">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8be9ff]">{industry.tag}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{industry.name}</h3>
                    </div>
                    <div className="rounded-xl border border-[#7ef7c4]/20 bg-[#0d1b26] px-3 py-2 text-right">
                      <p className="text-xl font-semibold text-white">{industry.metric}</p>
                      <p className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-slate-400">{industry.metricLabel}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-[13px] leading-6 text-slate-300">{industry.description}</p>

                  <div className="mt-6 space-y-2.5">
                    {industry.outcomes.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-xs text-slate-300">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#7ef7c4]/20 bg-[#7ef7c4]/10 text-[#7ef7c4]">
                          <span className="h-1 w-1 rounded-full bg-current" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/industries/${getIndustrySlug(industry)}`}
                    className="group mt-auto inline-flex w-fit items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.18em] text-[#7ef7c4] transition hover:text-[#8be9ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef7c4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220]"
                    aria-label={`View details for ${industry.name}`}
                  >
                    View Details
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      -&gt;
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[1.75rem] border border-white/10 bg-[#08101d] p-7 md:p-9 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">Delivery model</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              We design around workflows, teams, and decisions.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The best CRM for an industry is usually the one that reflects its actual approval chains, communication habits, and reporting pressure.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {capabilityPillars.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {deliveryModel.map((step, index) => (
              <Reveal key={step.title} delay={index * 100}>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7ef7c4] to-[#38bdf8] text-xs font-bold text-[#04111c]">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-[13px] leading-6 text-slate-400">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
