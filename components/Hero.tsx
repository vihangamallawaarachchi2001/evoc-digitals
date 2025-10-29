import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section className="w-full min-h-[80v] flex items-center justify-center mt-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl w-full flex flex-col gap-6 md:gap-8 pt-10 sm:pt-16 md:pt-20">

        {/* Headings */}
        <h1 className="font-extrabold text-[#55C514] leading-4 text-4xl sm:text-5xl md:text-7xl lg:text-[84px] max-w-[1223px]">
          ADVERTISING ENTHUSIASM
        </h1>

        <p className="font-extrabold text-2xl sm:text-3xl md:text-5xl lg:text-[64px]">
          FOR THE
        </p>

        {/* Brand Image */}
        <div className="w-full max-w-[1133px]">
          <Image
            src="/BRAND.png"
            alt="brand"
            width={1133}
            height={281}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        <p className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
          TO YOUR CUSTOMER
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[847px]">
          We craft data-driven strategies and creative campaigns that connect you with your audience and deliver proven results.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
          <Link
            href="#contact"
            className="bg-[#55C514] text-black text-center font-bold py-3 px-6 rounded w-full sm:w-[200px] md:w-[240px] lg:w-[281px] transition duration-300 hover:bg-[#49a710]"
          >
            Get Started
          </Link>

          <Link
            href="#learn-more"
            className=" bg-[#404040CC] text-[#ffffff] text-center font-bold py-3 px-6 rounded w-full sm:w-[200px] md:w-[240px] lg:w-[281px] transition duration-300 hover:bg-[#55C514] hover:text-black"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
