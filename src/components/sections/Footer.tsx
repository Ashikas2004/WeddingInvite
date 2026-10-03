'use client';

import { Heart } from 'lucide-react';

/**
 * Footer — closing section with attribution.
 *
 * Hydration fix: hardcode the year instead of calling new Date().getFullYear()
 * at render time. The server and client would produce the same value most of
 * the year, but around midnight on New Year's Eve they can differ, causing a
 * hydration mismatch. A hardcoded value is always safe.
 */
export function Footer() {
  return (
    <footer
      className="py-10"
      style={{
        background: 'linear-gradient(135deg, #f8d7e3 0%, #d8c8f2 50%, #ffd8c2 100%)',
      }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Decorative hearts row */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart size={14} style={{ color: '#e8a0b4', fill: '#e8a0b4' }} />
          <Heart size={20} style={{ color: '#e8a0b4', fill: '#e8a0b4' }} />
          <Heart size={14} style={{ color: '#e8a0b4', fill: '#e8a0b4' }} />
        </div>

        {/* Main message */}
        <p
          className="text-3xl md:text-4xl mb-3"
          style={{ fontFamily: 'var(--font-script)', color: '#9b7fa6' }}
        >
          Made with love for our special day
        </p>

        {/* Couple names */}
        <p
          className="text-base md:text-lg mb-6"
          style={{ fontFamily: 'var(--font-serif)', color: '#b89ec4' }}
        >
          Ashmi SS &amp; Jeffrin J · 11 November 2026
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-16" style={{ background: '#d8c8f2' }} />
          <Heart size={12} style={{ color: '#d8c8f2', fill: '#d8c8f2' }} />
          <div className="h-px w-16" style={{ background: '#d8c8f2' }} />
        </div>

        {/* Copyright — year hardcoded to avoid SSR/client mismatch */}
        <p
          className="text-xs"
          style={{ fontFamily: 'var(--font-body)', color: '#c4a8d4' }}
        >
          © 2026 Ashmi &amp; Jeffrin. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
