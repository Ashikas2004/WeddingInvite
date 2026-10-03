'use client';

import { useState, useEffect, useRef } from 'react';

interface UseAudioReturn {
  isPlaying: boolean;
  toggle: () => void;
}

/**
 * Custom hook to manage background audio playback
 * Creates an HTMLAudioElement with loop enabled and controlled volume
 * @param src - Audio file path
 * @param volume - Volume level (0.0 to 1.0), defaults to 0.3
 * @returns Object with isPlaying state and toggle function
 */
export function useAudio(src: string, volume: number = 0.3): UseAudioReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    // Cleanup on unmount
    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, [src, volume]);

  const toggle = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error('Audio playback failed:', error);
      });
      setIsPlaying(true);
    }
  };

  return { isPlaying, toggle };
}
