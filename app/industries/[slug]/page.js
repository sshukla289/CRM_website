import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";
import GoBackButton from "@/components/GoBackButton";
import {
  getIndustryBySlug,
  getIndustrySeoTitle,
  getIndustrySlug,
  getRelatedIndustries,
  industries,
} from "@/lib/industries";

const HERO_IMAGE = "/img.png";

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

  const industrySeoTitle = getIndustrySeoTitle(industry);

  return {
    title: `${industrySeoTitle} | Trio-CRM`,
    description: industry.detail.overview,
    alternates: {
      canonical: `https://triostack.in/industries/${getIndustrySlug(industry)}`,
    },
    openGraph: {
      title: `${industrySeoTitle} | Trio-CRM`,
      description: industry.detail.overview,
      url: `https://triostack.in/industries/${getIndustrySlug(industry)}`,
      type: "website",
      images: [
        {
          url: HERO_IMAGE,
          width: 1200,
          height: 630,
          alt: industrySeoTitle,
        },
      ],
    },
  };
}

export default async function IndustryDetailPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }


  const industrySeoTitle = getIndustrySeoTitle(industry);

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Navbar />

      <section className="relative bg-[radial-gradient(circle_at_top_right,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-4 pb-6 pt-28 sm:px-6 md:pt-32">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[#00b274]/10 blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px] pointer-events-none" />
        <div className="mx-auto max-w-[1500px]">
          <div className="relative z-[250] mb-4 flex pointer-events-auto">
            <GoBackButton fallbackHref="/industries" />
          </div>

          <article className="relative isolate overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white/95 shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,178,116,0.08),transparent_70%)]" />
            
            <div className="relative z-10 grid gap-8 p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex flex-wrap items-center gap-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#00b274]/25 bg-[#00b274]/10 text-[8px] font-black uppercase tracking-[0.16em] text-[#00b274]">
                    CRM
                  </span>
                  <span className="inline-flex items-center gap-3 text-[8px] font-black uppercase tracking-[0.34em] text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00b274]" />
                    Industry Solutions
                  </span>
                </div>

                <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl leading-[1.1]">
                  {industrySeoTitle}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-lg font-medium">
                  {industry.detail.headline}
                </p>
              </div>

              <div className="relative">
                <div className="rounded-[1.25rem] border border-[#00b274]/20 bg-[#f8fffc] p-5 md:p-6 shadow-[0_22px_60px_rgba(15,23,42,0.09)] backdrop-blur-md">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#00b274]">Quick Inquiry</p>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">15-min discovery</p>
                    </div>
                    <h3 className="text-lg font-black text-slate-950 mb-2">Schedule a Targeted Demo</h3>
                    
                    <form className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Work Email" 
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-950 outline-none focus:border-[#00b274]/50 transition-all"
                        required
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <select className="bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-950 outline-none focus:border-[#00b274]/50 transition-all">
                          <option value="">Team Size</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="50+">50+</option>
                        </select>
                        <button 
                          type="submit"
                          className="group/btn relative overflow-hidden rounded-xl bg-[#00b274] px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:shadow-[0_12px_28px_rgba(0,178,116,0.24)] active:scale-[0.97]"
                        >
                          <span className="relative z-10">Get Demo</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="relative bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.12),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#eef6f4_100%)] px-4 pb-12 sm:px-6">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#00b274]/10 blur-[120px] pointer-events-none" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <article className="h-full rounded-[1.25rem] border border-slate-200 bg-white/95 p-5 md:p-7 shadow-[0_28px_80px_rgba(15,23,42,0.1)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-[#00b274]/50" />
                  <span className="text-[#00b274] text-[9px] font-bold uppercase tracking-[0.3em]">Operational Flow</span>
                </div>
                <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl mb-4">
                  {industry.name} Business Logic
                </h2>
                
                <div className="space-y-4">
                  <div className="text-slate-600 text-sm leading-relaxed border-l-2 border-[#00b274]/20 pl-4 md:text-base">
                    <p>{industry.detail.overview}</p>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-[#f8fbff] p-5">
                      <h4 className="text-[#00b274] text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Strategic CRM Impact</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-[15px] text-slate-700">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#00b274] shrink-0" />
                          <span><strong>Operational Accuracy:</strong> Reduces manual handoff errors by 40% through unified dashboards.</span>
                        </li>
                        <li className="flex items-start gap-3 text-[15px] text-slate-700">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#00b274] shrink-0" />
                          <span><strong>Decision Visibility:</strong> Live tracking of {industry.name.toLowerCase()} metrics for immediate leadership action.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-[#f8fbff] p-5">
                      <h4 className="text-[#00b274] text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Automation Benefits</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-[15px] text-slate-700">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#00b274] shrink-0" />
                          <span><strong>Response Speed:</strong> Automated routing ensures {industry.tag.toLowerCase()} leads are touched in minutes.</span>
                        </li>
                        <li className="flex items-start gap-3 text-[15px] text-slate-700">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#00b274] shrink-0" />
                          <span><strong>Scalability:</strong> Systems designed to handle 5x growth in {industry.name.toLowerCase()} operations.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#00b274]/20 bg-[#00b274]/5 p-5 group hover:bg-[#00b274]/8 transition-colors">
                      <p className="text-4xl font-black tracking-tight text-slate-950 mb-1">{industry.metric}</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#00b274]">
                        {industry.metricLabel}
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-[#f8fbff] p-5 flex flex-col justify-center">
                      <p className="text-slate-950 text-lg font-bold leading-tight tracking-tight text-center">Purpose-built for {industry.tag.toLowerCase()}</p>
                    </div>
                  </div>
                </div>

              </article>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={100}>
                <article className="rounded-[1.25rem] border border-slate-200 bg-white/95 p-6 md:p-7 shadow-[0_22px_60px_rgba(15,23,42,0.09)]">
                  <h3 className="text-lg font-bold text-slate-950 mb-6 flex items-center gap-3">
                    <span className="h-6 w-1 bg-[#00b274] rounded-full" />
                    Key Outcomes
                  </h3>
                  <div className="space-y-4">
                    {industry.outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-4 group">
                        <div className="mt-1 h-5 w-5 shrink-0 rounded-full border border-[#00b274]/30 bg-[#00b274]/10 flex items-center justify-center group-hover:bg-[#00b274]/20 transition-colors">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#00b274]" />
                        </div>
                        <p className="text-base leading-snug text-slate-700 font-bold">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>

              <Reveal delay={200}>
                <article className="rounded-[1.25rem] border border-slate-200 bg-white/95 p-6 md:p-7 shadow-[0_22px_60px_rgba(15,23,42,0.09)]">
                  <h3 className="text-lg font-bold text-slate-950 mb-6 flex items-center gap-3">
                    <span className="h-6 w-1 bg-[#38bdf8] rounded-full" />
                    Critical Modules
                  </h3>
                  <div className="grid gap-2.5">
                    {industry.detail.modules.map((module) => (
                      <div key={module} className="rounded-lg border border-slate-200 bg-[#f8fbff] px-4 py-2.5 text-sm font-black text-slate-700 flex items-center gap-3 hover:bg-[#f8fffc] transition-colors">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#00b274] shadow-[0_0_8px_rgba(0,178,116,0.25)]" />
                        {module}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl bg-[#00b274]/5 border border-[#00b274]/20 p-4">
                    <p className="text-[10px] text-slate-600 leading-relaxed font-medium">
                      All modules are pre-configured for <span className="text-[#00b274]">{industry.name}</span> workflows and support custom fields.
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-8 pt-0 sm:px-6">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <article className="rounded-[1.25rem] border border-slate-200 bg-white/95 p-5 shadow-[0_28px_80px_rgba(15,23,42,0.1)] md:p-7">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#00b274] mb-2">OPERATIONAL PATH</p>
                  <h2 className="text-xl font-bold tracking-tight text-slate-950">
                    Standard Workflow
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.detail.workflow.map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-[10px] font-bold text-slate-700 flex items-center gap-2">
                        <span className="text-[#00b274]">{index + 1}</span>
                        {step}
                      </div>
                      {index < industry.detail.workflow.length - 1 && (
                        <div className="mx-1 h-px w-3 bg-slate-200" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid gap-3 md:grid-cols-2">
                {industry.detail.focusAreas.map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-[#f8fbff] p-4 hover:bg-[#f8fffc] transition-colors">
                    <div className="mt-1 h-5 w-5 shrink-0 rounded-md border border-[#00b274]/20 bg-[#00b274]/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#00b274]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-base font-bold leading-snug text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>





      <ContactSection />
    </main>
  );
}
