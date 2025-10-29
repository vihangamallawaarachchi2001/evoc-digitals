import Image from 'next/image';

export default function PerformanceGrid() {
  const images = [
    {
      src: "/crypto-trading-trading-market-nel-2025.mp4",
      alt: "Data dashboard with financial charts and graphs"
    },
    {
      src: "/pin-en-km-solucion.mp4",
      alt: "Business leader presenting growth metrics to team"
    },
    {
      src: "/social-media-management-video-in-2025-massage-marketing-greenscreen-ideas-how-to-make-money.mp4",
      alt: "Close-up of hands typing on laptop during analysis"
    },
    {
      src: "/pin-by-pinfoxi-on-motion-in-2025-business-instagram-ideas-packaging-template-design-stock-market-graph.mp4",
      alt: "Laptop displaying stock market chart with phone nearby"
    }
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-7xl">
        {/* Horizontal Scroll on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-4 md:gap-6 md:overflow-visible">
          {images.map((img, index) => (
            <div
              key={index}
              className="snap-start shrink-0 w-[300px] md:w-auto h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-green-500/20 transition relative group"
            >
              <video
                src={img.src}
                autoPlay
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Optional overlay on hover */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}