/**
 * Removes duplicates from an array based on given conditions
 * @param {any[]} array
 * @param {string[]} keyToWatch - Keys to distinct the objects. If multiple keys are provided, all key values must match for two objects to be considered duplicates.
 * @returns {any[]} - Array with duplicates removed
 * @example
 * const ex1 = [1, 2, 3, 1];
 * const ex2 = [
 *   {id: 'anteraja', name: "Anteraja"},
 *   {id: 'anteraja', name: "anteraja"},
 *   {id: 'sicepat', name: "sicepat"},
 *   ...
 * ];
 * removeDuplicates(ex1); // [1, 2, 3]
 * removeDuplicates(ex2, ["id"]);  // [{ "id": "anteraja", "name": "Anteraja"}, {"id": "sicepat","name": "SiCepat"}, ...]
 */
function removeArrayDuplicates(array: any[], keyToWatch?: string[]): any[] {
  if (!array?.length) return [];

  if (typeof array[0] !== 'object' || !keyToWatch) {
    return [...new Set(array)];
  }

  const seen = new Map();
  return array.filter(item => {
    const keyValue = keyToWatch.map(key => item[key]).join('|');
    if (!seen.has(keyValue)) {
      seen.set(keyValue, true);
      return true;
    }
    return false;
  });
}

export default removeArrayDuplicates;
