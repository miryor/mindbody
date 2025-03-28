import moment from 'moment-timezone';

/**
 * Parse a date string in YYYY-MM-DD format and return a Date object in the specified timezone
 * @param dateString Date string in YYYY-MM-DD format
 * @param timezone The timezone to use (e.g., 'America/New_York')
 * @returns Date object set to start of day in the specified timezone
 */
export function parseDate(dateString: string, timezone: string): Date {
  return moment.tz(dateString, 'YYYY-MM-DD', timezone).startOf('day').toDate();
}

/**
 * Format a date to ISO string with timezone consideration
 * @param date The date to format
 * @param timezone The timezone to use (e.g., 'America/New_York')
 * @returns Formatted date string in format "YYYY-MM-DDTHH:mm:ss.000Z"
 */
export function formatDateWithTimezone(date: Date, timezone: string): string {
  return moment(date).tz(timezone).toISOString();
}

/**
 * Get start of day in a specific timezone
 * @param date The date to get start of day for
 * @param timezone The timezone to use
 * @returns Date object representing start of day in the specified timezone
 */
export function getStartOfDay(date: Date, timezone: string): Date {
  return moment(date).tz(timezone).startOf('day').toDate();
}

/**
 * Get end of day in a specific timezone
 * @param date The date to get end of day for
 * @param timezone The timezone to use
 * @returns Date object representing end of day in the specified timezone
 */
export function getEndOfDay(date: Date, timezone: string): Date {
  return moment(date).tz(timezone).endOf('day').toDate();
} 