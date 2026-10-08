'use client';

import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { ExtendedWeddingData } from '@/data/wedding';
import { GlassCard } from '@/components/ui/GlassCard';
import { staggerContainerVariants, scaleInVariants } from '@/lib/animations';

interface FamilySectionProps {
  data: ExtendedWeddingData;
}

export function FamilySection({ data }: FamilySectionProps) {
  return (
    <section
      id="family"
      className="section-spacing"
      style={{
        background: 'linear-gradient(160deg, #fce4ec 0%, #e4eddf 50%, #ffd8c2 100%)',
      }}
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
          {/* Icon */}
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
            style={{ background: 'linear-gradient(135deg, #f8d7e3, #dce8d6)' }}
          >
            <Heart size={28} style={{ color: '#5f7b64', fill: '#5f7b64' }} />
          </div>

          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'var(--font-script)', color: '#365d43' }}
          >
            Our Family
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)', color: '#5f7b64' }}
          >
            The wonderful people who have supported us throughout our journey
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto"
        >
          {data.family.map((member, index) => (
            <motion.div key={member.name} variants={scaleInVariants} custom={index}>
              <GlassCard variant="strong" className="text-center h-full p-8">

                {/* Avatar circle */}
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-5"
                  style={{
                    background: index === 0
                      ? 'linear-gradient(135deg, #f8d7e3, #ffd8c2)'
                      : 'linear-gradient(135deg, #dce8d6, #f8d7e3)',
                    boxShadow: '0 4px 16px rgba(155, 127, 166, 0.2)',
                  }}
                >
                  <span
                    className="text-3xl"
                    style={{ fontFamily: 'var(--font-script)', color: '#365d43' }}
                  >
                    {member.name.charAt(0)}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className="text-xl md:text-2xl font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-serif)', color: '#365d43' }}
                >
                  {member.name}
                </h3>

                {/* Relation badge */}
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                  style={{
                    background: 'rgba(216, 200, 242, 0.35)',
                    color: '#5f7b64',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {member.relation}
                </span>

                {/* Message */}
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: '#5f7b64' }}
                >
                  {member.message}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
