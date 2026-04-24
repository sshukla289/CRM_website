import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ContactSection from "@/components/ContactSection";
import IndustryBackButton from "./IndustryBackButton";
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
    <main className="min-h-screen overflow-hidden bg-[#0b1220]">
      <Navbar />

      <section className="relative px-4 pb-6 pt-28 sm:px-6 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,195,142,0.06),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.04),transparent_40%)] pointer-events-none" />
        <div className="mx-auto max-w-[1500px]">
          <div className="relative z-[250] mb-4 flex pointer-events-auto">
            <IndustryBackButton />
          </div>

          <article className="relative isolate overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#07111d] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(126,247,196,0.06),transparent_70%)]" />
            
            <div className="relative z-10 grid gap-8 p-6 sm:p-8 md:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex flex-wrap items-center gap-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#7ef7c4]/30 bg-[#7ef7c4]/10 text-[8px] font-black uppercase tracking-[0.16em] text-[#9ffbdd]">
                    CRM
                  </span>
                  <span className="inline-flex items-center gap-3 text-[8px] font-black uppercase tracking-[0.34em] text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#7ef7c4]" />
                    Industry Solutions
                  </span>
                </div>

                <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.1]">
                  {industrySeoTitle}
                </h1>
                <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 md:text-lg font-medium">
                  {industry.detail.headline}
                </p>
              </div>

              <div className="relative">
                <div className="rounded-[1.25rem] border border-[#7ef7c4]/20 bg-[#0d2119]/40 p-5 md:p-6 shadow-2xl backdrop-blur-md">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7ef7c4]">Quick Inquiry</p>
                      <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">15-min discovery</p>
                    </div>
                    <h3 className="text-lg font-black text-white mb-2">Schedule a Targeted Demo</h3>
                    
                    <form className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Work Email" 
                        className="w-full bg-[#050a14]/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#7ef7c4]/50 transition-all"
                        required
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <select className="bg-[#050a14]/60 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-[#7ef7c4]/50 transition-all">
                          <option value="">Team Size</option>
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="50+">50+</option>
                        </select>
                        <button 
                          type="submit"
                          className="group/btn relative overflow-hidden rounded-xl bg-[#7ef7c4] px-4 py-2.5 text-[10px] font-black uppercase tracking-widest text-[#04111c] transition-all hover:shadow-[0_0_15px_rgba(126,247,196,0.3)] active:scale-[0.97]"
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

      <section className="relative px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <article className="h-full rounded-[1.25rem] border border-white/10 bg-[#081423]/92 p-5 md:p-7 shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-px w-8 bg-[#7ef7c4]/50" />
                  <span className="text-[#7ef7c4] text-[9px] font-bold uppercase tracking-[0.3em]">Operational Flow</span>
                </div>
                <h2 className="text-2xl font-black tracking-tight text-white md:text-3xl mb-4">
                  {industry.name} Business Logic
                </h2>
                
                <div className="space-y-4">
                  <div className="text-slate-300 text-sm leading-relaxed border-l-2 border-[#7ef7c4]/20 pl-4 md:text-base">
                    <p>{industry.detail.overview}</p>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                      <h4 className="text-[#8be9ff] text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Strategic CRM Impact</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-[15px] text-slate-200">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#7ef7c4] shrink-0" />
                          <span><strong>Operational Accuracy:</strong> Reduces manual handoff errors by 40% through unified dashboards.</span>
                        </li>
                        <li className="flex items-start gap-3 text-[15px] text-slate-200">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#7ef7c4] shrink-0" />
                          <span><strong>Decision Visibility:</strong> Live tracking of {industry.name.toLowerCase()} metrics for immediate leadership action.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-xl border border-white/5 bg-white/[0.02] p-5">
                      <h4 className="text-[#8be9ff] text-[10px] font-bold uppercase tracking-[0.15em] mb-3">Automation Benefits</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3 text-[15px] text-slate-200">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#7ef7c4] shrink-0" />
                          <span><strong>Response Speed:</strong> Automated routing ensures {industry.tag.toLowerCase()} leads are touched in minutes.</span>
                        </li>
                        <li className="flex items-start gap-3 text-[15px] text-slate-200">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-[#7ef7c4] shrink-0" />
                          <span><strong>Scalability:</strong> Systems designed to handle 5x growth in {industry.name.toLowerCase()} operations.</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#7ef7c4]/20 bg-[#7ef7c4]/5 p-5 group hover:bg-[#7ef7c4]/8 transition-colors">
                      <p className="text-4xl font-black tracking-tight text-white mb-1">{industry.metric}</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#7ef7c4]">
                        {industry.metricLabel}
                      </p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex flex-col justify-center">
                      <p className="text-white text-lg font-bold leading-tight tracking-tight text-center">Purpose-built for {industry.tag.toLowerCase()}</p>
                    </div>
                  </div>
                </div>

              </article>
            </Reveal>

            <div className="space-y-6">
              <Reveal delay={100}>
                <article className="rounded-[1.25rem] border border-white/10 bg-[#081423]/92 p-6 md:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="h-6 w-1 bg-[#7ef7c4] rounded-full" />
                    Key Outcomes
                  </h3>
                  <div className="space-y-4">
                    {industry.outcomes.map((outcome) => (
                      <div key={outcome} className="flex gap-4 group">
                        <div className="mt-1 h-5 w-5 shrink-0 rounded-full border border-[#7ef7c4]/30 bg-[#7ef7c4]/10 flex items-center justify-center group-hover:bg-[#7ef7c4]/20 transition-colors">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#7ef7c4]" />
                        </div>
                        <p className="text-base leading-snug text-slate-100 font-bold">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>

              <Reveal delay={200}>
                <article className="rounded-[1.25rem] border border-white/10 bg-[#081423]/92 p-6 md:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                    <span className="h-6 w-1 bg-[#8be9ff] rounded-full" />
                    Critical Modules
                  </h3>
                  <div className="grid gap-2.5">
                    {industry.detail.modules.map((module) => (
                      <div key={module} className="rounded-lg border border-white/5 bg-white/[0.02] px-4 py-2.5 text-sm font-black text-slate-200 flex items-center gap-3 hover:bg-white/[0.04] transition-colors">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#7ef7c4] shadow-[0_0_8px_rgba(126,247,196,0.4)]" />
                        {module}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl bg-[#7ef7c4]/5 border border-[#7ef7c4]/20 p-4">
                    <p className="text-[10px] text-slate-400 leading-relaxed font-medium">
                      All modules are pre-configured for <span className="text-[#7ef7c4]">{industry.name}</span> workflows and support custom fields.
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1220] px-4 pb-8 pt-0 sm:px-6">
        <div className="mx-auto max-w-[1500px]">
          <Reveal>
            <article className="rounded-[1.25rem] border border-white/10 bg-[#08101d] p-5 md:p-7">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#8be9ff] mb-2">OPERATIONAL PATH</p>
                  <h2 className="text-xl font-bold tracking-tight text-white">
                    Standard Workflow
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {industry.detail.workflow.map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-[10px] font-bold text-white flex items-center gap-2">
                        <span className="text-[#7ef7c4]">{index + 1}</span>
                        {step}
                      </div>
                      {index < industry.detail.workflow.length - 1 && (
                        <div className="mx-1 h-px w-3 bg-white/10" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid gap-3 md:grid-cols-2">
                {industry.detail.focusAreas.map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.01] p-4 hover:bg-white/[0.02] transition-colors">
                    <div className="mt-1 h-5 w-5 shrink-0 rounded-md border border-[#7ef7c4]/20 bg-[#7ef7c4]/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#7ef7c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-base font-bold leading-snug text-slate-200">{item}</p>
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
