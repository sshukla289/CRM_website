import "./globals.css";

export const dynamic = 'force-dynamic';

export const metadata = {
  title: "CRM Solutions | Premium Enterprise Software",
  description: "Custom-built CRM solutions for Indian enterprises focusing on GST compliance and ROI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
