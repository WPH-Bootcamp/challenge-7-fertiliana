import { useState } from "react";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We provide custom web/app development, cloud solutions, UX/UI design, and more.",
  },
  {
    q: "How do I know if this is right for my business?",
    a: "We tailor every solution to your business size, goals, and industry.",
  },
  {
    q: "How much does a project cost?",
    a: "Project costs depend on scope, features, and timelines — we’ll create a quote for you.",
  },
  {
    q: "How long does it take?",
    a: "Average projects take 6–12 weeks depending on complexity and revisions.",
  },
  {
    q: "Can I start with a small project first?",
    a: "Yes! We can start with a pilot project to help you validate your idea.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white dark:bg-[#0A0D12] text-black dark:text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-14">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Need Help? Start <br /> Here.
          </h2>
          <p className="text-gray-600 text-sm mt-4 md:mt-0 max-w-[160px] md:ml-auto">
            Everything you need to know — all in one place.
          </p>  
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* FAQ */}
          <div className="md:col-span-2 border-t border-gray-800">
            {faqs.map((item, i) => (
              <div
                key={i}
                className="border-b border-gray-400 py-5 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-[15px] md:text-base">
                    {item.q}
                  </h3>
                  <span className="text-[#FF623E] text-xl">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </div>

                {openIndex === i && (
                  <p className="text-gray-400 text-sm mt-3 max-w-xl">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="bg-[#C94F2D] rounded-3xl p-6 flex flex-col gap-4">
            <h3 className="text-2xl font-semibold leading-snug">
              Let’s talk it <br /> through
            </h3>
            <p className="text-sm opacity-90">
              book a free consultation with our team.
            </p>

            <img
              src="/Consultation.svg"
              alt="Consultation"
              className="rounded-xl object-cover h-40 w-full"
            />

            <button className="mt-2 bg-black dark:bg-white text-white dark:text-black rounded-full py-3 text-sm font-semibold hover:opacity-90 transition">
              Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
