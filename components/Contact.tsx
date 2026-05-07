"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full py-40 bg-[#0D0D0D] overflow-hidden flex flex-col items-center justify-center border-t border-white/5 z-20">
      
      {/* Subtle Background Glow/Rays matching the reference vibe but fitting the dark theme */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-[#0D0D0D]/60 to-[#0D0D0D]"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        <h2 className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-white tracking-tight leading-[1.1] mb-12 drop-shadow-xl">
          Our epic Collaboration <br className="hidden md:block" />
          is just a Click away
        </h2>
        
        <a 
          href="mailto:your-email@example.com" 
          className="group flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-medium text-lg tracking-wide hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out"
        >
          Book A Call
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </a>
      </motion.div>
      
    </section>
  );
}