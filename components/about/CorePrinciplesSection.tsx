//need to use lucide react instead of react-icons/fa
import { Handshake, Heart, Users } from 'lucide-react';

export default function CorePrinciplesSection() {
  const principles = [
    {
      icon: <Heart className="text-green-400 text-4xl mb-4" />,
      title: "Passion",
      description: "We infuse every project with boundless energy and commitment to making impact the core driver."
    },
    {
      icon: <Handshake className="text-green-400 text-4xl mb-4" />,
      title: "Precision",
      description: "Our data-driven strategies and meticulous execution ensure every initiative is backed by performance."
    },
    {
      icon: <Users className="text-green-400 text-4xl mb-4" />,
      title: "Partnership",
      description: "We believe in true collaboration, working as an extension of your team to achieve shared goals."
    }
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">Core Principles</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div key={index} className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition">
              {principle.icon}
              <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
              <p className="text-gray-400 text-sm">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}