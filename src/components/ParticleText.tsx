"use client";

import { useEffect, useRef, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
}

interface ParticleTextProps {
  lines: string[];
  fontSize?: number;
  className?: string;
}

export const ParticleText = ({ lines, fontSize = 120, className = "" }: ParticleTextProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<Particle[]>([]);
  const initializedRef = useRef(false);

  const initParticles = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width / dpr;
    const h = canvas.height / dpr;

    // Create offscreen canvas to render text
    const offscreen = document.createElement("canvas");
    offscreen.width = canvas.width;
    offscreen.height = canvas.height;
    const offCtx = offscreen.getContext("2d")!;
    offCtx.scale(dpr, dpr);

    // Responsive font size
    const size = Math.min(fontSize, w * 0.11);

    // Draw text to offscreen canvas
    offCtx.fillStyle = "white";
    offCtx.textBaseline = "top";

    lines.forEach((line, i) => {
      const isItalic = i === 1;
      offCtx.font = `${isItalic ? "italic " : ""}900 ${size}px "Cabinet Grotesk", Impact, sans-serif`;
      const y = 40 + i * size * 1.05;
      offCtx.fillText(line, 20, y);
    });

    // Read pixel data
    const imageData = offCtx.getImageData(0, 0, offscreen.width, offscreen.height);
    const pixels = imageData.data;
    const particles: Particle[] = [];
    const gap = 3; // Sample every 3 pixels for density

    for (let y = 0; y < offscreen.height; y += gap * dpr) {
      for (let x = 0; x < offscreen.width; x += gap * dpr) {
        const i = (y * offscreen.width + x) * 4;
        const alpha = pixels[i + 3];

        if (alpha > 128) {
          const targetX = x / dpr;
          const targetY = y / dpr;

          particles.push({
            x: Math.random() * w,
            y: Math.random() * h,
            targetX,
            targetY,
            vx: (Math.random() - 0.5) * 10,
            vy: (Math.random() - 0.5) * 10,
            size: Math.random() * 1.8 + 0.8,
            alpha: Math.random() * 0.6 + 0.4,
            color: Math.random() > 0.92 ? "rgba(0, 255, 255," : "rgba(255, 255, 255,",
          });
        }
      }
    }

    particlesRef.current = particles;
    initializedRef.current = true;
  }, [lines, fontSize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      initializedRef.current = false;
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    canvas.addEventListener("mousemove", handleMouse);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let animId: number;
    let settled = false;

    const draw = () => {
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      if (!initializedRef.current) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.scale(dpr, dpr);
        initParticles(canvas, ctx);
      }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseRadius = 100;
      let totalMovement = 0;

      for (const p of particlesRef.current) {
        // Spring toward target
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx += dx * 0.06;
        p.vy += dy * 0.06;

        // Mouse repulsion
        const mdx = p.x - mx;
        const mdy = p.y - my;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouseRadius) {
          const force = (mouseRadius - mDist) / mouseRadius;
          const angle = Math.atan2(mdy, mdx);
          p.vx += Math.cos(angle) * force * 8;
          p.vy += Math.sin(angle) * force * 8;
        }

        // Friction
        p.vx *= 0.88;
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        totalMovement += Math.abs(p.vx) + Math.abs(p.vy);

        // Draw
        ctx.fillStyle = `${p.color} ${p.alpha})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }

      // Draw subtle connections near mouse
      if (mx > 0 && my > 0) {
        for (const p of particlesRef.current) {
          const d = Math.sqrt((p.x - mx) ** 2 + (p.y - my) ** 2);
          if (d < 80 && p.color.includes("cyan")) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(0, 255, 255, ${0.08 * (1 - d / 80)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Optimize: reduce framerate when settled
      if (totalMovement < 1 && mx === -9999) {
        if (!settled) {
          settled = true;
        }
      } else {
        settled = false;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [initParticles]);

  const totalHeight = lines.length * fontSize * 1.05 + 80;

  return (
    <canvas
      ref={canvasRef}
      className={`w-full cursor-crosshair ${className}`}
      style={{ height: `${Math.min(totalHeight, 500)}px` }}
    />
  );
};
