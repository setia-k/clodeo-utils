import isEmpty from '../isEmpty';

describe('isEmpty', () => {
  it('returns true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });

  it('returns true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  it('returns false for a non-empty object', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it('returns false for a non-empty array', () => {
    expect(isEmpty([1])).toBe(false);
  });

  it('returns true for a null object', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('returns true for an undefined object', () => {
    expect(isEmpty(undefined)).toBe(true);
  });
});
