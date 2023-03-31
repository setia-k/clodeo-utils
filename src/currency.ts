/**
 * @deprecated use `toCurrency` which used Intl.NumberFormat instead
 * @param symbol {string} - Currency symbol
 * @param number {number | string} - Number to be formatted
 * @param lang {string} only used when value is 'en' to switch comma and dot usage
 * @returns {string} Formatted currency
 */
function currency(symbol: string, number: number | string, lang?: string) {
  let parsedNumber: number;
  if (typeof number === 'number') parsedNumber = number;
  else parsedNumber = parseInt(number);

  const isNegative = parsedNumber < 0;
  const valueFormatted = String(Math.abs(parsedNumber) || 0).replace(/(\d)(?=(\d{3})+(?!\d))/g, symbol === 'USD' || lang === 'en' ? '$1,' : '$1.');

  return `${isNegative ? '- ' : ''}${symbol}${valueFormatted}`;
}

export default currency;
