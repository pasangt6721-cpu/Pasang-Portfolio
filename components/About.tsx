"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative w-full py-24 md:py-32 z-20">
      {/* Ambient transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left Side: Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 aspect-square md:aspect-[4/5] bg-white/5 backdrop-blur-sm rounded-sm overflow-hidden relative group flex items-center justify-center border border-teal-400/20"
        >
          {/* Placeholder for future portrait image */}
          <Image
            src="/PASA.png"
            alt="Pasang - Portrait"
            fill
            className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-in-out group-hover:scale-105"
          /> 
         
          {/* <span className="text-zinc-600 font-mono text-sm tracking-widest uppercase">
            [ Portrait Placeholder ]
          </span> */}
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col justify-center"
        >
          <p className="text-[11px] font-medium tracking-[0.3em] text-teal-400 mb-4 uppercase">
            WHO I AM
          </p>
          <h2 className="font-black uppercase text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] text-white tracking-tight mb-8 md:mb-10 leading-[1.1]">
            I build digital worlds
          </h2>
          
          <p className="text-white/60 text-lg md:text-[22px] leading-[1.8] font-light max-w-xl">
            I’m a beginner developer with a strong passion for building engaging and efficient digital experiences. I enjoy learning new technologies, improving my coding skills, and turning ideas into functional applications. From creating clean user interfaces to exploring backend development, I focus on writing scalable, creative, and well-structured solutions while continuously growing as a developer.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}