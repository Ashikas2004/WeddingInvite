'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FloatingPetalProps } from '@/types/wedding';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * FloatingPetal component that creates animated petal elements
 * Petals float down with random delays and durations
 */
export function FloatingPetal({
  color,
  delay = 0,
  duration = 8,
  left,
}: FloatingPetalProps) {
  const { prefersReduced, durationMultiplier } = useReducedMotion();

  const colorClasses = {
    blush: 'bg-blush',
    lavender: 'bg-lavender',
    peach: 'bg-peach',
    ivory: 'bg-ivory',
    gold: 'bg-gold',
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0, rotate: 0 }}
      animate={{
        y: prefersReduced ? 0 : '100vh',
        opacity: prefersReduced ? 0.3 : [0, 1, 1, 0],
        rotate: prefersReduced ? 0 : [0, 180, 360],
        x: prefersReduced ? 0 : [0, 30, -30, 0],
      }}
      transition={{
        duration: duration * durationMultiplier,
        delay: delay * durationMultiplier,
        repeat: prefersReduced ? 0 : Infinity,
        ease: 'linear',
      }}
      className={`absolute w-3 h-3 rounded-full ${colorClasses[color]} opacity-60 blur-sm pointer-events-none`}
      style={{ left: `${left}%`, top: '-20px' }}
      aria-hidden="true"
    />
  );
}
