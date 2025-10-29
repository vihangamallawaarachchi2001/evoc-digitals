import Image from "next/image";

export default function StorySection() {
  return (
    <section className="py-20 px-6 bg-black text-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-white">
              Our <span className="text-[#55C514]">Story</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-400">
              <span className="text-white font-medium">EVOC Digital</span> started with a simple idea:
              to blend creativity with strategy and deliver advertising that doesn’t just capture attention,
              but drives real results.
              <br className="hidden md:block" />
              Our journey has been one of growth, innovation, and a relentless pursuit of excellence —
              helping brands navigate the digital landscape and connect with their audiences in meaningful ways.
              <br className="hidden md:block" />
              We believe in the power of a great story, and ours is just beginning.
            </p>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/Rectangle 56.png"
              alt="EVOC Digital Team"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl object-cover w-full max-w-[550px] sm:max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
