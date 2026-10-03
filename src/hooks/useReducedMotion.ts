'use client';

import { useReducedMotion as useFramerReducedMotion } from 'motion/react';

/**
 * Wraps Framer Motion's useReducedMotion hook.
 * Returns prefersReduced flag and a durationMultiplier (0 when reduced, 1 otherwise).
 */
export function useReducedMotion() {
  const prefersReduced = useFramerReducedMotion();
  // When reduced motion is preferred, all durations become 0
  const durationMultiplier = prefersReduced ? 0 : 1;
  return { prefersReduced, durationMultiplier };
}
