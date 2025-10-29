import Image from "next/image";

export default function TrustedBySection() {
  // Placeholder logos — replace with real brand logos
  const logos = ['/partners/Asset 2@4x.png','/partners/CMG Logos-01 jpg.jpg','/partners/logo balack.png','/partners/Neon_logo_png.png','/partners/Sirasa_TV_Logo.png']

  return (
    <section className="py-16 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted By Industry Leaders</h2>

        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((src, index) => (
            <div
              key={index}
              className="w-24 h-24 p-5 rounded-lg flex items-center justify-center shadow-md hover:shadow-green-500/20 transition"
            >
              <Image
              className={`object-cover ${index===2 && 'saturate-0'}`}
                src={src}
                alt=''
                width={96}
                height={96}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}