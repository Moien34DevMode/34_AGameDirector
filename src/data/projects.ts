import type { ProjectEntry } from '@/types/project.types';

/**
 * Portfolio project data.
 *
 * Add entries here — the Projects scene renders this array.
 * Featured projects (featured: true) are displayed with greater visual weight.
 *
 * To attach a full case study, create a Markdown file at
 * src/assets/markdown/projects/<filename>.md and set `markdownFile`.
 *
 * Example entry:
 * {
 *   id:           'project-echoes',
 *   title:        'Echoes of the Hollow',
 *   tagline:      'A psychological horror game set in a collapsed dream.',
 *   summary:      'Solo-developed prototype exploring...',
 *   status:       'prototype',
 *   roles:        ['game-director', 'game-designer'],
 *   genres:       ['Horror', 'Exploration'],
 *   platforms:    ['PC'],
 *   engine:       'Unreal Engine 5',
 *   media:        [{ kind: 'image', src: '/images/projects/echoes-thumb.jpg', alt: '...' }],
 *   markdownFile: 'project-echoes.md',
 *   featured:     true,
 * },
 */
export const projects: ProjectEntry[] = [];
