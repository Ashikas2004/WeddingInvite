import type { CountdownResult } from '@/types/wedding';

/**
 * Pure function: calculates countdown from now to targetDate.
 * Returns isComplete=true and all '00' values when target has passed.
 * Never returns negative values.
 */
export function calculateCountdown(
  targetDate: Date,
  now: Date = new Date()
): CountdownResult {
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      isComplete: true,
    };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const pad = (n: number) => String(n).padStart(2, '0');

  return {
    days: pad(days),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
    isComplete: false,
  };
}
