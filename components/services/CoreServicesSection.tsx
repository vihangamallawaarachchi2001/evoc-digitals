import { ChartLine, Eye, File, Hash } from "lucide-react";

export default function CoreServicesSection() {
  const services = [
    {
      icon: <Hash className="text-[#55C514] w-10 h-10 mb-3" />,
      title: "Social Media",
      description:
        "We develop tailored social media campaigns that build brand awareness, foster community, and drive conversions across platforms.",
    },
    {
      icon: <File className="text-[#55C514] w-10 h-10 mb-3" />,
      title: "Content Production",
      description:
        "From video to blogs to infographics — we create compelling content that tells your story and captures attention.",
    },
    {
      icon: <ChartLine className="text-[#55C514] w-10 h-10 mb-3" />,
      title: "Performance Marketing",
      description:
        "Data-driven campaigns optimized for ROI — we track, test, and refine to maximize your advertising spend.",
    },
    {
      icon: <Eye className="text-[#55C514] w-10 h-10 mb-3" />,
      title: "Brand Strategy",
      description:
        "We help define your unique voice, positioning, and visual identity to stand out in a crowded marketplace.",
    },
  ];

  return (
    <section className="py-20 px-6 text-gray-300">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12">
          Our <span className="">Core Services</span>
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 hover:bg-gray-800 p-8 rounded-2xl shadow-md transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
