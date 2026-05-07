"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 bg-[#0D0D0D] border-t border-white/5 z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left Side: Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-zinc-900 rounded-sm overflow-hidden relative group flex items-center justify-center border border-white/5"
        >
          {/* Placeholder for future portrait image */}
          {/* Example of how to use it later: 
          <Image
            src="/your-portrait-image.jpg"
            alt="Pasang - Portrait"
            fill
            className="object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
          /> 
          */}
          <span className="text-zinc-600 font-mono text-sm tracking-widest uppercase">
            [ Portrait Placeholder ]
          </span>
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-white tracking-tight mb-8 md:mb-10 leading-[1.1]">
            I build digital worlds
          </h2>
          
          <p className="text-zinc-400 text-lg md:text-[22px] leading-[1.8] font-light max-w-xl">
            With 2+ years of experience, I build engaging and efficient digital experiences from the ground up. From designing intuitive interfaces to developing robust backend systems, I turn ideas into fully functional applications that connect users and solve real problems. Every project I work on is crafted with precision, creativity, and scalability in mind.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}