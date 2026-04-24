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
    <main className="min-h-screen bg-[#0b1220]">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-4 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,195,142,0.1),transparent_24%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              Industries
            </h1>
            <nav className="flex text-[11px] uppercase tracking-widest text-white/50 font-bold">
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

      <section className="relative px-6 py-12 pb-10 lg:pr-20">
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
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.name} delay={index * 90}>
                <Link
                  href={`/industries/${getIndustrySlug(industry)}`}
                  className="group/card flex h-full min-h-[380px] cursor-pointer flex-col rounded-[1rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-1 hover:border-[#7ef7c4]/35 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef7c4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220] active:scale-[0.99]"
                  aria-label={`View details for ${industry.name}`}
                >
                  <article className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#8be9ff]">{industry.tag}</p>
                      <h3 className="mt-2 text-2xl font-bold text-white">{industry.name}</h3>
                    </div>
                    <div className="rounded-xl border border-[#7ef7c4]/20 bg-[#0d1b26] px-3 py-2 text-right">
                      <p className="text-2xl font-bold text-white">{industry.metric}</p>
                      <p className="mt-0.5 text-[10px] uppercase tracking-[0.2em] text-slate-400">{industry.metricLabel}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-300">{industry.description}</p>

                  <div className="mt-4 space-y-2">
                    {industry.outcomes.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-[13px] text-slate-300">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#7ef7c4]/20 bg-[#7ef7c4]/10 text-[#7ef7c4]">
                          <span className="h-1 w-1 rounded-full bg-current" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-5 flex justify-center">
                    <span className="inline-flex items-center justify-center gap-1.5 rounded-full border border-[#7ef7c4]/20 bg-[#7ef7c4]/8 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#7ef7c4] transition group-hover/card:border-[#8be9ff]/35 group-hover/card:bg-[#7ef7c4]/12 group-hover/card:text-[#8be9ff] active:scale-95">
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

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[1.5rem] border border-white/10 bg-[#08101d] p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">Deployment Strategy</p>
            <h2 className="mt-3 text-2xl font-black tracking-tight text-white md:text-3xl">
              Engineered for Industry-Specific Scale.
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A professional CRM isn't just a database; it's an operating layer that mirrors your actual approval chains, communication habits, and reporting requirements.
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
                <div className="rounded-[1rem] border border-white/10 bg-white/[0.03] p-4">
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
