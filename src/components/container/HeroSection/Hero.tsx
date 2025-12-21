import Button from "../../ui/Button/Button";

const Hero = () => {
  return (
    <section className="pt-24 px-4 lg:px-12 bg-white text-black
       dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* TEXT */}
        <div className="flex flex-col gap-4 text-left lg:w-[65%] px-4 lg:pl-12 lg:pr-6">
         <h1 className="font-heading font-bold text-4xl leading-tight sm:text-5xl lg:text-[56px] xl:text-[64px]">
            <span className="whitespace-nowrap">Your Tech Partner for</span>
            <br />
            <span className="text-[#FF623E]">Smarter Growth</span>
          </h1>

          <p className="text-gray-600 dark:text-[#A4A7AE] text-sm leading-relaxed sm:text-base lg:text-lg">
            We deliver tailored IT solutions to help you scale with speed and confidence.
          </p>

          <div className="mt-4 flex justify-start lg:justify-start">
           <Button className="w-full lg:w-auto">
              Let’s Talk
            </Button>
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative lg:w-1/2 lg:-mr-12 lg:pr-0">
        {/* Light mode */}
        <img
          src="/Hero-light.svg"
          alt="Hero Illustration"
          className="w-full max-w-[600px] h-auto object-contain block dark:hidden"
        />

        {/* Dark mode */}
        <img
          src="/hero.svg"
          alt="Hero Illustration"
          className="w-full max-w-[600px] h-auto object-contain hidden dark:block"
        />
      </div>

      </div>
    </section>
  );
};

export default Hero;


