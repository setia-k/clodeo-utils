/**
* Capitalize the first letter of a string
* @param {string} text
* @returns {string} capitalized word
* @example
* capitalizeFront('hello') // returns 'Hello'
* capitalizeFront('hello world') // returns 'Hello world'
**/
function capitalizeFront(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default capitalizeFront;
