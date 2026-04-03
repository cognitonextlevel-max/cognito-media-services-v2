"use client";

import { useEffect, useRef, useState } from "react";

interface PretextCanvasProps {
  lines: string[];
  fontSize?: number;
  className?: string;
}

export const PretextCanvas = ({ lines, fontSize = 120, className = "" }: PretextCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ w: 1200, h: 600 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      setDimensions({ w: rect.width, h: rect.height });
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener("mousemove", handleMouse);

    let time = 0;
    let animId: number;

    const draw = () => {
      const { w, h } = { w: canvas.width / dpr, h: canvas.height / dpr };
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Responsive font size
      const responsiveSize = Math.min(fontSize, w * 0.12);

      lines.forEach((line, lineIdx) => {
        const y = 80 + lineIdx * (responsiveSize * 1.1);
        const chars = line.split("");

        let xPos = 24;

        chars.forEach((char, charIdx) => {
          const charWidth = ctx.measureText(char).width || responsiveSize * 0.6;

          // Calculate distance from mouse for distortion
          const dx = mx - (xPos + charWidth / 2);
          const dy = my - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;
          const influence = Math.max(0, 1 - dist / maxDist);

          // Wave offset based on time
          const waveY = Math.sin(time * 2 + charIdx * 0.15 + lineIdx) * 2;
          const waveX = Math.cos(time * 1.5 + charIdx * 0.1) * 1;

          // Mouse repulsion
          const repelX = influence * (dx > 0 ? 1 : -1) * 8;
          const repelY = influence * (dy > 0 ? 1 : -1) * 5;

          const finalX = xPos + waveX + repelX;
          const finalY = y + waveY + repelY;

          // Glow based on proximity
          const glowAlpha = influence * 0.8;

          ctx.save();

          // Cyan glow on nearby chars
          if (glowAlpha > 0.05) {
            ctx.shadowColor = `rgba(0, 255, 255, ${glowAlpha})`;
            ctx.shadowBlur = 20 + influence * 30;
          }

          // Color shift
          const r = Math.round(255 - influence * 255);
          const g = Math.round(255 - influence * (255 - 255));
          const b = Math.round(255 - influence * (255 - 255));
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${0.95 - lineIdx * 0.05})`;

          // Italic styling for specific lines
          const isItalic = lineIdx === 1;
          ctx.font = `${isItalic ? "italic " : ""}900 ${responsiveSize}px "Cabinet Grotesk", sans-serif`;
          ctx.textBaseline = "top";

          // Slight rotation on mouse proximity
          if (influence > 0.1) {
            ctx.translate(finalX + charWidth / 2, finalY);
            ctx.rotate(influence * 0.05 * (charIdx % 2 === 0 ? 1 : -1));
            ctx.translate(-(finalX + charWidth / 2), -finalY);
          }

          ctx.fillText(char, finalX, finalY);
          ctx.restore();

          // Measure actual char width for positioning
          ctx.font = `${isItalic ? "italic " : ""}900 ${responsiveSize}px "Cabinet Grotesk", sans-serif`;
          xPos += ctx.measureText(char).width;
        });
      });

      // Decorative scan line
      const scanY = (time * 80) % (canvas.height / dpr + 200) - 100;
      ctx.fillStyle = "rgba(0, 255, 255, 0.03)";
      ctx.fillRect(0, scanY, w, 1);

      time += 0.016;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
    };
  }, [lines, fontSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full ${className}`}
      style={{ height: `${lines.length * (fontSize * 1.1) + 100}px` }}
    />
  );
};
