import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-16 px-6 bg-black">
      <div className="max-w-7xl mx-auto text-center bg-[#55C514] rounded-2xl py-12 sm:py-16 px-6 sm:px-12 flex flex-col items-center justify-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
          Ready to <span className="block sm:inline">Elevate Your Brand?</span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-white mb-8 max-w-2xl leading-relaxed">
          Let our experts craft a tailored strategy to meet your unique goals.
          Get a custom proposal and discover how we can ignite your growth.
        </p>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="inline-block bg-white text-[#55C514] font-semibold sm:font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-xl hover:bg-gray-100 transition-all duration-300"
        >
          Request a Custom Proposal
        </Link>
      </div>
    </section>
  );
}
