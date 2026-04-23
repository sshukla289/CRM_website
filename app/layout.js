import { Inter } from "next/font/google";
import "./globals.css";
import SocialStickyBar from "@/components/SocialStickyBar";

export const dynamic = 'force-dynamic';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "CRM Solutions | Premium Enterprise Software",
  description: "Custom-built CRM solutions for Indian enterprises focusing on GST compliance and ROI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        <SocialStickyBar />
        {children}
      </body>
    </html>
  );
}
