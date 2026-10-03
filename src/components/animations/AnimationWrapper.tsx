'use client';

import React from 'react';
import { motion } from 'motion/react';
import { AnimationWrapperProps } from '@/types/wedding';
import { useReducedMotion } from '@/hooks/useReducedMotion';

/**
 * AnimationWrapper component that applies Framer Motion variants to children
 * Respects user's reduced motion preferences
 */
export function AnimationWrapper({
  children,
  variants,
  initial = 'hidden',
  animate = 'visible',
  className = '',
  delay = 0,
}: AnimationWrapperProps) {
  const { prefersReduced, durationMultiplier } = useReducedMotion();

  // Adjust transition durations based on reduced motion preference
  const adjustedVariants = React.useMemo(() => {
    if (!variants || prefersReduced) return variants;

    const adjusted: typeof variants = {};
    Object.keys(variants).forEach((key) => {
      const variant = variants[key];
      if (variant && typeof variant === 'object' && 'transition' in variant) {
        adjusted[key] = {
          ...variant,
          transition: {
            ...variant.transition,
            duration:
              typeof variant.transition === 'object' &&
              'duration' in variant.transition
                ? (variant.transition.duration as number) * durationMultiplier
                : undefined,
          },
        };
      } else {
        adjusted[key] = variant;
      }
    });
    return adjusted;
  }, [variants, prefersReduced, durationMultiplier]);

  return (
    <motion.div
      variants={adjustedVariants}
      initial={initial}
      animate={animate}
      transition={{ delay: delay * durationMultiplier }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
