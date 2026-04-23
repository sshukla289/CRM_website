"use client";

import { useState } from "react";
import { submitLead } from "@/lib/submitLead";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [submitState, setSubmitState] = useState("idle");
  const [submitError, setSubmitError] = useState("");

  const phoneNumber = "919211941924";
  const defaultMessage = "Hi! I'm interested in your CRM solutions. Can you help me?";
  
  const handleStartChat = async (e) => {
    if (e) e.preventDefault();
    if (!contactData.name.trim() || !contactData.email.trim() || !contactData.phone.trim()) return;

    const finalMsg = [
      `Name: ${contactData.name.trim()}`,
      `Email: ${contactData.email.trim()}`,
      `Phone: ${contactData.phone.trim()}`,
      "",
      defaultMessage,
    ].join("\n");

    setSubmitState("submitting");
    setSubmitError("");

    try {
      await submitLead({
        name: contactData.name,
        email: contactData.email,
        phone: contactData.phone,
        message: defaultMessage,
        formId: "whatsapp-widget",
        extra: {
          entrypoint: "whatsapp-widget",
        },
      });

      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMsg)}`;
      window.open(whatsappUrl, "_blank");
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      setSubmitError(
        error instanceof Error ? error.message : "Unable to start WhatsApp right now."
      );
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-4 md:bottom-28 md:left-8">
      {/* WhatsApp Window */}
      <div 
        className={`w-[320px] bg-[#0b1220]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 origin-bottom-left ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-[#25D366] p-4 flex items-center gap-3 shadow-lg shadow-[#25D366]/20">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden border-2 border-white/20">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="Support" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-[#25D366] rounded-full"></div>
          </div>
          <div>
            <h3 className="text-white font-bold text-sm">WhatsApp Chat</h3>
            <p className="text-white/80 text-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse"></span>
              Online | Typically replies in mins
            </p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="ml-auto text-white hover:bg-white/10 p-1.5 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">


          <form onSubmit={handleStartChat} className="space-y-3">
            <div className="space-y-1.5">
              <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-[#25D366]">Full Name</label>
              <input
                required
                type="text"
                value={contactData.name}
                onChange={(e) => {
                  setContactData({ ...contactData, name: e.target.value });
                  if (submitError) {
                    setSubmitError("");
                  }
                }}
                placeholder="John Doe"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white transition-all focus:border-[#25D366] focus:outline-none placeholder:text-white/20"
              />
            </div>
            <div className="space-y-1.5">
              <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-[#25D366]">Work Email</label>
              <input
                required
                type="email"
                value={contactData.email}
                onChange={(e) => {
                  setContactData({ ...contactData, email: e.target.value });
                  if (submitError) {
                    setSubmitError("");
                  }
                }}
                placeholder="john@company.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white transition-all focus:border-[#25D366] focus:outline-none placeholder:text-white/20"
              />
            </div>
            <div className="space-y-1.5">
              <label className="ml-1 text-[10px] font-bold uppercase tracking-widest text-[#25D366]">Phone Number</label>
              <input
                required
                type="tel"
                value={contactData.phone}
                onChange={(e) => {
                  setContactData({ ...contactData, phone: e.target.value });
                  if (submitError) {
                    setSubmitError("");
                  }
                }}
                placeholder="+91 98765 43210"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white transition-all focus:border-[#25D366] focus:outline-none placeholder:text-white/20"
              />
            </div>

            
            <button 
              type="submit"
              disabled={submitState === "submitting"}
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 rounded-xl hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25D366]/20 group active:scale-[0.98]"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {submitState === "submitting" ? "Submitting..." : "Start Chat"}
            </button>

            {submitError ? (
              <p className="text-sm text-red-400">{submitError}</p>
            ) : null}
          </form>
        </div>
      </div>

      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-all duration-300 active:scale-95 group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        {isOpen ? (
          <svg className="w-8 h-8 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-8 h-8 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        )}
        
        {/* Pulsing ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-20"></span>
        )}
      </button>
    </div>
  );
}
