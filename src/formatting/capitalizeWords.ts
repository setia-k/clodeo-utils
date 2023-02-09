/**
* Capitalize every first letter of a word in string
* @param {string} text
* @returns {string} capitalized sentence
* @example
* capitalizeWords('hello world 123!') // returns 'Hello World 123!'
* capitalizeWords('lorem ipsum dolor') // returns 'Lorem Ipsum Dolor'
**/
function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

export default capitalizeWords;

