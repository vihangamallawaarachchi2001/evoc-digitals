import React from "react";
import { Code, Monitor, PenTool } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-[#55C514]" />,
      title: "Web Development",
      description: "Building responsive, fast, and scalable websites tailored to your brand.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-[#55C514]" />,
      title: "Digital Marketing",
      description: "Data-driven strategies to boost your online presence and engagement.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#55C514]" />,
      title: "Design & Branding",
      description: "Creative designs and branding solutions that leave a lasting impression.",
    },
  ];

  return (
    <section className="bg-black text-gray-300 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-12">
          Our <span className="text-[#55C514]">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-[15px] sm:text-[16px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
