import isEqual from '../isEqual';

describe('isEqual', () => {

  describe('should return true if value are equal', () => {
    it('should return true if objects are equal', () => {
      expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
    });

    it('should return true if arrays are equal', () => {
      expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
    });

    it('should return true if primitives are equal', () => {
      expect(isEqual(1, 1)).toBe(true);
    });
  });

  describe('should return true if value are equal even if falsy', () => {
    it('should return true if objects are equal', () => {
      expect(isEqual(null, null)).toBe(true);
    });

    it('should return true if objects are equal', () => {
      expect(isEqual(undefined, undefined)).toBe(true);
    });
  });

  describe('should return false if value are not equal', () => {
    it('should return false if objects are not equal', () => {
      expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
    });

    it('should return false if arrays are not equal', () => {
      expect(isEqual([1, 2, 3], [1, 2, 4])).toBe(false);
    });

    it('should return false if arrays length are not equal', () => {
      expect(isEqual([1, 2, 3], [1, 2, 4, 5, 6])).toBe(false);
    });

    it('should return false if primitives are not equal', () => {
      expect(isEqual(1, 2)).toBe(false);
    });
  });

  describe('should return false if value are not of same type', () => {
    it('should return false comparing object and arrays', () => {
      expect(isEqual({ a: 1 }, [1, 2, 3])).toBe(false);
    });

    it('should return false comparing object and primitives', () => {
      expect(isEqual({ a: 1 }, '{ a: 1 }')).toBe(false);
    });

    it('should return false comparing primitives and arrays', () => {
      expect(isEqual(1, [1, 2, 3])).toBe(false);
    });
  });
});
