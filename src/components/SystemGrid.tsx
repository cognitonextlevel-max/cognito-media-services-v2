"use client";

import { motion } from "framer-motion";

export const SystemGrid = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-10 overflow-hidden pointer-events-none">
      {/* Background Texture - Minimal Grid */}
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0">
        <defs>
          <pattern id="system-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
            {/* Fine grid points */}
            <circle cx="2" cy="2" r="0.5" fill="rgba(0, 255, 255, 0.2)" />
            <circle cx="60" cy="60" r="0.5" fill="rgba(0, 255, 255, 0.1)" />
            {/* Grid borders */}
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="rgba(0, 255, 255, 0.03)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#system-pattern)" />
      </svg>
      
      {/* Structural Data Streams - Surgical Visuals */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: i % 2 === 0 ? "-10%" : "110%" }}
          animate={{ 
            opacity: [0, 0.1, 0], 
            x: i % 2 === 0 ? "110%" : "-10%"
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            delay: i * 5,
            ease: "linear"
          }}
          className="absolute h-px w-64 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          style={{ top: `${20 + (i * 30)}%` }}
        />
      ))}

      {/* Rhythmic Coordinate Markers */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full h-full max-w-[1400px] max-h-[800px] border border-cyan-400/[0.02]">
            {/* Corner Markers */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-400/20"></div>
            <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-cyan-400/20"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-cyan-400/20"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-400/20"></div>
        </div>
      </div>
    </div>
  );
};
