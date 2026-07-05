import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "@utils/cn";
import styles from "./NavigationButton.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// NavigationButton — a scene navigation link styled as a button.
//
// Uses React Router's <Link> so navigation is handled client-side.
// The isActive prop drives the active indicator styling.
// ─────────────────────────────────────────────────────────────────────────────

export interface NavigationButtonProps {
  to: string;
  label: string;
  isActive?: boolean;
  className?: string;
  /** Accessible label override when the visual label is too brief */
  ariaLabel?: string;
  onClick?: () => void;
}

function NavigationButton({
  to,
  label,
  isActive = false,
  className,
  ariaLabel,
  onClick,
}: NavigationButtonProps) {
  return (
    <Link
      to={to}
      className={cn(styles.navButton, isActive && styles.active, className)}
      aria-label={ariaLabel ?? label}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
    >
      <motion.span
        className={styles.label}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.15 }}
      >
        {label}
      </motion.span>

      {/* Active indicator — design this in the CSS Module */}
      {isActive && (
        <motion.span
          className={styles.indicator}
          layoutId="nav-indicator"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}

export default NavigationButton;
