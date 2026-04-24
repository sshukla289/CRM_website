import "./globals.css";
import Chatbot from "@/components/Chatbot";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialStickyBar from "@/components/SocialStickyBar";
import Script from "next/script";

export const dynamic = 'force-dynamic';

export const metadata = {
  metadataBase: new URL('https://triostack.in'),
  title: {
    default: "Triostack CRM | Premium Enterprise Software Solution",
    template: "%s | Triostack CRM"
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
    siteName: "Triostack CRM",
    title: "Triostack CRM | Enterprise Software Solution",
    description: "Scale your business with India's most compliant and automated CRM solution.",
    images: [
      {
        url: "/img.png",
        width: 1200,
        height: 630,
        alt: "Triostack CRM Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Triostack CRM | Enterprise Software Solution",
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
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8">
            <div className="flex items-center gap-3">
              <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Need help fast?</span>
              <a href="tel:+919211941924" className="text-lg sm:text-xl font-bold text-white hover:text-[#00b274] transition-all inline-block animate-pulse-slow">+91 9211941924</a>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/10" />
            <p className="text-[8px] sm:text-[10px] text-slate-500 uppercase tracking-wider text-center">Instant consultation | Fast callback | No obligation</p>
          </div>
        </div>
      </body>
    </html>
  );
}
