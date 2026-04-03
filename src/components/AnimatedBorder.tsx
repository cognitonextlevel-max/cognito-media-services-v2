"use client";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBorder = ({ children, className = "" }: AnimatedBorderProps) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated gradient border */}
      <div className="absolute -inset-px rounded-sm bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-border-rotate" />

      {/* Content with solid bg */}
      <div className="relative bg-[#050505] rounded-sm h-full">
        {children}
      </div>
    </div>
  );
};
