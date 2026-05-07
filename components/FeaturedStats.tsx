"use client";

import { motion } from "framer-motion";

export default function FeaturedStats() {
  const stats = [
    { number: "10+", label: "Projects Completed" },
    { number: "3+", label: "Clients Helped" },
    { number: "98%", label: "Satisfaction" },
  ];

  return (
    <section className="relative w-full bg-[#0D0D0D] py-20 lg:py-32 z-20">
      {/* Subtle top transition line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
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
              <h4 className="text-[5rem] lg:text-[7rem] font-black leading-none bg-gradient-to-r from-white to-white/40 bg-clip-text text-transparent tracking-tighter mb-4 transition-transform duration-700 group-hover:scale-105 group-hover:from-white group-hover:to-white/80">
                {stat.number}
              </h4>
              <div className="h-[2px] w-12 bg-gradient-to-r from-[#FF6A2A] to-[#6EA8FF] mb-5 opacity-70 transition-all duration-700 group-hover:w-full group-hover:opacity-100" />
              <p className="text-zinc-500 text-lg uppercase tracking-widest font-medium group-hover:text-zinc-300 transition-colors duration-700">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
