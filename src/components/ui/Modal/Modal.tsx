import { useEffect, type ReactNode } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { scaleIn } from "@theme/animations";
import { cn } from "@utils/cn";
import styles from "./Modal.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Modal — accessible dialog rendered via a React portal.
//
// Rendered into document.body so it always escapes any stacking context.
// Traps keyboard focus while open and restores it on close.
// ─────────────────────────────────────────────────────────────────────────────

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  /** Additional class applied to the inner panel */
  className?: string;
  /** When true, clicking the backdrop does not close the modal */
  persistent?: boolean;
}

function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
  persistent = false,
}: ModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !persistent) onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose, persistent]);

  // Prevent body scroll while modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={persistent ? undefined : onClose}
          aria-hidden="true"
        >
          <motion.div
            className={cn(styles.panel, className)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className={styles.header}>
              <h2 id="modal-title" className={styles.title}>
                {title}
              </h2>
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close dialog"
              >
                &times;
              </button>
            </div>

            <div className={styles.content}>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default Modal;
