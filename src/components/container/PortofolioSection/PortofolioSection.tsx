type PortfolioItem = {
  id: number;
  category: string;
  title: string;
  image: string;
};

const portfolios: PortfolioItem[] = [
  {
    id: 1,
    category: "Landing Page",
    title: "Portfolio 1",
    image: "/portofolio/Portfolio-1.svg",
  },
  {
    id: 2,
    category: "Landing Page",
    title: "Portfolio 2",
    image: "/portofolio/Portfolio-2.svg",
  },
  {
    id: 3,
    category: "Landing Page",
    title: "Portfolio 3",
    image: "/portofolio/Portfolio-3.svg",
  },
];

export default function PortfolioSection() {
  return (
    <section className="px-4 py-20 max-w-7xl mx-auto bg-white dark:bg-black">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-bold text-[26px] md:text-[36px] text-black dark:text-white">
          From Vision to Launch! Projects We’re Proud Of
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-2 max-w-2xl mx-auto">
          Take a closer look at our recent work powering startups, enterprises,
          and everything in between.
        </p>
      </div>

      {/* Portfolio Grid - Mobile First */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {portfolios.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center group"
          >
            {/* Image */}
            <div className="w-full aspect-square overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text */}
            <p className="text-[#FF623E] font-semibold text-sm mt-4">
              {item.category}
            </p>
            <p className="text-black dark:text-white font-medium text-lg">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
