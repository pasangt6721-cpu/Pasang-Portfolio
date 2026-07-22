"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GlareHover from "./GlareHover";

// TEMPLATE: You can easily update these objects later once your projects are ready!
type Project = {
  title: string;
  tech: string;
  desc: string;
  img: string;
  link: string;
  codeLink?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Pasang Portfolio",
    tech: "Next.js • React • Tailwind CSS • Framer Motion • JavaScript",
    desc: "A modern and visually stunning personal portfolio website. Showcases projects, skills, and experience with smooth scroll animations, interactive UI components, and responsive design. Built with cutting-edge web technologies for an immersive user experience.",
    img: "/pasa-portfolio.png",
    link: "#"
  },
  {
    title: "Benjamin Portfolio",
    tech: "React JS • Bootstrap • HTML • CSS • JavaScript",
    desc: "This project is a modern portfolio website for my friend.Showcasing his passion for vidoe editing and for his skills to get known to all.",
    img: "/benjaminshrestha-portfolio.png",
    link: "https://benjaminshrestha.com.np",
  },
  {
    title: "PASA Fitness Tracker",
    tech: "React • Django REST Framework • PostgreSQL • Bootstrap • Chart.js",
    desc: "A full-stack fitness tracking application that helps users monitor daily calorie intake, workouts, BMI, water consumption, and weight progress. Features secure authentication, food and activity management, progress charts, and personalized health analytics through a responsive React frontend and Django REST API backend.",
    img: "/pasa-fitness.png",
    link: "https://pasa-fitness.vercel.app"
  },
  {
    title: "PASA FullTech Ecommerce",
    tech: "React • Django REST Framework • PostgreSQL • Bootstrap • JWT Authentication",
    desc: "A full-stack ecommerce platform built with React and Django REST Framework, featuring secure JWT authentication, product browsing, category and brand management, shopping cart, user accounts, and a responsive modern interface. Designed with a scalable backend API and PostgreSQL database to deliver a fast, reliable online shopping experience.",
    img: "/pasa-fulltech.png",
    link: "https://pasa-full-tech-ecommerce.vercel.app/"
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-12 px-6 sm:px-12 z-20">
      {/* Ambient transition gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-teal-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-[11px] font-medium tracking-[0.3em] text-teal-400 mb-4 uppercase">
            WORK
          </p>
          <h2 className="font-black uppercase text-5xl md:text-6xl lg:text-[5rem] text-white tracking-tight mb-6 leading-[1.1]">
            Featured Works
          </h2>
          <p className="text-white/60 text-lg md:text-[22px] leading-[1.8] font-light">
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
              <div className="relative overflow-hidden rounded-sm aspect-video bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-700 flex items-center justify-center p-2">
                <GlareHover glareColor="#2dd4bf" transitionDuration={700}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-contain opacity-90 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                  
                  {/* Overlay Hover Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100 flex items-end p-8">
                    <div className="flex gap-3 w-full">
                      <a href={project.link} className="flex-1 bg-white/10 backdrop-blur-md px-4 py-3 rounded-sm text-sm font-medium border border-white/10 text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 hover:bg-white/20" target="_blank" rel="noopener noreferrer">
                        View Project &rarr;
                      </a>
                      {project.codeLink && (
                        <a href={project.codeLink} className="flex-1 bg-white/10 backdrop-blur-md px-4 py-3 rounded-sm text-sm font-medium border border-white/10 text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150 hover:bg-white/20" target="_blank" rel="noopener noreferrer">
                          View Code &rarr;
                        </a>
                      )}
                    </div>
                  </div>
                </GlareHover>
              </div>

              {/* Text Meta Container matching the typography of About US */}
              <div className="flex flex-col gap-4 relative px-2">
                <h4 className="font-black uppercase text-2xl md:text-3xl text-white group-hover:text-teal-300 transition-colors tracking-wide">
                  {project.title}
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(" • ").map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] md:text-[11px] font-mono tracking-widest text-teal-400 uppercase border border-teal-400/30 bg-teal-400/10 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-white/60 text-base md:text-lg leading-[1.8] font-light max-w-lg mt-2">
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
