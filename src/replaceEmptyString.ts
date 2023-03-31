import isEmptyString from './isEmptyString';

/**
 * Check whether given string is empty return placeholder if empty
 * @param placeholder {string} placeholder to return if string is empty
 * @returns {string} placeholder if string is empty, otherwise string
 */
function replaceEmptyString(str: any, placeholder: string): string {
  if (isEmptyString(str)) return placeholder;
  return String(str);
}

export default replaceEmptyString;
