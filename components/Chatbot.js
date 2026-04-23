"use client";

import { useState, useEffect, useRef } from "react";
import { submitLead } from "@/lib/submitLead";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadsCaptured, setIsLeadsCaptured] = useState(false);
  const [step, setStep] = useState("questions"); // questions, complete
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [leadStatus, setLeadStatus] = useState("idle");
  const [leadError, setLeadError] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! Welcome to CRM Solutions. I'm here to help you find the perfect plan for your business." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const questions = [
    "What is your primary goal for a CRM? (e.g., Sales, Support, Operations)",
    "How many users will be using the CRM?",
    "Are you currently using any other CRM software?",
    "What industry is your business in?",
    "When would you like to get started?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isLeadsCaptured) {
      scrollToBottom();
    }
  }, [messages, isLeadsCaptured]);

  const handleInitialSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) return;

    setLeadStatus("submitting");
    setLeadError("");

    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        formId: "chatbot-intro",
        notes: "Lead captured before chatbot qualification flow.",
        extra: {
          entrypoint: "chatbot",
        },
      });

      setIsLeadsCaptured(true);
      setLeadStatus("success");
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: `Great to meet you, ${formData.name}! Let me ask you a few quick questions to better understand your needs.` },
        { role: "bot", content: questions[0] }
      ]);
    } catch (error) {
      setLeadStatus("error");
      setLeadError(
        error instanceof Error ? error.message : "Unable to start chat right now."
      );
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Logic flow
    setTimeout(() => {
      if (step === "questions") {
        if (currentQuestionIndex < questions.length - 1) {
          const nextIndex = currentQuestionIndex + 1;
          setCurrentQuestionIndex(nextIndex);
          setMessages((prev) => [...prev, { role: "bot", content: questions[nextIndex] }]);
        } else {
          setMessages((prev) => [...prev, { role: "bot", content: "Thank you for sharing that! Our expert will review your requirements and call you back shortly. Have a great day!" }]);
          setStep("complete");
        }
      }
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] md:bottom-28 md:right-8">
      {/* Chat Window */}
      <div className={`absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[480px] bg-[#0b1220]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 origin-bottom-right flex flex-col ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-[#00b274] to-[#008a5a] p-5 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-[#0b1220] rounded-full"></span>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Triostack AI</h3>
              <p className="text-white/70 text-[10px] uppercase tracking-widest font-semibold">Active Now</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-xl transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {!isLeadsCaptured ? (
          /* Initial Lead Form */
          <div className="flex-1 p-6 flex flex-col justify-center gap-6">
            <form onSubmit={handleInitialSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#00b274] ml-1">Full Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (leadError) {
                      setLeadError("");
                    }
                  }}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#00b274] focus:ring-1 focus:ring-[#00b274]/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#00b274] ml-1">Phone Number</label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (leadError) {
                      setLeadError("");
                    }
                  }}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#00b274] focus:ring-1 focus:ring-[#00b274]/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-widest font-bold text-[#00b274] ml-1">Work Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (leadError) {
                      setLeadError("");
                    }
                  }}
                  placeholder="john@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#00b274] focus:ring-1 focus:ring-[#00b274]/50 transition-all"
                />
              </div>
              <button
                type="submit"
                disabled={leadStatus === "submitting"}
                className="w-full bg-gradient-to-r from-[#00b274] to-[#008a5a] text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#00b274]/20 hover:scale-[1.02] active:scale-95 transition-all mt-4 flex items-center justify-center gap-2"
              >
                {leadStatus === "submitting" ? "Starting..." : "Start Chatting"}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              {leadError ? (
                <p className="text-sm text-red-400">{leadError}</p>
              ) : null}
            </form>
          </div>
        ) : (
          /* Chat Interface */
          <>
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm ${msg.role === 'user' ? 'bg-[#00b274] text-white rounded-tr-none' : 'bg-white/5 border border-white/10 text-slate-200 rounded-tl-none'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-5 border-t border-white/5 bg-black/20">
              {step === "complete" ? (
                <div className="text-center py-3 bg-[#00b274]/10 rounded-2xl border border-[#00b274]/20">
                  <p className="text-[#00b274] text-xs font-bold uppercase tracking-wider">Conversation Ended</p>
                </div>
              ) : (
                <form onSubmit={handleSend} className="relative group">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your answer..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-5 pr-12 py-4 text-white text-sm focus:outline-none focus:border-[#00b274] focus:ring-1 focus:ring-[#00b274]/50 transition-all placeholder:text-slate-500"
                  />
                  <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00b274] text-white p-2.5 rounded-xl hover:bg-[#009a63] transition-all shadow-lg shadow-[#00b274]/20 active:scale-90">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              )}
              <p className="text-[10px] text-slate-500 text-center mt-3">Powered by Triostack CRM</p>
            </div>
          </>
        )}
      </div>

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-[#00b274] to-[#008a5a] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,178,116,0.4)] hover:scale-110 transition-all duration-300 active:scale-95 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        <div className="relative z-10 transition-transform duration-500" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
           </svg>
        </div>
        
        {/* Notification badge */}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 border-4 border-[#0b1220] rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
          </span>
        )}
      </button>
    </div>
  );
}
