"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SEOComponent from "@/components/SEOComponent";
import { slugify } from "@/lib/utils";

const categories = ["All", "Sales", "Marketing", "Tech"];

export default function BlogsPage() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://api.blog-manager.triostack.in/api/blogs", {
          headers: {
            "Authorization": "Bearer 9f3c2e7a8b1c4d6e8f9a0b1c2d3e4f56789abcdeffedcba9876543210a1b2c3d4e5f6a7b8c9d"
          }
        });
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category?.toLowerCase() === activeCategory.toLowerCase())
      );
    }
  }, [activeCategory, posts]);

  const handleReadNow = (title) => {
    const slug = slugify(title);
    router.push(`/blogs/${slug}`);
  };

  return (
    <main className="min-h-screen bg-[#0b1220]">
      <SEOComponent 
        title="Triostack Blogs | CRM & Sales Insights"
        description="Expert advice on CRM implementation, sales automation, and business growth."
      />
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-8 pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_24%),radial-gradient(circle_at_top_right,rgba(20,195,142,0.12),transparent_28%)]" />
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
              onClick={() => setActiveCategory(item)}
              className={`rounded-full border px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition ${
                activeCategory === item
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

          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#7ef7c4] border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredPosts.length > 0 ? (
                filteredPosts.map((post, index) => (
                  <article
                    key={post._id}
                    onClick={() => handleReadNow(post.title)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleReadNow(post.title);
                      }
                    }}
                    role="link"
                    tabIndex={0}
                    className="group flex h-full cursor-pointer animate-fade-in overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:border-[#8be9ff]/25 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ef7c4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1220]"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex h-full w-full flex-col">
                      <div className="h-48 bg-[#0d1828] relative overflow-hidden">
                        {post.image ? (
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="h-full w-full bg-[linear-gradient(135deg,#102235_0%,#0b1728_45%,#0b1220_100%)]" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-transparent to-transparent opacity-60" />
                        <div className="absolute left-6 top-6 flex items-start justify-between gap-4">
                          <span className="rounded-full border border-[#8be9ff]/20 bg-[#8be9ff]/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8be9ff] backdrop-blur-md">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-7 flex-grow flex flex-col">
                        <h3 className="text-lg font-semibold tracking-tight text-white group-hover:text-[#7ef7c4] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="mt-3 text-[13px] leading-6 text-slate-400 line-clamp-2">
                          {post.heading || post.content?.substring(0, 100) + "..."}
                        </p>
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            handleReadNow(post.title);
                          }}
                          className="relative z-10 mt-auto flex w-fit items-center gap-2 pt-5 text-left text-xs font-bold text-[#7ef7c4] transition group-hover:gap-3"
                        >
                          Read Now
                          <span aria-hidden="true">&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <p className="text-slate-500">No posts found in this category.</p>
                </div>
              )}
            </div>
          )}
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
