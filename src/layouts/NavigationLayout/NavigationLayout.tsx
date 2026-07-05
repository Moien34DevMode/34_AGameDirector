import { type ReactNode } from "react";
import { cn } from "@utils/cn";
import styles from "./NavigationLayout.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// NavigationLayout — persistent navigation shell.
//
// Renders the application navigation and wraps NavigationButton instances.
// The layout (horizontal topbar, vertical sidebar, radial menu, etc.) is
// defined entirely in the CSS Module — swapping the layout requires only
// updating this file and its module.
//
// Usage in MainLayout:
//   <NavigationLayout>
//     {navItems.map((item) => (
//       <NavigationButton key={item.key} to={item.path} label={item.label} />
//     ))}
//   </NavigationLayout>
// ─────────────────────────────────────────────────────────────────────────────

export interface NavigationLayoutProps {
  children: ReactNode;
  className?: string;
}

function NavigationLayout({ children, className }: NavigationLayoutProps) {
  return (
    <nav className={cn(styles.nav, className)} aria-label="Main navigation">
      {/*
        Skip-navigation link — always the first focusable element.
        Screen reader / keyboard users can jump directly to content.
      */}
      <a
        href="#main-content"
        className={cn(styles.skipLink, "sr-only-focusable")}
      >
        Skip to main content
      </a>

      <div className={styles.navItems} role="list">
        {children}
      </div>
    </nav>
  );
}

export default NavigationLayout;
