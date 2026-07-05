import { type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@utils/cn";
import styles from "./Button.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Button — generic interactive button primitive.
//
// Extends HTMLMotionProps so callers can pass Framer Motion props directly
// (e.g. whileHover, animate, custom variants) alongside standard HTML attributes.
// ─────────────────────────────────────────────────────────────────────────────

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

// Omit 'children' from HTMLMotionProps because Framer Motion widens it to
// include MotionValue, which plain HTML children slots don't accept.
export interface ButtonProps extends Omit<
  HTMLMotionProps<"button">,
  "children"
> {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

function Button({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <motion.button
      className={cn(
        styles.button,
        styles[variant],
        styles[size],
        isLoading && styles.loading,
        className,
      )}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.03 } : undefined}
      whileTap={!isDisabled ? { scale: 0.97 } : undefined}
      {...rest}
    >
      {leftIcon && (
        <span className={styles.iconLeft} aria-hidden="true">
          {leftIcon}
        </span>
      )}
      <span className={styles.label}>{children}</span>
      {rightIcon && (
        <span className={styles.iconRight} aria-hidden="true">
          {rightIcon}
        </span>
      )}
    </motion.button>
  );
}

export default Button;
