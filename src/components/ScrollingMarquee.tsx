"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollingMarqueeProps {
  text: string;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
  variant?: "default" | "outline" | "large";
}

export const ScrollingMarquee = ({
  text,
  speed = 20,
  direction = "left",
  className = "",
  variant = "default",
}: ScrollingMarqueeProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax offset based on scroll
  const xOffset = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "left" ? [100, -100] : [-100, 100]
  );

  const repeated = Array(10).fill(text);

  const textClass = {
    default: "text-[10px] sm:text-xs font-mono uppercase tracking-[0.4em] sm:tracking-[0.8em] text-zinc-800",
    outline: "text-2xl sm:text-4xl font-cabinet font-black uppercase tracking-tighter text-stroke-white",
    large: "text-4xl sm:text-6xl md:text-8xl font-cabinet font-black uppercase tracking-tighter text-zinc-900/30",
  }[variant];

  return (
    <div
      ref={ref}
      className={`overflow-hidden whitespace-nowrap border-y border-zinc-900/30 py-3 sm:py-5 ${
        variant === "large" ? "py-6 sm:py-10" : ""
      } ${className}`}
    >
      <motion.div
        style={{ x: xOffset }}
        className="flex"
      >
        <motion.div
          animate={{ x: direction === "left" ? [0, -3000] : [-3000, 0] }}
          transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
          className="flex items-center gap-8 sm:gap-16 w-max"
        >
          {repeated.map((t, i) => (
            <span
              key={i}
              className={`${textClass} flex items-center gap-8 sm:gap-16`}
            >
              {t}
              <span className="w-1.5 h-1.5 bg-cyan-400/20 rotate-45 shrink-0" />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
