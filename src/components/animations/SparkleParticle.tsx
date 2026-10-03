'use client';

import React from 'react';
import { motion } from 'motion/react';
import { SparkleParticleProps } from '@/types/wedding';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * SparkleParticle component that creates twinkling star-like effects
 * Particles pulse with random delays for a magical sparkle effect
 */
export function SparkleParticle({
  top,
  left,
  delay = 0,
  size = 4,
}: SparkleParticleProps) {
  const { prefersReduced, durationMultiplier } = useReducedMotion();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: prefersReduced ? 1 : [0, 1, 0],
        opacity: prefersReduced ? 0.5 : [0, 1, 0],
      }}
      transition={{
        duration: 2 * durationMultiplier,
        delay: delay * durationMultiplier,
        repeat: prefersReduced ? 0 : Infinity,
        ease: 'easeInOut',
      }}
      className="absolute pointer-events-none"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-hidden="true"
    >
      <div className="relative w-full h-full">
        {/* Star shape using two rotated squares */}
        <div className="absolute inset-0 bg-gold rounded-sm rotate-0" />
        <div className="absolute inset-0 bg-gold rounded-sm rotate-45" />
      </div>
    </motion.div>
  );
}
