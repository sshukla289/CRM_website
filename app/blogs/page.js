import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const categories = ["CRM Strategy", "Automation", "Sales Ops", "Compliance", "Growth"];

const posts = [
  {
    category: "Automation",
    readTime: "6 min read",
    title: "Five workflow automations that save mid-market teams hours every week",
    excerpt: "The most effective reminders, follow-up triggers, and approval automations are usually the simplest ones to adopt.",
  },
  {
    category: "Compliance",
    readTime: "7 min read",
    title: "What GST-ready CRM operations should actually include",
    excerpt: "Invoicing, audit trails, role permissions, and reporting patterns that matter when finance and sales need a shared operating view.",
  },
  {
    category: "Sales Ops",
    readTime: "5 min read",
    title: "Why pipeline visibility breaks as teams scale and how to fix it",
    excerpt: "The common reporting blind spots that appear between lead intake, qualification, proposals, and closed revenue.",
  },
  {
    category: "Growth",
    readTime: "9 min read",
    title: "Building a CRM stack that supports growth without increasing operational chaos",
    excerpt: "How to add structure for managers while keeping day-to-day workflows lightweight for the team actually using the system.",
  },
  {
    category: "CRM Strategy",
    readTime: "4 min read",
    title: "The difference between a generic CRM rollout and a business-fit rollout",
    excerpt: "Templates are easy to launch, but the real gains usually come from tailoring roles, views, and metrics to the business model.",
  },
  {
    category: "Automation",
    readTime: "6 min read",
    title: "How service reminders and renewal cues improve customer retention",
    excerpt: "A better reminder system often drives more retention than another dashboard widget or reporting layer.",
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#0b1220]">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-10 pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_24%),radial-gradient(circle_at_top_right,rgba(20,195,142,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Blogs
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
                <li className="text-white">Blogs</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              className={`rounded-full border px-4 py-2 text-sm transition ${
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

      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">Latest posts</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
                Practical content for growth-minded teams
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              Short, actionable reads for founders, operations leaders, and teams that want systems to be clearer and easier to run.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal key={post.title} delay={index * 80}>
                <article className="h-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:border-[#8be9ff]/25 hover:bg-white/[0.06]">
                  <div className="h-44 bg-[linear-gradient(135deg,#102235_0%,#0b1728_45%,#0b1220_100%)] p-6">
                    <div className="flex items-start justify-between gap-4">
                      <span className="rounded-full border border-[#8be9ff]/20 bg-[#8be9ff]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8be9ff]">
                        {post.category}
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{post.readTime}</span>
                    </div>
                    <div className="mt-10 h-px w-full bg-white/10" />
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">{post.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                    <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#7ef7c4] transition hover:text-white">
                      Read article
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-[#08101d] p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">Stay in the loop</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
                Get new CRM insights, product thinking, and operational ideas in one place.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                Content for teams improving lead handling, service workflows, reporting quality, and business visibility.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-[260px] rounded-full border border-white/10 bg-white/5 px-5 py-4 text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button className="rounded-full bg-gradient-to-r from-[#7ef7c4] via-[#37dfaa] to-[#14c38e] px-7 py-4 text-sm font-semibold text-[#04111c] transition hover:brightness-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
