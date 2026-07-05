import { useState, useEffect } from 'react';
import { breakpoints, type Breakpoint } from '@theme/breakpoints';

// ─────────────────────────────────────────────────────────────────────────────
// useResponsive
//
// Reactive breakpoint detection. Updates on window resize.
// Uses debouncing to avoid excessive re-renders during resize.
// ─────────────────────────────────────────────────────────────────────────────

function resolveBreakpoint(width: number): Breakpoint {
  const keys = Object.keys(breakpoints) as Breakpoint[];
  return (
    [...keys].reverse().find((key) => width >= breakpoints[key]) ?? 'mobile'
  );
}

export function useResponsive() {
  const [width, setWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : breakpoints.mobile
  );

  useEffect(() => {
    let rafId: number;

    const handler = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => setWidth(window.innerWidth));
    };

    window.addEventListener('resize', handler, { passive: true });
    return () => {
      window.removeEventListener('resize', handler);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const current = resolveBreakpoint(width);

  return {
    /** Raw viewport width in pixels */
    width,
    /** Name of the active breakpoint tier */
    current,
    isMobile:    width < breakpoints.tablet,
    isTablet:    width >= breakpoints.tablet && width < breakpoints.desktop,
    isDesktop:   width >= breakpoints.desktop,
    isUltrawide: width >= breakpoints.ultrawide,
    /** Returns true when the viewport is at or above `bp` */
    above: (bp: Breakpoint) => width >= breakpoints[bp],
    /** Returns true when the viewport is below `bp` */
    below: (bp: Breakpoint) => width < breakpoints[bp],
  };
}
