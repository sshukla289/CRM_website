import "./globals.css";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialStickyBar from "@/components/SocialStickyBar";
import Script from "next/script";

export const dynamic = 'force-dynamic';

export const metadata = {
  metadataBase: new URL('https://triostack.in'),
  title: {
    default: "CRM Solutions | Premium Enterprise Software Solution",
    template: "%s | CRM Solutions"
  },
  description: "Custom-built CRM solutions for Indian enterprises. Specialized in GST compliance, WhatsApp automation, and multi-branch sales operations.",
  keywords: ["CRM India", "GST CRM", "WhatsApp Automation CRM", "Enterprise CRM", "Sales Automation Software", "Triostack", "CRM for MSME"],
  authors: [{ name: "Triostack Team" }],
  creator: "Triostack",
  publisher: "Triostack",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://triostack.in",
    siteName: "CRM Solutions",
    title: "CRM Solutions | Enterprise Software Solution",
    description: "Scale your business with India's most compliant and automated CRM solution.",
    images: [
      {
        url: "/img.png",
        width: 1200,
        height: 630,
        alt: "CRM Solutions Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRM Solutions | Enterprise Software Solution",
    description: "Scale your business with India's most compliant and automated CRM solution.",
    images: ["/img.png"],
  },
  icons: {
    icon: "/triostack-logo.jpeg",
    shortcut: "/triostack-logo.jpeg",
    apple: "/triostack-logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <SocialStickyBar />
        {children}
        <div className="hidden md:block">
          <Chatbot />
          <WhatsAppButton />
        </div>
        
        {/* Sticky Bottom Help Bar */}
        <div className="fixed bottom-0 left-0 w-full bg-[#0b1220]/80 backdrop-blur-md border-t border-white/5 py-3 sm:py-4 z-40">
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-10">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Call:</span>
                <a href="tel:+919211941924" className="text-base sm:text-lg font-bold text-white hover:text-[#00b274] transition-all">+91 9211941924</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">WhatsApp:</span>
                <a 
                  href="https://wa.me/918826523845" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-base sm:text-lg font-bold text-white hover:text-[#25D366] transition-all flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  88265 23845
                </a>
              </div>
            </div>
            <div className="hidden lg:block h-4 w-px bg-white/10" />
            <p className="text-[8px] sm:text-[10px] text-slate-500 uppercase tracking-wider text-center hidden sm:block">Instant consultation | Fast callback | No obligation</p>
          </div>
        </div>
      </body>
    </html>
  );
}
