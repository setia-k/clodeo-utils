import hasOwnProperty from './hasOwnProperty';

// TODO: If possible separate the functions into different files, to internal/ if they are used only by the library
/**
 * Check if given objects or arrays are equal
 * @param obj1 {any} - The object/array to be compared
 * @param obj2 {any} - The object/array to be compared with
 * @returns {boolean}
 */
function isEqual(obj1: any, obj2: any): boolean {

  function getType(obj: any) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  }

  function areArraysEqual() {
    if (obj1.length !== obj2.length)
      return false;

    for (let i = 0; i < obj1.length; i++) {
      if (!isEqual(obj1[i], obj2[i]))
        return false;
    }
    return true;
  }

  function areObjectsEqual() {
    if (Object.keys(obj1).length !== Object.keys(obj2).length)
      return false;

    for (const key in obj1) {
      if (hasOwnProperty(obj1, key)) {
        if (!isEqual(obj1[key], obj2[key]))
          return false;
      }
    }
    return true;
  }

  function arePrimitivesEqual() {
    return obj1 === obj2;
  }

  const type = getType(obj1);
  if (type !== getType(obj2))
    return false;

  if (type === 'array') return areArraysEqual();
  if (type === 'object') return areObjectsEqual();
  return arePrimitivesEqual();
}

export default isEqual;
