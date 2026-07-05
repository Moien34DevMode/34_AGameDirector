/**
 * Programmatic responsive utilities.
 *
 * Prefer the useResponsive() hook for React components — it updates on resize.
 * These bare functions are for non-component JS logic (e.g. animations, canvas).
 */

import { breakpoints, type Breakpoint } from '@theme/breakpoints';

export function getWindowWidth(): number {
  return typeof window !== 'undefined' ? window.innerWidth : 0;
}

/** Returns true when the viewport is at or above the given breakpoint */
export function isAbove(bp: Breakpoint): boolean {
  return getWindowWidth() >= breakpoints[bp];
}

/** Returns true when the viewport is below the given breakpoint */
export function isBelow(bp: Breakpoint): boolean {
  return getWindowWidth() < breakpoints[bp];
}

/**
 * Returns the name of the largest breakpoint currently satisfied.
 * Useful for imperative code that needs to know the active tier.
 */
export function getCurrentBreakpoint(): Breakpoint {
  const width = getWindowWidth();
  const keys = Object.keys(breakpoints) as Breakpoint[];
  return (
    [...keys].reverse().find((key) => width >= breakpoints[key]) ?? 'mobile'
  );
}
