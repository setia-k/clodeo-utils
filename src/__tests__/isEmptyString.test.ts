import isEmptyString from '../isEmptyString';

describe('isEmptyString', () => {

  describe('should return true', () => {
    // for empty string
    it('for empty string', () => {
      expect(isEmptyString('')).toBe(true);
    });
    // for undefined/null
    it('for empty undefined/null', () => {
      expect(isEmptyString(null)).toBe(true);
      expect(isEmptyString(undefined)).toBe(true);
    });
  });

  describe('should return false', () => {
    // for non-empty string
    it('for non-empty string', () => {
      expect(isEmptyString('John')).toBe(false);
    });
    // for non-string
    it('for non-string', () => {
      expect(isEmptyString(123 as any)).toBe(false);
    });
  });

});
