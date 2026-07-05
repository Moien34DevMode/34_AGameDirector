import { useThemeContext } from '@context/ThemeContext';
import type { Theme } from '@theme/theme';

/**
 * Returns the active Theme object.
 *
 * Use this hook when you need to access theme tokens in JS/TS logic
 * (e.g., computing canvas sizes, Framer Motion inline styles).
 *
 * For styling, prefer CSS custom properties (var(--color-*)) in CSS Modules.
 */
export function useTheme(): Theme {
  return useThemeContext().theme;
}
