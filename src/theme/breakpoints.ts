// ─────────────────────────────────────────────────────────────────────────────
// Breakpoints — mobile-first min-width values in pixels.
//
// CSS usage: write media queries by hand using these values as reference.
//   @media (min-width: 768px) { ... }
//
// JS usage: use the useResponsive() hook for reactive breakpoint checks.
// ─────────────────────────────────────────────────────────────────────────────

export const breakpoints = {
  mobile:    320,   // minimum supported width
  mobileLg:  480,   // large phones / small phones landscape
  tablet:    768,   // tablets / large phones landscape
  desktop:   1024,  // laptops / small desktops
  desktopLg: 1280,  // standard desktop monitors
  ultrawide: 1920,  // 4K / ultrawide monitors
} as const;

export type Breakpoint = keyof typeof breakpoints;

/**
 * CSS media query strings — use these as documentation/reference.
 * In CSS Modules, write the query literals directly; these are not importable
 * inside .css files. They are useful in JS/TS for matchMedia() calls.
 */
export const mediaQueries: Record<Breakpoint, string> = {
  mobile:    `(min-width: ${breakpoints.mobile}px)`,
  mobileLg:  `(min-width: ${breakpoints.mobileLg}px)`,
  tablet:    `(min-width: ${breakpoints.tablet}px)`,
  desktop:   `(min-width: ${breakpoints.desktop}px)`,
  desktopLg: `(min-width: ${breakpoints.desktopLg}px)`,
  ultrawide: `(min-width: ${breakpoints.ultrawide}px)`,
};

/** Maximum content widths — use as max-width constraints in layouts */
export const maxWidths = {
  prose:   '65ch',   // optimal reading width
  content: '80rem',  // standard content area
  wide:    '100rem', // expanded layouts
  full:    '100%',
} as const;
