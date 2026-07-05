import { motion } from "framer-motion";
import type { TimelineEntry } from "@/types/timeline.types";
import { formatDateRange } from "@utils/formatDate";
import { cn } from "@utils/cn";
import styles from "./TimelineItem.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// TimelineItem — renders a single entry in the timeline list.
//
// This component is intentionally display-only. It never fetches or contains
// data — the parent scene passes the entry as a prop.
//
// When the user selects an entry that has a markdownFile, the parent scene
// opens a Modal with <MarkdownRenderer> — that logic lives in the scene, not here.
// ─────────────────────────────────────────────────────────────────────────────

export interface TimelineItemProps {
  entry: TimelineEntry;
  isActive?: boolean;
  onClick?: (entry: TimelineEntry) => void;
  className?: string;
}

function TimelineItem({
  entry,
  isActive = false,
  onClick,
  className,
}: TimelineItemProps) {
  const hasDetail = Boolean(entry.markdownFile);
  const dateRange = formatDateRange(entry.startDate, entry.endDate);

  return (
    <motion.article
      className={cn(
        styles.item,
        styles[entry.category],
        isActive && styles.active,
        entry.featured && styles.featured,
        className,
      )}
      layout
      onClick={() => onClick?.(entry)}
      role={hasDetail ? "button" : undefined}
      tabIndex={hasDetail ? 0 : undefined}
      aria-expanded={hasDetail ? isActive : undefined}
      onKeyDown={(e) => {
        if (hasDetail && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick?.(entry);
        }
      }}
    >
      {/* Timeline marker — styled via CSS Module */}
      <span className={styles.marker} aria-hidden="true" />

      <div className={styles.body}>
        <header className={styles.header}>
          <time className={styles.date} dateTime={entry.startDate}>
            {dateRange}
          </time>

          <span
            className={cn(
              styles.category,
              styles[`category_${entry.category}`],
            )}
          >
            {entry.category}
          </span>
        </header>

        <h3 className={styles.title}>{entry.title}</h3>

        {entry.organization && (
          <p className={styles.organization}>{entry.organization}</p>
        )}

        <p className={styles.summary}>{entry.summary}</p>

        {entry.tags && entry.tags.length > 0 && (
          <ul className={styles.tags} aria-label="Tags">
            {entry.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        {hasDetail && (
          <span className={styles.readMore} aria-hidden="true">
            Read more
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default TimelineItem;
