"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIAL_DATA = [
  {
    image: "/image.png",
    name: "Dilshan Perera",
    review:
      "The custom software solution completely streamlined our inventory management. We cut down our processing time by over 40% in the first quarter! The support team was exceptionally professional and went above and beyond to tailor the system to our unique needs in the apparel sector. Highly recommended!",
    company: "Alpha Apparels (Pvt) Ltd",
  },
  {
    image: "/image copy.png",
    name: "Esha Fernando",
    review:
      "Our experience with their digital marketing campaign for the resort was phenomenal. We saw a direct increase in foreign bookings within a month. Their understanding of the local tourism market, combined with global best practices, is unmatched. A true partner in growth.",
    company: "Cinnamon Bay Resorts",
  },
  {
    image: "/image copy 2.png",
    name: "Krishnan Anand Anantharajah",
    review:
      "As a small-scale tea exporter, efficient logistics are everything. Their freight and forwarding services have been reliable, on-time, and significantly cheaper than our previous provider. They handle the documentation perfectly—a major relief for customs clearance. Fantastic service!",
    company: "Ceylon Pure Tea Exporters",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIAL_DATA.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? TESTIMONIAL_DATA.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % TESTIMONIAL_DATA.length);
  };

  return (
    <section className="w-full flex items-center justify-center my-20 px-6">
      <div className="max-w-7xl w-full flex flex-col items-center justify-center">
        <h2 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-center">
          What Our Clients Say
        </h2>

        <div className="w-full flex flex-col sm:flex-row items-center justify-between mt-12 sm:mt-20 gap-6">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex items-center justify-center p-3 rounded-full hover:bg-[#55C514] transition"
          >
            <Image src="/Back To.png" alt="Previous" width={40} height={40} />
          </button>

          {/* Testimonial Content */}
          <div className="flex flex-col justify-center items-center text-center sm:min-w-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={TESTIMONIAL_DATA[current].name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center items-center"
              >
                <Image
                  src={TESTIMONIAL_DATA[current].image}
                  alt={TESTIMONIAL_DATA[current].name}
                  width={100}
                  height={100}
                  className="rounded-full h-[100px] w-[100px] object-cover my-6"
                />
                <p className="text-sm sm:text-[15px]  max-w-[420px] italic mb-4 leading-relaxed">
                  {TESTIMONIAL_DATA[current].review}
                </p>
                <p className="text-[14px] font-bold text-[#55C514]">
                  {TESTIMONIAL_DATA[current].name}
                </p>
                <p className="text-[13px] ">
                  {TESTIMONIAL_DATA[current].company}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="hidden sm:flex items-center justify-center p-3 rounded-full hover:bg-[#55C514] transition"
          >
            <Image src="/Next Page.png" alt="Next" width={40} height={40} />
          </button>
        </div>

        {/* Dots for Mobile */}
        <div className="flex sm:hidden justify-center mt-6 gap-2">
          {TESTIMONIAL_DATA.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === current ? "bg-[#55C514]" : "bg-gray-300"
              } transition-all`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
