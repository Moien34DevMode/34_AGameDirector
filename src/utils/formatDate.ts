/**
 * Date formatting utilities used by Timeline and Project entries.
 * All functions accept ISO date strings (e.g. "2021-03" or "2021-03-15").
 */

export type DateFormat = 'year' | 'monthYear' | 'short' | 'medium' | 'long';

const FORMAT_OPTIONS: Record<DateFormat, Intl.DateTimeFormatOptions> = {
  year:      { year: 'numeric' },
  monthYear: { year: 'numeric', month: 'long' },
  short:     { year: 'numeric', month: '2-digit' },
  medium:    { year: 'numeric', month: 'short' },
  long:      { year: 'numeric', month: 'long', day: 'numeric' },
};

/**
 * Format a single ISO date string.
 * @example formatDate('2021-03', 'monthYear') → "March 2021"
 */
export function formatDate(
  dateString: string,
  format: DateFormat = 'monthYear'
): string {
  // Append '-01' so Date parses "YYYY-MM" correctly in all browsers
  const normalized = dateString.length === 7 ? `${dateString}-01` : dateString;
  const date = new Date(normalized);
  return new Intl.DateTimeFormat('en-US', FORMAT_OPTIONS[format]).format(date);
}

/**
 * Format a date range with an optional end date.
 * @example formatDateRange('2019-01', '2021-06') → "January 2019 — June 2021"
 * @example formatDateRange('2022-04')            → "April 2022 — Present"
 */
export function formatDateRange(
  start: string,
  end?: string,
  format: DateFormat = 'monthYear'
): string {
  const startStr = formatDate(start, format);
  if (!end) return `${startStr} — Present`;
  return `${startStr} — ${formatDate(end, format)}`;
}

/**
 * Extract the numeric year from an ISO date string.
 * @example getYear('2021-03') → 2021
 */
export function getYear(dateString: string): number {
  return new Date(dateString.length === 7 ? `${dateString}-01` : dateString).getFullYear();
}
