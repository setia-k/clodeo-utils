/**
 * Get a text description of given datetime from now
 * @param {string} date
 * @returns {string} text
 * @example
 * "a year ago"
 * "2 months ago"
 * "15 day ago"
 * "an hour ago"
 */
function fromNow(date: string): string {
  const seconds = Math.floor(
    (new Date().getTime() - new Date(date).getTime()) / 1000
  );
  const years = Math.floor(seconds / 31536000);
  const months = Math.floor(seconds / 2592000);

  const days = Math.floor(seconds / 86400);
  if (days > 548)
    return years + ' years ago';
  if (days >= 320 && days <= 547)
    return 'a year ago';
  if (days >= 45 && days <= 319)
    return months + ' months ago';
  if (days >= 26 && days <= 45)
    return 'a month ago';

  const hours = Math.floor(seconds / 3600);
  if (hours >= 36 && days <= 25)
    return days + ' days ago';
  if (hours >= 22 && hours <= 35)
    return 'a day ago';

  const minutes = Math.floor(seconds / 60);
  if (minutes >= 90 && hours <= 21)
    return hours + ' hours ago';
  if (minutes >= 45 && minutes <= 89)
    return 'an hour ago';
  if (seconds >= 90 && minutes <= 44)
    return minutes + ' minutes ago';
  if (seconds >= 45 && seconds <= 89)
    return 'a minute ago';
  if (seconds >= 0 && seconds <= 45)
    return 'a few seconds ago';

  return '';
}

export default fromNow;
