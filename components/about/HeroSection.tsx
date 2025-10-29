export default function HeroSection() {
  return (
    <section className="pt-24 pb-20 px-6 bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#55C514]/10 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl text-center flex flex-col items-center">
        {/* Main Heading */}
        <h1
          className="
            font-extrabold
            leading-tight
            text-white
            mb-6
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            xl:text-7xl
          "
        >
          <span className="text-[#55C514]">Who We Are</span>
        </h1>

        {/* Supporting Paragraph */}
        <p
          className="
            text-gray-400
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            max-w-xl
            sm:max-w-2xl
            mx-auto
            leading-relaxed
            px-2 sm:px-0
          "
        >
          We are a team of innovators, designers, and strategists passionate
          about crafting digital experiences that inspire engagement, fuel
          growth, and shape the future.
        </p>
      </div>
    </section>
  );
}
