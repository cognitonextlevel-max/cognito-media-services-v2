"use client";

import { motion } from "framer-motion";

/**
 * HandwrittenLogo — SVG "DeMarkuss Day" that draws itself like a pen is writing it.
 * Uses stroke-dashoffset animation on hand-crafted cursive letterforms.
 */

/* Each letter is an SVG path approximating Sacramento-style cursive.
   We animate them sequentially so it looks like continuous handwriting. */
const letters = [
  // D
  { d: "M8,38 C8,38 8,8 8,8 C8,8 16,6 22,10 C28,14 30,22 28,30 C26,38 20,42 12,40 C8,38 8,38 8,38", delay: 0 },
  // e
  { d: "M34,28 C34,24 38,20 42,20 C46,20 48,24 46,28 C44,32 38,32 34,28 C34,28 48,34 48,34", delay: 0.25 },
  // M
  { d: "M56,38 L56,12 L66,30 L76,12 L76,38", delay: 0.5 },
  // a
  { d: "M84,24 C84,20 88,18 92,20 C96,22 96,30 92,34 C88,36 84,34 84,30 L96,38", delay: 0.8 },
  // r
  { d: "M102,38 L102,22 C102,22 106,18 112,20", delay: 1.0 },
  // k
  { d: "M118,10 L118,38 M118,26 L128,18 M122,26 L130,38", delay: 1.15 },
  // u
  { d: "M136,22 C136,22 136,32 140,34 C144,36 148,32 148,22 L148,38", delay: 1.35 },
  // s
  { d: "M156,22 C156,20 162,18 164,22 C166,26 156,28 156,32 C156,36 162,38 166,34", delay: 1.5 },
  // s
  { d: "M172,22 C172,20 178,18 180,22 C182,26 172,28 172,32 C172,36 178,38 182,34", delay: 1.65 },

  // (space)

  // D
  { d: "M198,38 C198,38 198,8 198,8 C198,8 206,6 212,10 C218,14 220,22 218,30 C216,38 210,42 202,40 C198,38 198,38 198,38", delay: 1.9 },
  // a
  { d: "M226,24 C226,20 230,18 234,20 C238,22 238,30 234,34 C230,36 226,34 226,30 L238,38", delay: 2.15 },
  // y
  { d: "M246,22 L252,34 M258,22 L248,46", delay: 2.35 },
];

/* Connecting swoosh lines between letters to simulate continuous cursive flow */
const connectors = [
  { d: "M28,34 C32,36 32,28 34,28", delay: 0.2 },     // D→e
  { d: "M48,34 C50,36 52,38 56,38", delay: 0.45 },     // e→M
  { d: "M76,38 C78,36 80,30 84,30", delay: 0.75 },     // M→a
  { d: "M96,38 C98,36 100,30 102,28", delay: 0.95 },   // a→r
  { d: "M112,20 C114,22 116,14 118,14", delay: 1.1 },  // r→k
  { d: "M130,38 C132,36 134,28 136,26", delay: 1.3 },  // k→u
  { d: "M148,38 C150,34 152,26 156,24", delay: 1.45 }, // u→s
  { d: "M166,34 C168,32 170,26 172,24", delay: 1.6 },  // s→s
  { d: "M182,34 C186,38 192,38 198,38", delay: 1.8 },  // s→D
  { d: "M218,34 C220,34 222,28 226,28", delay: 2.1 },  // D→a
  { d: "M238,38 C240,34 242,28 246,24", delay: 2.3 },  // a→y
];

const pathVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (delay: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.4, delay, ease: [0.19, 1, 0.22, 1] as const },
      opacity: { duration: 0.05, delay },
    },
  }),
};

const fillVariant = {
  hidden: { fillOpacity: 0 },
  visible: {
    fillOpacity: 1,
    transition: { duration: 0.8, delay: 3.0, ease: [0, 0, 0.2, 1] as const },
  },
};

interface HandwrittenLogoProps {
  className?: string;
  color?: string;
  width?: number;
  animate?: boolean;
}

export const HandwrittenLogo = ({
  className = "",
  color = "rgb(34, 211, 238)", // cyan-400
  width = 160,
  animate = true,
}: HandwrittenLogoProps) => {
  const allPaths = [...letters, ...connectors];
  const height = (width / 268) * 52;

  return (
    <motion.svg
      viewBox="0 0 268 52"
      width={width}
      height={height}
      fill="none"
      className={className}
      initial={animate ? "hidden" : "visible"}
      animate="visible"
    >
      {/* Glow filter */}
      <defs>
        <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#logo-glow)">
        {/* Draw the stroke paths */}
        {allPaths.map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            stroke={color}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            variants={pathVariant}
            custom={p.delay}
          />
        ))}
      </g>

      {/* After writing completes, fade in a filled cursive text on top for crispness */}
      <motion.text
        x="134"
        y="36"
        textAnchor="middle"
        fontSize="32"
        fontFamily="var(--font-signature)"
        fill={color}
        variants={fillVariant}
        style={{ opacity: 0 }}
      >
        DeMarkuss Day
      </motion.text>
    </motion.svg>
  );
};

/**
 * Simpler version: Pure CSS "writing" reveal using clip-path
 * This uses the actual Sacramento font and reveals it left-to-right
 * as if being written by hand. More reliable than SVG paths.
 */
export const WritingRevealLogo = ({
  className = "",
  text = "DeMarkuss Day",
  delay = 0,
  duration = 2.5,
}: {
  className?: string;
  text?: string;
  delay?: number;
  duration?: number;
}) => {
  return (
    <span className={`relative inline-block ${className}`}>
      {/* The text */}
      <motion.span
        className="inline-block"
        style={{
          fontFamily: "var(--font-signature)",
          clipPath: "inset(0 100% 0 0)",
        }}
        animate={{
          clipPath: "inset(0 0% 0 0)",
        }}
        transition={{
          duration,
          delay,
          ease: [0.19, 1, 0.22, 1],
        }}
      >
        {text}
      </motion.span>

      {/* The "pen" cursor that moves with the reveal */}
      <motion.span
        className="absolute top-0 h-full w-[2px] bg-current shadow-[0_0_8px_currentColor,0_0_15px_currentColor]"
        initial={{ left: "0%" }}
        animate={{ left: "100%" }}
        transition={{
          duration,
          delay,
          ease: [0.19, 1, 0.22, 1],
        }}
      />
    </span>
  );
};
