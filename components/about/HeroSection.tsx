export default function HeroSection() {
  return (
    <section className="pt-24 px-6 relative overflow-hidden flex items-center justify-center">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#55C514]/10 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl text-center flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white mb-4">
          <span className="text-[#55C514]">Who We Are</span>
        </h1>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          We are a team of innovators, designers, and strategists passionate
          about crafting digital experiences that inspire engagement, fuel
          growth, and shape the future.
        </p>
      </div>
    </section>
  );
}
