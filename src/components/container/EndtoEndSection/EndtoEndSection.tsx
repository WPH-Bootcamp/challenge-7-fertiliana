const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years of Experience" },
  { value: "10+", label: "Industry Awards Won" },
  { value: "100%", label: "Client Satisfaction Rate" },
];

const EndToEndSection = () => {
  return (
    <section className="bg-white dark:bg-black py-20 px-4">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center mb-14">
        <h2 className="font-heading font-semibold text-[24px] md:text-[32px] leading-tight text-gray-900 dark:text-white">
          End-to-End IT Solutions That Drive Results
        </h2>

        <p className="mt-3 font-body text-[14px] md:text-[16px] leading-[26px] text-gray-600 dark:text-gray-300">
          From strategy to execution, we deliver solutions that grow your
          business.
        </p>
      </div>

      {/* Stats */}
      <div className="mx-auto max-w-5xl flex flex-wrap justify-center gap-6 md:gap-10">
        {stats.map((item) => (
          <div
            key={item.label}
            className="
              w-[140px] h-[140px]
              md:w-[180px] md:h-[180px]
              rounded-full
              bg-gray-100 dark:bg-[#121212]
              border border-gray-300 dark:border-[#1E1E1E]
              flex flex-col items-center justify-center
              text-center
            "
          >
            {/* Value */}
            <span className="font-heading font-semibold text-[28px] md:text-[36px] text-[#FF623E]">
              {item.value}
            </span>

            {/* Label */}
            <span className="mt-2 px-3 font-body font-medium text-[11px] md:text-[13px] leading-[18px] text-gray-700 dark:text-gray-400">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EndToEndSection;

