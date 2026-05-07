"use client";

import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { RefObject, useState, useEffect } from "react";

const DYNAMIC_NAMES = ["PASANG", "UI/UX DESIGNER", "BACKEND DEVELOPER"];

interface OverlayProps {
  containerRef: RefObject<HTMLElement | null>;
}

export default function Overlay({ containerRef }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Dynamic Typing State
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDynamic, setShowDynamic] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowDynamic(latest < 0.2);
  });

  useEffect(() => {
    if (!showDynamic) return;

    let timer: NodeJS.Timeout;
    const currentWord = DYNAMIC_NAMES[wordIndex];

    const typeSpeed = isDeleting ? 50 : 150; // Deleting is faster than typing
    const delayBetweenWords = 2000;

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
        }, typeSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % DYNAMIC_NAMES.length);
      }
    } else {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, showDynamic]);

  // Phase 1: Typography Intro (0 - 20%)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [1, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const blur1 = useTransform(scrollYProgress, [0, 0.15, 0.2], ["blur(0px)", "blur(0px)", "blur(10px)"]);
  
  // Section 2: 25 - 45%
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.45], [0, 0]);

  // Section 3: 50 - 70%
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.65, 0.7], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.7], [0, 0]);

  // Section 4: 75 - 90%
  const opacity4 = useTransform(scrollYProgress, [0.7, 0.75, 0.85, 0.9], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.7, 0.9], [0, 0]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      {/* 
        This is a sticky wrapper that tracks the window while moving down the 500vh parent.
      */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        
        {/* Phase 1: Cinematic Dynamic Text */}
        <motion.div 
          style={{ opacity: opacity1, y: y1, scale: scale1, filter: blur1, display: showDynamic ? "flex" : "none" }}
          className="absolute inset-x-0 bottom-0 flex-col items-center justify-center text-center w-full pb-[15vh] md:pb-[20vh]"
        >
          {/* Static Prefix - Matched to other typography */}
          <div className="flex w-full justify-center gap-4 md:gap-[25vw] relative z-10 translate-y-12 flex-row md:-translate-y-6 md:translate-x-[8vw]">
            <span className="text-white font-serif italic text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-lg md:-translate-x-[6vw]">
              I'm
            </span>
            <span className="text-white font-serif italic text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-lg">
              creative
            </span>
          </div>
          
          {/* Animated Dynamic Word Container */}
          <div className="min-h-[15vh] flex items-center justify-center overflow-visible w-full px-4 mt-12 md:mt-0">
            <AnimatePresence mode="popLayout">
              {showDynamic && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                  style={{ 
                    textShadow: "0 0 20px rgba(255, 106, 42, 0.2), 0 0 30px rgba(100, 150, 255, 0.15)" 
                  }}
                  className="text-[clamp(2.5rem,8vw,7rem)] font-black bg-gradient-to-r from-[#FF6A2A] via-white to-[#6EA8FF] bg-clip-text text-transparent uppercase m-0 p-0 leading-none tracking-tighter drop-shadow-2xl whitespace-normal break-words max-w-[95vw] flex items-center"
                >
                  <span className="min-w-[10px] inline-block text-center">{displayText || '\u00A0'}</span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className="inline-block w-[0.1em] h-[0.9em] bg-[#6EA8FF] ml-2 -translate-y-[0.05em]"
                  />
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center w-full pb-[5vh]"
        >
          <div className="flex w-full justify-center gap-[15vw] md:gap-[25vw] relative z-10 -translate-y-2 md:-translate-y-6">
            <span className="text-white font-serif italic text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-lg">
              I build
            </span>
            <span className="text-white font-serif italic text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-lg">
              experiences
            </span>
          </div>
          <h1 
            style={{ 
              textShadow: "0 0 20px rgba(255, 106, 42, 0.2), 0 0 30px rgba(100, 150, 255, 0.15)" 
            }}
            className="text-[clamp(4rem,12vw,10rem)] font-black bg-gradient-to-r from-[#FF6A2A] via-white to-[#6EA8FF] bg-clip-text text-transparent uppercase m-0 p-0 leading-none tracking-tighter relative z-0 whitespace-normal break-words max-w-[95vw]"
          >
            IMMERSIVE
          </h1>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center w-full pb-[5vh]"
        >
          <div className="flex w-full justify-center gap-[15vw] md:gap-[25vw] relative z-10 -translate-y-2 md:-translate-y-6">
            <span className="text-white font-serif italic text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-lg">
              Blending
            </span>
            <span className="text-white font-serif italic text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-lg">
              and code
            </span>
          </div>
          <h1 
            style={{ 
              textShadow: "0 0 20px rgba(255, 106, 42, 0.2), 0 0 30px rgba(100, 150, 255, 0.15)" 
            }}
            className="text-[clamp(3.5rem,12vw,10rem)] font-black bg-gradient-to-r from-[#FF6A2A] via-white to-[#6EA8FF] bg-clip-text text-transparent uppercase m-0 p-0 leading-none tracking-tighter relative z-0 whitespace-normal break-words max-w-[95vw]"
          >
            MOTION
          </h1>
        </motion.div>

        {/* Section 4 */}
        <motion.div 
          style={{ opacity: opacity4, y: y4 }}
          className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center w-full pb-[5vh]"
        >
          <div className="flex w-full justify-center gap-[15vw] md:gap-[25vw] relative z-10 -translate-y-2 md:-translate-y-6">
            <span className="text-white font-serif italic text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-lg">
              Scroll to
            </span>
            <span className="text-white font-serif italic text-4xl md:text-6xl lg:text-7xl tracking-tight drop-shadow-lg">
              explore
            </span>
          </div>
          <h1 
            style={{ 
              textShadow: "0 0 20px rgba(255, 106, 42, 0.2), 0 0 30px rgba(100, 150, 255, 0.15)" 
            }}
            className="text-[clamp(4.5rem,12vw,10rem)] font-black bg-gradient-to-r from-[#FF6A2A] via-white to-[#6EA8FF] bg-clip-text text-transparent uppercase m-0 p-0 leading-none tracking-tighter relative z-0 whitespace-normal break-words max-w-[95vw]"
          >
            MY WORK
          </h1>
        </motion.div>
        
      </div>
    </div>
  );
}
