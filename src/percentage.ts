/**
 * Count percentage of value from total
 * @param value
 * @param total
 * @returns {number} percentage
 */
function percentage(value: number, total: number): number {
  return (value / total) * 100;
}

export default percentage;
