import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import defaultTheme, { type Theme } from "@theme/theme";

// ─────────────────────────────────────────────────────────────────────────────
// ThemeContext
//
// Provides the active theme object to the entire component tree.
// Currently ships a single dark theme; the setTheme slot is wired up so that
// adding alternate themes (light mode, alternate palettes) requires no
// architectural changes — only calling setTheme() with a new Theme object.
// ─────────────────────────────────────────────────────────────────────────────

interface ThemeContextValue {
  theme: Theme;
  /**
   * Swap the active theme at runtime.
   * The new theme object must satisfy the full Theme type.
   */
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ─────────────────────────────────────────────────────────────────────────────

interface ThemeProviderProps {
  children: ReactNode;
  /** Override the initial theme — useful for testing */
  initialTheme?: Theme;
}

export function ThemeProvider({
  children,
  initialTheme = defaultTheme,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(initialTheme);

  const setTheme = useCallback((nextTheme: Theme) => {
    setThemeState(nextTheme);
    // Future: persist to localStorage, apply CSS variable overrides, etc.
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

/**
 * Access the active theme inside any component.
 * Must be used inside <ThemeProvider>.
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useThemeContext(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeContext must be called inside <ThemeProvider>.");
  }
  return ctx;
}
