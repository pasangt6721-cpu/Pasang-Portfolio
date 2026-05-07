"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollFrame } from "@/lib/useScrollFrame";
import { preloadImages } from "@/lib/preloadImages";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Overlay from "./Overlay";

interface ScrollyCanvasProps {
  frames: string[];
}

export default function ScrollyCanvas({ frames }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loadedImages, setLoadedImages] = useState<HTMLImageElement[]>([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Derive active frame based on 500vh container scroll
  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start start", "end end"] 
  });
  
  // Custom transition polish: subtle zoom 
  const canvasScale = useTransform(scrollYProgress, [0, 0.2], [1.05, 1]);

  // Use our custom hook to get the exact frame index
  const frameIndex = useScrollFrame(containerRef, frames.length);

  // Preload logic run once
  useEffect(() => {
    let isMounted = true;
    preloadImages(frames, (p) => {
      if (isMounted) setLoadingProgress(p);
    }).then((imgs) => {
      if (!isMounted) return;
      setLoadedImages(imgs);
      setIsLoaded(true);
      // Initialize first frame draw
      drawFrame(imgs[0]);
    });
    return () => {
      isMounted = false;
    };
  }, [frames]);

  // Object-fit: cover drawing implementation
  const drawFrame = (img: HTMLImageElement | null) => {
    if (!img) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Enable high-quality image rendering
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    // Device pixel ratio for crisp rendering on high DPI displays
    const dpr = window.devicePixelRatio || 1;
    
    // Set real size to match CSS size
    if (canvas.width !== window.innerWidth * dpr || canvas.height !== window.innerHeight * dpr) {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      // Scale canvas back down for CSS
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    }

    const canvasAspect = (canvas.width / dpr) / (canvas.height / dpr);
    const imgAspect = img.width / img.height;

    let renderWidth, renderHeight, x, y;

    if (canvasAspect > imgAspect) {
      // Canvas is wider than image
      renderWidth = window.innerWidth;
      renderHeight = window.innerWidth / imgAspect;
      x = 0;
      y = (window.innerHeight - renderHeight) / 2;
    } else {
      // Canvas is taller than image
      renderWidth = window.innerHeight * imgAspect;
      renderHeight = window.innerHeight;
      x = (window.innerWidth - renderWidth) / 2;
      y = 0;
    }

    // Performance: requestAnimationFrame ensures we never over-draw
    requestAnimationFrame(() => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.drawImage(img, x, y, renderWidth, renderHeight);
    });
  };

  // Re-draw when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (loadedImages.length > 0) {
        drawFrame(loadedImages[Math.floor(frameIndex.get())]);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [loadedImages, frameIndex]);

  // Subscribe to framer motion changes to change canvas frame
  useEffect(() => {
    const unsubscribe = frameIndex.on("change", (latest) => {
      if (loadedImages.length === 0) return;
      const roundedIndex = Math.floor(latest);
      drawFrame(loadedImages[roundedIndex]);
    });
    return () => unsubscribe();
  }, [frameIndex, loadedImages]);

  return (
    <div ref={containerRef} className="relative w-full h-[500vh] bg-[#0D0D0D]">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0D0D0D] text-white"
          >
            <p className="text-zinc-400 font-medium tracking-widest text-sm uppercase mb-4">
              Loading Sequence
            </p>
            <p className="text-5xl font-light tabular-nums">{loadingProgress}%</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* The canvas representing the object-fit cover frames */}
        <motion.canvas 
          ref={canvasRef} 
          style={{ scale: canvasScale }}
          className="w-full h-full object-cover" 
        />
        
        {/* Subtle dark vignette to make overlays pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0D0D0D] pointer-events-none mix-blend-multiply" />
        {/* Grain effect overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay" />
      </div>

      <Overlay containerRef={containerRef} />
    </div>
  );
}
