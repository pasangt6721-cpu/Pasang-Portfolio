"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      const offset = 80; // Account for fixed navbar (approx 80px)
      const elementPosition = elem.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out py-6 md:py-8 px-6 md:px-12",
          scrolled && "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4 md:py-5 shadow-2xl"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-white font-serif italic text-xl md:text-2xl tracking-wide hover:scale-105 transition-transform cursor-pointer drop-shadow-md z-50"
          >
            Pasang.
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 text-sm font-medium tracking-widest uppercase">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-zinc-400 hover:text-white transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "#contact")}
              className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold tracking-wide hover:scale-105 hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            className="md:hidden flex flex-col gap-[5px] z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={cn("block w-6 h-px bg-white transition-all duration-300", isMobileMenuOpen && "translate-y-[6px] rotate-45")} />
            <span className={cn("block w-6 h-px bg-white transition-all duration-300", isMobileMenuOpen && "opacity-0")} />
            <span className={cn("block w-6 h-px bg-white transition-all duration-300", isMobileMenuOpen && "-translate-y-[6px] -rotate-45")} />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at right top)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at right top)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at right top)" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center mt-10">
              {navLinks.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.4 }}
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-serif text-5xl text-white hover:text-zinc-400 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              
              <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="mt-8 bg-white text-black px-10 py-4 rounded-full text-lg font-bold tracking-wide"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
