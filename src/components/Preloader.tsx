"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export const Preloader = () => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState("COGNITO");
  const [counter, setCounter] = useState(0);
  const [phase, setPhase] = useState<"scramble" | "reveal" | "exit">("scramble");

  const scramble = useCallback((target: string, progress: number) => {
    return target
      .split("")
      .map((char, i) => {
        if (i / target.length < progress) return char;
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");
  }, []);

  useEffect(() => {
    let frame: number;
    let start = Date.now();

    const animate = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / 2000, 1);

      setCounter(Math.floor(progress * 100));
      setText(scramble("COGNITO", progress));

      if (progress >= 1) {
        setText("COGNITO");
        setPhase("reveal");
        setTimeout(() => setPhase("exit"), 600);
        setTimeout(() => setShow(false), 1400);
        return;
      }

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [scramble]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-blueprint opacity-10" />

          {/* Corner markers */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t border-l border-cyan-400/30" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-cyan-400/30" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-cyan-400/30" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b border-r border-cyan-400/30" />

          {/* Status line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-3"
          >
            <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
            <span className="text-[9px] font-mono uppercase tracking-[0.6em] text-cyan-400/60 font-bold">
              Initializing Protocol
            </span>
          </motion.div>

          {/* Main scramble text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.h1
              className="font-cabinet font-black text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[160px] uppercase tracking-tighter leading-none"
              animate={{
                color: phase === "reveal" ? "#00FFFF" : "#ffffff",
              }}
              transition={{ duration: 0.3 }}
            >
              {text}
            </motion.h1>

            {/* Glitch lines */}
            {phase === "scramble" && (
              <>
                <motion.div
                  animate={{ x: [-2, 2, -1, 3, 0], opacity: [0, 0.5, 0, 0.3, 0] }}
                  transition={{ repeat: Infinity, duration: 0.15 }}
                  className="absolute inset-0 font-cabinet font-black text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[160px] uppercase tracking-tighter leading-none text-cyan-400/30 pointer-events-none"
                  style={{ clipPath: "inset(45% 0 50% 0)" }}
                >
                  {text}
                </motion.div>
                <motion.div
                  animate={{ x: [1, -3, 2, -1, 0], opacity: [0, 0.4, 0, 0.2, 0] }}
                  transition={{ repeat: Infinity, duration: 0.2, delay: 0.05 }}
                  className="absolute inset-0 font-cabinet font-black text-[15vw] sm:text-[12vw] md:text-[10vw] lg:text-[160px] uppercase tracking-tighter leading-none text-red-400/20 pointer-events-none"
                  style={{ clipPath: "inset(20% 0 75% 0)" }}
                >
                  {text}
                </motion.div>
              </>
            )}
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 sm:w-64">
            <div className="flex justify-between mb-2">
              <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.4em]">Loading</span>
              <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-[0.4em] font-bold">
                {counter}%
              </span>
            </div>
            <div className="h-px bg-zinc-900 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)]"
                animate={{ width: `${counter}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>

          {/* Bottom text */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <span className="text-[8px] font-mono text-zinc-800 uppercase tracking-[0.8em]">
              Cognito Media & Business Solutions
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
