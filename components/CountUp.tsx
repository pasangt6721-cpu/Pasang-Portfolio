"use client";

import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

export interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = "",
  startWhen = true,
  separator = ""
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10px" });

  useEffect(() => {
    // Set initial value
    if (ref.current) {
      ref.current.textContent = from.toString();
    }

    if (isInView && startWhen) {
      let startTime: number | null = null;
      const totalDuration = duration * 1000;
      let animationFrameId: number;

      // Start delay if provided
      const delayTimeout = setTimeout(() => {
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / totalDuration, 1);
          
          // easeOutExpo easing function for a nice smooth snap to the target
          const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          
          const currentVal = Math.floor(easeOut * (to - from) + from);
          
          if (ref.current) {
            if (separator) {
              ref.current.textContent = currentVal.toLocaleString('en-US');
            } else {
              ref.current.textContent = currentVal.toString();
            }
          }

          if (progress < 1) {
            animationFrameId = requestAnimationFrame(animate);
          } else {
            // Ensure we hit the exact target at the end
            if (ref.current) {
              ref.current.textContent = separator ? to.toLocaleString('en-US') : to.toString();
            }
          }
        };

        animationFrameId = requestAnimationFrame(animate);
      }, delay * 1000);

      return () => {
        clearTimeout(delayTimeout);
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isInView, startWhen, from, to, duration, delay, separator]);

  return <span ref={ref} className={className}>{from}</span>;
}
