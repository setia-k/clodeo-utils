interface extendedIntlNumberFormat extends Intl.NumberFormatOptions {
  truncate?: boolean;
  symbol?: string;
}

/**
 * Format currency using customized Intl.NumberFormat
 */
function toCurrency(value = 0, options?: extendedIntlNumberFormat, locale?: string) {
  const defaultOptions: extendedIntlNumberFormat = { truncate: true, symbol: 'Rp.' };

  locale = locale || 'id-ID';
  options = options || defaultOptions;

  if (options.truncate) value = Math.trunc(value);

  const isNegative = value < 0;
  const symbol = options?.symbol ? `${options?.symbol}` : '';
  const formattedValue = new Intl.NumberFormat(locale, options).format(Math.abs(value));

  return `${isNegative ? '- ' : ''}${symbol} ${formattedValue}`;
}

export default toCurrency;
