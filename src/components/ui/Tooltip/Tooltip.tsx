import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@utils/cn";
import styles from "./Tooltip.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Tooltip — lightweight hover/focus tooltip.
//
// Wraps any trigger element. The tooltip content is announced to screen readers
// via aria-describedby on the trigger.
// ─────────────────────────────────────────────────────────────────────────────

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: TooltipPosition;
  className?: string;
  /** Unique id used for aria-describedby */
  id?: string;
}

let _idCounter = 0;

function Tooltip({
  content,
  children,
  position = "top",
  className,
  id,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const tooltipId = id ?? `tooltip-${++_idCounter}`;

  return (
    <span
      className={cn(styles.wrapper, className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      aria-describedby={visible ? tooltipId : undefined}
    >
      {children}

      <AnimatePresence>
        {visible && (
          <motion.span
            id={tooltipId}
            role="tooltip"
            className={cn(styles.tooltip, styles[position])}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.12 } }}
            exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.08 } }}
          >
            {content}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

export default Tooltip;
