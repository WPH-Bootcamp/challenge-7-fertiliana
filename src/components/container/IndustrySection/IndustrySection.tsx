import { useState } from "react";

type Industry = {
  key: string;
  label: string;
  description: string;
  image: string;
};

const industries: Industry[] = [
  {
    key: "fintech",
    label: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: "/industry/Fintech.svg",
  },
  {
    key: "ecommerce",
    label: "E-Commerce",
    description:
      "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: "/industry/E-Commerce.svg",
  },
  {
    key: "healthcare",
    label: "Healthcare",
    description:
      "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: "/industry/Healthcare.svg",
  },
];

export default function IndustrySection() {
  const [active, setActive] = useState("fintech");

  const currentIndustry = industries.find(
    (industry) => industry.key === active
  );

  return (
    <section className="px-4 py-20 max-w-6xl mx-auto bg-white dark:bg-black">
      {/* 👆 Tambahkan background */}
      
      {/* Title */}
      <div className="text-center md:text-left mb-12">
        <h2 className="font-bold text-[28px] md:text-[36px] text-black dark:text-white">
          Built for Your Industry
        </h2>
        <p className="text-gray-600 dark:text-[#A4A7AE] text-sm md:text-base mt-2">
          {/* 👆 Tambahkan text-gray-600 untuk light mode */}
          We've helped companies across industries launch smarter, faster, and more securely.
        </p>
      </div>

      {/* Mobile-first layout */}
      <div className="flex flex-col md:flex-row md:gap-10">
        {/* Tabs */}
        <div className="flex flex-col gap-4 md:w-1/4">
          {industries.map((industry) => (
            <button
              key={industry.key}
              onClick={() => setActive(industry.key)}
              className={`text-left pl-4 border-l-4 font-semibold transition-all duration-300
                ${
                  active === industry.key
                    ? "text-black dark:text-white border-orange-500"
                    : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300"
                    // 👆 Perbaiki hover state
                }`}
            >
              {industry.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {currentIndustry && (
          <div className="flex-1 mt-6 md:mt-0">
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-xl md:max-w-none">
              {/* 👆 Tambahkan text-gray-600 untuk light mode */}
              {currentIndustry.description}
            </p>
            <img
              src={currentIndustry.image}
              alt={currentIndustry.label}
              className="rounded-xl w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}