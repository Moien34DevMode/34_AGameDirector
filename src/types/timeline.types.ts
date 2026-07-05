import type { DataEntry, MediaAsset, ExternalLink } from './common.types';

// ─────────────────────────────────────────────────────────────────────────────
// Timeline entry types
// ─────────────────────────────────────────────────────────────────────────────

export type TimelineCategory =
  | 'role'        // a job or position held
  | 'project'     // a shipped or in-progress project
  | 'milestone'   // a notable achievement or event
  | 'education';  // a course, degree, or learning period

export interface TimelineEntry extends DataEntry {
  title: string;
  organization?: string;

  /** ISO date string — "2020-06" or "2020-06-15" */
  startDate: string;
  /** Omit when isCurrent is true */
  endDate?: string;
  isCurrent?: boolean;

  category: TimelineCategory;

  /** Short text shown directly in the timeline list view */
  summary: string;

  /**
   * Optional path relative to src/assets/markdown/timeline/.
   * When provided, the detail view loads and renders this Markdown file.
   * Example: "role-game-director.md"
   */
  markdownFile?: string;

  media?: MediaAsset[];
  tags?: string[];
  links?: ExternalLink[];

  /** Pinned entries receive visual emphasis in the timeline */
  featured?: boolean;
}
