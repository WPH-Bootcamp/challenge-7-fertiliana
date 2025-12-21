type SocialItem = {
  name: string;
  url: string;
};

const socials: SocialItem[] = [
  { name: "fb", url: "#" },
  { name: "ig", url: "#" },
  { name: "linkedin", url: "#" },
  { name: "tiktok", url: "#" },
];

const FooterDiscuss = () => {
  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          
          {/* Top */}
          <div className="flex items-start justify-between">
            <h2 className="text-2xl font-bold leading-tight text-black dark:text-white">
              LET’S DISCUSS <br />
              YOUR IDEAS
            </h2>

            <div className="flex items-center gap-2">
              <img
                src="/header/logo.svg"
                alt="Batch Rendang Logo"
                className="w-7 h-7"
              />
              <span className="text-sm font-semibold text-black dark:text-white">
                Your Logo
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200 dark:border-gray-700" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* Menu */}
            <nav className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-300">
              <a href="#">About</a>
              <a href="#">Service</a>
              <a href="#">Projects</a>
              <a href="#">Testimonials</a>
              <a href="#">FAQ</a>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  className="group w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600
                             flex items-center justify-center transition
                             hover:bg-black dark:hover:bg-white"
                >
                  {/* Light Mode */}
                  <img
                    src={`/icon/${item.name}-light.svg`}
                    alt={item.name}
                    className="w-4 h-4 dark:hidden"
                  />

                  {/* Dark Mode */}
                  <img
                    src={`/icon/${item.name}-dark.svg`}
                    alt={`${item.name} dark`}
                    className="w-4 h-4 hidden dark:block"
                  />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterDiscuss;
