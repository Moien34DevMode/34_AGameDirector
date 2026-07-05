import type { DataEntry } from './common.types';

// ─────────────────────────────────────────────────────────────────────────────
// Ability / skill types
// ─────────────────────────────────────────────────────────────────────────────

export type AbilityCategory =
  | 'direction'
  | 'design'
  | 'production'
  | 'narrative'
  | 'technical'
  | 'soft-skills';

export interface AbilityEntry extends DataEntry {
  name: string;
  category: AbilityCategory;

  /**
   * Proficiency level from 0 to 100.
   * AbilityGraph uses this to render bar/radar/chart visualisations.
   */
  level: number;

  /** One-line description shown on hover or in a tooltip */
  description?: string;

  /** Approximate years of experience */
  years?: number;

  /** Highlighted abilities appear prominently in the graph */
  highlighted?: boolean;
}

/** A named group containing several AbilityEntries — used for section headers */
export interface AbilityGroup {
  category: AbilityCategory;
  /** Display label, e.g. "Game Design" */
  label: string;
  abilities: AbilityEntry[];
}
