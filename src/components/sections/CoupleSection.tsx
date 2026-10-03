'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ExtendedWeddingData } from '@/data/wedding';
import { GlassCard } from '@/components/ui/GlassCard';

interface CoupleSectionProps {
  data: ExtendedWeddingData;
}

const DETAIL_ROWS = [
  { label: 'Parents', key: 'parents' as const },
  { label: 'Address', key: 'address' as const },
];

export function CoupleSection({ data }: CoupleSectionProps) {
  return (
    <section
      id="couple"
      className="section-spacing"
      style={{ background: 'linear-gradient(160deg, #fffaf2 0%, #f3e5f5 40%, #fce4ec 100%)' }}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'var(--font-script)', color: '#7c4f7c' }}
          >
            The Happy Couple
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)', color: '#9b7fa6' }}
          >
            Two hearts, one love story. Join us as we begin our forever together.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <GlassCard variant="strong" className="text-center h-full p-8">
              {/* Chibi illustration */}
              <div className="flex justify-center mb-6">
                <div
                  className="relative w-36 h-36 rounded-full overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #fce4ec, #f3e5f5)', boxShadow: '0 4px 20px rgba(248, 215, 227, 0.5)' }}
                >
                  <Image
                    src="/illustrations/bride-chibi.svg"
                    alt="Bride illustration"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>

              {/* Name */}
              <h3
                className="text-3xl md:text-4xl mb-1"
                style={{ fontFamily: 'var(--font-script)', color: '#e8a0b4' }}
              >
                {data.bride.name}
              </h3>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-5"
                style={{ fontFamily: 'var(--font-body)', color: '#b89ec4' }}
              >
                The Bride
              </p>

              {/* Details */}
              <div className="space-y-3 text-left">
                {DETAIL_ROWS.map(({ label, key }) =>
                  data.bride[key] ? (
                    <div key={key} className="flex gap-3">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider w-24 flex-shrink-0 pt-0.5"
                        style={{ fontFamily: 'var(--font-body)', color: '#d8c8f2' }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)', color: '#9b7fa6' }}
                      >
                        {data.bride[key]}
                      </span>
                    </div>
                  ) : null
                )}
              </div>
            </GlassCard>
          </motion.div>

          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <GlassCard variant="strong" className="text-center h-full p-8">
              {/* Chibi illustration */}
              <div className="flex justify-center mb-6">
                <div
                  className="relative w-36 h-36 rounded-full overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #e8d5f5, #d8c8f2)', boxShadow: '0 4px 20px rgba(216, 200, 242, 0.5)' }}
                >
                  <Image
                    src="/illustrations/groom-chibi.svg"
                    alt="Groom illustration"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>

              {/* Name */}
              <h3
                className="text-3xl md:text-4xl mb-1"
                style={{ fontFamily: 'var(--font-script)', color: '#9b7fa6' }}
              >
                {data.groom.name}
              </h3>
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-5"
                style={{ fontFamily: 'var(--font-body)', color: '#b89ec4' }}
              >
                The Groom
              </p>

              {/* Details */}
              <div className="space-y-3 text-left">
                {DETAIL_ROWS.map(({ label, key }) =>
                  data.groom[key] ? (
                    <div key={key} className="flex gap-3">
                      <span
                        className="text-xs font-semibold uppercase tracking-wider w-24 flex-shrink-0 pt-0.5"
                        style={{ fontFamily: 'var(--font-body)', color: '#d8c8f2' }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)', color: '#9b7fa6' }}
                      >
                        {data.groom[key]}
                      </span>
                    </div>
                  ) : null
                )}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
