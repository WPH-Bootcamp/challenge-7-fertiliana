type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "Web Development",
    description: "Build fast, scalable, and SEO-friendly websites.",
    icon: "/icon/Icon-1.svg",
  },
  {
    title: "Mobile App Development",
    description: "Native & cross-platform apps tailored to user needs.",
    icon: "/icon/Icon-2.svg",
  },
  {
    title: "UI/UX Design",
    description: "Delight users with intuitive and beautiful interfaces.",
    icon: "/icon/Icon-3.svg",
  },
  {
    title: "Cloud Solutions",
    description: "Secure and flexible cloud infrastructure for your growth.",
    icon: "/icon/Icon-4.svg",
  },
  {
    title: "Software Development",
    description: "Custom solutions built around your business logic.",
    icon: "/icon/Icon-5.svg",
  },
  {
    title: "IT Infrastructure",
    description: "Scale your backend with reliable tech foundations.",
    icon: "/icon/Icon-6.svg",
  },
  {
    title: "Cybersecurity Services",
    description: "Stay protected with enterprise-grade security.",
    icon: "/icon/Icon-7.svg",
  },
  {
    title: "QA Solutions",
    description: "Ensure performance with rigorous testing frameworks.",
    icon: "/icon/Icon-8.svg",
  },
  {
    title: "IT Consulting & Support",
    description: "Make smarter tech decisions with expert guidance.",
    icon: "/icon/Icon-9.svg",
  },
];

const Services = () => {
  return (
    <section className="bg-white dark:bg-[#0A0D12]
border-gray-200 dark:border-[#181D27]
 px-4 py-20">
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-outfit font-semibold text-[24px] md:text-[32px] text-black dark:text-white">
          Smart IT Solutions That Grow With You
        </h2>
        <p className="mt-3 font-body text-sm md:text-base text-[#A4A7AE]">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              bg-gray-100 dark:bg-[#121622]
              border border-gray-300 dark:border-[#1E1E1E]
              rounded-xl
              p-6
              flex flex-col gap-3
              transition-all duration-300
              hover:bg-gray-200 dark:hover:bg-[#1A1F2A]
              cursor-pointer
              hover:-translate-y-1
            "
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-10 h-10"
            />

            <h3 className="font-outfit font-semibold text-gray-900 dark:text-white text-lg">
              {service.title}
            </h3>

            <p className="font-body text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
