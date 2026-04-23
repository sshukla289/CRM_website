"use client";

import Link from "next/link";


import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BookCallModal from "./BookCallModal";

const CRM_LOGIN_URL = "https://crm.triostack.in/login";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const handleLoginClick = () => {
    window.location.assign(CRM_LOGIN_URL);
  };

  const handleBookCallOpen = () => {
    setIsBookCallOpen(true);
  };

  const handleBookCallClose = () => {
    setIsBookCallOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background effect
      setIsScrolled(currentScrollY > 20);

      // Visibility logic (hide on scroll down, show on scroll up)
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (scrollDelta > 8) {
        setIsVisible(false);
      } else if (scrollDelta < -8) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Industries", href: "/industries" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[200] isolate pointer-events-auto transition-all duration-300 will-change-transform ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } ${
          isScrolled
            ? "bg-[#07111d]/90 backdrop-blur-xl py-4 border-b border-[#8fb7ff]/12 shadow-[0_20px_45px_rgba(3,8,20,0.5)]"
            : "bg-[#050b14]/72 backdrop-blur-lg py-6 border-b border-white/8 shadow-[0_16px_36px_rgba(2,6,16,0.32)]"
        }`}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="relative z-10 inline-flex items-center gap-3 cursor-pointer" aria-label="Go to home page">
              <div className="relative w-10 h-10 overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-[#14c38e]/10">
                <img 
                  src="/triostack-logo.jpeg" 
                  alt="Trio-CRM Logo" 
                  className="w-full h-full object-cover"
                />


              </div>
              <span className="text-xl font-bold text-[#f3fffb] tracking-tight">Trio-CRM</span>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`relative z-10 inline-flex items-center rounded-full px-4 py-2 text-[13px] font-medium transition-colors cursor-pointer ${
                    pathname === link.href
                      ? "text-[#7ef7c4]"
                      : "text-slate-200/90 hover:text-[#7ef7c4]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <a
              href={CRM_LOGIN_URL}
              onClick={handleLoginClick}
              className="hidden md:block text-sm font-medium text-slate-100 hover:text-[#7ef7c4] transition-colors cursor-pointer"
            >
              Login
            </a>
            <button
              type="button"
              onClick={handleBookCallOpen}
              aria-haspopup="dialog"
              aria-expanded={isBookCallOpen}
              aria-controls="book-call-modal"
              className="bg-gradient-to-r from-[#7ef7c4] via-[#37dfaa] to-[#14c38e] text-[#04111c] px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:brightness-105 hover:shadow-[0_0_24px_rgba(55,223,170,0.28)] cursor-pointer"
            >
              Book a Call
            </button>
          </div>
        </div>
      </nav>

      <BookCallModal isOpen={isBookCallOpen} onClose={handleBookCallClose} />
    </>
  );
}
