"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

export default function FeaturedStats() {
  const stats = [
    { number: 10, suffix: "+", label: "Projects Completed" },
    { number: 3, suffix: "+", label: "Clients Helped" },
    { number: 98, suffix: "%", label: "Satisfaction" },
  ];

  return (
    <section className="relative w-full py-20 lg:py-32 z-20">
      {/* Ambient transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-16 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left group"
            >
              <h4 className="flex items-center text-[5rem] lg:text-[7rem] font-black leading-none bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent tracking-tighter mb-4 transition-transform duration-700 group-hover:scale-105 group-hover:from-white group-hover:to-white/80">
                <CountUp to={stat.number} duration={2} className="inline-block" />
                <span>{stat.suffix}</span>
              </h4>
              <div className="h-[2px] w-12 bg-gradient-to-r from-teal-400 to-teal-700 mb-5 opacity-70 transition-all duration-700 group-hover:w-full group-hover:opacity-100" />
              <p className="text-zinc-500 text-lg uppercase tracking-widest font-medium group-hover:text-teal-300 transition-colors duration-700">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
