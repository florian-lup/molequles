/**
 * Gets current year
 * @returns Current year as number
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Formats date to readable string
 * @param date - Date to format
 * @param options - Formatting options
 * @returns Formatted date string
 */
export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };

  return new Intl.DateTimeFormat('en-US', defaultOptions).format(date);
}

/**
 * Converts date to relative time (e.g., "2 days ago")
 * @param date - Date to convert
 * @returns Relative time string
 */
export function getRelativeTimeString(date: Date): string {
  const formatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto',
  });

  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  // Convert to appropriate time unit
  if (diffInSeconds < 60) {
    return formatter.format(-diffInSeconds, 'second');
  } else if (diffInSeconds < 3600) {
    return formatter.format(-Math.floor(diffInSeconds / 60), 'minute');
  } else if (diffInSeconds < 86400) {
    return formatter.format(-Math.floor(diffInSeconds / 3600), 'hour');
  } else if (diffInSeconds < 2592000) {
    return formatter.format(-Math.floor(diffInSeconds / 86400), 'day');
  } else if (diffInSeconds < 31536000) {
    return formatter.format(-Math.floor(diffInSeconds / 2592000), 'month');
  } else {
    return formatter.format(-Math.floor(diffInSeconds / 31536000), 'year');
  }
}
