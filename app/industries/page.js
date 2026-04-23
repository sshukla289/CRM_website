import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const industries = [
  {
    name: "Manufacturing",
    tag: "Operations and dealer flow",
    description:
      "Connect procurement, stock movement, dealer requests, service schedules, and dispatch visibility in one operating layer.",
    outcomes: ["Live inventory visibility", "Faster dispatch decisions", "Dealer request tracking"],
    metric: "28%",
    metricLabel: "less order delay",
  },
  {
    name: "Healthcare",
    tag: "Patient and care coordination",
    description:
      "Bring appointments, patient communication, field outreach, billing workflows, and follow-up tasks into a secure customer system.",
    outcomes: ["Appointment automation", "Care-team coordination", "Fewer missed follow-ups"],
    metric: "2.4x",
    metricLabel: "more response speed",
  },
  {
    name: "Real Estate",
    tag: "Lead conversion and site visits",
    description:
      "Manage inquiries, broker relationships, visit scheduling, document exchange, and sales progression from one CRM dashboard.",
    outcomes: ["Lead source clarity", "Site visit scheduling", "Broker collaboration"],
    metric: "31%",
    metricLabel: "higher conversion lift",
  },
  {
    name: "Retail",
    tag: "Customer lifecycle and loyalty",
    description:
      "Track customer behavior across stores, campaigns, support channels, and repeat-purchase workflows with cleaner reporting.",
    outcomes: ["Campaign segmentation", "Store-wise reporting", "Retention automation"],
    metric: "18%",
    metricLabel: "better repeat sales",
  },
  {
    name: "Hospitality",
    tag: "Guest journey management",
    description:
      "Organize reservations, guest communication, upsell opportunities, issue logging, and post-stay nurture across properties.",
    outcomes: ["Central reservation visibility", "Guest communication logs", "Service recovery workflows"],
    metric: "42%",
    metricLabel: "faster guest resolution",
  },
  {
    name: "Education",
    tag: "Admissions and engagement",
    description:
      "Unify student inquiries, admission counseling, fee communication, and outreach journeys for institutes and training teams.",
    outcomes: ["Inquiry funnel tracking", "Counselor assignment", "Enrollment communication"],
    metric: "3x",
    metricLabel: "clearer pipeline visibility",
  },
];

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

      <section className="relative overflow-hidden px-6 pb-10 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,195,142,0.1),transparent_24%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.1),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Industries
            </h1>
            <nav className="flex text-sm font-medium text-white/70">
              <ol className="flex items-center gap-2">
                <li>
                  <a href="/" className="transition-colors hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <span>&gt;</span>
                </li>
                <li className="text-white">Industries</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#00b274]/6 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-500/6 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">Where we fit best</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Sector-specific operating layers
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              Each implementation balances commercial speed, compliance needs, team structure, and reporting expectations.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.name} delay={index * 90}>
                <article className="h-full rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:border-[#7ef7c4]/25 hover:bg-white/[0.06]">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8be9ff]">{industry.tag}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{industry.name}</h3>
                    </div>
                    <div className="rounded-2xl border border-[#7ef7c4]/20 bg-[#0d1b26] px-4 py-3 text-right">
                      <p className="text-2xl font-semibold text-white">{industry.metric}</p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-slate-400">{industry.metricLabel}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-sm leading-7 text-slate-300">{industry.description}</p>

                  <div className="mt-8 space-y-3">
                    {industry.outcomes.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#7ef7c4]/20 bg-[#7ef7c4]/10 text-[#7ef7c4]">
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-[#08101d] p-8 md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">Delivery model</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              We design around workflows, teams, and decisions.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-400">
              The best CRM for an industry is usually the one that reflects its actual approval chains, communication habits, and reporting pressure.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {capabilityPillars.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            {deliveryModel.map((step, index) => (
              <Reveal key={step.title} delay={index * 100}>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#7ef7c4] to-[#38bdf8] text-sm font-bold text-[#04111c]">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
