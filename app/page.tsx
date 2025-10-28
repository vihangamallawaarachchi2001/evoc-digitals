import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import WhyPartner from "@/components/WhyPartner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyPartner />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
