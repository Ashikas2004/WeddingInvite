'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { ExtendedWeddingData } from '@/data/wedding';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface HeroSectionProps {
  data: ExtendedWeddingData;
}

const PETALS = [
  { left: '4%',  delay: 0,   dur: 9,  color: '#f8d7e3', size: 14 },
  { left: '14%', delay: 1.5, dur: 10, color: '#d8c8f2', size: 10 },
  { left: '26%', delay: 0.7, dur: 11, color: '#ffd8c2', size: 12 },
  { left: '40%', delay: 2.2, dur: 8,  color: '#f8d7e3', size: 8  },
  { left: '56%', delay: 0.4, dur: 12, color: '#d8c8f2', size: 14 },
  { left: '68%', delay: 1.8, dur: 9,  color: '#ffd8c2', size: 10 },
  { left: '80%', delay: 0.9, dur: 10, color: '#f6d37a', size: 12 },
  { left: '91%', delay: 2.6, dur: 11, color: '#f8d7e3', size: 9  },
];

export function HeroSection({ data }: HeroSectionProps) {
  const { prefersReduced } = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(150deg, #fce4ec 0%, #e8d5f5 30%, #ffd8c2 65%, #fff9f0 100%)',
      }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute rounded-full animate-blob"
          style={{
            width: 600, height: 600,
            top: -150, left: -150,
            background: 'radial-gradient(circle at 40% 40%, #f8d7e3 0%, #d8c8f2 60%, transparent 100%)',
            filter: 'blur(60px)',
            opacity: 0.6,
          }}
        />
        <div
          className="absolute rounded-full animate-blob"
          style={{
            width: 500, height: 500,
            bottom: -100, right: -100,
            background: 'radial-gradient(circle at 60% 60%, #ffd8c2 0%, #f6d37a 60%, transparent 100%)',
            filter: 'blur(60px)',
            opacity: 0.5,
            animationDelay: '3s',
          }}
        />
        <div
          className="absolute rounded-full animate-blob"
          style={{
            width: 350, height: 350,
            top: '40%', left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, #d8c8f2 0%, transparent 70%)',
            filter: 'blur(50px)',
            opacity: 0.4,
            animationDelay: '1.5s',
          }}
        />
      </div>

      {/* Floating petals */}
      {!prefersReduced && PETALS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{ left: p.left, top: -20, width: p.size, height: p.size, background: p.color }}
          animate={{ y: '110vh', rotate: [0, 200, 360], x: [0, 30, -20, 0], opacity: [0, 0.9, 0.9, 0] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center py-16">

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.7, delay: prefersReduced ? 0 : 0.2 }}
          style={{ fontFamily: 'var(--font-body)', color: '#9b7fa6', letterSpacing: '0.2em' }}
          className="text-xs md:text-sm uppercase font-medium mb-8"
        >
          Together with their families
        </motion.p>

        {/* Bride name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.9, delay: prefersReduced ? 0 : 0.4 }}
          style={{ fontFamily: 'var(--font-script)', color: '#7c4f7c', lineHeight: 1.1 }}
          className="text-7xl md:text-9xl mb-0"
        >
          {data.bride.name}
        </motion.h1>

        {/* Ampersand */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : 0.7 }}
          className="my-2 md:my-4"
        >
          <span
            style={{ fontFamily: 'var(--font-script)', color: '#e8a0b4', fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            &amp;
          </span>
        </motion.div>

        {/* Groom name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.9, delay: prefersReduced ? 0 : 0.9 }}
          style={{ fontFamily: 'var(--font-script)', color: '#7c4f7c', lineHeight: 1.1 }}
          className="text-7xl md:text-9xl mb-10"
        >
          {data.groom.name}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: prefersReduced ? 0 : 0.7, delay: prefersReduced ? 0 : 1.1 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-20 md:w-32" style={{ background: 'linear-gradient(90deg, transparent, #d8c8f2)' }} />
          <div className="w-2 h-2 rounded-full" style={{ background: '#e8a0b4' }} />
          <div className="h-px w-20 md:w-32" style={{ background: 'linear-gradient(90deg, #d8c8f2, transparent)' }} />
        </motion.div>

        {/* Date, time, venue */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReduced ? 0 : 0.7, delay: prefersReduced ? 0 : 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12"
          style={{ fontFamily: 'var(--font-body)', color: '#9b7fa6' }}
        >
          <div className="flex items-center gap-2 text-sm md:text-base font-medium">
            <Calendar size={16} style={{ color: '#e8a0b4' }} />
            <span>11 November 2026 · Wednesday</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full" style={{ background: '#d8c8f2' }} />
          <div className="flex items-center gap-2 text-sm md:text-base font-medium">
            <Clock size={16} style={{ color: '#e8a0b4' }} />
            <span>10:30 AM – 11:30 AM</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full" style={{ background: '#d8c8f2' }} />
          <div className="flex items-center gap-2 text-sm md:text-base font-medium">
            <MapPin size={16} style={{ color: '#e8a0b4' }} />
            <span>{data.venue.city}</span>
          </div>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: prefersReduced ? 0 : 0.6, delay: prefersReduced ? 0 : 1.4 }}
          style={{ fontFamily: 'var(--font-serif)', color: '#b89ec4' }}
          className="text-base md:text-lg italic mb-12"
        >
          With the blessings of our families
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <button
            onClick={() => document.querySelector('#couple')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-[#f6d37a] transition-opacity hover:opacity-70"
            style={{ color: '#d8c8f2' }}
            aria-label="Scroll down"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
