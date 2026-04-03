"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className = "" }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setTilt({
      x: (y - 0.5) * -12,
      y: (x - 0.5) * 12,
    });

    setGlare({
      x: x * 100,
      y: y * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare({ ...glare, opacity: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden ${className}`}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
    >
      {/* Glare effect */}
      <div
        className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(0, 255, 255, ${glare.opacity}), transparent 60%)`,
        }}
      />

      {/* Animated border glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none rounded-inherit transition-opacity duration-500"
        style={{
          opacity: glare.opacity > 0 ? 1 : 0,
          boxShadow: `0 0 30px rgba(0, 255, 255, 0.1), inset 0 0 30px rgba(0, 255, 255, 0.03)`,
        }}
      />

      {children}
    </motion.div>
  );
};
