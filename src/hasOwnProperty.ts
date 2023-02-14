/**
 * Alias for of Object.prototype.hasOwnProperty.call
 * @param object {object} object to check
 * @param key {string} key to call
 * @returns {boolean} true if object has key
 */
function hasOwnProperty(object: any, key: string): boolean {
  if (object === null || object === undefined) return false;
  return Object.prototype.hasOwnProperty.call(object, key);
}

export default hasOwnProperty;
