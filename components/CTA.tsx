import Link from "next/link";

export default function CTASection() {
  return (
    <section className="flex items-center justify-center">
      <div className="py-16 px-4 bg-[#55C514] max-w-7xl text-center rounded-[10px] w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold  mb-4">
            Ready To Elevate Your Brand?
          </h2>
          <p className="text-lg  mb-8 max-w-[847px]">
            Let’s build a strategy that delivers results. Contact us today for a
            free consultation and see how we can transform your brand’s digital
            presence.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition"
          >
            Let's Talk
          </Link>
      </div>
    </section>
  );
}
