/**
 * Turn an object into a query string
 * @param obj {object} object to be turned into a query string
 * @returns {string} Query string
 * @example
 * toQueryString({ a: 1, b: 2, c: 3 }) // 'a=1&b=2&c=3'
 */
function toQueryString(obj: { [x: string]: any; }): string {
  if (!obj) {
    return '';
  }
  return Object.keys(obj).map(key => `${key}=${obj[key]}`).join('&');
}

export default toQueryString;
