"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

// Dynamically import Spline with SSR disabled to prevent hydration errors and server-side crashes
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-zinc-950/20 animate-pulse" />
});

interface CognitoSplineProps {
  sceneUrl: string;
  className?: string;
}

export const CognitoSpline = ({ sceneUrl, className = "" }: CognitoSplineProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      <Spline 
        scene={sceneUrl} 
        className="w-full h-full"
      />
    </motion.div>
  );
};
