/**
* Capitalize every first letter of a word in string
* @param {string} text
* @returns {string} capitalized sentence
* @example
* 'example text to capt' => 'Example Text To Capt'
**/
function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default capitalizeWords;

