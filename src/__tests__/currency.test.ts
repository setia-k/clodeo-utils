import currency from '../currency';
describe('currency function', () => {

  it('Test case for positive number with symbol Rp. ', () => {
    const result = currency('Rp.', 123456);
    const expected = 'Rp.123.456';

    expect(result).toBe(expected);
  });

  it('Test case for positive number with symbol Rp. and language en', () => {
    const result = currency('Rp.', 123456, 'en');
    const expected = 'Rp.123,456';

    expect(result).toBe(expected);
  });

  it('Test case for negative number with symbol Rp. ', () => {
    const result = currency('Rp.', -123456);
    const expected = '- Rp.123.456';

    expect(result).toBe(expected);
  });

  it('Test case for negative number with symbol Rp. and language en', () => {
    const result = currency('Rp.', -123456, 'en');
    const expected = '- Rp.123,456';

    expect(result).toBe(expected);
  });

  it('Test case for 0 with symbol Rp.', () => {
    const result = currency('Rp.', 0);
    const expected = 'Rp.0';

    expect(result).toBe(expected);
  });

  // ignore linting error, intentional for testing function with null/undefined value
  it('Test case for null', () => {
    const result = currency('Rp.', (null as any));
    const expected = 'Rp.0';

    expect(result).toBe(expected);
  });

  it('Test case for undefined', () => {
    const result = currency('Rp.', (undefined as any));
    const expected = 'Rp.0';

    expect(result).toBe(expected);
  });

});
