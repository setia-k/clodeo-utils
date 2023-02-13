/**
 * Get system indonesian timezone
 * @returns {string} timezone
 */
function getIndonesianTimezone(): string {
  const date = new Date();
  const offset = -date.getTimezoneOffset() / 60;
  switch (offset) {
    case 7:
      return 'WIB';
    case 8:
      return 'WITA';
    case 9:
      return 'WIT';
    default:
      return '';
  }
}

export default getIndonesianTimezone;
