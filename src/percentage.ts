/**
 * Count percentage of value from total
 * @param value
 * @param total
 * @returns {number} percentage
 */
function percentage(value: number, total: number): number {
  if (typeof total !== 'number' || typeof value !== 'number') return 0;
  if (total === 0) return 0;

  return (value / total) * 100;
}

export default percentage;
