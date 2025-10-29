import { Eye, Handshake, Lightbulb } from "lucide-react";


export default function WhyPartnerSection() {
  const reasons = [
    {
      icon: <Lightbulb className="text-[#55C514] text-4xl mb-4" />,
      title: "Passion",
      description: "We infuse every project with boundless energy and a genuine love for creating impactful brand stories."
    },
    {
      icon: <Eye className="text-[#55C514] text-4xl mb-4" />,
      title: "Precision",
      description: "Our data-driven strategies and meticulous execution ensure every detail is optimized for performance."
    },
    {
      icon: <Handshake className="text-[#55C514] text-4xl mb-4" />,
      title: "Partnership",
      description: "We believe in true collaboration, working as an extension of your team to achieve shared goals."
    }
  ];

  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4">Why Partner With EVOC?</h2>
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
          Unlock mutual growth and access our expertise in the digital landscape. We focus on creating innovative solutions that drive results for you and your clients.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 bg-black rounded-xl hover:bg-gray-800 transition group"
            >
              {reason.icon}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-[#55C514]">{reason.title}</h3>
              <p className="text-gray-400 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}