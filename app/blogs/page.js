"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";

const categories = ["CRM Strategy", "Automation", "Sales Ops", "Compliance", "Growth"];

const posts = [
  {
    slug: "five-workflow-automations",
    category: "Automation",
    readTime: "6 min read",
    title: "Five workflow automations that save mid-market teams hours every week",
    excerpt: "The most effective reminders, follow-up triggers, and approval automations are usually the simplest ones to adopt.",
  },
  {
    slug: "gst-ready-crm",
    category: "Compliance",
    readTime: "7 min read",
    title: "What GST-ready CRM operations should actually include",
    excerpt: "Invoicing, audit trails, role permissions, and reporting patterns that matter when finance and sales need a shared operating view.",
  },
  {
    slug: "inventory-solutions-msmes",
    category: "Growth",
    readTime: "8 min read",
    title: "Inventory Solutions for MSMEs: Boost Cash Flow",
    excerpt: "Inventory optimization delivers measurable ROI by slashing stockouts, reducing excess stock, and freeing working capital for growth.",
  },
  {
    slug: "pipeline-visibility-breaks",
    category: "Sales Ops",
    readTime: "5 min read",
    title: "Why pipeline visibility breaks as teams scale and how to fix it",
    excerpt: "The common reporting blind spots that appear between lead intake, qualification, proposals, and closed revenue.",
  },
  {
    slug: "building-crm-stack",
    category: "Growth",
    readTime: "9 min read",
    title: "Building a CRM stack that supports growth without increasing operational chaos",
    excerpt: "How to add structure for managers while keeping day-to-day workflows lightweight for the team actually using the system.",
  },
  {
    slug: "generic-vs-business-fit",
    category: "CRM Strategy",
    readTime: "4 min read",
    title: "The difference between a generic CRM rollout and a business-fit rollout",
    excerpt: "Templates are easy to launch, but the real gains usually come from tailoring roles, views, and metrics to the business model.",
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#0b1220]">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-8 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_24%),radial-gradient(circle_at_top_right,rgba(20,195,142,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Blogs
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
                <li className="text-white">Blogs</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="px-6 py-4">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2.5">
          {categories.map((item) => (
            <button
              key={item}
              className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition ${
                item === "CRM Strategy"
                  ? "border-[#7ef7c4]/25 bg-[#7ef7c4]/10 text-white"
                  : "border-white/10 bg-white/5 text-slate-300 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">Latest posts</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-4xl">
                Practical content for growth teams
              </h2>
            </div>
            <p className="max-w-xl text-xs leading-6 text-slate-400 md:text-sm">
              Short, actionable reads for founders, operations leaders, and teams that want systems to be clearer and easier to run.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <Link 
                key={post.slug} 
                href={`/blogs/${post.slug}`}
                className="group block h-full animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <article className="h-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] transition duration-300 group-hover:border-[#8be9ff]/25 group-hover:bg-white/[0.06] flex flex-col">
                  <div className="h-40 bg-[linear-gradient(135deg,#102235_0%,#0b1728_45%,#0b1220_100%)] p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00b274]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-start justify-between gap-4 relative z-10">
                      <span className="rounded-full border border-[#8be9ff]/20 bg-[#8be9ff]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8be9ff]">
                        {post.category}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">{post.readTime}</span>
                    </div>
                  </div>

                  <div className="p-7 flex-grow flex flex-col">
                    <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-[#7ef7c4] transition-colors">{post.title}</h3>
                    <p className="mt-3 text-[13px] leading-6 text-slate-400 line-clamp-2">{post.excerpt}</p>
                    <div className="mt-auto pt-5 flex items-center gap-2 text-xs font-bold text-[#7ef7c4] transition group-hover:gap-3">
                      Read Now
                      <span aria-hidden="true">&rarr;</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-[#08101d] p-7 md:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">Stay in the loop</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Get new CRM insights and product thinking.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                Content for teams improving lead handling, service workflows, and reporting quality.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-[240px] rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-[#7ef7c4] transition-all"
              />
              <button className="rounded-full bg-gradient-to-r from-[#7ef7c4] via-[#37dfaa] to-[#14c38e] px-6 py-3 text-sm font-bold text-[#04111c] transition hover:brightness-110 shadow-lg shadow-[#7ef7c4]/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
