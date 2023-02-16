import { baseSum } from './internal/baseSum';

/**
 * This method is used to 'sum' an array of objects with a given iteratee.
 * @param array {Array} - The array containing the objects to sum
 * @param iteratee {Function} - The iteratee to use to sum the array need to be wrapped with a function
 * @returns {number} - The sum of the specified key
 */
function sumBy(array: any, iteratee: any): number {
  if (array !== null && array?.length) {
    const result = baseSum(array, iteratee) ?? 0;
    return result;
  }
  return 0;
}

export default sumBy;
