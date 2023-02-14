/**
 * Removes the specified keys from an object
 * @param obj {object} The object to omit keys from
 * @param keys {string|string[]} The keys to omit
 * @returns {object} The object without the omitted keys
 */
function omit(obj: object, keys: string | string[]): object {
  if (!obj || typeof obj !== 'object') return {};
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([k]) => !keys.includes(k))
  );
}

export default omit;
