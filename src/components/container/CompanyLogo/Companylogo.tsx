type Logo = {
  name: string;
  src: string;
};

const logos: Logo[] = [
  { name: "Upwork", src: "/company/upwork.svg" },
  { name: "Zoom", src: "/company/zoom.svg" },
  { name: "Postman", src: "/company/postman.svg" },
  { name: "Databricks", src: "/company/databricks.svg" },
  { name: "Airbnb", src: "/company/airbnb.svg" },
  { name: "Dropbox", src: "/company/dropbox.svg" },
  { name: "Paypal", src: "/company/paypal.svg" },
];

const CompanyLogo = () => {
  return (
    <section className="bg-white dark:bg-black py-16">
      {/* Heading */}
      <p className="text-center font-bold text-sm text-gray-800 dark:text-gray-300 mb-10">
        Trusted by Global Innovators & Leading Brands
      </p>

      {/* Logos */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="
                h-6 md:h-8
                opacity-60 grayscale
                hover:opacity-100 hover:grayscale-0
                transition-all duration-300
              "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogo;


