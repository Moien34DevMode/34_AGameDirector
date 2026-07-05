import { type ReactNode } from "react";
import { motion } from "framer-motion";
import type { SceneId } from "@/types/common.types";
import { sceneEnter } from "@theme/animations";
import { useAnimation } from "@hooks/useAnimation";
import { cn } from "@utils/cn";
import styles from "./SceneLayout.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// SceneLayout — the wrapper every scene renders as its root element.
//
// Responsibilities:
//   • Applies the scene enter/exit animation (works with AnimatePresence in AppRouter)
//   • Provides consistent full-screen sizing and scroll behaviour
//   • Exposes a data-scene attribute for debugging and potential CSS targeting
//   • Establishes the landmark <section> for screen readers
//
// Every scene component should return:
//   <SceneLayout sceneId="timeline" title="Timeline">
//     {/* scene content */}
//   </SceneLayout>
// ─────────────────────────────────────────────────────────────────────────────

export interface SceneLayoutProps {
  sceneId: SceneId;
  title: string;
  children: ReactNode;
  /** Override the default sceneEnter variant for scene-specific personality */
  customVariants?: typeof sceneEnter;
  className?: string;
}

function SceneLayout({
  sceneId,
  title,
  children,
  customVariants,
  className,
}: SceneLayoutProps) {
  const { getVariants, prefersReducedMotion } = useAnimation();
  const animVariants =
    customVariants ??
    (prefersReducedMotion ? getVariants("fadeIn") : sceneEnter);

  return (
    <motion.section
      className={cn(styles.scene, className)}
      data-scene={sceneId}
      aria-label={title}
      variants={animVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.section>
  );
}

export default SceneLayout;
