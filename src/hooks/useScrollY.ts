'use client';

import { useState, useEffect } from 'react';

/**
 * Custom hook to track window scroll position (Y-axis)
 * Uses passive event listener for better performance
 * @returns Current vertical scroll position in pixels
 */
export function useScrollY(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Set initial scroll position
    setScrollY(window.scrollY);

    // Passive event listener for better scroll performance
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
}
