"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll").then(m => ({ default: m.SmoothScroll })), { ssr: false });
const MagneticCursor = dynamic(() => import("@/components/MagneticCursor").then(m => ({ default: m.MagneticCursor })), { ssr: false });
const NoiseCanvas = dynamic(() => import("@/components/NoiseCanvas").then(m => ({ default: m.NoiseCanvas })), { ssr: false });
const Preloader = dynamic(() => import("@/components/Preloader").then(m => ({ default: m.Preloader })), { ssr: false });
const VoiceAgent = dynamic(() => import("@/components/VoiceAgent").then(m => ({ default: m.VoiceAgent })), { ssr: false });

export const ClientEffects = () => {
  return (
    <>
      <Preloader />
      <SmoothScroll />
      <MagneticCursor />
      <NoiseCanvas />
      <VoiceAgent />
    </>
  );
};
