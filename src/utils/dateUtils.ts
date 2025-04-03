/**
 * Returns the current year as a number
 * 
 * @returns {number} - The current year
 * 
 * @example
 * getCurrentYear() // returns: 2024
 */
export function getCurrentYear(): number {
  return new Date().getFullYear();
}

/**
 * Formats a date into a human-readable string
 * 
 * @param {Date} date - The date to format
 * @param {Intl.DateTimeFormatOptions} options - Formatting options
 * @returns {string} - Formatted date string
 * 
 * @example
 * formatDate(new Date(), { month: 'long', day: 'numeric', year: 'numeric' })
 */
export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  };
  
  return new Intl.DateTimeFormat('en-US', defaultOptions).format(date);
}

/**
 * Returns a relative time string (e.g., "2 days ago")
 * 
 * @param {Date} date - The date to convert to relative time
 * @returns {string} - Relative time string
 * 
 * @example
 * getRelativeTimeString(new Date(Date.now() - 86400000)) // returns: "1 day ago"
 */
export function getRelativeTimeString(date: Date): string {
  const formatter = new Intl.RelativeTimeFormat('en', {
    numeric: 'auto'
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