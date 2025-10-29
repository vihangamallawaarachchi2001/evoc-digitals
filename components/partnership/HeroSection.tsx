import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden mt-20">
      <div className="absolute inset-0 bg-linear-to-br from-green-900/10 to-transparent"></div>
      <div className="w-full mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-[128px] font-extrabold mb-4 leading-32">
              <span className="text-[#55C514]">Partner</span> <br />
              With Us
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Let’s build something extraordinary— together.
            </p>
            <Link
              href="#become-partner"
              className="bg-[#55C514] text-black font-bold py-3 px-8 rounded transition"
            >
              Become a Partner
            </Link>
          </div>
          <div className="relative">
            <Image
              src="/Rectangle 30.png"
              alt="Professional office environment with team collaboration"
              width={800}
              height={500}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}