import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyPartner from "@/components/WhyPartner";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyPartner />
      </main>
    </>
  );
}
