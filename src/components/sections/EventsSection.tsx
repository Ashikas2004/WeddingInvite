'use client';

import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Gem, Heart } from 'lucide-react';
import { ExtendedWeddingData } from '@/data/wedding';
import { GlassCard } from '@/components/ui/GlassCard';
import { fadeUpVariants, staggerContainerVariants } from '@/lib/animations';

interface EventsSectionProps {
  data: ExtendedWeddingData;
}

export function EventsSection({ data }: EventsSectionProps) {
  return (
    <section
      id="events"
      className="section-spacing"
      style={{
        background: 'linear-gradient(160deg, #fffaf2 0%, #f8d7e3 50%, #d8c8f2 100%)',
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
            style={{ fontFamily: 'var(--font-script)', color: '#7c4f7c' }}
          >
            Wedding Events
          </h2>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-body)', color: '#9b7fa6' }}
          >
            Join us for these special moments as we celebrate our union
          </p>
        </motion.div>

        {/* Event cards */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {data.events.map((event, index) => (
            <motion.div key={event.name} variants={fadeUpVariants} custom={index}>
              <GlassCard variant="strong" className="h-full p-7">

                {/* Icon + title row */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: index === 0
                        ? 'linear-gradient(135deg, #ffd8c2, #f8d7e3)'
                        : 'linear-gradient(135deg, #f8d7e3, #d8c8f2)',
                    }}
                  >
                    {index === 0
                      ? <Gem  size={22} style={{ color: '#9b7fa6' }} />
                      : <Heart size={22} style={{ color: '#9b7fa6', fill: '#9b7fa6' }} />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xl md:text-2xl font-semibold leading-tight"
                      style={{ fontFamily: 'var(--font-serif)', color: '#7c4f7c' }}
                    >
                      {event.name}
                    </h3>
                    {/* Accent underline */}
                    <div
                      className="mt-1.5 h-0.5 w-10 rounded-full"
                      style={{
                        background: index === 0
                          ? 'linear-gradient(90deg, #ffd8c2, #f8d7e3)'
                          : 'linear-gradient(90deg, #f8d7e3, #d8c8f2)',
                      }}
                    />
                  </div>
                </div>

                {/* Detail rows */}
                <div className="space-y-4 mb-5">

                  {/* Date — static string, no new Date() */}
                  <div className="flex items-start gap-3">
                    <Calendar size={17} className="flex-shrink-0 mt-0.5" style={{ color: '#d8c8f2' }} />
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-widest font-semibold mb-0.5"
                        style={{ fontFamily: 'var(--font-body)', color: '#c4a8d4' }}
                      >
                        Date
                      </p>
                      <p
                        className="text-sm md:text-base font-medium"
                        style={{ fontFamily: 'var(--font-body)', color: '#7c4f7c' }}
                      >
                        {event.dateDisplay}
                      </p>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-start gap-3">
                    <Clock size={17} className="flex-shrink-0 mt-0.5" style={{ color: '#d8c8f2' }} />
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-widest font-semibold mb-0.5"
                        style={{ fontFamily: 'var(--font-body)', color: '#c4a8d4' }}
                      >
                        Time
                      </p>
                      <p
                        className="text-sm md:text-base font-medium"
                        style={{ fontFamily: 'var(--font-body)', color: '#7c4f7c' }}
                      >
                        {event.time}
                      </p>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-start gap-3">
                    <MapPin size={17} className="flex-shrink-0 mt-0.5" style={{ color: '#d8c8f2' }} />
                    <div>
                      <p
                        className="text-[10px] uppercase tracking-widest font-semibold mb-0.5"
                        style={{ fontFamily: 'var(--font-body)', color: '#c4a8d4' }}
                      >
                        Venue
                      </p>
                      <p
                        className="text-sm md:text-base font-medium"
                        style={{ fontFamily: 'var(--font-body)', color: '#7c4f7c' }}
                      >
                        {event.venue}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="h-px mb-4 rounded-full"
                  style={{ background: 'linear-gradient(90deg, transparent, #d8c8f2, transparent)' }}
                />

                {/* Description */}
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)', color: '#9b7fa6' }}
                >
                  {event.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
