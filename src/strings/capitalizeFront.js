/**
 * Capitalize only the first letter of a string
 * @param {string} text
 * @returns {string} The capitalized text
 * @example
 * capitalizeWords('hello world !') // 'Hello world !'
 * capitalizeWords('nice to meet you!') // 'Nice to meet you!'
 */
function capitalizeFront(text) {
  return text[0].toUpperCase() + text.slice(1);
}

export default capitalizeFront;
