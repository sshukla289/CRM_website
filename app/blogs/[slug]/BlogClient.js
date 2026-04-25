"use client";

import Navbar from "@/components/Navbar";
import GoBackButton from "@/components/GoBackButton";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import SEOComponent from "@/components/SEOComponent";

function getDisplayContent(rawContent) {
  if (typeof rawContent !== "string") {
    return "";
  }

  let parsed = rawContent.trim();

  // Some blog entries arrive as JSON strings like:
  // {"content":"..."} or "\"{\\\"content\\\":\\\"...\\\"}\""
  for (let i = 0; i < 2; i += 1) {
    if (typeof parsed !== "string") {
      break;
    }

    const candidate = parsed.trim();
    if (!candidate) {
      return "";
    }

    try {
      parsed = JSON.parse(candidate);
    } catch {
      break;
    }
  }

  if (parsed && typeof parsed === "object" && typeof parsed.content === "string") {
    parsed = parsed.content;
  }

  let text = typeof parsed === "string" ? parsed : "";

  if (/^\s*\{[\s\S]*"content"\s*:/i.test(text)) {
    text = text
      .replace(/^\s*\{\s*"content"\s*:\s*/i, "")
      .replace(/\}\s*$/, "")
      .replace(/^"+|"+$/g, "");
  }

  return text
    .replace(/\\"/g, '"')
    .replace(/\\n/g, "\n")
    .replace(/\r\n/g, "\n")
    .trim();
}

export default function BlogClient({ slug, initialPost, initialRecentPosts }) {
  const post = initialPost;
  const recentPosts = initialRecentPosts || [];
  const displayContent = getDisplayContent(post?.content || "");

  if (!post) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="flex flex-col h-screen items-center justify-center text-slate-950">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link href="/blogs" className="text-[#00b274] hover:underline font-bold">Back to Blogs</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_45%,#eef6f4_100%)]">
      <SEOComponent 
        title={post.title}
        description={post.heading || post.content?.substring(0, 160)}
        image={post.image}
        url={`https://triostack.in/blogs/${slug}`}
        type="article"
      />
      <Navbar />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.12),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(180deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40" />
        
        <div className="max-w-7xl mx-auto relative z-[250] mb-8 flex pointer-events-auto">
          <GoBackButton fallbackHref="/blogs" className="animate-fade-in" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 animate-fade-in [animation-delay:100ms]">
            <span className="text-[#00b274] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
              BLOG POST
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-slate-950 mb-6 leading-tight max-w-4xl">
              {post.title}
            </h1>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              {post.heading}
            </p>
            
            <div className="flex items-center gap-6">
              <div className="px-4 py-1.5 rounded-full border border-[#00b274]/30 bg-[#00b274]/10 text-[#00b274] text-[10px] font-bold uppercase tracking-wider">
                {post.category}
              </div>
              <div className="flex items-center gap-4 text-slate-500 text-xs font-medium">
                <span>Triostack Team</span>
                <div className="w-1 h-1 rounded-full bg-slate-300" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_350px] gap-12 mt-12">
            {/* Main Content */}
            <div className="space-y-10">
              {post.image && (
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-slate-200 shadow-[0_28px_80px_rgba(15,23,42,0.12)] animate-fade-in [animation-delay:200ms]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="max-w-none text-slate-700 animate-fade-in [animation-delay:300ms]">
                {displayContent.split('\n\n').filter(Boolean).map((paragraph, i) => (
                  <p key={i} className="mb-6 whitespace-pre-line text-sm md:text-base leading-relaxed text-slate-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-white/95 border border-slate-200 rounded-2xl p-7 sticky top-32 animate-fade-in [animation-delay:400ms] shadow-[0_20px_60px_rgba(15,23,42,0.1)]">
                <h3 className="text-[#00b274] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                  RECENT POSTS
                </h3>
                <div className="space-y-8">
                  {recentPosts.length > 0 ? recentPosts.map((recent, i) => (
                    <Link key={i} href={`/blogs/${slugify(recent.title)}`} className="group block">
                      <h4 className="text-slate-950 text-sm font-bold group-hover:text-[#00b274] transition-colors leading-snug mb-2">
                        {recent.title}
                      </h4>
                      <p className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">
                        {new Date(recent.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </Link>
                  )) : (
                    <p className="text-slate-600 text-xs">No other posts available.</p>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
