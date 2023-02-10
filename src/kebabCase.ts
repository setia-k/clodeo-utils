/**
 * Convert to kebab case string
 * @param str {string} string to convert
 * @returns {string} kebab case string
 * @example
 * 'Lorem Ipsum Dolor' => 'lorem-ipsum-dolor'
 */
function kebabCase(str: string): string {
  const kebab = str
    ?.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map(x => x.toLowerCase())
    ?.join('-');
  return kebab ?? '';
}

export default kebabCase;
