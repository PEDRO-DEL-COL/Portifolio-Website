// src/components/VideoBackground.tsx
"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function VideoBackground() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  // Sempre chamamos os hooks
  const yTransform = useTransform(scrollY, [0, 600], [0, -120]);
  const opacityTransform = useTransform(scrollY, [0, 400], [1, 0.35]);

  // Se o usuário prefere reduzir movimento, usamos valores fixos
  const y = shouldReduceMotion ? 0 : yTransform;
  const opacity = shouldReduceMotion ? 1 : opacityTransform;

  return (
    <motion.div style={{ y }} className="absolute inset-0 -z-10 overflow-hidden">
      <motion.video
        className="w-fill h-fill object-cover opacity-90"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        src="/videos/VideoBackgroundPortifolio.mp4" 
        poster="/images/bg-poster.jpg"
        aria-hidden="true"
      />
      {/* overlay para contraste */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none" />
    </motion.div>
  );
}
