import Navbar from "./components/container/Navbar";
import Hero from "./components/container/HeroSection";
import Companylogo from "./components/container/CompanyLogo";
import EndtoEndSection from "./components/container/EndtoEndSection";
import OurProcess from "./components/container/OurProcess";
import ServiceSection from "./components/container/ServiceSection";
import IndustrySection from "./components/container/IndustrySection";
import PortfolioSection from "./components/container/PortofolioSection";
import TestimonialSection from "./components/container/TestimonialSection";
import FAQ from "./components/container/FAQ";
import ContactFormSection from "./components/container/ContactFormSection";
import FooterDiscuss from "./components/container/FooterDiscuss";

function App() {
  return (
    <div className="min-h-screen
        font-outfit
        bg-white text-black
        dark:bg-black dark:text-white
        transition-colors duration-300">
      <Navbar />
      <Hero />
      <Companylogo />
      <EndtoEndSection />
      <OurProcess />
      <ServiceSection />
      <IndustrySection />
      <PortfolioSection />
      <TestimonialSection />
      <FAQ />
      <ContactFormSection />
      <FooterDiscuss />
    </div>

  );
}   

export default App;
