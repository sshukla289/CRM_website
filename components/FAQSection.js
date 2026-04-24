'use client';

import React, { useState, useEffect, useRef } from 'react';

const faqData = [
  {
    question: "What is CRM and how does it help my business?",
    answer: "A CRM (Customer Relationship Management) system helps you track interactions with customers and leads. It streamlines sales, improves customer service, and increases profitability by organizing data in one central hub."
  },
  {
    question: "Is your CRM GST compliant?",
    answer: "Yes, our CRM is fully GST compliant. It automates tax calculations, generates GST-ready invoices, and helps you stay on top of your financial reporting requirements with ease."
  },
  {
    question: "Can I manage multiple branches with this CRM?",
    answer: "Absolutely. Our platform is designed for multi-branch management, allowing you to synchronize data across different locations while maintaining granular control over each branch's operations."
  },
  {
    question: "Do you provide customization options?",
    answer: "We understand every business is unique. We offer extensive customization for workflows, fields, and reporting modules to ensure the CRM fits your specific business processes perfectly."
  },
  {
    question: "How secure is my data?",
    answer: "Data security is our top priority. We use enterprise-grade encryption, regular security audits, and automated backups to ensure your sensitive business information is protected 24/7."
  },
  {
    question: "What support do you offer after deployment?",
    answer: "We provide comprehensive post-deployment support, including technical assistance, periodic training sessions, and dedicated account managers to help you maximize the value of your CRM."
  }
];

const FAQItem = ({ item, isOpen, onClick }) => {
  return (
    <div 
      className={`group transition-all duration-500 mb-4 rounded-xl border backdrop-blur-md overflow-hidden
        ${isOpen 
          ? 'bg-white/10 border-white/20' 
          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}`}
    >
      <div className="px-6 py-5 flex items-center justify-between gap-4">
        <h3 className={`text-base md:text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
          {item.question}
        </h3>
        <button
          type="button"
          onClick={onClick}
          aria-label={isOpen ? "Collapse answer" : "Expand answer"}
          aria-expanded={isOpen}
          className={`flex-shrink-0 w-8 h-8 cursor-pointer rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b274]/70
          ${isOpen ? 'bg-[#00b274] border-[#00b274] rotate-45' : 'bg-transparent'}`}>
          <svg className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/40 group-hover:text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      
      <div 
        className={`grid transition-all duration-500 ease-in-out
          ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-6 pb-6 text-white/50 text-base leading-relaxed max-w-[95%]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 px-6 overflow-hidden bg-[#0B1220]">
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#00b274]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Header - Left Side */}
          <div className={`max-w-lg space-y-4 transition-all duration-1000 ${isVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="text-[#00b274] text-[10px] font-bold uppercase tracking-[0.5em] block">
              FAQS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.2]">
              Answers to Common Questions
            </h2>
            <p className="text-base md:text-lg text-white/40 font-light leading-relaxed">
              Explore quick answers about implementation, integrations, timelines, and support.
            </p>
          </div>

          {/* FAQ Items - Right Side */}
          <div className={`w-full max-w-2xl ml-auto transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-up opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="flex flex-col">
              {faqData.map((item, index) => (
                <FAQItem 
                  key={index} 
                  item={item} 
                  isOpen={openIndex === index} 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
