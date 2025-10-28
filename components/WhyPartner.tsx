import Image from "next/image";
import React from "react";

const WhyPartner = () => {
  return (
    <section className="w-full flex items-center justify-center my-16 sm:my-20 md:my-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl w-full flex flex-col items-center justify-center">

        {/* Heading */}
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-[32px] text-center leading-tight">
          Why Partner with <span className="text-[#55C514]">EVOC</span> Digital?
        </h2>

        {/* Feature Cards */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center md:justify-between gap-10 sm:gap-8 mt-12 md:mt-20 w-full">

          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center text-center max-w-xs">
            <Image
              src="/Data Recovery.png"
              alt="data recovery"
              width={100}
              height={100}
              className="h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[100px] md:w-[100px]"
            />
            <p className="font-bold text-base sm:text-lg mt-4 sm:mt-6">
              Data-Driven Strategy
            </p>
            <p className="text-sm sm:text-[15px] mt-3 sm:mt-4 leading-relaxed">
              We leverage analytics to create targeted campaigns that reach the
              right audience at the right time.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center text-center max-w-xs">
            <Image
              src="/Light On.png"
              alt="creative excellence"
              width={100}
              height={100}
              className="h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[100px] md:w-[100px]"
            />
            <p className="font-bold text-base sm:text-lg mt-4 sm:mt-6">
              Creative Excellence
            </p>
            <p className="text-sm sm:text-[15px] mt-3 sm:mt-4 leading-relaxed">
              Our team of creatives brings your brand's story to life with
              compelling visuals and messaging.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center text-center max-w-xs">
            <Image
              src="/Positive Dynamic.png"
              alt="proven ROI"
              width={100}
              height={100}
              className="h-20 w-20 sm:h-[90px] sm:w-[90px] md:h-[100px] md:w-[100px]"
            />
            <p className="font-bold text-base sm:text-lg mt-4 sm:mt-6">
              Proven ROI
            </p>
            <p className="text-sm sm:text-[15px] mt-3 sm:mt-4 leading-relaxed">
              We focus on delivering measurable results that grow your bottom
              line and maximize your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;
