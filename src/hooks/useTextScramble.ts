"use client";

import { useEffect, useState, useRef } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&";

export function useTextScramble(text: string, options?: { speed?: number; trigger?: boolean }) {
  const { speed = 50, trigger = true } = options || {};
  const [display, setDisplay] = useState(text);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;

    let frame: number;
    let iteration = 0;
    const totalChars = text.length;
    const totalFrames = totalChars * 3;

    const scramble = () => {
      const progress = iteration / totalFrames;

      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i / totalChars < progress) return char;
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      iteration++;
      if (iteration <= totalFrames) {
        frame = setTimeout(() => requestAnimationFrame(scramble), speed) as unknown as number;
      }
    };

    scramble();

    return () => clearTimeout(frame);
  }, [text, speed, trigger]);

  return display;
}
