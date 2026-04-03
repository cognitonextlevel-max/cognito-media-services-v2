"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MagneticCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Bail on mobile/touch devices
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setIsMobile(false);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const handleHoverStart = () => setHovering(true);
    const handleHoverEnd = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const attachListeners = () => {
      document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    // Watch for new elements
    const observer = new MutationObserver(attachListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    attachListeners();

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  // Don't render anything on mobile or until visible
  if (isMobile || !visible) return null;

  return (
    <>
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      >
        <motion.div
          animate={{
            width: hovering ? 60 : 12,
            height: hovering ? 60 : 12,
            borderRadius: "50%",
          }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-cyan-400 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <motion.div
          animate={{
            width: hovering ? 80 : 40,
            height: hovering ? 80 : 40,
            opacity: hovering ? 0.3 : 0.15,
          }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          className="border border-cyan-400/40 rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </>
  );
};
