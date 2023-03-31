/**
 * Check whether given string is empty(undefined, null, 0 length)
 * @param str string to check
 * @returns boolean
 */
function isEmptyString(str: string | null | undefined | any): boolean {
  return str === null || str === undefined || (typeof str === 'string' && str.trim().length === 0);
}


export default isEmptyString;
