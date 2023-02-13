//TODO: Add docs
/**
 * INTERNAL
 * Used by sumBy
 */
export function baseSum(array: any, iteratee: (arg0: any) => any) {
  let result;

  for (const value of array) {
    const current = iteratee(value);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }

  return result;
}
