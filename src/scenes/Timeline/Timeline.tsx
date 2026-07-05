import { useState } from "react";
import SceneLayout from "@layouts/SceneLayout/SceneLayout";
import TimelineItem from "@components/timeline/TimelineItem/TimelineItem";
import Modal from "@components/ui/Modal/Modal";
import MarkdownRenderer from "@components/markdown/MarkdownRenderer/MarkdownRenderer";
import LoadingOverlay from "@components/ui/LoadingOverlay/LoadingOverlay";
import { timeline } from "@data/timeline";
import { useMarkdown } from "@hooks/useMarkdown";
import type { TimelineEntry } from "@/types/timeline.types";
import styles from "./Timeline.module.css";

// ─────────────────────────────────────────────────────────────────────────────
// Timeline scene
//
// Purpose: Chronological career history. Each entry can expand into a
// full Markdown article via a Modal.
//
// Data flow:
//   src/data/timeline.ts → Timeline scene → TimelineItem (display only)
//   On entry click → Modal → MarkdownRenderer (if markdownFile present)
//
// Design notes (implement when ready):
//   • Vertical or horizontal timeline layout
//   • Category filters (role / project / milestone / education)
//   • Year grouping headers
// ─────────────────────────────────────────────────────────────────────────────

function Timeline() {
  const [activeEntry, setActiveEntry] = useState<TimelineEntry | null>(null);

  const { content, isLoading, error } = useMarkdown(activeEntry?.markdownFile);

  const handleEntryClick = (entry: TimelineEntry) => {
    if (entry.markdownFile) {
      setActiveEntry(entry);
    }
  };

  const handleClose = () => setActiveEntry(null);

  return (
    <SceneLayout sceneId="timeline" title="Timeline">
      <div className={styles.container}>
        {/* Implement timeline layout here */}
        <ol className={styles.list} aria-label="Career timeline">
          {timeline.map((entry) => (
            <TimelineItem
              key={entry.id}
              entry={entry}
              isActive={activeEntry?.id === entry.id}
              onClick={handleEntryClick}
            />
          ))}
        </ol>
      </div>

      {/* Detail modal — renders Markdown article for the selected entry */}
      <Modal
        isOpen={Boolean(activeEntry)}
        onClose={handleClose}
        title={activeEntry?.title ?? ""}
      >
        {isLoading && <LoadingOverlay fullScreen={false} />}
        {error && <p className={styles.error}>Failed to load content.</p>}
        {content && <MarkdownRenderer content={content} />}
      </Modal>
    </SceneLayout>
  );
}

export default Timeline;
