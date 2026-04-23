"use client";

import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const blogContent = {
  "inventory-solutions-msmes": {
    title: "Inventory Solutions for MSMEs: Boost Cash Flow",
    category: "Growth",
    date: "Feb 14, 2026",
    author: "Triostack Team",
    image: "/img.png",
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
      }
    ]
  },
  "five-workflow-automations": {
    title: "Five workflow automations that save mid-market teams hours every week",
    category: "Automation",
    date: "Feb 15, 2026",
    author: "Triostack Team",
    image: "/img.png",
    subtitle: "The most effective reminders, follow-up triggers, and approval automations are usually the simplest ones to adopt.",
    content: [
      {
        type: "p",
        text: "Workflow automation is often misunderstood as complex AI. In reality, it's about eliminating the 'copy-paste' tasks that drain your team's energy. Here are five simple triggers that can change your business today."
      },
      {
        type: "h2",
        text: "1. Automated Lead Assignment"
      },
      {
        type: "p",
        text: "Stop letting leads sit in an inbox. Round-robin assignment ensures every lead is contacted within minutes, not hours."
      }
    ]
  },
  "gst-ready-crm": {
    title: "What GST-ready CRM operations should actually include",
    category: "Compliance",
    date: "Feb 17, 2026",
    author: "Triostack Team",
    image: "/img.png",
    subtitle: "Invoicing, audit trails, role permissions, and reporting patterns that matter when finance and sales need a shared operating view.",
    content: [
      {
        type: "p",
        text: "A CRM becomes far more valuable when it reflects how finance and sales actually work together. GST-ready operations are not just about generating invoices. They depend on accurate customer records, clean tax fields, approval steps, and a reliable history of who changed what."
      },
      {
        type: "h2",
        text: "Shared records reduce compliance friction"
      },
      {
        type: "p",
        text: "When quotes, orders, tax details, and customer communication live in separate tools, teams lose confidence in the numbers. A GST-ready CRM should keep these records connected so the latest version is visible to both sales and finance."
      }
    ]
  },
  "pipeline-visibility-breaks": {
    title: "Why pipeline visibility breaks as teams scale and how to fix it",
    category: "Sales Ops",
    date: "Feb 16, 2026",
    author: "Triostack Team",
    image: "/img.png",
    subtitle: "The common reporting blind spots that appear between lead intake, qualification, proposals, and closed revenue.",
    content: [
      {
        type: "p",
        text: "As teams grow from 5 to 50 sales reps, the spreadsheets that once worked begin to shatter. Data becomes fragmented, and managers lose the ability to see where deals are truly getting stuck."
      },
      {
        type: "h2",
        text: "The 'Middle-of-the-Funnel' Black Hole"
      },
      {
        type: "p",
        text: "Most companies know how many leads they got and how much they sold. The gap in between—where qualification and negotiation happen—is where most revenue is lost."
      }
    ]
  },
  "building-crm-stack": {
    title: "Building a CRM stack that supports growth without increasing operational chaos",
    category: "Growth",
    date: "Feb 18, 2026",
    author: "Triostack Team",
    image: "/img.png",
    subtitle: "How to add structure for managers while keeping day-to-day workflows lightweight for the team actually using the system.",
    content: [
      {
        type: "p",
        text: "Growth usually adds tools faster than it adds clarity. Teams adopt chat, spreadsheets, forms, and reporting dashboards, but the stack becomes difficult to manage when ownership is unclear. A strong CRM setup should reduce noise, not create another layer of it."
      },
      {
        type: "h2",
        text: "Start with operating rules, not extra tools"
      },
      {
        type: "p",
        text: "Before adding more software, define which team owns each stage, which fields are mandatory, and what actions should trigger follow-up. The CRM becomes the system of record only when everyone understands the rules behind it."
      }
    ]
  },
  "generic-vs-business-fit": {
    title: "The difference between a generic CRM rollout and a business-fit rollout",
    category: "CRM Strategy",
    date: "Feb 19, 2026",
    author: "Triostack Team",
    image: "/img.png",
    subtitle: "Templates are easy to launch, but the real gains usually come from tailoring roles, views, and metrics to the business model.",
    content: [
      {
        type: "p",
        text: "Generic CRM rollouts often look good in demos because they cover common workflows. The problem appears later, when your teams start working around the system instead of inside it. That is usually a sign that the setup was copied rather than designed for your business."
      },
      {
        type: "h2",
        text: "Business-fit means role-fit"
      },
      {
        type: "p",
        text: "Sales managers, founders, support teams, and finance leads all need different views from the same data. A business-fit rollout customizes fields, dashboards, approvals, and alerts so each team sees what helps them act faster."
      }
    ]
  }
};

const recentPosts = [
  { title: "MSME CRM: Boost Sales and Cash Flow", date: "Feb 15, 2026", slug: "inventory-solutions-msmes" },
  { title: "Five Workflow Automations", date: "Feb 13, 2026", slug: "five-workflow-automations" },
  { title: "Pipeline Visibility Guide", date: "Feb 13, 2026", slug: "pipeline-visibility-breaks" }
];

export default function BlogPost() {
  const { slug } = useParams();
  const router = useRouter();
  const post = blogContent[slug] || blogContent["inventory-solutions-msmes"];

  return (
    <main className="min-h-screen bg-[#0b1220]">
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

          <div className="grid lg:grid-cols-[1fr_350px] gap-12 mt-12">
            {/* Main Content */}
            <div className="space-y-10">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl animate-fade-in [animation-delay:200ms]">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none prose-p:text-slate-400 prose-p:leading-8 prose-h2:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 animate-fade-in [animation-delay:300ms]">
                {post.content.map((item, i) => (
                  <div key={i}>
                    {item.type === 'p' ? (
                      <p className="mb-6 whitespace-pre-line text-sm md:text-base">{item.text}</p>
                    ) : (
                      <h2 className="mb-4 mt-8">{item.text}</h2>
                    )}
                  </div>
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
                  {recentPosts.map((recent, i) => (
                    <Link key={i} href={`/blogs/${recent.slug}`} className="group block">
                      <h4 className="text-white text-sm font-bold group-hover:text-[#00b274] transition-colors leading-snug mb-2">
                        {recent.title}
                      </h4>
                      <p className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">
                        {recent.date}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
