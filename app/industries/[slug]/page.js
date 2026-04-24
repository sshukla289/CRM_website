import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";
import {
  getIndustryBySlug,
  getIndustrySlug,
  getRelatedIndustries,
  industries,
} from "@/lib/industries";

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: getIndustrySlug(industry),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: "Industry CRM Solutions | Trio-CRM",
      description: "Explore industry-specific CRM workflows and operating layers from Trio-CRM.",
    };
  }

  return {
    title: `${industry.name} CRM Solutions | Trio-CRM`,
    description: industry.detail.overview,
    openGraph: {
      title: `${industry.name} CRM Solutions | Trio-CRM`,
      description: industry.detail.overview,
      url: `https://triostack.in/industries/${slug}`,
      type: "website",
    },
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const relatedIndustries = getRelatedIndustries(slug);

  return (
    <main className="min-h-screen bg-[#0b1220]">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-14 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,195,142,0.11),transparent_25%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_30%)]" />
        <div className="absolute bottom-0 left-1/2 h-px w-full max-w-7xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative mx-auto max-w-7xl">
          <nav className="mb-8 flex text-[11px] font-medium uppercase tracking-widest text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li>
                <Link href="/industries" className="transition-colors hover:text-white">
                  Industries
                </Link>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="text-white">{industry.name}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <Link
                href="/industries"
                className="mb-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400 transition hover:text-[#7ef7c4]"
              >
                <span aria-hidden="true">&lt;-</span>
                Back to industries
              </Link>

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8be9ff]">
                {industry.tag}
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-5xl">
                {industry.name} CRM Solutions
              </h1>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 md:text-base">
                {industry.detail.headline}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[#7ef7c4]/20 bg-white/[0.04] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                Operating impact
              </p>
              <p className="mt-4 text-5xl font-bold text-white">{industry.metric}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-[#7ef7c4]">
                {industry.metricLabel}
              </p>
              <p className="mt-5 text-[13px] leading-6 text-slate-400">{industry.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-14">
        <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-[#00b274]/6 blur-[120px]" />
        <div className="absolute right-0 bottom-8 h-72 w-72 rounded-full bg-sky-500/6 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <article className="h-full rounded-[1.5rem] border border-white/10 bg-[#08101d] p-7 md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">
                Industry view
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Built around the way {industry.name.toLowerCase()} teams actually work.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-400">{industry.detail.overview}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {industry.outcomes.map((outcome) => (
                  <div key={outcome} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#7ef7c4]/20 bg-[#7ef7c4]/10 text-[#7ef7c4]">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    </span>
                    <p className="mt-3 text-sm font-semibold text-white">{outcome}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 md:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">
                CRM focus
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                What your system should handle
              </h2>

              <div className="mt-6 space-y-3">
                {industry.detail.focusAreas.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-[#0d1b26] p-4">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#7ef7c4]" />
                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">
              Delivery shape
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Modules and workflow path
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-lg font-semibold text-white">Useful modules</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {industry.detail.modules.map((module) => (
                  <div key={module} className="rounded-2xl border border-[#7ef7c4]/15 bg-[#7ef7c4]/5 px-4 py-3 text-sm font-medium text-slate-200">
                    {module}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-[#08101d] p-7">
              <h3 className="text-lg font-semibold text-white">Workflow path</h3>
              <div className="mt-6 grid gap-3 md:grid-cols-5">
                {industry.detail.workflow.map((step, index) => (
                  <div key={step} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7ef7c4]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-sm font-semibold leading-5 text-white">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-[#08101d] p-7 md:p-9">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">
                Explore more
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Related industries
              </h2>
            </div>
            <Link
              href="/industries"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#7ef7c4] transition hover:border-[#7ef7c4]/30 hover:bg-[#7ef7c4]/10"
            >
              View All
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedIndustries.map((relatedIndustry) => (
              <Link
                key={relatedIndustry.name}
                href={`/industries/${getIndustrySlug(relatedIndustry)}`}
                className="group rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#7ef7c4]/25 hover:bg-white/[0.06]"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8be9ff]">
                  {relatedIndustry.tag}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white transition group-hover:text-[#7ef7c4]">
                  {relatedIndustry.name}
                </h3>
                <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-slate-400">
                  {relatedIndustry.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
