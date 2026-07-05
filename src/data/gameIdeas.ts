/**
 * Game ideas, philosophy notes, and design manifestos.
 * Used by the Game Philosophy scene.
 *
 * Each entry can be a short concept card or a full article via markdownFile.
 *
 * Example entry:
 * {
 *   id:           'philosophy-player-agency',
 *   title:        'On Player Agency',
 *   summary:      'Why meaningful choice is the foundation of every game I direct.',
 *   tags:         ['Design', 'Player Experience'],
 *   markdownFile: 'philosophy-player-agency.md',
 * },
 */

export interface GameIdeaEntry {
  id: string;
  title: string;
  summary: string;
  tags?: string[];
  /**
   * Optional path relative to src/assets/markdown/.
   * When set, the detail view renders this Markdown file.
   */
  markdownFile?: string;
}

export const gameIdeas: GameIdeaEntry[] = [];
