/**
 * Slugify a given string
 * @param text {string} text to be slugified
 * @returns {string} slugified string
 * @example
 * slugify('Hello World!'); // hello-world
 */
export function slugify(text: string): string {
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-');
}

export default slugify;
