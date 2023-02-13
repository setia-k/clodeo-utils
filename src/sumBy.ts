import { baseSum } from './internal/baseSum';
//TODO: Add Docs
/**
 *
 * @param
 * @returns
 */
function sumBy(array: any, iteratee: any) {
  if (array !== null && array.length) {
    return baseSum(array, iteratee);
  }
  return 0;
}

export default sumBy;
