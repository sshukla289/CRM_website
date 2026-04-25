"use client";

import { useState, useEffect, useRef } from "react";
import { submitLead } from "@/lib/submitLead";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitState, setSubmitState] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const shouldScrollToContact =
      window.location.hash === "#contact" ||
      window.sessionStorage.getItem("scroll-to-contact") === "1";

    if (!shouldScrollToContact) {
      return undefined;
    }

    const frameId = window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "/#contact");
      window.sessionStorage.removeItem("scroll-to-contact");
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitState("submitting");
    setSubmitError("");

    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formId: "contact-section",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      setSubmitError(
        error instanceof Error ? error.message : "Unable to send your message right now."
      );
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative scroll-mt-28 py-8 md:py-10 bg-gradient-to-b from-[#0B1220] via-[#0E1A2B] to-[#0B1220] overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#00b274]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content + Contact Details */}
          <div className={`${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
            <span className="text-[#00b274] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
              CONTACT US
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
              Let’s Build Something <br />
              <span className="text-white/90">Amazing Together</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-lg">
              Have questions about our CRM solutions? Our team is here to help you streamline operations and grow your business.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-3.5">
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[#00b274]/10 flex items-center justify-center border border-[#00b274]/20 group-hover:bg-[#00b274]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#00b274]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-[9px] uppercase tracking-widest font-bold mb-0.5">Phone</p>
                  <p className="text-white text-sm font-medium">+91 9211941924</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[#00b274]/10 flex items-center justify-center border border-[#00b274]/20 group-hover:bg-[#00b274]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#00b274]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-[9px] uppercase tracking-widest font-bold mb-0.5">Email</p>
                  <p className="text-white text-sm font-medium">Info@triostack.in</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-[#00b274]/10 flex items-center justify-center border border-[#00b274]/20 group-hover:bg-[#00b274]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#00b274]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-500 text-[9px] uppercase tracking-widest font-bold mb-0.5">Location</p>
                  <p className="text-white text-sm font-medium">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className={`${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'} [animation-delay:200ms] transition-all duration-500`}>
            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-7 shadow-2xl relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b274]/10 blur-3xl pointer-events-none" />
              
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-slate-300 ml-1 uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-green-400 focus:ring-0 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-medium text-slate-300 ml-1 uppercase tracking-wider">Email *</label>
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-green-400 focus:ring-0 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-slate-300 ml-1 uppercase tracking-wider">Phone Number *</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-green-400 focus:ring-0 transition-all"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-slate-300 ml-1 uppercase tracking-wider">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-green-400 focus:ring-0 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="w-full bg-gradient-to-r from-[#00b274] to-[#009661] text-white text-sm font-bold py-3.5 rounded-full shadow-lg shadow-[#00b274]/20 hover:shadow-[#00b274]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-2 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    {submitState === "submitting" ? "Sending..." : "Send Message"}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </button>

                {submitError ? (
                  <p className="text-sm text-red-400">{submitError}</p>
                ) : null}

                {submitState === "success" ? (
                  <p className="text-sm text-[#7ef7c4]">Your message was sent successfully.</p>
                ) : null}
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
