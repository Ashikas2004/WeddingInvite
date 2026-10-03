'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ChibiDollProps } from '@/types/wedding';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * ChibiDoll component that displays Korean-style chibi character illustrations
 * Includes floating animation and optional sparkle effects
 */
export function ChibiDoll({
  src,
  alt,
  size = 200,
  floatDelay = 0,
  className = '',
}: ChibiDollProps) {
  const { prefersReduced, durationMultiplier } = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: prefersReduced ? 0 : [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.6 * durationMultiplier },
        scale: { duration: 0.6 * durationMultiplier },
        y: {
          duration: 3 * durationMultiplier,
          delay: floatDelay * durationMultiplier,
          repeat: prefersReduced ? 0 : Infinity,
          ease: 'easeInOut',
        },
      }}
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-contain drop-shadow-lg"
        priority
      />
    </motion.div>
  );
}
