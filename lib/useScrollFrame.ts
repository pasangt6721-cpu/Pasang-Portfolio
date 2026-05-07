"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

export function useScrollFrame(
  targetRef: RefObject<HTMLElement | null>,
  totalFrames: number,
  offset: ["start start", "end end"] = ["start start", "end end"]
): MotionValue<number> {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: offset,
  });

  // Phase 1: 0 - 0.2 is locked at frame 0 for Typography Intro
  // Phase 2: 0.2 - 1.0 triggers the sequence
  const frameIndex = useTransform(
    scrollYProgress, 
    [0, 0.2, 1], 
    [0, 0, totalFrames - 1]
  );

  return frameIndex;
}
