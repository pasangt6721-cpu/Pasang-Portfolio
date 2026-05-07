"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// TEMPLATE: You can easily update these objects later once your projects are ready!
const PROJECTS = [
  {
    title: "PASA Travels",
    tech: "Bootstrap • Django • REST API • React • HTML • JavaScript",
    desc: "A full-stack travel booking platform where users can explore destinations, view curated tours, and book trips with expert local guides. Built using Django and REST API for backend and React for a dynamic frontend, ensuring smooth performance and scalable architecture.",
    img: "/pasa-travels-hero.jpg",
    link: "#"
  },
  {
    title: "Pasa Foods UI",
    tech: "Bootstrap • HTML • CSS • JavaScript",
    desc: "A modern and responsive food ordering interface designed using Bootstrap. Features clean UI components, product cards, ratings, pricing, and interactive Add to Cart buttons. Focused on user-friendly layout and visually appealing design.",
    img: "/pasa-foods-ui.jpg",
    link: "#",
    codeLink: "#"
  },
  {
    title: "Pasa Ecommerce UI",
    tech: "React JS • Bootstrap • HTML • CSS • JavaScript",
    desc: "A responsive ecommerce frontend built using React JS and Bootstrap. Features product listings, dynamic UI components, shopping cart interface, and smooth navigation. Designed for a clean user experience with reusable components and modern layout structure.",
    img: "/pasa-ecommerce-ui.jpg",
    link: "#",
    codeLink: "#"
  },
  {
    title: "Pasang Portfolio",
    tech: "Next.js • React • Tailwind CSS • Framer Motion • JavaScript",
    desc: "A modern and visually stunning personal portfolio website. Showcases projects, skills, and experience with smooth scroll animations, interactive UI components, and responsive design. Built with cutting-edge web technologies for an immersive user experience.",
    img: "/pasang-portfolio.jpg",
    link: "#",
    codeLink: "#"
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative bg-[#0D0D0D] py-12 px-6 sm:px-12 z-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-serif text-5xl md:text-6xl lg:text-[5rem] text-white tracking-tight mb-6 leading-[1.1]">
            Featured Works
          </h2>
          <p className="text-zinc-400 text-lg md:text-[22px] leading-[1.8] font-light">
            A curated selection of digital experiences I've built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-24">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer flex flex-col gap-8"
            >
              {/* Image Container with matching layout */}
              <div className="relative overflow-hidden rounded-sm aspect-[4/3] bg-zinc-900 border border-white/5 transition-all duration-700">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                
                {/* Overlay Hover Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 flex items-end p-8">
                  <div className="flex gap-3 w-full">
                    <a href={project.link} className="flex-1 bg-white/10 backdrop-blur-md px-4 py-3 rounded-sm text-sm font-medium border border-white/10 text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 hover:bg-white/20">
                      View Project &rarr;
                    </a>
                    {project.codeLink && (
                      <a href={project.codeLink} className="flex-1 bg-white/10 backdrop-blur-md px-4 py-3 rounded-sm text-sm font-medium border border-white/10 text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 hover:bg-white/20">
                        View Code &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Text Meta Container matching the typography of About US */}
              <div className="flex flex-col gap-4 relative px-2">
                <h4 className="font-serif text-3xl md:text-4xl text-white group-hover:text-zinc-300 transition-colors tracking-wide">
                  {project.title}
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(" • ").map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] md:text-[11px] font-mono tracking-widest text-[#FF6A2A] uppercase border border-[#FF6A2A]/30 bg-[#FF6A2A]/10 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-zinc-400 text-base md:text-lg leading-[1.8] font-light max-w-lg mt-2">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
