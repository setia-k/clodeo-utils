/**
 * Capitalize the first letter of each word in a string using regex
 * @param {string} text
 * @returns {string} The capitalized string
 * @example
 * capitalizeWords('hello world !') // 'Hello World !'
 * capitalizeWords('hello, nice to meet you!') // 'Hello, Nice To Meet You!'
 */
function capitalizeWords(text) {
  return text.replace(/\b[a-z]/g, (char) => char.toUpperCase());
}

export default capitalizeWords;
