"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Image from "next/image";

const blogContent = {
  "inventory-solutions-msmes": {
    title: "Inventory Solutions for MSMEs: Boost Cash Flow",
    category: "Inventory Solutions For Msmes",
    date: "Feb 14, 2026",
    author: "Triostack Team",
    image: "/blog_post_inventory_1776941433105.png",
    subtitle: "Inventory optimization delivers measurable ROI by slashing stockouts, reducing excess stock, and freeing working capital for growth.",
    content: [
      {
        type: "p",
        text: "In the fast-paced world of MSMEs, inventory isn't just stock—it's frozen capital. Poorly managed inventory can lead to two critical failures: stockouts that drive customers away, or overstock that drains cash reserves. Implementing a modern CRM with integrated inventory tracking is the bridge to sustainable growth."
      },
      {
        type: "h2",
        text: "The Real Cost of Poor Inventory Management"
      },
      {
        type: "p",
        text: "Most small businesses lose between 15-25% of their potential annual revenue due to inventory-related inefficiencies. This includes storage costs for obsolete items and lost sales due to unavailability of high-demand products."
      },
      {
        type: "h2",
        text: "3 Steps to Better Cash Flow"
      },
      {
        type: "p",
        text: "1. Demand Forecasting: Use historical sales data to predict future needs accurately. \n2. Real-time Visibility: Stop relying on weekly manual counts. \n3. Automated Reordering: Set safety stock levels to trigger orders before it's too late."
      }
    ],
    recentPosts: [
      { title: "MSME CRM: Boost Sales and Cash Flow", date: "Feb 15, 2026", slug: "msme-crm-boost" },
      { title: "MSME CRM Growth: Boost Sales and Cash Flow", date: "Feb 13, 2026", slug: "msme-crm-growth" },
      { title: "CRM-Driven Growth for Indian MSMEs: Cash Flow", date: "Feb 13, 2026", slug: "crm-indian-msmes" }
    ]
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const router = useRouter();
  const post = blogContent[slug] || blogContent["inventory-solutions-msmes"]; // Default for demo

  return (
    <main className="min-h-screen bg-[#0b1220]">
      <Navbar />

      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,178,116,0.05),transparent_40%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Back Button */}
          <Reveal>
            <button 
              onClick={() => router.back()}
              className="group mb-8 flex items-center gap-2 text-slate-400 hover:text-[#00b274] transition-all text-xs font-bold uppercase tracking-widest"
            >
              <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Go Back
            </button>
          </Reveal>

          <Reveal delay={50}>
            <div className="mb-8">
              <span className="text-[#00b274] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
                BLOG POST
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
                {post.title}
              </h1>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl mb-8">
                {post.subtitle}
              </p>
              
              <div className="flex items-center gap-6">
                <div className="px-4 py-1.5 rounded-full border border-[#00b274]/30 bg-[#00b274]/10 text-[#00b274] text-[10px] font-bold uppercase tracking-wider">
                  {post.category}
                </div>
                <div className="flex items-center gap-4 text-slate-500 text-xs font-medium">
                  <span>{post.author}</span>
                  <div className="w-1 h-1 rounded-full bg-slate-700" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1fr_350px] gap-12 mt-12">
            {/* Main Content */}
            <div className="space-y-10">
              <Reveal delay={100}>
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className="prose prose-invert max-w-none prose-p:text-slate-400 prose-p:leading-8 prose-h2:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12">
                {post.content.map((item, i) => (
                  <Reveal key={i} delay={200 + i * 50}>
                    {item.type === 'p' ? (
                      <p className="mb-6 whitespace-pre-line text-sm md:text-base">{item.text}</p>
                    ) : (
                      <h2 className="mb-4 mt-8">{item.text}</h2>
                    )}
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <Reveal delay={300}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-7 sticky top-32">
                  <h3 className="text-[#00b274] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                    RECENT POSTS
                  </h3>
                  <div className="space-y-8">
                    {post.recentPosts.map((recent, i) => (
                      <a key={i} href={`/blogs/${recent.slug}`} className="group block">
                        <h4 className="text-white text-sm font-bold group-hover:text-[#00b274] transition-colors leading-snug mb-2">
                          {recent.title}
                        </h4>
                        <p className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">
                          {recent.date}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Contact Section removed as per request */}
    </main>
  );
}
