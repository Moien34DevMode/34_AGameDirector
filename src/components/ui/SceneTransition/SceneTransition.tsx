import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { type VariantKey } from "@theme/animations";
import { useAnimation } from "@hooks/useAnimation";
import { cn } from "@utils/cn";
import styles from "./SceneTransition.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// SceneTransition — wraps a scene's root element with enter/exit animation.
//
// SceneLayout uses this internally. You can also use it directly on any
// element that needs coordinated enter/exit choreography with AnimatePresence.
//
// The `variant` prop lets each scene choose its own transition personality
// while keeping the overall system consistent.
// ─────────────────────────────────────────────────────────────────────────────

export interface SceneTransitionProps {
  children: ReactNode;
  variant?: VariantKey;
  className?: string;
}

function SceneTransition({
  children,
  variant = "sceneEnter",
  className,
}: SceneTransitionProps) {
  const { getVariants } = useAnimation();

  return (
    <motion.div
      className={cn(styles.transition, className)}
      variants={getVariants(variant)}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default SceneTransition;
