"use client";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQSection from "@/components/contact/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Page = () => {
  return (
    <>
      <Header />

      <main className="bg-black text-white mt-20">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-black">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
              <span className="text-[#55C514]">Connect With Our</span>
              <br />
              Experts
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Have questions or need guidance? Reach out to our expert team —
              we’re here to help bring your ideas to life and provide solutions
              that truly work.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-black">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
              {/* Form Section */}
              <div className="lg:col-span-2">
                  <ContactForm />

              </div>

              {/* Contact Info */}
                <ContactInfo />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-b from-black to-[#0a0a0a]">
          <div className="container mx-auto max-w-6xl">
            <FAQSection />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Page;
