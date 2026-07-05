/**
 * Lightweight className combiner — merges any number of class values,
 * filtering out falsy ones.
 *
 * Usage:
 *   cn('base', isActive && styles.active, className)
 *   cn(styles.card, variant === 'featured' && styles.featured)
 */
export function cn(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(' ');
}
