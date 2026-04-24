"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Select from "react-select";
import Navbar from "@/components/Navbar";
import SEOComponent from "@/components/SEOComponent";
import { slugify } from "@/lib/utils";

const ALL_CATEGORY = "All";

const normalizeCategory = (value) => (value || "").trim().toLowerCase();

const formatCategoryLabel = (value) => {
  const trimmed = (value || "").trim();

  if (!trimmed) {
    return "General";
  }

  return trimmed
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const getExcerpt = (post) => {
  const source = post?.heading || post?.excerpt || post?.content || "";
  const normalized = source.replace(/\s+/g, " ").trim();

  if (!normalized) {
    return "Read the full article for detailed CRM, sales, and automation insights.";
  }

  return normalized.length > 120 ? `${normalized.slice(0, 117)}...` : normalized;
};

const BlogSkeleton = () => (
  <div className="animate-pulse overflow-hidden rounded-[1.5rem] border border-white/5 bg-white/[0.02]">
    <div className="h-48 bg-white/5" />
    <div className="space-y-4 p-7">
      <div className="h-2 w-16 rounded-full bg-white/10" />
      <div className="space-y-2">
        <div className="h-4 w-3/4 rounded-md bg-white/10" />
        <div className="h-4 w-1/2 rounded-md bg-white/10" />
      </div>
      <div className="space-y-2 pt-2">
        <div className="h-2.5 rounded-md bg-white/5" />
        <div className="h-2.5 w-5/6 rounded-md bg-white/5" />
      </div>
      <div className="h-3 w-20 rounded-full bg-white/10 pt-4" />
    </div>
  </div>
);

export default function BlogsPage() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs", { cache: "no-store" });
        const data = await response.json();
        setPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const categoryOptions = [
    ALL_CATEGORY,
    ...Array.from(
      new Set(
        posts
          .map((post) => formatCategoryLabel(post.category))
          .filter(Boolean)
      )
    ),
  ];

  const selectOptions = categoryOptions.map((category) => ({
    value: category,
    label: category,
  }));

  const selectedCategoryOption =
    selectOptions.find((option) => option.value === activeCategory) || selectOptions[0];

  const displayPosts =
    activeCategory === ALL_CATEGORY
      ? posts
      : posts.filter(
          (post) =>
            normalizeCategory(formatCategoryLabel(post.category)) ===
            normalizeCategory(activeCategory)
        );

  const menuPortalTarget = typeof window !== "undefined" ? document.body : null;

  return (
    <main className="min-h-screen bg-[#0b1220]">
      <SEOComponent
        title="Triostack Blogs | CRM & Sales Insights"
        description="Expert advice on CRM implementation, sales automation, and business growth."
        url="https://triostack.in/blogs"
      />
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-8 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_24%),radial-gradient(circle_at_top_right,rgba(20,195,142,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Blogs
            </h1>
            <nav className="flex text-[11px] font-medium uppercase tracking-widest text-white/70">
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
        <div className="mx-auto max-w-7xl">
          <div className="max-w-md">
            <label
              htmlFor="blog-category-select"
              className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]"
            >
              Filter By Category
            </label>
            <Select
              inputId="blog-category-select"
              instanceId="blog-category-select"
              options={selectOptions}
              value={selectedCategoryOption}
              isSearchable={false}
              onChange={(option) => setActiveCategory(option?.value || ALL_CATEGORY)}
              menuPortalTarget={menuPortalTarget}
              styles={{
                control: (base, state) => ({
                  ...base,
                  minHeight: 60,
                  borderRadius: 20,
                  borderColor: state.isFocused ? "rgba(25, 211, 162, 0.5)" : "rgba(255,255,255,0.1)",
                  background: "linear-gradient(135deg, rgba(17,28,45,0.98), rgba(11,18,32,0.96))",
                  boxShadow: state.isFocused
                    ? "0 0 0 3px rgba(25, 211, 162, 0.12), 0 18px 40px rgba(0, 0, 0, 0.22)"
                    : "0 18px 40px rgba(0, 0, 0, 0.18)",
                  cursor: "pointer",
                  paddingLeft: 10,
                  transition: "all 180ms ease",
                  "&:hover": {
                    borderColor: "rgba(25, 211, 162, 0.4)",
                  },
                }),
                valueContainer: (base) => ({
                  ...base,
                  padding: "0 8px",
                }),
                singleValue: (base) => ({
                  ...base,
                  color: "#ffffff",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                }),
                placeholder: (base) => ({
                  ...base,
                  color: "rgba(148, 163, 184, 0.9)",
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }),
                indicatorSeparator: () => ({
                  display: "none",
                }),
                dropdownIndicator: (base, state) => ({
                  ...base,
                  color: state.isFocused ? "#7ef7c4" : "#94a3b8",
                  paddingRight: 18,
                  "&:hover": {
                    color: "#7ef7c4",
                  },
                }),
                menuPortal: (base) => ({
                  ...base,
                  zIndex: 300,
                }),
                menu: (base) => ({
                  ...base,
                  overflow: "hidden",
                  marginTop: 10,
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "linear-gradient(180deg, rgba(12,22,38,0.98), rgba(8,16,29,0.98))",
                  boxShadow: "0 24px 70px rgba(0, 0, 0, 0.34)",
                }),
                menuList: (base) => ({
                  ...base,
                  padding: 8,
                }),
                option: (base, state) => ({
                  ...base,
                  marginBottom: 6,
                  borderRadius: 14,
                  background: state.isSelected
                    ? "linear-gradient(90deg, #00b274, #19d3a2)"
                    : state.isFocused
                      ? "rgba(20, 195, 142, 0.14)"
                      : "transparent",
                  color: "#ffffff",
                  fontSize: 12,
                  fontWeight: state.isSelected ? 700 : 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  padding: "14px 16px",
                }),
              }}
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">
                Latest posts
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-4xl">
                Practical content for growth teams
              </h2>
            </div>
            <p className="max-w-xl text-xs leading-6 text-slate-400 md:text-sm">
              Short, actionable reads for founders, operations leaders, and teams that want systems to be clearer and easier to run.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => <BlogSkeleton key={index} />)
            ) : displayPosts.length > 0 ? (
              displayPosts.map((post, index) => {
                const slug = slugify(post.title || post.slug || "");
                const category = formatCategoryLabel(post.category);

                return (
                  <Link
                    key={post._id || slug || index}
                    href={`/blogs/${slug}`}
                    className="group flex h-full cursor-pointer animate-fade-in overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:border-[#8be9ff]/25 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef7c4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex h-full w-full flex-col">
                      <div className="relative h-48 overflow-hidden bg-[#0d1828]">
                        {post.image ? (
                          <img
                            src={post.image}
                            alt={post.title || "Blog post"}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="h-full w-full bg-[linear-gradient(135deg,#102235_0%,#0b1728_45%,#0b1220_100%)]" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-60" />
                        <div className="absolute left-6 right-6 top-6 flex items-start justify-between gap-4">
                          <span className="rounded-full border border-[#8be9ff]/20 bg-[#8be9ff]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8be9ff] backdrop-blur-md">
                            {category}
                          </span>
                          {post.readTime ? (
                            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-300/80">
                              {post.readTime}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex flex-grow flex-col p-7">
                        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-[#7ef7c4]">
                          {post.title}
                        </h3>
                        <p className="mt-3 line-clamp-2 text-[13px] leading-6 text-slate-400">
                          {getExcerpt(post)}
                        </p>
                        <span className="relative z-10 mt-auto inline-flex w-fit cursor-pointer select-none items-center gap-2 pt-5 text-left text-xs font-bold text-[#7ef7c4] transition group-hover:gap-3">
                          Read Now
                          <span aria-hidden="true">&rarr;</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-500">No posts found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] border border-white/10 bg-[#08101d] p-7 md:p-9">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8be9ff]">
                Stay in the loop
              </p>
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
                className="min-w-[240px] rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white outline-none transition-all placeholder:text-slate-600 focus:border-[#7ef7c4]"
              />
              <button className="rounded-full bg-gradient-to-r from-[#7ef7c4] via-[#37dfaa] to-[#14c38e] px-6 py-3 text-sm font-bold text-[#04111c] shadow-lg shadow-[#7ef7c4]/20 transition hover:brightness-110">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
