/**
 * Checks if an object is empty
 * @param obj {any} object to check if empty
 * @returns {boolean} true if empty/null/undefined
 */
function isEmpty(obj: any) {
  return [Object, Array].includes((obj || {}).constructor) && !Object.entries((obj || {})).length;
}

export default isEmpty;
