'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface IntroScreenProps {
  onComplete: () => void;
}

/**
 * IntroScreen — cinematic full-screen opening overlay.
 * Shown only on the client (mounted guard in page.tsx prevents hydration mismatch).
 */
export function IntroScreen({ onComplete }: IntroScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const { prefersReduced } = useReducedMotion();

  useEffect(() => {
    const hideDelay = prefersReduced ? 100 : 3200;
    const exitDelay = prefersReduced ? 50 : 600;

    const t1 = setTimeout(() => setIsVisible(false), hideDelay);
    const t2 = setTimeout(onComplete, hideDelay + exitDelay);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete, prefersReduced]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.5 }}
          /* Full-screen overlay above everything */
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, #f8d7e3 0%, #dce8d6 35%, #ffd8c2 70%, #f6d37a 100%)',
          }}
        >
          {/* Animated blobs for depth */}
          <div
            className="absolute w-96 h-96 rounded-full opacity-30 animate-blob"
            style={{
              background: 'radial-gradient(circle, #f8d7e3, #dce8d6)',
              top: '-5rem',
              left: '-5rem',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full opacity-25 animate-blob"
            style={{
              background: 'radial-gradient(circle, #dce8d6, #f6d37a)',
              bottom: '-4rem',
              right: '-4rem',
              filter: 'blur(60px)',
              animationDelay: '2s',
            }}
          />

          {/* Content */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: prefersReduced ? 0 : 0.8, delay: prefersReduced ? 0 : 0.2, ease: 'easeOut' }}
            className="relative z-10 text-center px-8"
          >
            {/* Couple initials */}
            <div className="flex items-center justify-center gap-5 mb-6">
              <span
                className="text-7xl md:text-9xl drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)', color: '#fff' }}
              >
                A
              </span>

              <motion.div
                animate={prefersReduced ? {} : { scale: [1, 1.25, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Heart size={52} className="drop-shadow-lg" style={{ color: '#fff', fill: '#fff' }} />
              </motion.div>

              <span
                className="text-7xl md:text-9xl drop-shadow-lg"
                style={{ fontFamily: 'var(--font-script)', color: '#fff' }}
              >
                J
              </span>
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : 0.9 }}
              className="text-xl md:text-2xl text-white/90 tracking-widest"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Together Forever
            </motion.p>

            {/* Date teaser */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : 1.4 }}
              className="mt-3 text-base md:text-lg text-white/75 tracking-wider"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              11 · 11 · 2026
            </motion.p>
          </motion.div>

          {/* Floating petals (decorative) */}
          {!prefersReduced && (
            <>
              {[
                { left: '8%',  top: '15%', size: 10, delay: 0 },
                { left: '20%', top: '75%', size: 8,  delay: 0.5 },
                { left: '75%', top: '20%', size: 12, delay: 1 },
                { left: '85%', top: '65%', size: 9,  delay: 1.5 },
                { left: '50%', top: '88%', size: 7,  delay: 0.8 },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    left: p.left,
                    top: p.top,
                    width: p.size,
                    height: p.size,
                    background: ['#f8d7e3', '#dce8d6', '#ffd8c2', '#f6d37a', '#fff'][i % 5],
                    opacity: 0.7,
                  }}
                  animate={{ y: [0, -18, 0], rotate: [0, 20, 0] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
                />
              ))}
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
