import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";
import { getIndustrySlug, industries } from "@/lib/industries";

const deliveryModel = [
  {
    title: "Strategic Workflow Audit",
    text: "We analyze cross-departmental handoffs, approval chains, and operational bottlenecks to define your industry's specific digital backbone.",
  },
  {
    title: "Precision Module Configuration",
    text: "Deployment of purpose-built modules for coordination, inventory, or admissions, ensuring the system reflects your exact business logic.",
  },
  {
    title: "Operational Adoption & Growth",
    text: "Rapid team adoption through role-based interface simplification and performance-focused training for both field and desk staff.",
  },
];

const capabilityPillars = [
  "Advanced Lead Response Automation",
  "Unified Cross-Branch Visibility",
  "Integrated Compliance & GST Logic",
  "Automated Outcome Forecasting",
  "Field-Team Coordination Portals",
  "Executive Performance Analytics",
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 pb-4 pt-32">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#00b274]/10 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter">
              Industries
            </h1>
            <nav className="flex text-[11px] uppercase tracking-widest text-slate-500 font-bold">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-[#00b274] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <span className="opacity-30">/</span>
                </li>
                <li className="text-[#00b274]">Industries</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="relative bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#eef6f4_100%)] px-6 py-12 pb-10 lg:pr-20">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#00b274]/10 blur-[120px] pointer-events-none" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.035)_1px,transparent_1px)] bg-[size:54px_54px] opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#00b274]">Where we fit best</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Sector-specific operating layers
              </h2>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.name} delay={index * 90}>
                <Link
                  href={`/industries/${getIndustrySlug(industry)}`}
                  className="group/card flex h-full min-h-[380px] cursor-pointer flex-col rounded-[1rem] border border-slate-200/80 bg-white/90 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.09)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#00b274]/30 hover:bg-white hover:shadow-[0_28px_75px_rgba(0,178,116,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b274] focus-visible:ring-offset-2 focus-visible:ring-offset-white active:scale-[0.99]"
                  aria-label={`View details for ${industry.name}`}
                >
                  <article className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#00b274]">{industry.tag}</p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-950">{industry.name}</h3>
                    </div>
                    <div className="rounded-xl border border-[#00b274]/15 bg-[#f8fffc] px-3 py-2 text-right shadow-[0_16px_35px_rgba(15,23,42,0.06)]">
                      <p className="text-2xl font-bold text-slate-950">{industry.metric}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-500">{industry.metricLabel}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600">{industry.description}</p>

                  <div className="mt-4 space-y-2">
                    {industry.outcomes.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-[13px] text-slate-700">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#00b274]/20 bg-[#00b274]/10 text-[#00b274]">
                          <span className="h-1 w-1 rounded-full bg-current" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-5 flex justify-center">
                    <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#00b274]/20 bg-[#00b274]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#00b274] transition group-hover/card:border-[#00b274]/35 group-hover/card:bg-[#00b274] group-hover/card:text-white active:scale-95">
                      View Details
                      <span aria-hidden="true" className="transition-transform group-hover/card:translate-x-1">
                        -&gt;
                      </span>
                    </span>
                  </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.5rem] border border-slate-200 bg-white/95 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.1)] md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#00b274]">Deployment Strategy</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Engineered for Industry-Specific Scale.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              A professional CRM isn't just a database; it's an operating layer that mirrors your actual approval chains, communication habits, and reporting requirements.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {capabilityPillars.map((item) => (
                <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-[11px] text-slate-600">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {deliveryModel.map((step, index) => (
              <Reveal key={step.title} delay={index * 100}>
                <div className="rounded-[1rem] border border-slate-200 bg-[#f8fbff] p-4 shadow-[0_16px_35px_rgba(15,23,42,0.06)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7ef7c4] to-[#38bdf8] text-xs font-bold text-[#04111c]">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">{step.title}</h3>
                  </div>
                  <p className="mt-3 text-[13px] leading-6 text-slate-600">{step.text}</p>
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
