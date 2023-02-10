/**
 * is object undefined
 * @param value {any} value to check
 * @returns {value is undefined} true if undefined
 */
function isUndefined(value: any): value is undefined {
  return value === undefined;
}

export default isUndefined;
