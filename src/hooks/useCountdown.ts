'use client';

import { useState, useEffect } from 'react';
import { calculateCountdown } from '@/lib/countdown';
import type { CountdownState } from '@/types/wedding';

/**
 * Live countdown hook. Updates every 1000ms.
 * Returns CountdownState with units array and isComplete flag.
 */
export function useCountdown(targetDate: Date): CountdownState {
  const getState = (): CountdownState => {
    const result = calculateCountdown(targetDate);
    return {
      units: [
        { label: 'Days', value: result.days },
        { label: 'Hours', value: result.hours },
        { label: 'Minutes', value: result.minutes },
        { label: 'Seconds', value: result.seconds },
      ],
      isPast: result.isComplete,
    };
  };

  const [state, setState] = useState<CountdownState>(getState);

  useEffect(() => {
    const interval = setInterval(() => {
      setState(getState());
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate.getTime()]);

  return state;
}
