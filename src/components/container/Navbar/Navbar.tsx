import { useState } from "react";
import Button from "../../ui/Button/Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full 
      bg-transparent
      text-black dark:text-white
      border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="mx-auto max-w-7xl px-4 lg:px-12 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img
            src="/header/logo.svg"
            alt="Batch Rendang Logo"
            className="w-7 h-7"/>
          <span className="font-heading font-bold text-base lg:text-lg">
            Batch Rendang
          </span>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-6 font-body font-medium text-sm">
          <a href="#about" className="hover:text-[#FF623E] transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-[#FF623E] transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-[#FF623E] transition-colors">
            Projects
          </a>
          <a
            href="#testimonials"
            className="hover:text-[#FF623E] transition-colors"
          >
            Testimonials
          </a>
          <a href="#faq" className="hover:text-[#FF623E] transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA DESKTOP */}
        <div className="hidden lg:block">
          <Button>Let’s Talk</Button>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden"
          aria-label="Open menu"
        >
        {/* Light mode icon */}
          <img 
            src="/header/menu-light.svg" 
            alt="Menu" 
            className="w-6 h-6 dark:hidden" 
          />
          {/* Dark mode icon */}
          <img 
            src="/header/menu.svg" 
            alt="Menu" 
            className="w-6 h-6 hidden dark:block" 
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-black text-black
         dark:text-white px-6 py-5 flex flex-col justify-between lg:hidden">
        
          {/* TOP */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="/header/logo.svg"
                alt="Batch Rendang Logo"
                className="w-6 h-6"
              />
              <span className="font-heading font-semibold text-sm">
                Batch Rendang
              </span>
            </div>

            <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            {/* Light mode - pakai icon HITAM */}
            <img
              src="/header/Icon-close-hitam.svg"
              alt="Close"
              className="w-6 h-6 block dark:hidden"
            />
            
            {/* Dark mode - pakai icon PUTIH */}
            <img
              src="/header/Icon-close.svg"
              alt="Close"
              className="w-6 h-6 hidden dark:block"
            />
          </button>
          </div>

          {/* MOBILE NAV */}
          <nav className="flex flex-col gap-6 mt-16 text-lg font-body font-medium">
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
            <a href="#projects" onClick={() => setOpen(false)}>
              Projects
            </a>
            <a href="#testimonials" onClick={() => setOpen(false)}>
              Testimonials
            </a>
            <a href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
          </nav>

          {/* CTA MOBILE */}
          <div className="mt-10 self-center">
            <Button>Let’s Talk</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
