import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    role: "CEO, Innovate Co.",
    quote: "Working with EVOC Digital was a game-changer. Their team's creativity and dedication took our brand to the next level. We've seen a significant increase in engagement and conversions.",
    avatar: "/image copy 2.png"
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    role: "CEO, Innovate Co.",
    quote: "EVOC Digital didn't just deliver ads — they delivered results. Their strategic approach and data-driven mindset transformed our marketing ROI.",
    avatar: "/image copy 2.png"
  },
  {
    id: 3,
    name: "David Kim",
    role: "CEO, Innovate Co.",
    quote: "The team at EVOC understood our vision instantly. Their passion for storytelling and performance marketing made all the difference.",
    avatar: "/image copy 2.png"
  },
  {
    id: 4,
    name: "Emma Lopez",
    role: "CEO, Innovate Co.",
    quote: "From day one, EVOC treated us like partners. They listened, adapted, and executed flawlessly. Our brand has never been stronger.",
    avatar: "/image copy 2.png"
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "CEO, Innovate Co.",
    quote: "If you want real growth, not just flashy ads, work with EVOC. Their blend of art and science is unmatched in the industry.",
    avatar: "/image copy 2.png"
  },
  {
    id: 6,
    name: "Olivia Chen",
    role: "CEO, Innovate Co.",
    quote: "EVOC Digital doesn’t just meet expectations — they exceed them. Our customer acquisition costs dropped while conversions soared.",
    avatar: "/image copy 2.png"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 px-4 bg-black">
      <div className="w-full mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition"
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="rounded-full object-cover border-2 border-[#55C514]"
                />
              </div>
              <blockquote className="text-sm  italic mb-4">
                “{testimonial.quote}”
              </blockquote>
              <div>
                <p className="font-bold text-[#55C514]">{testimonial.name}</p>
                <p className=" text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}