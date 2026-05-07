"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const skills = [
  { name: "HTML", percent: "95%", logo: "/logos/html.svg" },
  { name: "CSS", percent: "90%", logo: "/logos/css.svg" },
  { name: "Bootstrap", percent: "70%", logo: "/logos/bootstrap.svg" },
  { name: "Tailwind CSS", percent: "65%", logo: "/logos/tailwind.svg" },
  { name: "Django", percent: "70%", logo: "/logos/django.svg" },
  { name: "REST API", percent: "70%", logo: "/logos/api.svg" },
  { name: "GitHub", percent: "80%", logo: "/logos/github.svg" },
  { name: "AI/GPT/Gemini", percent: "75%", logo: "/logos/ai.svg" },
];

export default function SkillsMarquee() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  // Split skills in half so they don't repeat across the two rows
  const topSkills = useMemo(() => {
    const half = skills.slice(0, 4);
    // Duplicate horizontally to create the infinite scroll loop (4 repeats = 25% translation loop)
    return [...half, ...half, ...half, ...half];
  }, []);

  const bottomSkills = useMemo(() => {
    const half = skills.slice(4, 8);
    return [...half, ...half, ...half, ...half];
  }, []);

  return (
    <section className="relative w-full py-24 bg-[#0D0D0D] overflow-hidden flex flex-col items-center border-t border-white/5">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 px-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-white to-zinc-500 tracking-tight drop-shadow-md">
        Technical Arsenal
      </h2>

      {/* Marquee Wrapper */}
      <div className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-14 md:gap-20 items-center py-4">
        {/* Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[100px] md:w-[250px] bg-gradient-to-r from-[#0D0D0D] to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[100px] md:w-[250px] bg-gradient-to-l from-[#0D0D0D] to-transparent"></div>
        
        {/* Animated Marquee Flex Container */}
        <style>{`
          @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-25%, 0, 0); }
          }
          .animate-marquee {
            animation: marquee 25s linear infinite;
            will-change: transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            transform: translateZ(0); 
          }
          .animate-marquee-reverse {
            animation: marquee 25s linear infinite reverse;
            will-change: transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            transform: translateZ(0); 
          }
          .animate-marquee:hover, .animate-marquee-reverse:hover {
            animation-play-state: paused;
          }
          @media (max-width: 768px) {
            .animate-marquee, .animate-marquee-reverse {
              animation-duration: 20s;
            }
            .animate-marquee:active, .animate-marquee-reverse:active {
              animation-play-state: paused;
            }
          }
        `}</style>
        
        {/* Top Row (Right to Left) */}
        <div className="flex w-max animate-marquee">
          {topSkills.map((skill, index) => (
            <div
              key={`top-${index}`}
              className={`flex flex-col items-center justify-center gap-6 group cursor-pointer w-[160px] md:w-[240px] mx-6 md:mx-12 ${activeItem === 'top-' + index ? 'is-active' : ''}`}
              onClick={() => setActiveItem(activeItem === 'top-' + index ? null : 'top-' + index)}
            >
              {/* Logo container */}
              <div className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 transition-all duration-300 ease-out group-hover:scale-110 group-[.is-active]:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] group-[.is-active]:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  fill
                  className="object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-[.is-active]:grayscale-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-all duration-500"
                />
              </div>
              
              {/* Text underneath the logo */}
              <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-[.is-active]:translate-y-0">
                <span className="text-white font-medium text-base md:text-xl tracking-wide">
                  {skill.name}
                </span>
                <span className="text-zinc-500 text-sm md:text-base font-mono mt-1">
                  {skill.percent}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row (Left to Right) */}
        <div className="flex w-max animate-marquee-reverse" style={{ marginLeft: "-200px" }}>
          {bottomSkills.map((skill, index) => (
            <div
              key={`bottom-${index}`}
              className={`flex flex-col items-center justify-center gap-6 group cursor-pointer w-[160px] md:w-[240px] mx-6 md:mx-12 ${activeItem === 'bottom-' + index ? 'is-active' : ''}`}
              onClick={() => setActiveItem(activeItem === 'bottom-' + index ? null : 'bottom-' + index)}
            >
              {/* Logo container */}
              <div className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 transition-all duration-300 ease-out group-hover:scale-110 group-[.is-active]:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)] group-[.is-active]:drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  fill
                  className="object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-[.is-active]:grayscale-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-all duration-500"
                />
              </div>
              
              {/* Text underneath the logo */}
              <div className="flex flex-col items-center opacity-0 group-hover:opacity-100 group-[.is-active]:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-[.is-active]:translate-y-0">
                <span className="text-white font-medium text-base md:text-xl tracking-wide">
                  {skill.name}
                </span>
                <span className="text-zinc-500 text-sm md:text-base font-mono mt-1">
                  {skill.percent}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}