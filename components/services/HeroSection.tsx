export default function HeroSection() {
  return (
    <section className="py-20 px-6 bg-black relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#55C514]/10 to-transparent"></div>

      {/* Content container */}
      <div className="mt-10 md:mt-20 mx-auto max-w-7xl relative z-10 text-center">
        {/* Main Heading */}
        <h1
          className="
            font-extrabold
            leading-tight
            text-white
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
            mb-6
          "
        >
          <span className="text-[#55C514]">Advertising With Passion,</span> <br className="hidden sm:block" />
          Delivering{" "}
          <span className="text-[#55C514]">Your Brand Identity.</span>
        </h1>

        {/* Subheading / Description */}
        <p
          className="
            text-gray-400
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            max-w-2xl
            mx-auto
            px-4
            leading-relaxed
          "
        >
          We craft bespoke advertising strategies that amplify your message,
          engage your audience, and drive measurable results for your business.
        </p>
      </div>
    </section>
  );
}
