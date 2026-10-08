'use client';

import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { ExtendedWeddingData } from '@/data/wedding';
import { GlassCard } from '@/components/ui/GlassCard';

interface VenueSectionProps {
  data: ExtendedWeddingData;
}

export function VenueSection({ data }: VenueSectionProps) {
  const { venue } = data;

  return (
    <section
      id="venue"
      className="section-spacing"
      style={{
        background: 'linear-gradient(160deg, #e4eddf 0%, #fce4ec 50%, #fff9f0 100%)',
      }}
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: 'var(--font-script)', color: '#365d43' }}
          >
            Venue
          </h2>
          <p
            className="text-base md:text-lg"
            style={{ fontFamily: 'var(--font-body)', color: '#5f7b64' }}
          >
            Where our journey begins
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard variant="strong" className="overflow-hidden p-0">

            {/* Top info block */}
            <div className="p-8 text-center">
              {/* Pin icon */}
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
                style={{ background: 'linear-gradient(135deg, #f8d7e3, #dce8d6)' }}
              >
                <MapPin size={28} style={{ color: '#5f7b64' }} />
              </div>

              {/* Venue name */}
              <h3
                className="text-2xl md:text-3xl font-semibold mb-2"
                style={{ fontFamily: 'var(--font-serif)', color: '#365d43' }}
              >
                {venue.name}
              </h3>

              {/* Address lines */}
              <p
                className="text-base md:text-lg mb-1"
                style={{ fontFamily: 'var(--font-body)', color: '#5f7b64' }}
              >
                {venue.address}
              </p>
              <p
                className="text-base md:text-lg mb-6"
                style={{ fontFamily: 'var(--font-body)', color: '#5f7b64' }}
              >
                {venue.city}
              </p>


            </div>

            {/* ── Embedded Google Map ── */}
            <div
              className="relative w-full overflow-hidden"
              style={{ height: 380, borderTop: '1.5px solid rgba(216, 200, 242, 0.4)' }}
            >
              <iframe
                title="Venue location — Janaki Ammal Kalyana Mandapam Complex"
                src={venue.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Pastel overlay tint at the top edge to blend with card */}
              <div
                className="absolute top-0 left-0 right-0 h-4 pointer-events-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
                }}
              />
            </div>

            {/* Bottom note */}
            <div
              className="px-8 py-4 text-center"
              style={{ borderTop: '1px solid rgba(216, 200, 242, 0.3)' }}
            >
              <p
                className="text-xs"
                style={{ fontFamily: 'var(--font-body)', color: '#5f7b64' }}
              >
                Both events are held at the same venue
              </p>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
