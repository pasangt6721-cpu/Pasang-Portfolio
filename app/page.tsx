import { getSequenceFrames } from "@/lib/getSequenceFrames";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import FeaturedStats from "@/components/FeaturedStats";
import SkillsMarquee from "@/components/SkillsMarquee";

export default function Home() {
  const frames = getSequenceFrames();

  return (
    <SmoothScroll>
      <Navbar />
      <main className="w-full bg-[#0D0D0D]">
        <ScrollyCanvas frames={frames} />
        <About />
        <FeaturedStats />
        <SkillsMarquee />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer Element */}
      <footer className="w-full py-12 border-t border-white/5 bg-[#0D0D0D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Pasang. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.instagram.com/pasangt672/" className="hover:text-white transition-colors duration-300">Instagram</a>
            <a href="https://www.linkedin.com/in/pasang-tamang-758869333/" className="hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/pasangt6721-cpu" className="hover:text-white transition-colors duration-300">Github</a>
          </div>
        </div>
      </footer>
    </SmoothScroll>
  );
}
