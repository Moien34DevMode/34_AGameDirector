import type { AbilityGroup } from '@/types/ability.types';

/**
 * Skills and abilities data grouped by category.
 *
 * The AbilityGraph component renders these groups visually.
 * `level` is a 0–100 value that drives the graph visualisation.
 *
 * Example group:
 * {
 *   category: 'direction',
 *   label:    'Game Direction',
 *   abilities: [
 *     { id: 'creative-vision', name: 'Creative Vision',  category: 'direction', level: 95 },
 *     { id: 'team-leadership', name: 'Team Leadership',  category: 'direction', level: 88 },
 *     { id: 'scope-management',name: 'Scope Management', category: 'direction', level: 80 },
 *   ],
 * },
 */
export const abilities: AbilityGroup[] = [];
