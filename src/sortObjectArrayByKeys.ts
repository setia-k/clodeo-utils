/**
 * Sort array of objects based on it's key
 * @param arr Array of objects
 * @param keys keys inside object used as sorting anchor, order matters
 * @param order asc | desc
 * @returns sorted array
 * @example
 * const stores = [
 *  { group: 'tokopedia', name: 'devc' },
 *  { group: 'tokopedia', name: 'choi' },
 *  { group: 'shopee', name: 'devc' },
 * ]
 * sortObjectArrayByKeys(stores, ['group','name'], 'asc')
 * [
 *  {group: 'shopee', name: 'devc' },
 *  {group: 'tokopedia', name: 'choi' },
 *  {group: 'tokopedia', name: 'devc' }
 * ]
 */
function sortObjectArrayByKeys<T>(arr: T[], keys: (keyof T)[], order: 'asc' | 'desc'): T[] {
  if (!arr?.length) return [];
  if (!keys?.length) return arr;

  const arrayToSort = [...arr];
  return arrayToSort.sort((a, b) => {
    for (const key of keys) {
      const aKeyValue = (typeof a[key] === 'string') ? (a[key] as string).toLowerCase() : a[key];
      const bKeyValue = (typeof b[key] === 'string') ? (b[key] as string).toLowerCase() : b[key];
      if (aKeyValue < bKeyValue) {
        return order === 'asc' ? -1 : 1;
      } else if (aKeyValue > bKeyValue) {
        return order === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });
}

export default sortObjectArrayByKeys;
