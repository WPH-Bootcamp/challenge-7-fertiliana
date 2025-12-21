import { useRef, useState } from "react";

type Testimonial = {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 0,
    text: "They turned our vision into reality efficiently and professionally.",
    name: "John Lee",
    role: "Director at Innovate Corp",
    avatar: "/testimonial/John-Lee.svg",
    rating: 4,
  },
  {
    id: 1,
    text:
      "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
    avatar: "/testimonial/Sarah-Tan.svg",
    rating: 5,
  },
  {
    id: 2,
    text:
      "The collaboration was seamless, and their expertise truly helped us launch a successful product.",
    name: "Emily Chen",
    role: "Marketing Head at TechNova",
    avatar: "/testimonial/Emily-Chen.svg",
    rating: 4,
  },
];

export default function TestimonialSection() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToCard = (index: number) => {
    setActive(index);
    cardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <section className="px-4 py-24 bg-white dark:bg-black text-black dark:text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-[24px] md:text-[32px] font-bold">
          What Partners Say About Working With Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm md:text-base">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-16 scrollbar-hide touch-pan-x">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[index] = el;}}
              className="
                relative
                snap-center
                min-w-[90%] md:min-w-[460px]
                max-w-[520px]
                bg-gray-100 dark:bg-[#0B0F14]
                rounded-2xl
                px-6 pt-10 pb-16
                flex flex-col items-center text-center
              "
            >

              {/* Quote */}
                <div
                className="
                absolute
                top-2
                left-6
                z-10
                w-10 h-10
                bg-transparent
                rounded-xl
                flex items-center justify-center">
                <img
                    src="/quote.svg"
                    alt="quote"
                    className="w-8 h-8 md:w-10 md:h-10 opacity-70 mb-4"
                />
                </div>


              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Text */}
              <p className="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                “{item.text}”
              </p>

              {/* Name */}
              <p className="font-semibold text-black dark:text-white">{item.name}</p>
              <p className="text-orange-500 text-sm">{item.role}</p>

              {/* Avatar */}
              <img
                src={item.avatar}
                alt={item.name}
                className="
                  w-14 h-14 rounded-full object-cover
                  absolute -bottom-7 left-1/2 -translate-x-1/2
                  border-2 border-gray-300 dark:border-gray-700
                "
              />
            </div>
          ))}
        </div>

        {/* Fade Gradient */}
        <div className="hidden md:block absolute left-0 top-0 w-32 h-full bg-gradient-to-r
         from-white dark:from-black to-transparent pointer-events-none" />
        <div className="hidden md:block absolute right-0 top-0 w-32 h-full bg-gradient-to-l
         from-white dark:from-black to-transparent pointer-events-none" />
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToCard(i)}
            className={`w-2.5 h-2.5 rounded-full transition ${
              active === i
                ? "bg-[#FF623E]"
                 : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500  dark:hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
