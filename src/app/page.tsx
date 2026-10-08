'use client';

import { useState, useEffect } from 'react';
import { weddingData } from '@/data/wedding';
import { IntroScreen } from '@/components/sections/IntroScreen';
import { HeroSection } from '@/components/sections/HeroSection';
import { CoupleSection } from '@/components/sections/CoupleSection';
import { CountdownSection } from '@/components/sections/CountdownSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { VenueSection } from '@/components/sections/VenueSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { FamilySection } from '@/components/sections/FamilySection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  /**
   * Hydration fix: never render the intro on the server.
   * `mounted` starts false (matches server HTML = no intro),
   * then flips to true on the client after first paint.
   * This eliminates the server/client mismatch that caused the
   * "Hydration failed" error.
   */
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {/* Only render the intro overlay after client hydration */}
      {mounted && showIntro && (
        <IntroScreen onComplete={() => setShowIntro(false)} />
      )}

      <div className="relative">
        <main>
          <HeroSection data={weddingData} />
          <CoupleSection data={weddingData} />
          <CountdownSection data={weddingData} />
          <EventsSection data={weddingData} />
          <VenueSection data={weddingData} />
          <GallerySection data={weddingData} />
          <FamilySection data={weddingData} />
        </main>

        <Footer />
      </div>
    </>
  );
}
