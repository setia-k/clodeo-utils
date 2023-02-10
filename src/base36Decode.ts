import { base36Charset } from './internal/base36charset';

/**
 * Decodes a base36 string into a number
 * @param chars {string} base36 encoded string
 * @returns {number} decoded number
 */
function base36Decode(chars: string): number {
  return chars
    .split('')
    .reverse()
    .reduce((prev, curr, i) => prev + (base36Charset.indexOf(curr) * (36 ** i)), 0);
}

export default base36Decode;
