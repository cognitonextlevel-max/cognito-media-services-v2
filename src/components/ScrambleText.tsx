"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTextScramble } from "@/hooks/useTextScramble";

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
  speed?: number;
}

export const ScrambleText = ({ text, className = "", as: Tag = "h2", speed = 40 }: ScrambleTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const display = useTextScramble(text, { speed, trigger: isInView });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      <Tag className={className}>{display}</Tag>
    </motion.div>
  );
};
