import { base36Charset } from './internal/base36charset';

/**
 * Encodes a number into a base36 string
 * @param num {number} Number to be encoded
 * @returns {string} base36 encoded string
 */
function base36Encode(num: number): string {
  if (num === 0) {
    return '';
  }

  let s: any[] = [];

  while (num > 0) {
    s = [base36Charset[num % 36], ...s];
    num = Math.floor(num / 36);
  }

  return s.join('');
}

export default base36Encode;
