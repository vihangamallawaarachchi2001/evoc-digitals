import { CheckCircle } from "lucide-react";


export default function PartnershipOptions() {
  const options = [
    {
      title: "Agency Partners",
      description: "Collaborate with us to expand your service offerings and deliver comprehensive digital advertising solutions to your clients.",
      icon: <CheckCircle className="text-green-400 text-xl" />
    },
    {
      title: "Brand Partners",
      description: "Partner directly with EVOC to leverage our strategic insights and drive measurable growth for your brand’s campaigns.",
      icon: <CheckCircle className="text-green-400 text-xl" />
    },
    {
      title: "Technology Partners",
      description: "Integrate your platform with our systems to create powerful, synergistic solutions for the modern marketing ecosystem.",
      icon: <CheckCircle className="text-green-400 text-xl" />
    }
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">Find the Right Fit</h2>

        <div className="space-y-6">
          {options.map((option, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg flex items-start justify-between hover:bg-gray-800 transition"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-gray-400 text-sm">{option.description}</p>
              </div>
              <div className="ml-4">
                {option.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}