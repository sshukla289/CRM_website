"use client";

import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { slugify } from "@/lib/utils";
import SEOComponent from "@/components/SEOComponent";

export default function BlogClient({ slug, initialPost, initialRecentPosts }) {
  const router = useRouter();
  const post = initialPost;
  const recentPosts = initialRecentPosts || [];

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0b1220]">
        <Navbar />
        <div className="flex flex-col h-screen items-center justify-center text-white">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link href="/blogs" className="text-[#00b274] hover:underline font-bold">Back to Blogs</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0b1220]">
      <SEOComponent 
        title={post.title}
        description={post.heading || post.content?.substring(0, 160)}
        image={post.image}
        url={`https://triostack.in/blogs/${slug}`}
        type="article"
      />
      <Navbar />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.05),transparent_40%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Back Button */}
          <button 
            onClick={() => {
              if (window.history.length > 1) {
                router.back();
              } else {
                router.push('/blogs');
              }
            }}
            className="group mb-8 flex items-center gap-2 text-slate-400 hover:text-[#00b274] transition-all text-xs font-bold uppercase tracking-widest animate-fade-in"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>

          <div className="mb-8 animate-fade-in [animation-delay:100ms]">
            <span className="text-[#00b274] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
              BLOG POST
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
              {post.title}
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
              {post.heading}
            </p>
            
            <div className="flex items-center gap-6">
              <div className="px-4 py-1.5 rounded-full border border-[#00b274]/30 bg-[#00b274]/10 text-[#00b274] text-[10px] font-bold uppercase tracking-wider">
                {post.category}
              </div>
              <div className="flex items-center gap-4 text-slate-500 text-xs font-medium">
                <span>Triostack Team</span>
                <div className="w-1 h-1 rounded-full bg-slate-700" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_350px] gap-12 mt-12">
            {/* Main Content */}
            <div className="space-y-10">
              {post.image && (
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in [animation-delay:200ms]">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
              )}

              <div className="prose prose-invert max-w-none prose-p:text-slate-400 prose-p:leading-8 prose-h2:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 animate-fade-in [animation-delay:300ms]">
                {post.content?.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-6 whitespace-pre-line text-sm md:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sticky top-32 animate-fade-in [animation-delay:400ms]">
                <h3 className="text-[#00b274] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                  RECENT POSTS
                </h3>
                <div className="space-y-8">
                  {recentPosts.length > 0 ? recentPosts.map((recent, i) => (
                    <Link key={i} href={`/blogs/${slugify(recent.title)}`} className="group block">
                      <h4 className="text-white text-sm font-bold group-hover:text-[#00b274] transition-colors leading-snug mb-2">
                        {recent.title}
                      </h4>
                      <p className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">
                        {new Date(recent.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </p>
                    </Link>
                  )) : (
                    <p className="text-slate-500 text-xs">No other posts available.</p>
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
