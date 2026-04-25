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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const handleLoginClick = () => {
    window.location.assign(CRM_LOGIN_URL);
  };

  const handleBookCallOpen = () => {
    setIsBookCallOpen(true);
    setIsMobileMenuOpen(false);
  };

  const handleBookCallClose = () => {
    setIsBookCallOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      const scrollDelta = currentScrollY - lastScrollY.current;

      if (currentScrollY <= 20) {
        setIsVisible(true);
      } else if (scrollDelta > 8) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else if (scrollDelta < -8) {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Industries", href: "/industries" },
    { name: "Blogs", href: "/blogs" },
    { name: "Triostack", href: "https://www.triostack.in/", external: true },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[200] isolate pointer-events-auto transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        } ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl py-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            : "bg-transparent py-6"
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
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center rounded-full px-4 py-2 text-[13px] font-medium transition-colors cursor-pointer text-slate-200/90 hover:text-[#7ef7c4]"
                  >
                    {link.name}
                  </a>
                ) : (
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
                )
              ))}
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-4">
            <a
              href={CRM_LOGIN_URL}
              onClick={handleLoginClick}
              className="hidden lg:block text-sm font-medium text-slate-100 hover:text-[#7ef7c4] transition-colors cursor-pointer"
            >
              Login
            </a>
            <button
              type="button"
              onClick={handleBookCallOpen}
              className="hidden lg:block bg-gradient-to-r from-[#7ef7c4] via-[#37dfaa] to-[#14c38e] text-[#04111c] px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:brightness-105 hover:shadow-[0_0_24px_rgba(55,223,170,0.28)] cursor-pointer"
            >
              Book a Call
            </button>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? 'rotate-45 translate-x-1' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${isMobileMenuOpen ? '-rotate-45 translate-x-1' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[190] lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <button
          type="button"
          aria-label="Close mobile menu"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-[#020814]/72 backdrop-blur-md"
        />

        <div
          id="mobile-nav-menu"
          className={`absolute inset-x-0 top-[72px] max-h-[calc(100dvh-72px)] overflow-y-auto bg-background/96 backdrop-blur-2xl transition-all duration-500 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="p-8 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-2">Navigation</p>
              {links.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold transition-colors text-white hover:text-[#7ef7c4]"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-2xl font-bold transition-colors ${
                      pathname === link.href ? 'text-[#7ef7c4]' : 'text-white hover:text-[#7ef7c4]'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="h-px bg-white/10 my-4" />

            <div className="flex flex-col gap-5">
              <a
                href={CRM_LOGIN_URL}
                onClick={handleLoginClick}
                className="text-xl font-bold text-white hover:text-[#7ef7c4] transition-colors"
              >
                Login
              </a>
              <button
                type="button"
                onClick={handleBookCallOpen}
                className="w-full bg-gradient-to-r from-[#7ef7c4] via-[#37dfaa] to-[#14c38e] text-[#04111c] py-4 rounded-2xl text-lg font-bold shadow-xl shadow-[#7ef7c4]/10"
              >
                Book a Call
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={isBookCallOpen} onClose={handleBookCallClose} />
    </>
  );
}
