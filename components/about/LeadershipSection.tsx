import Image from 'next/image';

const leadership = [
  {
    name: "Roshan Thiranjana",
    role: "Chief Executive Officer",
    bio: " Roshan leads our vision with relentless drive and strategic insight.",
    image: "/image copy 4.png"
  },
  {
    name: "Sethuli Wijesekara",
    role: "Chief Creative Officer",
    bio: "Sethuli crafts compelling narratives that turn brands into cultural icons.",
    image: "/image copy 5.png"
  },
  // {
  //   name: "Michael Chen",
  //   role: "Chief Technology Officer",
  //   bio: "Michael builds the tech backbone that powers our campaigns. He believes data + creativity = unstoppable growth.",
  //   image: "/placeholder-ceo-3.jpg"
  // }
];

export default function LeadershipSection() {
  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Leadership</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {leadership.map((leader, index) => (
            <div key={index} className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="rounded-full object-cover border-4 border-[#55C514]"
                />
              </div>
              <h3 className="text-xl font-bold text-[#55C514] mb-1">{leader.name}</h3>
              <p className="text-gray-300 font-medium mb-3">{leader.role}</p>
              <p className="text-gray-400 text-sm">{leader.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}