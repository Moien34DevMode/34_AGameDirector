// ─────────────────────────────────────────────────────────────────────────────
// Design tokens — the single source of truth for all visual decisions.
//
// ⚠️  CSS custom properties in src/styles/variables.css MIRROR these values.
//     When you change a token here, update variables.css too (and vice-versa).
//
// Components should consume CSS variables at runtime (for hot-swap theming).
// This TypeScript file enables type-safe access in JS/TS logic (hooks, utils).
// ─────────────────────────────────────────────────────────────────────────────

export const colors = {
  background: {
    primary:   '#0a0a0a',
    secondary: '#111111',
    surface:   '#1a1a1a',
    overlay:   'rgba(0, 0, 0, 0.75)',
  },
  text: {
    primary:   '#f0f0f0',
    secondary: '#a0a0a0',
    accent:    '#c8c8c8',
    muted:     '#555555',
  },
  accent: {
    primary:   '#e8e8e8',
    secondary: '#888888',
    highlight: '#ffffff',
  },
  border: {
    subtle:  '#1c1c1c',
    default: '#2a2a2a',
    strong:  '#3e3e3e',
  },
  state: {
    error:   '#ff4d4d',
    warning: '#ffb020',
    success: '#3ddc84',
    info:    '#4d9fff',
  },
} as const;

export const spacing = {
  '2xs': '0.25rem',  //  4px
  xs:    '0.5rem',   //  8px
  sm:    '0.75rem',  // 12px
  md:    '1rem',     // 16px
  lg:    '1.5rem',   // 24px
  xl:    '2rem',     // 32px
  '2xl': '3rem',     // 48px
  '3xl': '4rem',     // 64px
  '4xl': '6rem',     // 96px
  '5xl': '8rem',     // 128px
} as const;

export const typography = {
  fontFamily: {
    // Replace these with your chosen typefaces.
    // Load the fonts in src/assets/fonts/ and reference them in variables.css.
    heading: '"Inter", system-ui, sans-serif',
    body:    '"Inter", system-ui, sans-serif',
    mono:    '"JetBrains Mono", "Fira Code", monospace',
  },
  fontSize: {
    xs:   '0.75rem',   // 12px
    sm:   '0.875rem',  // 14px
    md:   '1rem',      // 16px
    lg:   '1.125rem',  // 18px
    xl:   '1.25rem',   // 20px
    '2xl':'1.5rem',    // 24px
    '3xl':'2rem',      // 32px
    '4xl':'2.5rem',    // 40px
    '5xl':'3.5rem',    // 56px
    '6xl':'5rem',      // 80px
  },
  fontWeight: {
    light:    '300',
    regular:  '400',
    medium:   '500',
    semibold: '600',
    bold:     '700',
    black:    '900',
  },
  lineHeight: {
    none:    '1',
    tight:   '1.15',
    snug:    '1.35',
    normal:  '1.6',
    relaxed: '1.8',
  },
  letterSpacing: {
    tighter: '-0.04em',
    tight:   '-0.02em',
    normal:   '0em',
    wide:     '0.05em',
    wider:    '0.1em',
    widest:   '0.25em',
  },
} as const;

export const radii = {
  none: '0',
  xs:   '0.125rem',
  sm:   '0.25rem',
  md:   '0.5rem',
  lg:   '1rem',
  xl:   '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  xs:   '0 1px 2px rgba(0, 0, 0, 0.4)',
  sm:   '0 2px 6px rgba(0, 0, 0, 0.45)',
  md:   '0 4px 16px rgba(0, 0, 0, 0.5)',
  lg:   '0 8px 32px rgba(0, 0, 0, 0.6)',
  xl:   '0 16px 64px rgba(0, 0, 0, 0.7)',
  glow: '0 0 24px rgba(255, 255, 255, 0.08)',
} as const;

export const zIndex = {
  base:     0,
  raised:   10,
  dropdown: 100,
  sticky:   200,
  overlay:  300,
  modal:    400,
  toast:    500,
  tooltip:  600,
} as const;

export const transitions = {
  instant: '0ms',
  fast:    '120ms ease',
  normal:  '220ms ease',
  slow:    '380ms ease',
  slower:  '600ms ease',
} as const;

// ─────────────────────────────────────────────────────────────────────────────

const theme = {
  colors,
  spacing,
  typography,
  radii,
  shadows,
  zIndex,
  transitions,
} as const;

export type Theme = typeof theme;
export default theme;
