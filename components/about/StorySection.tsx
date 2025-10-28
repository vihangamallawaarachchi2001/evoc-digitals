import Image from 'next/image';

export default function StorySection() {
  return (
    <section className="py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[36px] font-bold mb-4">Our Story</h2>
            <p className="text-[20px] font-light mb-6">
              EVOC Digital started with a simple idea: to lend creativity with strategy to deliver advertising that doesn’t just capture attention, but drives results. Our journey has been one of growth, innovation, and a relentless pursuit of excellence, helping brands navigate the digital landscape and connect with their audiences in meaningful ways. We believe in the power of a great story, and ours is just beginning.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/Rectangle 56.png"
              alt="Team working on analytics dashboard"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}