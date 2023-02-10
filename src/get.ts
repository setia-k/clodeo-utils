/**
 * Get a value from an object
 * @returns {any} value
 */
function get(object: any, path: any): any {
  const _path = Array.isArray(path) ? path : path.split('.');
  if (object && _path.length) return get(object[_path.shift()], _path);
  return object;
}

export default get;
