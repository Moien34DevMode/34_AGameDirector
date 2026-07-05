import { useReducedMotion } from 'framer-motion';
import { variants, easing, type VariantKey } from '@theme/animations';
import type { Variants } from 'framer-motion';

// ─────────────────────────────────────────────────────────────────────────────
// useAnimation
//
// Returns animation variants and easing presets from the central theme.
// Automatically respects the user's "prefers-reduced-motion" OS setting:
// when reduced motion is preferred, all transitions collapse to instant fades.
// ─────────────────────────────────────────────────────────────────────────────

const reducedVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
  exit:    { opacity: 0, transition: { duration: 0.01 } },
};

export function useAnimation() {
  const prefersReducedMotion = useReducedMotion();

  /**
   * Returns the variant set for a given key, falling back to a no-motion
   * version when the user has requested reduced motion.
   */
  function getVariants(key: VariantKey): Variants {
    if (prefersReducedMotion) return reducedVariants;
    return variants[key];
  }

  return {
    variants,
    easing,
    getVariants,
    prefersReducedMotion: !!prefersReducedMotion,
  };
}
