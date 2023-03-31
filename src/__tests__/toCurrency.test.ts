import currency from '../toCurrency';

describe('toCurrency', () => {

  it('Test case for positive number with symbol Rp. ', () => {
    const result = currency(123456);
    const expected = 'Rp. 123.456';

    expect(result).toBe(expected);
  });


  it('Test case for negative number with symbol Rp. ', () => {
    const result = currency(-123456);
    const expected = '- Rp. 123.456';

    expect(result).toBe(expected);
  });

  it('Test case for 0 with symbol Rp.', () => {
    const result = currency(0);
    const expected = 'Rp. 0';

    expect(result).toBe(expected);
  });

  // ignore linting error, intentional for testing function with null/undefined value
  it('Test case for null', () => {
    const result = currency((null as any));
    const expected = 'Rp. 0';

    expect(result).toBe(expected);
  });

  it('Test case for undefined', () => {
    const result = currency((undefined as any));
    const expected = 'Rp. 0';

    expect(result).toBe(expected);
  });

});
