const steps = [
  {
    title: "Discovery & Consultation",
    desc: "Understand Your Needs & Goals",
  },
  {
    title: "Planning & Strategy",
    desc: "Build a Clear, Scalable Roadmap",
  },
  {
    title: "Design & Prototyping",
    desc: "Craft UX That Converts",
  },
  {
    title: "Development & Implementation",
    desc: "Deliver With Speed & Precision",
  },
  {
    title: "Testing & Optimization",
    desc: "Ensure Quality at Every Step",
  },
  {
    title: "Launch & Growth",
    desc: "Scale, Measure & Improve Continuously",
  },
];

const OurProcess = () => {
  return (
    <section className="px-4 py-16 bg-white dark:bg-black">
      {/* Heading */}
      <div className="text-center flex flex-col gap-3 mb-16">
        <h2 className="font-body font-bold text-[28px] text-gray-900 dark:text-white">
          Our Process
        </h2>
        <p className="font-body text-sm text-gray-600 dark:text-gray-300">
          Clear steps. Smart execution. Results you can count on.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative py-10 w-full max-w-5xl mx-auto">
        {/* Line Desktop */}
        <div className="hidden md:block absolute left-1/2 top-[80px] bottom-[120px] w-px bg-gray-300
         dark:bg-gray-700 -translate-x-1/2"></div>

        {/* Line Mobile */}
         <div className="md:hidden absolute left-6 top-[80px] bottom-[120px] w-px
          bg-gray-300 dark:bg-gray-700"></div>


        <div className="flex flex-col space-y-16 relative">
          {steps.map((step, index) => {
            const isRight = index % 2 === 1;

            return (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Number Mobile */}
                <div className="absolute md:hidden left-6 w-8 h-8 bg-[#FF623E] rounded-full -translate-x-1/2
                  flex items-center justify-center text-sm text-white font-semibold">
                  {index + 1}
                </div>

                {/* Card */}
                <button
                  className={`
                    w-10/12 md:w-5/12 bg-gray-100 dark:bg-[#121212] rounded-xl p-6
                    transition-all duration-300
                    hover:scale-[1.03] hover:bg-gray-200 dark:hover:bg-[#1E1E1E]                    focus:outline-none focus:ring-2 focus:ring-[#FF623E]
                    flex justify-between items-start
                    ${isRight ? "md:ml-auto" : "md:mr-auto md:order-2"}
                  `}
                >
                  <div className="text-left">
                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {step.desc}
                    </p>
                  </div>

                  <img
                    src="/panah.svg"
                    alt="arrow"
                    className="w-6 h-6 dark:invert"
                  />
                </button>

                {/* Number Desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2
                  bg-[#FF623E] top-2 w-10 h-10 rounded-full
                  items-center justify-center font-bold text-sm text-white">
                  {index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
