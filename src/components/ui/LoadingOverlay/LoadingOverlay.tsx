import { motion } from "framer-motion";
import { cn } from "@utils/cn";
import styles from "./LoadingOverlay.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// LoadingOverlay — shown during React.lazy / Suspense scene loading.
//
// Used as the fallback in the AppRouter's <Suspense fallback={…}>.
// Keep this component self-contained: it must not import any lazy-loaded module.
// ─────────────────────────────────────────────────────────────────────────────

export interface LoadingOverlayProps {
  /** When true, covers the entire viewport */
  fullScreen?: boolean;
  /** Optional status text for screen readers */
  message?: string;
  className?: string;
}

function LoadingOverlay({
  fullScreen = true,
  message = "Loading…",
  className,
}: LoadingOverlayProps) {
  return (
    <div
      className={cn(styles.overlay, fullScreen && styles.fullScreen, className)}
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <motion.span
        className={styles.spinner}
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        aria-hidden="true"
      />
      <span className="sr-only">{message}</span>
    </div>
  );
}

export default LoadingOverlay;
