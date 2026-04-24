"use client";

import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import FeatureIcon from "@/components/FeatureIcon";
import BookCallModal from "@/components/BookCallModal";
import { allFeatures } from "@/lib/features-data";

export default function FeatureDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Find the feature by slug
  let feature = null;
  for (const group of allFeatures) {
    const found = group.items.find((item) => item.slug === slug);
    if (found) {
      feature = found;
      break;
    }
  }

  if (!feature) {
    notFound();
  }

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-[#0B1220] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        {/* Background Image with Overlay */}
        {feature.bgImage ? (
          <div className="absolute inset-0 z-0">
            <Image 
              src={feature.bgImage} 
              alt="Background" 
              fill 
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B1220] via-transparent to-[#0B1220]" />
          </div>
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00b274]/5 to-transparent pointer-events-none" />
        )}

        <div className="container max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <nav className="flex text-sm text-[#00b274] font-medium mb-12">
              <ol className="flex items-center gap-2">
                <li><Link href="/" className="hover:underline">Home</Link></li>
                <li><span>&gt;</span></li>
                <li><Link href="/features" className="hover:underline">Features</Link></li>
                <li><span>&gt;</span></li>
                <li className="text-white/50">{feature.title}</li>
              </ol>
            </nav>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Reveal delay={100}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#00b274]/10 border border-[#00b274]/20 text-[#00b274] text-sm font-bold uppercase tracking-wider">
                   <FeatureIcon type={feature.icon} className="h-4 w-4" />
                   {feature.title}
                </div>
              </Reveal>
              <Reveal delay={200}>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {feature.details?.subtitle || feature.title}
                </h1>
              </Reveal>
              <Reveal delay={300}>
                <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                  {feature.details?.shortDescription || feature.description}
                </p>
              </Reveal>
              <Reveal delay={400}>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleModalOpen}
                    className="bg-[#00b274] hover:bg-[#009661] text-white px-10 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
                  >
                    Book a Demo
                  </button>
                  <button
                    onClick={() => document.getElementById('overview').scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white/5 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold transition-all duration-300 border border-white/10"
                  >
                    Explore Features
                  </button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={500}>
              <div className="relative">
                <div className="absolute -inset-4 bg-[#00b274]/20 rounded-[2rem] blur-3xl" />
                <div className="relative rounded-3xl border border-white/10 overflow-hidden bg-[#0F172A]/50 backdrop-blur-sm">
                  {feature.heroImage ? (
                    <Image 
                      src={feature.heroImage} 
                      alt={feature.title} 
                      width={800} 
                      height={500} 
                      className="w-full h-auto"
                    />
                  ) : (
                    <div className="aspect-video flex items-center justify-center p-12 text-center">
                      <FeatureIcon type={feature.icon} className="h-24 w-24 text-[#00b274]/20 mx-auto mb-6" />
                      <div className="text-white/20 text-2xl font-bold tracking-widest uppercase">{feature.title} Visual</div>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      {feature.details?.overview && (
        <section id="overview" className="py-24 relative">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <Reveal>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">{feature.details.overview.heading}</h2>
                  <div className="h-1.5 w-20 bg-[#00b274] rounded-full" />
                  <div className="text-slate-400 text-lg leading-relaxed whitespace-pre-line">
                    {feature.details.overview.content}
                  </div>
                </div>
              </Reveal>

              <div className="space-y-12">
                <Reveal delay={200}>
                  <h3 className="text-xl font-bold uppercase tracking-widest text-[#00b274]">Key Features</h3>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(feature.details.featuresList || []).map((item, idx) => (
                    <Reveal key={idx} delay={idx * 50}>
                      <div className="flex items-center gap-3 group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00b274]/10 border border-[#00b274]/20 flex items-center justify-center group-hover:bg-[#00b274] transition-colors duration-300">
                          <svg className="w-3.5 h-3.5 text-[#00b274] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                          </svg>
                        </div>
                        <span className="text-slate-300 group-hover:text-white transition-colors">{item}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* How It Helps Section */}
      {feature.details?.howItHelps && (
        <section className="py-24 bg-white/[0.02]">
          <div className="container max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Helps</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">Discover the tangible benefits our {feature.title} brings to your sales organization.</p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {feature.details.howItHelps.map((item, idx) => (
                <Reveal key={idx} delay={idx * 100}>
                  <div className="p-8 rounded-3xl bg-[#0F172A] border border-white/5 hover:border-[#00b274]/30 transition-all duration-500 group h-full">
                    <div className="w-12 h-12 rounded-2xl bg-[#00b274]/10 flex items-center justify-center mb-8 text-[#00b274] group-hover:bg-[#00b274] group-hover:text-white transition-all duration-500">
                      <span className="text-xl font-bold">{idx + 1}</span>
                    </div>
                    <h4 className="text-xl font-bold mb-4 group-hover:text-[#00b274] transition-colors">{item.title}</h4>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Case Section */}
      {feature.details?.useCase && (
        <section className="py-24 relative overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6">
            <Reveal>
              <div className="max-w-4xl mx-auto p-12 rounded-[2.5rem] bg-gradient-to-br from-[#00b274]/20 to-transparent border border-[#00b274]/20">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="w-20 h-20 rounded-full bg-[#00b274] flex items-center justify-center flex-shrink-0 shadow-[0_0_30px_rgba(0,178,116,0.5)]">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-1.03 0-1.9-.4-2.593-1.003l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#00b274]">{feature.details.useCase.title}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed italic">
                      "{feature.details.useCase.description}"
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Best For Section */}
      {feature.details?.bestFor && (
        <section className="py-24">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-[#00b274]/10 via-transparent to-blue-500/10 border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00b274]/10 blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px]" />
              
              <div className="relative z-10 text-center">
                <Reveal>
                  <h2 className="text-3xl font-bold mb-12">Who is this best for?</h2>
                </Reveal>
                <div className="flex flex-wrap justify-center gap-4">
                  {feature.details.bestFor.map((item, idx) => (
                    <Reveal key={idx} delay={idx * 50}>
                      <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium">
                        {item}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      {feature.details?.ctaSection && (
        <section className="py-32 relative">
          <div className="container max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">{feature.details.ctaSection.heading}</h2>
              <p className="text-xl text-slate-400 mb-12">{feature.details.ctaSection.description}</p>
              <button
                onClick={handleModalOpen}
                className="bg-[#00b274] hover:bg-[#009661] text-white px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_20px_50px_rgba(0,178,116,0.3)]"
              >
                {feature.details.ctaSection.buttonText}
              </button>
            </Reveal>
          </div>
        </section>
      )}

      <BookCallModal isOpen={isModalOpen} onClose={handleModalClose} />
    </main>
  );
}
