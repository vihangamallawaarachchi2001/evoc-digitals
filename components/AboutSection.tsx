import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-black text-gray-300 py-20 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left - Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/image copy 3.png"
            alt="EVOC Digital team"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            About <span className="text-[#55C514]">EVOC Digital</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-[15px] sm:text-[16px] max-w-xl mx-auto lg:mx-0">
            At <span className="text-[#55C514] font-semibold">EVOC Digital</span>,
            we blend creativity and technology to craft digital experiences that evoke emotion,
            inspire engagement, and drive measurable growth. From data-driven marketing strategies
            to innovative design and development, we help brands tell their story in a way that
            truly connects with their audience.
          </p>

          <p className="text-gray-400 leading-relaxed text-[15px] sm:text-[16px] max-w-xl mx-auto lg:mx-0 mt-5">
            We believe in partnerships built on trust, transparency, and impact —
            where every project becomes a shared journey toward success.
          </p>

          <div className="mt-8">
            <a
              href="/about"
              className="inline-block bg-[#55C514] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#69e226] transition-all"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
