import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ProductShowcase from "@/components/ProductShowcase";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TestimonialSection from "@/components/TestimonialSection";
import BrandSection from "@/components/BrandSection";
import ConsultationSection from "@/components/ConsultationSection";
import GooglePlaySection from "@/components/GooglePlaySection";
import SEOComponent from "@/components/SEOComponent";

export const metadata = {
  title: "CRM Solutions | Best CRM for Indian Enterprises & MSMEs",
  description: "Boost your sales with CRM Solutions. Features WhatsApp automation, GST-ready invoicing, and multi-branch management tailored for Indian businesses.",
  alternates: {
    canonical: "https://triostack.in",
  },
};
export default function HomePage() {
  return (
    <main className="min-h-screen relative bg-[#0b1220]">
      <SEOComponent 
        title="Best CRM for Indian Enterprises"
        description="Boost your sales with CRM Solutions. Features WhatsApp automation, GST-ready invoicing, and multi-branch management."
      />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <PricingSection />
      <TestimonialSection />
      <ConsultationSection />
      <GooglePlaySection />
      <FAQSection />

      <BrandSection />
      <TrustSection />
      <ContactSection />
    </main>

  );
}
