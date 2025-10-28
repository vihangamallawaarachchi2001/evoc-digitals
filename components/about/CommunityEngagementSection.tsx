import Image from 'next/image';

export default function CommunityEngagementSection() {
  return (
    <section className="py-16 px-4 bg-black ">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Community Engagement</h2>
            <p className="text-lg text-gray-300 mb-6">
              We believe in giving back to the communities that have helped us grow. EVOC Digital proudly partners with local non-profits, offering pro-bono services and volunteering our time to help great causes amplify their message and make a lasting impact.
            </p>
            <Link
              href="/initiatives"
              className="inline-flex items-center text-[#55C514]  font-medium transition"
            >
              Learn About Our Initiatives &gt;
            </Link>
          </div>
          <div className="relative">
            <video
              src="/d-thompson-🇮🇹-on-instagram-video-video-in-2025-earth-from-space-earth-print-stickers.mp4"
              width={800}
              height={500}
              className="rounded-xl shadow-lg"
              autoPlay
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Import Link for use above
import Link from 'next/link';