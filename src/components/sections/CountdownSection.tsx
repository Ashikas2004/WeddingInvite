'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ExtendedWeddingData } from '@/data/wedding';
import { GlassCard } from '@/components/ui/GlassCard';
import { useCountdown } from '@/hooks/useCountdown';
import { countdownStaggerVariants, fadeUpVariants } from '@/lib/animations';

interface CountdownSectionProps {
  data: ExtendedWeddingData;
}

const UNIT_LABELS = ['Days', 'Hours', 'Minutes', 'Seconds'] as const;

/**
 * CountdownSection — live countdown to the wedding date.
 *
 * Hydration fix: the countdown value changes every second, so the server
 * snapshot will ALWAYS differ from the client. We solve this by:
 *   1. Rendering a static "-- -- -- --" placeholder on the server (and on
 *      the first client render before `mounted` flips).
 *   2. Only showing the live countdown after `useEffect` fires (client-only).
 *
 * This guarantees server HTML === initial client HTML → no hydration mismatch.
 */
export function CountdownSection({ data }: CountdownSectionProps) {
  const [mounted, setMounted] = useState(false);

  // Only run after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="countdown"
      className="section-spacing"
      style={{
        background: 'linear-gradient(135deg, #ffd8c2 0%, #d8c8f2 50%, #f8d7e3 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl mb-3"
            style={{ fontFamily: 'var(--font-script)', color: '#9b7fa6' }}
          >
            Counting Down
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ fontFamily: 'var(--font-body)', color: '#b89ec4' }}
          >
            Until we say &ldquo;I do&rdquo;
          </p>
        </motion.div>

        {/* Countdown grid — static placeholder until mounted */}
        {mounted ? (
          <LiveCountdown targetDate={new Date(data.date)} />
        ) : (
          <StaticPlaceholder />
        )}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   LiveCountdown — rendered only on the client after hydration
───────────────────────────────────────────────────────────────────────── */
function LiveCountdown({ targetDate }: { targetDate: Date }) {
  const countdown = useCountdown(targetDate);

  if (countdown.isPast) {
    return (
      <GlassCard variant="strong" className="text-center max-w-2xl mx-auto p-8">
        <p
          className="text-3xl md:text-4xl mb-3"
          style={{ fontFamily: 'var(--font-script)', color: '#e8a0b4' }}
        >
          Today is the Day! 💕
        </p>
        <p
          className="text-base md:text-lg"
          style={{ fontFamily: 'var(--font-body)', color: '#b89ec4' }}
        >
          Wishing Ashmi &amp; Jeffrin a lifetime of love and happiness.
        </p>
      </GlassCard>
    );
  }

  return (
    <motion.div
      variants={countdownStaggerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto"
    >
      {countdown.units.map((unit, index) => (
        <motion.div key={unit.label} variants={fadeUpVariants} custom={index}>
          <CountdownCard value={unit.value} label={unit.label} />
        </motion.div>
      ))}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   StaticPlaceholder — matches the server HTML exactly (no time values)
───────────────────────────────────────────────────────────────────────── */
function StaticPlaceholder() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
      {UNIT_LABELS.map((label) => (
        <CountdownCard key={label} value="--" label={label} />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   CountdownCard — shared card UI
───────────────────────────────────────────────────────────────────────── */
function CountdownCard({ value, label }: { value: string; label: string }) {
  return (
    <GlassCard variant="strong" className="text-center py-6 px-4">
      {/* Number */}
      <div
        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-2 tabular-nums"
        style={{ fontFamily: 'var(--font-serif)', color: '#e8a0b4' }}
      >
        {value}
      </div>
      {/* Label */}
      <div
        className="text-xs md:text-sm uppercase tracking-widest"
        style={{ fontFamily: 'var(--font-body)', color: '#b89ec4' }}
      >
        {label}
      </div>
    </GlassCard>
  );
}
